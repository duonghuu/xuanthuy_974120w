<?php  if(!defined('_source')) die("Error");
	
	if($_SESSION[$login_name]==true)
	{
		transfer(_bandadangnhap, 'http://'.$config_url);
	}
	#Chi tiết bài viết
	$sql = "select ten$lang as ten,noidung$lang as noidung,title,keywords,description from #_about where type='".$type."' and hienthi=1 limit 0,1";
	$d->query($sql);
	$tintuc_detail = $d->fetch_array();
	
	#Thông tin seo web
	$title_cat = _dangky;		
	$title = $tintuc_detail['title'];
	$keywords = $tintuc_detail['keywords'];
	$description = $tintuc_detail['description'];
	if(!empty($_POST)){
		if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response2'])) {

		    // Build POST request:
		    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
		    $recaptcha_secret = $config['recaptcha_secretkey'];
		    $recaptcha_response = $_POST['recaptcha_response2'];

		    // Make and decode POST request:
		    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
		    $recaptcha = json_decode($recaptcha);

		    // Take action based on the score returned:
		    if ($recaptcha->score >= 0.5 and $recaptcha->success == true) {	
		    	$data['username'] = magic_quote(trim(strip_tags($_POST['tendangnhap'])));

		    	$d->reset();
		    	$d->setTable('user');
		    	$d->setWhere('username', $data['username']);
		    	$d->select();
		    	if($d->num_rows()>0)
		    	{
					transfer(_tendangnhapdatontai,getCurrentPageUrl());
		    	}
		    	else
		    	{
		    		$data['password'] = (string)encrypt_password($config['salt_sta'],$_POST['matkhau'],$config['salt_end']);
		    		$data['ten'] = (string)magic_quote(trim(strip_tags($_POST['ten_lienhe'])));
		    		$data['diachi'] =(string) magic_quote(trim(strip_tags($_POST['diachi_lienhe'])));
		    		$data['dienthoai'] = (string)magic_quote(trim(strip_tags($_POST['dienthoai_lienhe'])));
		    		$data['email'] = (string)magic_quote(trim(strip_tags($_POST['email_lienhe'])));
		    		$data['gioitinh'] = (string)magic_quote(trim(strip_tags($_POST['gioitinh_lienhe'])));
		    		if(!empty($_POST['ngaysinh_lienhe'])){
		    			$data['ngaysinh'] = strtotime(str_replace('/', '-', $_POST['ngaysinh_lienhe']));	
		    		}
		    		
		    		$data['role'] = 1;
		    		$data['com'] = "user";

		    		$d->setTable('user');
		    		if($d->insert($data)){
		    			transfer(_dangkythanhcong,getCurrentPageUrl());
		    		}
		    		else
		    		{
		    			transfer(_hethongloi,getCurrentPageUrl());
		    		}
		    	}
		    } else {
		    	transfer(_xindungspamwebsitechungtoi, getCurrentPageUrl());
		    }
	}
	}
?>
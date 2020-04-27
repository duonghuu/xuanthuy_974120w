<?php  if(!defined('_source')) die("Error");
$a_danhmuc = array();
	@$id_danhmuc =  (int)trim(strip_tags(addslashes($_GET['id_danhmuc'])));
	@$id_list =   (int)trim(strip_tags(addslashes($_GET['id_list'])));
	@$id_cat =   (int)trim(strip_tags(addslashes($_GET['id_cat'])));
	@$id_item =   (int)trim(strip_tags(addslashes($_GET['id_item'])));
	@$id =   (int)trim(strip_tags(addslashes($_GET['id'])));
	$bread->add($title_cat,$com.".html");
  if($id>0)
	{
		//Cập nhật lượt xem
		$d->reset();
		$sql_lanxem = "UPDATE #_news SET luotxem=luotxem+1 WHERE id ='$id'";
		$d->query($sql_lanxem);

		$row_detail = get_fetch("select *,ten$lang as ten,mota$lang as mota,noidung$lang as noidung FROM #_news where hienthi=1 and id='$id' limit 0,1");
		if(empty($row_detail)){redirect($config_url_ssl.'/404.php');}

		$a_danhmuc["id_danhmuc"] = $row_detail["id_danhmuc"];
		$a_danhmuc["id_list"] = $row_detail["id_list"];

		$title_cat = $row_detail['ten'];
		$title = $row_detail['title'];$keywords = $row_detail['keywords'];$description = $row_detail['description'];
		$h1 = $row_detail['h1'];$h2 = $row_detail['h2'];$h3 = $row_detail['h3'];

		#Thông tin share facebook
		$images_facebook = $config_url_ssl.'/thumb/200x200/2/'._upload_tintuc_l.$row_detail['photo'];
		$title_facebook = $row_detail['ten'];
		$description_facebook = trim(strip_tags($row_detail['mota']));
		$url_facebook = getCurrentPageURL();

		//Hình ảnh khác của tin tức
		$hinhthem = get_result("select id,ten$lang as ten,thumb,photo FROM #_hinhanh where id_hinhanh='".$row_detail['id']."' and type='".$row_detail['type']."' and hienthi=1 order by stt,id desc");
		//tin tức cùng loại
		$where = " type='".$row_detail['type']."' ";
		if($row_detail['id_danhmuc']>0){
		$where .= " and id_danhmuc='".$row_detail['id_danhmuc']."'";	
		} 
		if($row_detail['id_list']>0){
		$where .= " and id_list='".$row_detail['id_list']."'";	
		} 
		$bread->add($title_cat,'');
		$where .= " and id <> ".$id." and hienthi=1 order by stt,id desc";
	}
	//Danh mục tin tức cấp 4
	elseif($id_item>0)
	{
		$title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_item where id=".$id_item." limit 0,1");
		if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

		$title_cat = $title_bar['ten'];	$mota = $title_bar['mota'];	$noidung = $title_bar['noidung'];
		$title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
		$h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

		$where = " type='".$title_bar['type']."' and id_item=".$title_bar['id']." and hienthi=1 order by stt,id desc";
	}
	//Danh mục tin tức cấp 3
	elseif($id_cat > 0)
	{
		$title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_cat where id=".$id_cat." limit 0,1");
		if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

		$title_cat = $title_bar['ten'];	$mota = $title_bar['mota'];	$noidung = $title_bar['noidung'];
		$title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
		$h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

		$where = " type='".$title_bar['type']."' and id_cat=".$title_bar['id']." and hienthi=1 order by stt,id desc";
	}
	//Danh mục tin tức cấp 2
	elseif($id_list>0)
	{
		$title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_list where id=".$id_list." limit 0,1");
		if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

		$title_cat = $title_bar['ten'];	$mota = $title_bar['mota'];	$noidung = $title_bar['noidung'];
		$title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
		$h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

		$where = " type='".$title_bar['type']."' and id_list=".$title_bar['id']." and hienthi=1 order by stt,id desc";
	}

	//Danh mục tin tức cấp 1
	else if($id_danhmuc!='')
	{
		$title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_danhmuc where id=".$id_danhmuc." limit 0,1");
		if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

		$title_cat = $title_bar['ten'];	$mota = $title_bar['mota'];	$noidung = $title_bar['noidung'];
		$title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
		$h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

		$where = " type='".$title_bar['type']."' and id_danhmuc=".$title_bar['id']." and hienthi=1 order by stt,id desc";
	}
	//Tất cả tin tức
	else{
		$where = " type='".$type."' and hienthi=1 order by stt,id desc";
		$title_bar = get_fetch("select * FROM #_title where type='".$type."'");
		$title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];

		#Thông tin share facebook
		if(!empty($title_bar['photo'])) $images_facebook = $config_url_ssl.'/thumb/200x200/2/'._upload_hinhanh_l.$title_bar['photo'];
		$title_facebook = $title_bar['title'];
		$description_facebook = trim(strip_tags($title_bar['description']));
		$url_facebook = getCurrentPageURL();
	}

	#Lấy tin tức và phân trang
	$dem = get_fetch("SELECT count(id) AS numrows FROM #_news where $where");

	$totalRows = $dem['numrows'];
	$page = $_GET['p'];
	if($id > 0){
		if($type=='du-an' or $type=='cong-trinh' or $type=='thu-vien' or $type=='album' or $type=='hinh-anh')
			$pageSize = $company['soluong_spk'];//Số item cho 1 trang
		else
			$pageSize = $company['soluong_tink'];//Số item cho 1 trang
	}
	else{
			if($type=='du-an' or $type=='cong-trinh' or $type=='thu-vien' or $type=='album' or $type=='hinh-anh')
				$pageSize = $company['soluong_sp'];//Số item cho 1 trang
			else
				$pageSize = $company['soluong_tin'];//Số item cho 1 trang
	}
	$offset = 5;//Số trang hiển thị
	if ($page == "")$page = 1;
	else $page = $_GET['p'];
	$page--;
	$bg = $pageSize*$page;

	$tintuc = get_result("select id,ten$lang as ten,tenkhongdau,type,thumb,photo,thumb2,photo2,mota$lang as mota,ngaytao,luotxem,taptin,link,noibat FROM #_news where $where limit $bg,$pageSize");
	$url_link = getCurrentPageURL();
	if(!empty($_POST["rp2val"])){
	    if($_SESSION['rp2token'] == $_POST['rp2token']){ // refresh page
	      unset($_SESSION['rp2token']);
	      header('location: '.getCurrentPageURL());
	      exit();
	    }else{
	      $_SESSION['rp2token'] = $_POST['rp2token'];
	      if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptchaResponse'])) {

	          // Build POST request:
	          $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
	          $recaptcha_secret = $config['recaptcha_secretkey'];
	          $recaptcha_response2 = $_POST['recaptchaResponse'];

	          // Make and decode POST request:
	          $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response2);
	          $recaptcha = json_decode($recaptcha);

	          // Take action based on the score returned:
	          if ($recaptcha->score >= 0.5 and $recaptcha->success == true) { 
	            $datapost = $_POST["fpu"];
	            // $data["email"] = (string)trim(strip_tags($datapost['email']));       
	            // $data["diachi"] = (string)trim(strip_tags($datapost['diachi']));       
	            $data["dienthoai"] = (string)trim(strip_tags($datapost['dienthoai']));       
	            $data["ten"] = (string)trim(strip_tags($datapost['ten']));  
	            $data['chude'.$lang] = "Liên hệ tư vấn".date('d/m/Y h:i:s',time());
	            $data['hienthi'] = 0;
	            $data['stt'] = 1;
	            $data['type'] = 'lienhe';
	           $data['noidung'] = '<div><h2>Liên hệ tư vấn</h2>
	                         <div style="border-style:solid;border-width:1px 0;border-color:#c3bfbf;">
	                          <p><strong style="width:100px;display:inline-block">Tên:</strong>'.(string)trim(strip_tags($datapost['ten'])).'</p><p><strong style="width:100px;display:inline-block">MST:</strong>'.(string)trim(strip_tags($datapost['mst'])).'</p><p><strong style="width:100px;display:inline-block">Nội dung:</strong>'.(string)trim(strip_tags($datapost['note'])).'</p>   </div></div>';
	            // $data['noidung'] = (string)trim(strip_tags($datapost['note']));  
	            $d->reset();
	            $d->setTable('lienhe');
	            $body = '<table>';
	            $body .= '
	              <tr>
	                <th colspan="2">&nbsp;</th>
	              </tr>
	              <tr>
	                <th colspan="2">Thông tin liên hệ từ website '.$company["ten"].'</th>
	              </tr>
	              <tr>
	                <th colspan="2">&nbsp;</th>
	              </tr>
	              <tr>
	                <th>Họ tên :</th><td>'.$data["ten"].'</td>
	              </tr>
	              <tr>
	                <th>Điện thoại :</th><td>'.$data["dienthoai"].'</td>
	              </tr>
	              <tr>
	                <th>MST :</th><td>'.$datapost["mst"].'</td>
	              </tr>
	              <tr>
	                <th>Tiêu đề :</th><td>'.$data['chude'.$lang].'</td>
	              </tr>
	              <tr>
	                <th>Nội dung :</th><td>'.$data["noidung"].'</td>
	              </tr>';
	            $body .= '</table>';
	            $to = $company["email"];
	            if($d->insert($data)){
	              if(sendEmail($sendType,$to, $from=null, $from_name=$company["ten"], $data['chude'.$lang], $body,$more=array(),$file)){
	                transfer(_guilienhethanhcong,getCurrentPageURL());  
	              }
	              else{
	                transfer(_guilienhethatbai,getCurrentPageURL());  
	              }
	            }else{
	              transfer(_guilienhethatbai,getCurrentPageURL());  
	            }
	          } else {
	            transfer(_xindungspamwebsitechungtoi, getCurrentPageURL());
	          }
	      }
	    }
	  }
<?php  if(!defined('_source')) die("Error");

	$title = $company_contact['title'];
	$keywords = $company_contact['keywords'];
	$description = $company_contact['description'];	
	$bread->add($title_cat,$com.".html");
	if(!empty($_POST)){
		if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptchaContact'])) {

		    // Build POST request:
		    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
		    $recaptcha_secret = $config['recaptcha_secretkey'];
		    $recaptcha_responselienhe = $_POST['recaptchaContact'];

		    // Make and decode POST request:
		    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_responselienhe);
		    $recaptcha = json_decode($recaptcha);

		    // Take action based on the score returned:
		    if ($recaptcha->score >= 0.5 and $recaptcha->success == true) {	

			$ten = (string)trim(strip_tags($_POST['ten_lienhe']));
			$diachi = (string)trim(strip_tags($_POST['diachi_lienhe']));
			$dienthoai = (string)trim(strip_tags($_POST['dienthoai_lienhe']));
			$email = (string)trim(strip_tags($_POST['email_lienhe']));
			$tieude = (string)trim(strip_tags($_POST['tieude_lienhe']));
			$noidung = (string)trim(strip_tags($_POST['noidung_lienhe']));

			if(!empty($_POST)){
				$file_name = images_name($_FILES['file']['name']);
				if($file_att = upload_image("file", 'doc|docx|pdf|rar|zip|ppt|pptx|DOC|DOCX|PDF|RAR|ZIP|PPT|PPTX|xls|xlsx|jpg|png|gif|JPG|PNG|GIF', _upload_khac,$file_name)){
					$data['photo'] = $file_att;
				}
			}
			$file="";
			if(!empty($data['photo'])){
				$file = array(array(_upload_khac,$data["photo"]));
			}
			$data['ten'.$lang] = $ten;
			$data['tenkhongdau'.$lang] = changeTitle($ten);
			$data['dienthoai'] = $dienthoai;
			$data['diachi'.$lang] = $diachi;
			$data['email'] = $email;
			$data['chude'.$lang] = $tieude;
			$data['noidung'.$lang] = $noidung;
			$data['hienthi'] = 0;
			$data['stt'] = 1;
			$data['type'] = 'lienhe';
			$d->setTable('lienhe');
			$d->insert($data);

			$to=$company['email'];

			$subject = "Thư liên hệ từ website ".$_SERVER["SERVER_NAME"]." (".date('d/m/Y h:i:s',time()).")";
				$body = '<table>';
				$body .= '
					<tr>
						<th colspan="2">&nbsp;</th>
					</tr>
					<tr>
						<th colspan="2">Thư liên hệ từ website <a href="'.$_SERVER["SERVER_NAME"].'">'.$_SERVER["SERVER_NAME"].'</a></th>
					</tr>
					<tr>
						<th colspan="2">&nbsp;</th>
					</tr>
					<tr>
						<th>Họ tên :</th><td>'.$_POST['ten_lienhe'].'</td>
					</tr>
					<tr>
						<th>Địa chỉ :</th><td>'.$_POST['diachi_lienhe'].'</td>
					</tr>
					<tr>
						<th>Điện thoại :</th><td>'.$_POST['dienthoai_lienhe'].'</td>
					</tr>
					<tr>
						<th>Email :</th><td>'.$_POST['email_lienhe'].'</td>
					</tr>
					
					<tr>
						<th>Tiêu đề :</th><td>'.$tieude.'</td>
					</tr>
					<tr>
						<th>Nội dung :</th><td>'.$_POST['noidung_lienhe'].'</td>
					</tr>';
				$body .= '</table>';
				
				if(sendEmail($sendType,$to, $from=null, $from_name=$_POST['ten_lienhe'], $subject, $body,$more=array(),$file))
					transfer(_guilienhethanhcong, "index.html");
				else
					transfer(_guilienhethatbai, "lien-he.html");
		    } else {
		    	transfer(_xindungspamwebsitechungtoi, "lien-he.html");
		    }
	}
	}			
?>

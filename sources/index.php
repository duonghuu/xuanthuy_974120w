<?php  if(!defined('_source')) die("Error");
if(!empty($_POST["nltval"])){
    if($_SESSION['nlttoken'] == $_POST['nlttoken']){ // refresh page
      unset($_SESSION['nlttoken']);
      header('location: '.getCurrentPageURL());
      exit();
    }else{
      $_SESSION['nlttoken'] = $_POST['nlttoken'];
      if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptchaResponse_dknt'])) {

          // Build POST request:
          $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
          $recaptcha_secret = $config['recaptcha_secretkey'];
          $recaptcha_response = $_POST['recaptchaResponse_dknt'];

          // Make and decode POST request:
          $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
          $recaptcha = json_decode($recaptcha);

          // Take action based on the score returned:
          if ($recaptcha->score >= 0.5 and $recaptcha->success == true) { 
            $data = $_POST["fid"];
            $email_nhantin = $data['email_nhantin'];       
            $dienthoai_nhantin = $data['dienthoai'];       
            $diachi_nhantin = $data['diachi'];       
            $ten_nhantin = $data['ten'];       
            $noidung_nhantin = $data['noidung'];       
            $d->reset();
            $sql_kt_mail="SELECT email FROM table_newsletter WHERE email='".$email_nhantin."'";
            $d->query($sql_kt_mail);
            $kt_mail=$d->result_array();
            if(count($kt_mail)>0)
              transfer(_emaildadangky,getCurrentPageURL());
            else{
              $email_nhantin = trim(strip_tags($email_nhantin));
              $dienthoai_nhantin = trim(strip_tags($dienthoai_nhantin));
              $diachi_nhantin = trim(strip_tags($diachi_nhantin));
              $ten_nhantin = trim(strip_tags($ten_nhantin));
              $noidung_nhantin = trim(strip_tags($noidung_nhantin));
              $sql = "INSERT INTO  table_newsletter (email,dienthoai,diachi,ten,noidung) VALUES ('$email_nhantin','$dienthoai_nhantin','$diachi_nhantin','$ten_nhantin','$noidung_nhantin')";    
              if($d->query($sql)== true)
                transfer(_dangkythanhcong,getCurrentPageURL());
              else
                transfer(_hethongloi,getCurrentPageURL());
            }  
          } else {
            transfer(_xindungspamwebsitechungtoi, getCurrentPageURL());
          }
      }
    }
    //end else
  }

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
            $data["email"] = (string)trim(strip_tags($datapost['email']));       
            $data["diachi"] = (string)trim(strip_tags($datapost['diachi']));       
            $data["dienthoai"] = (string)trim(strip_tags($datapost['dienthoai']));       
            $data["ten"] = (string)trim(strip_tags($datapost['ten']));  
            $data['chude'.$lang] = "Đặt Lịch ".date('d/m/Y h:i:s',time());
            $chondichvu = (string)trim(strip_tags($_POST['chondichvu']));   
            $chontime = (string)trim(strip_tags($_POST['chontime']));   
            $chondate = (string)trim(strip_tags($_POST['chondate']));   
            $chonso = (string)trim(strip_tags($_POST['chonso']));   
            $note = (string)trim(strip_tags($_POST['note']));   
            $data['hienthi'] = 0;
            $data['stt'] = 1;
            $data['type'] = 'datban';
           $data['noidung'] = '<div><h2>Nội dung đặt lịch</h2>
                         <div style="border-style:solid;border-width:1px 0;border-color:#c3bfbf;">
                          <p><strong style="width:100px;display:inline-block">Dịch vụ:</strong>'.$chondichvu.'</p>
                          <p><strong style="width:100px;display:inline-block">Thời gian:</strong>'.$soban.'</p>
                          <p><strong style="width:100px;display:inline-block">Số chỗ:</strong>'.$chonso.'</p>
                          <p><strong style="width:100px;display:inline-block">Số bàn:</strong>'.$soban.'</p>
                          <p><strong style="width:100px;display:inline-block">Nội dung:</strong>'.(string)trim(strip_tags($note)).'</p>   
                          </div></div>';
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
                <th>Email :</th><td>'.$data["email"].'</td>
              </tr>
              <tr>
                <th>Điện thoại :</th><td>'.$data["dienthoai"].'</td>
              </tr>
              <tr>
                <th>Địa chỉ :</th><td>'.$data["diachi"].'</td>
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
  if(!empty($_POST["rp3val"])){
      if($_SESSION['rp3token'] == $_POST['rp3token']){ // refresh page
        unset($_SESSION['rp3token']);
        header('location: '.getCurrentPageURL());
        exit();
      }else{
        $_SESSION['rp3token'] = $_POST['rp3token'];
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha2'])) {

            // Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptcha_secret = $config['recaptcha_secretkey'];
            $recaptcha_response = $_POST['recaptcha2'];

            // Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
            $recaptcha = json_decode($recaptcha);

            // Take action based on the score returned:
            if ($recaptcha->score >= 0.5 and $recaptcha->success == true) { 
              $datapost = $_POST["fpu3"];
              $data["email"] = (string)trim(strip_tags($datapost['email']));       
              $data["diachi"] = (string)trim(strip_tags($datapost['diachi']));       
              $data["dienthoai"] = (string)trim(strip_tags($datapost['dienthoai']));       
              $data["ten"] = (string)trim(strip_tags($datapost['ten']));  
              $thoigian = (string)trim(strip_tags($datapost['ngay']));  
              $gio = (string)trim(strip_tags($datapost['gio']));  
              $data['chude'.$lang] = "Đặt lịch hẹn ".date('d/m/Y h:i:s',time());
              $data['hienthi'] = 0;
              $data['stt'] = 1;
              $data['type'] = 'datban';
              $data['noidung'] = '<div><h2>Nội dung đặt lịch hẹn</h2>
              <div style="border-style:solid;border-width:1px 0;border-color:#c3bfbf;">
               <p><strong style="width:100px;display:inline-block">Ngày :</strong>'.$thoigian.', Giờ: '.$gio.'</p><p><strong style="width:100px;display:inline-block">Đặt lịch hẹn cho dịch vụ:</strong>'.(string)trim(strip_tags($datapost['dichvu'])).'</p>   </div></div>';
              // $data['noidung'] = (string)trim(strip_tags($datapost['note']));  
              $d->reset();
              $d->setTable('lienhe');
              $body = '<table>';
              $body .= '
                <tr>
                  <th colspan="2">&nbsp;</th>
                </tr>
                <tr>
                  <th colspan="2">Đặt lịch từ website '.$company["ten"].'</th>
                </tr>
                <tr>
                  <th colspan="2">&nbsp;</th>
                </tr>
                <tr>
                  <th>Họ tên :</th><td>'.$data["ten"].'</td>
                </tr>
                <tr>
                  <th>Email :</th><td>'.$data["email"].'</td>
                </tr>
                <tr>
                  <th>Điện thoại :</th><td>'.$data["dienthoai"].'</td>
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
                // if(sendEmail($sendType,$to, $from=null, $from_name=$company["ten"], $data['chude'.$lang], $body,$more=array(),$file)){
                //   transfer(_guilienhethanhcong,getCurrentPageURL());  
                // }
                // else{
                //   transfer(_guilienhethatbai,getCurrentPageURL());  
                // }
                transfer(_guilienhethanhcong,getCurrentPageURL());  
              }else{
                transfer(_guilienhethatbai,getCurrentPageURL());  
              }
            } else {
              transfer(_xindungspamwebsitechungtoi, getCurrentPageURL());
            }
        }
      }
    }


	// $title_cat = _sanphamnoibat;
	// $where = " type='bds-dau-tu' and noibat>0 and hienthi=1 order by stt asc";

	// #Lấy sản phẩm và phân trang
	// $d->reset();
	// $sql = "SELECT count(id) AS numrows FROM #_product where $where";
	// $d->query($sql);	
	// $dem = $d->fetch_array();
	// $totalRows = $dem['numrows'];
	// $page = $_GET['p'];
	// $pageSize = 8;//Số item cho 1 trang
	// $offset = 5;//Số trang hiển thị				
	// if ($page == "")$page = 1;
	// else $page = $_GET['p'];
	// $page--;
	// $bg = $pageSize*$page;		

	// $d->reset();
	// $sql = "select mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo,type,ngaytao,gia,dientich,diachi,phaply from #_product where $where limit $bg,$pageSize";		
	// $d->query($sql);
	// $spnoibat = $d->result_array();	
	// $url_link = getCurrentPageURL();
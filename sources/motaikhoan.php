<?php  if(!defined('_source')) die("Error");
if(!empty($_POST["nltval"])){
    if($_SESSION['nlttoken'] == $_POST['nlttoken']){ // refresh page
      unset($_SESSION['nlttoken']);
      header('location: '.getCurrentPageURL());
      exit();
    }else{
      $_SESSION['nlttoken'] = $_POST['nlttoken'];
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
            $data=array();
            $data["ten"]=(string)magic_quote(trim(strip_tags($_POST['ten'])));
            $data["email"]=(string)magic_quote(trim(strip_tags($_POST['email'])));
            $data["dienthoai"]=(string)magic_quote(trim(strip_tags($_POST['dienthoai'])));
            $data["diachi"]=(string)magic_quote(trim(strip_tags($_POST['diachi'])));
            $data["noidung"]=(string)magic_quote(trim(strip_tags($_POST['noidung'])));
            $data["hienthi"]=0;
            $data["chude"]="Đăng ký mở tài khoản ".date('d/m/Y H:i:s',time());
            $data["type"]="datban";
            $d->reset();
            $d->setTable("lienhe");
            if($d->insert($data)){
                transfer(_dangkythanhcong,getCurrentPageURL());
            }else{
               transfer(_hethongloi,getCurrentPageURL());
            }
          }else{
            transfer(_xindungspamwebsitechungtoi, getCurrentPageURL());
          }
      }
  }
}
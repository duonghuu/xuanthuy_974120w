<?php  if(!defined('_source')) die("Error");
if($_SESSION[$login_name]==false)
{
    transfer(_banchuadangnhap, 'http://'.$config_url);
}
if($com=="dang-tin"){
    $tinmau = get_fetch("select noidung$lang as noidung from table_about where type='tinmau'");
    if(!empty($_POST["nltval"])){
        if($_SESSION['nlttoken'] == $_POST['nlttoken']){ // refresh page
          unset($_SESSION['nlttoken']);
          header('location: '.getCurrentPageURL());
          exit();
        }else{
          $_SESSION['nlttoken'] = $_POST['nlttoken'];
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
                // $email_nhantin = trim(strip_tags($email_nhantin));
                // $email_nhantin = mysql_real_escape_string($email_nhantin);  
                // $dienthoai_nhantin = trim(strip_tags($dienthoai_nhantin));
                // $dienthoai_nhantin = mysql_real_escape_string($dienthoai_nhantin); 
                // $diachi_nhantin = trim(strip_tags($diachi_nhantin));
                // $diachi_nhantin = mysql_real_escape_string($diachi_nhantin); 
                // $ten_nhantin = trim(strip_tags($ten_nhantin));
                // $ten_nhantin = mysql_real_escape_string($ten_nhantin); 
                // $noidung_nhantin = trim(strip_tags($noidung_nhantin));
                // $noidung_nhantin = mysql_real_escape_string($noidung_nhantin);   
              } else {
                transfer(_xindungspamwebsitechungtoi, getCurrentPageURL());
              }
          }
        }
        //end else
      }
}

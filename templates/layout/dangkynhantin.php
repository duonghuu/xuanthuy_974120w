<?php
	// if(!empty($_POST["nltval"])){
	//     if($_SESSION['nlttoken'] == $_POST['nlttoken']){ // refresh page
	//       unset($_SESSION['nlttoken']);
	//       header('location: '.getCurrentPageURL());
	//       exit();
	//     }else{
	//       $_SESSION['nlttoken'] = $_POST['nlttoken'];
	//       $email_nhantin = $_POST['email_nhantin'];       
	//       $d->reset();
	//       $sql_kt_mail="SELECT email FROM table_newsletter WHERE email='".$email_nhantin."'";
	//       $d->query($sql_kt_mail);
	//       $kt_mail=$d->result_array();
	//       if(count($kt_mail)>0)
	//           alert(_emaildadangky);
	//       else
	//       {
	//           $email_nhantin = trim(strip_tags($email_nhantin));
	//           $email_nhantin = mysql_real_escape_string($email_nhantin);  
	//           $dienthoai_nhantin = trim(strip_tags($dienthoai_nhantin));
	//           $dienthoai_nhantin = mysql_real_escape_string($dienthoai_nhantin);          
	//           $sql = "INSERT INTO  table_newsletter (email,dienthoai) VALUES ('$email_nhantin','$dienthoai_nhantin')";    
	//           if($d->query($sql)== true)
	//               alert(_guiemailthanhcong);
	//           else
	//               alert(_guiemailthatbai);
	//       }  
	//     }
	//   }
?>

<div id="dknt">
    <form name="frm_dknt" id="frm_dknt" method="post" autocomplete="false" action="" >
    	<input type="text" name="fid[hoten_nhantin]" id="hoten_nhantin" class="placeholder-2" 
    	placeholder="<?=_hovaten?>" />
        <input type="text" name="fid[email_nhantin]" id="email_nhantin" class="placeholder-2" 
        placeholder="<?=_nhapemailcuaban?>" />
        <input type="hidden" value="1" name="nltval">
        <input type="hidden" value="<?= time() ?>" name="nlttoken">
        <input type="hidden" name="recaptchaResponse_dknt" id="recaptchaResponse_dknt">
        <div id="submit_nhantin"><?= _gui ?><?php /* 
        <i class="fas fa-paper-plane"></i> 
        */?></div>
    </form>
</div>



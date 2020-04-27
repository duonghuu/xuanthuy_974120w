<?php  if(!defined('_source')) die("Error");
@$id =   (int)trim(strip_tags(addslashes($_GET['id'])));
$datphong = array();
$datphong = $_SESSION["fid"];
if(!empty($_POST["dpval"])){
    if($_SESSION['dptoken'] == $_POST['dptoken']){ // refresh page
      unset($_SESSION['dptoken']);
      header('location: '.getCurrentPageURL());
      exit();
    }else{
      $_SESSION['dptoken'] = $_POST['dptoken'];
      $datphong = $_POST["dp"];
      $datphong["ten"] = preg_replace('/\s+/', ' ',$datphong["ten"]);
      $datphong["dienthoai"] = preg_replace('/\s+/', ' ',$datphong["dienthoai"]);
      if($datphong["ten"] == " " || $datphong["ten"] == " "){
        transfer("Xin kiểm tra lại các trường dữ liệu nhập không được rỗng", getCurrentPageURL());
      }
      $datphong["chude"] = "Đặt phòng ".$datphong["loaiphong"].", ngày: ".date('d/m/Y',time());
      $datphong["type"] = "dat-phong";
      $datphong["hienthi"] = "1";
      $datphong["stt"] = "1";
      $datphong["ngaytao"] = time();
      $d->reset();
      $d->setTable("lienhe");
      if($d->insert($datphong)){
        unset($_SESSION["fid"]);
        transfer("Bạn đã đặt phòng thành công, chúng tôi sẽ sớm liên hệ với bạn, xin cám ơn!","index.html");
      }
        else{
            transfer("Đã xảy ra lỗi trong quá trình đặt phòng, mời bạn thử lại!");
        }
    }
  }

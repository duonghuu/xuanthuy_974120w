<?php //include _template."layout/sanpham_boloc.php";?>
<?php /* <div class="hotro danhmuc">
  <div class="tieude"><span>Gọi mua hàng</span></div>
  <div class="danhmuc-box">
    <div class="hotro-img"><img src="images/hotro.png" alt="<?=_hotrotructuyen?>"></div>
    <div class="hotro-hotline">
      <img src="images/sb-hotline.png" alt="hotline" class="sb-hotline">
      <p>Hotline</p>
      <?php foreach ($hotline as $key => $value) { ?>
        <a href="tel:<?=preg_replace('/[^0-9]/','',$value['link']);?>"><?=$value['link']?></a>
      <?php } ?>
    </div>
    <?php foreach($yahoo as $key => $value) { ?>
      <div class="hotro-item">
        
        <h5><?= $value["ten"] ?></h5>
        <p><img src="images/phone.png" alt=""> <span><?= _dienthoai ?> <?= $value["dienthoai"] ?></span></p>
        <p><img src="images/email.png" alt=""> <span><?= $value["email"] ?></span></p>
      </div>
    <?php } ?>
  </div>
</div> */?>
<div class="danhmuc dm-sp">
   
   <div class="tieude">Danh mục</div>
   <div class="danhmuc-box" id="danhmuc">
     <?= for2cap('product_danhmuc','product_list','bat-dong-san','bat-dong-san','','/') ?>
   </div>
 </div>

<div class="web-slider-main quangcao">
  <?php foreach ($quangcao as $key => $value) {
    $img = GetImg(_upload_hinhanh_l.$value["thumb"]);
    echo '<div class="quangcao-item"><a href="'.$value["link"].'">
    <img src="'.$img.'" alt="'.$value["ten"].'"></a></div>';
  } ?>
</div>
<?php /* <div class="chaysp danhmuc">

  <div class="tieude">tin mới nhất</div>
  <div class="danhmuc-box">
   <div class="tinmoi-container">
     <ul class="tinchay-box">
        <?php foreach ($tinnb as $key => $value) {
          echo '<li class="tinchay-item"><a href="'.get_url($value).'">
            <figure><img src="'._upload_tintuc_l.$value["thumb"].'" alt="'.$value["ten"].'"></figure><h5 class="line-clamp">'.$value["ten"].'</h5>
          </a></li>';
        } ?>
     </ul>

   </div>
 </div>
 </div>

 <div class="chaysp danhmuc">

 <div class="tieude"><?=_sanphamnoibat?></div>
 <div class="danhmuc-box">
  <div class="tinmoi-container">
    <ul>
      <?php foreach ($spnoibat as $key => $value) {
        $giasp = ($value["giakm"]>0)?$value["giakm"]:$value["gia"];
        $gia = ($giasp>0)?num_format($giasp).' đ':_lienhe;
        $s_gia = "";
        if($value["giakm"]>0) {
          
          $s_gia .= '<span>'.num_format($value["giakm"]).' đ</span>';
          $s_gia .= '<del>'.num_format($value["gia"]).' đ</del>';
        }else{
          $s_gia .= '<span>'.$gia.'</span>';
        }
        echo '<li><a href="'.get_url($value).'">
          <figure><img src="'._upload_sanpham_l.$value["thumb"].'" alt="'.$value["ten"].'"></figure>
          <h3>'.$value["ten"].'</h3><p>Giá: '.$s_gia.'</p>
        </a></li>';
      } ?>
    </ul>
  </div>
</div>
</div><!-- hotro --> */?>

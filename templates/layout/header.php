<header class="hd-bg">
    <div class="container">
      <div class="hd-flex">
        <?php 
          $img = _upload_hinhanh_l.$logolang["thumb"];
          $img2 = _upload_hinhanh_l.$bannerlang["thumb"];
         ?>
         <div class="hd-left">
           <a href="" class="logo" >
             <img src="<?= $img ?>" alt="logo">
           </a>
           <a href="" class="banner" >
             <img src="<?= $img2 ?>" alt="banner">
           </a>
         </div>
        
        <div class="hd-info">
          <?php foreach ($diachi as $key => $value) {
            # code...
           ?>
          <div class="hd-hotline">
            <img src="images/hd-hotline.png" alt="hotline">
            <p>
              <span>Hotline <?= $key + 1 ?>:</span>
              <a href="tel:<?=preg_replace('/[^0-9]/','',$value['dienthoai']);?>">
                          <?= $value['dienthoai'] ?></a>
            </p>
          </div>
        <?php } ?>
          <div class="hd-diachi">
            <img src="images/hd-diachi.png" alt="diachi">
            <p>
              <span>Hệ thống</span>
              <a href="chi-nhanh.html">Chi nhánh</a>
            </p>
          </div>
        </div>
      </div>
    </div>
</header>
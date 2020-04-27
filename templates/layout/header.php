<header class="hd-bg">
    <div class="container">
      <div class="hd-flex">
        <?php 
          $img = _upload_hinhanh_l.$logolang["photo"];
          $img2 = _upload_hinhanh_l.$bannerlang["photo"];
         ?>
        <a href="" class="logo-banner" >
          <img src="<?= $img ?>" class="logo" alt="logo">
          <img src="<?= $img2 ?>" class="banner" alt="banner">
        </a>
        <div class="hd-info">
          <div class="hd-hotline">
            <img src="images/" alt="">
            <p>
              <span>Hotline </span>
              <a href="tel:<?=preg_replace('/[^0-9]/','',$value['dienthoai']);?>">
                          <?= $value['dienthoai'] ?></a>
            </p>
          </div>
          <div class="hd-info-item">
            <img src="images/" alt="">
            <p>
              <span></span>
              <a href=""></a>
            </p>
          </div>
          <div class="hd-info-item">
            <img src="images/" alt="">
            <p>
              <span></span>
              <a href=""></a>
            </p>
          </div>
        </div>
      </div>
    </div>
</header>
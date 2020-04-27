<header class="hd-bg">
    <div class="container">
      <div class="hd-flex">
        <?php 
          $img = _upload_hinhanh_l.$logolang["photo"];
         ?>
        <a href="" class="logo" ><img src="<?= $img ?>" alt="logo"></a>
        <div class="hd-info">
          <h2><?= $company['ten'] ?></h2>
          <div class="slogan"><?= $company['slogan'] ?></div>
          <p><?= _diachi.': '.$company['diachi'] ?></p>
        </div>
        <div class="hd-hotline">
          <a href="tel:<?=preg_replace('/[^0-9]/','',$company['dienthoai']);?>">
            <?= $company['dienthoai'] ?></a>
        </div>
      </div>
    </div>
</header>
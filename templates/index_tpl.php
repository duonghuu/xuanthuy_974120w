<?php 
$img_about = GetImg(_upload_hinhanh_l.$about["thumb"]);
 ?>
 <div class="gioithieu">
   <div class="container">
     <div class="gioithieu-wrap">
       <a href="gioi-thieu.html" class="imgsp">
         <figure><img src="<?= $img_about ?>" alt="<?= $about["ten"] ?>"></figure>
       </a>
       <div class="info">
         <p class="ten2 text-uppercase"><?= $about["ten2"] ?></p>
         <h2 class="ten text-uppercase"><?= $about["ten"] ?></h2>
         <div class="desc"><?= nl2br($about["mota"]) ?></div>
         <a href="gioi-thieu.html" class="xemthem text-uppercase"><?= _xemthem ?></a>
       </div>
     </div>
   </div>
 </div>
<div class="dmsanpham lazy" data-bg="url(images/productdm.jpg)">
  <div class="container">
    <div class="dmsanpham-main">
      <?php foreach ($product_danhmucnb as $key => $value) {
        $img = _upload_sanpham_l.$value["thumb"];
        $link = "thuc-don/".$value["tenkhongdau"]."-".$value["id"];
       ?>
      <div class="dmsanpham-item"><a href="<?= $link ?>">
          <figure class="zoom_hinh"><img src="images/1x1.png" data-lazy="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure>
          <h2><?= $value["ten"] ?></h2>
        </a></div>
     <?php } ?>
    </div>
  </div>
</div>
<div class="thucdon">
  <div class="container">
    <div class="idx-tit">
      <h4><span><?= $txtbanchay["ten"] ?></span></h4>
    </div>
    <div class="idx-desc">
      <?= $txtbanchay["mota"] ?>
      <img src="images/idx-tit.png" alt="idx-tit">
    </div>
    <div class="product-grid">
      <?php foreach ($spnoibat as $key => $value) {
        showProduct($value);
      } ?>
    </div>
  </div>
</div>
<div class="visao lazy" data-bg="url(images/taisao.jpg)">
  <div class="container">
    <div class="idx-tit">
      <h4><span><?= $txtvisao["ten"] ?></span></h4>
    </div>
    <div class="idx-desc">
      <?= $txtvisao["mota"] ?>
      <img src="images/idx-tit.png" alt="idx-tit">
    </div>
    <div class="visao-box">
      <?php foreach ($visao as $key => $value) { 
        $img = _upload_tintuc_l.$value["thumb"];
        $cls = (($key+1)%2 == 0)?'even':'odd';
        ?>
        <div class="visao-item visao--<?= $cls ?>">
          <article>
            <figure><img src="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure>
            <div class="info">
              <h5><?= $value["ten"] ?></h5>
              <p><?= catchuoi($value["mota"],50) ?></p>
            </div>
          </article>
        </div>
      <?php } ?>
    </div>
  </div>
</div>
<div class="ykien lazy" data-bg="url(images/ykien.jpg)">
  <div class="container">
    <div class="idx-tit">
      <h4><span><?= $txtykien["ten"] ?></span></h4>
    </div>
    <div class="idx-desc">
      <?= $txtykien["mota"] ?>
      <img src="images/idx-tit.png" alt="idx-tit">
    </div>
    <div class="ykien-main">
      <?php foreach ($ykien as $key => $value) { 
        $img = _upload_tintuc_l.$value["thumb"];
        ?>
        <div class="ykien-item">
          <article>
          <figure><img src="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure>
          <div class="info">
            <div class="desc">
              <span>
                <?= catchuoi($value["mota"],90) ?>
              </span>
            </div>
            <p>Ngày <?= date('d/m/Y',$value["ngaytao"]) ?></p>
            <p><strong><?= $value["ten"] ?></strong></p>
            <p><?= $value["chucvu"] ?></p>
          </div>
          </article>
        </div>
      <?php } ?>
    </div>
  </div>
</div>
<div class="tin-video">
  <div class="container">
    <div class="idx-tit">
      <h4><span><?= $txttintuc["ten"] ?></span></h4>
    </div>
    <div class="idx-desc">
      <?= $txttintuc["mota"] ?>
      <img src="images/idx-tit.png" alt="idx-tit">
    </div>
    <div class="tin-video-flex">
      <div class="tin-bg">
        <div class="tinnb-main">
          <?php foreach ($tinnb as $key => $value) {
            $img = _upload_tintuc_l.$value["thumb"];
           ?>
            <div class="tinnb-item">
              <a href="<?= get_url($value,'tin-tuc') ?>">
                <figure><img src="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure>
                <div class="info">
                  <span>Ngày: <?= date('d/m/Y',$value["ngaytao"]) ?></span>
                  <h5><?= $value["ten"] ?></h5>
                  <p><?= catchuoi($value["mota"],120) ?></p>
                </div>
              </a>
            </div>
          <?php } ?>
        </div>
      </div>
      <div class="video-bg">
        <div id="video-idx">
        </div>
        <?php if(count($video)>1){ ?>
        <select class="form-control" id="lstvideo" name="lstvideo">
          <option value="">Video ...</option>
          <?php foreach($video as $v) { ?>
          <option value="<?= getYoutubeIdFromUrl($v["link"]) ?>"><?= $v["ten"] ?></option>
          <?php } ?>
        </select>
        <?php } ?>
      </div>
    </div>
  </div>
</div>
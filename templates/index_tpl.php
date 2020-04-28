<div class="dmsanpham">

  <div class="container">
    <div class="dmsanpham-main">
      <?php foreach ($haisan_danhmuc as $key => $value) {
        $img = _upload_sanpham_l.$value["thumb"];
        $link = "hai-san/".$value["tenkhongdau"]."-".$value["id"];
       ?>
        <div class="dmsanpham-item">
          <a href="<?= $link ?>">
            <figure><img src="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure>
            <h2><?= $value["ten"] ?></h2>
          </a>

        </div>
      <?php } ?>
    </div>
  </div>
</div>
<div class="haisanngon lazy" data-bg="url(images/haisanngon.jpg)">
  <div class="container">
    <div class="title text-center text-uppercase">Hải sản ngon mỗi ngày</div>
    <div class="spnoibat-main">
      <?php foreach ($spnoibat as $key => $value) {
        showProduct2($value,["slick"=>true]);
      } ?>
    </div>
  </div>
</div>
<?php foreach ($haisan_danhmucnb as $kdm => $vdm) { 
  $link1 = "hai-san/".$vdm["tenkhongdau"]."-".$vdm["id"];
  $haisan_list=get_result("select ten$lang as ten,tenkhongdau,id,thumb,photo
      ,type from #_product_list where type='hai-san' and id_danhmuc='".$vdm["id"]."'
       and hienthi>0 order by stt asc");
  $haisan=get_result("select mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo
        ,type,gia,giakm from #_product where type='hai-san' and id_danhmuc='".$vdm["id"]."' and tieubieu>0
       and hienthi>0 order by stt asc");
  ?>
<div class="spnoibat">
  <div class="container">
    <div class="idx-tit">
      <div class="idx-tit__left">
        <h2><a href="<?= $link1 ?>"><?= $vdm["ten"] ?></a></h2>
        <?php if(!empty($haisan_list)){ ?>
        <div class="idx-tit__leftsub">
          <?php foreach ($haisan_list as $kli => $vli) {
          $link2 = "hai-san/".$vli["tenkhongdau"]."-".$vli["id"]."/";
            ?>
          <a href="<?= $link2 ?>"><?= $vli["ten"] ?></a>
          <?php } ?>
        </div>
        <?php } ?>
      </div>
      <div class="idx-tit__right">
        
      </div>
    </div>
    <div class="spnoibat-main">
      <?php foreach ($haisan as $key => $value) {
        showProduct($value,["slick"=>true]);
      } ?>
    </div>
  </div>
</div>
<?php } ?>
<div class="thucdon lazy" data-bg="url(images/thucdon.jpg)">
  <div class="container">
    <div class="title text-center text-capitalize"><a href="thuc-don.html">
    Thực đơn thủy Lê</a></div>
    <!-- Nav pills -->
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#tdall">Tất cả</a>
      </li>
      <?php foreach ($product_danhmucnb as $kdm => $vdm) {
       ?>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" 
        href="#td<?= md5($vdm["tenkhongdau"].$vdm["id"]) ?>"><?= $vdm["ten"] ?></a>
      </li>
      <?php } ?>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="tdall">
        <div class="product-grid">
        <?php 
        $linkxem = 'thuc-don.html';
        foreach ($thucdonnoibat as $key => $v) {
          $img = _upload_sanpham_l.$v["thumb"];
          $giasp = ($v["giakm"]>0)?$v["giakm"]:$v["gia"];
          $gia = ($giasp>0)?num_format($giasp).'đ':_lienhe;
          $s_gia = "";
          if($v["giakm"]>0) {
            $s_gia .= '<span>'.num_format($v["giakm"]).'đ</span>';
            $s_gia .= '<del>'.num_format($v["gia"]).'đ</del>';
          }else{
            $s_gia .= '<span>'.$gia.'</span>';
          }
          echo '<div class="thucdon-box">
            <a href="'.get_url($v,'thuc-don').'">
              <figure><img src="'.$img.'" alt="'.$v["ten"].'"></figure>
              <h3>'.$v["ten"].'</h3>
              <p>Giá: '.$s_gia.'</p>
            </a>
          </div>';
        } ?>
        </div>

        <?= (count($thucdonnoibat)>2)?'<div class="xemthucdon"><a href="'.$linkxem.'">'.
        _xemthem.'</a></div>':'' ?>
      </div>
      <?php foreach ($product_danhmucnb as $kdm => $vdm) {
        $thucdonnoibat=get_result("select mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo
            ,type,gia,giakm from #_product where type='thuc-don' and id_danhmuc='".$vdm["id"]."'
             and noibat>0 and hienthi>0 order by stt asc limit 0,8");
        $linkxem = 'thuc-don/'.$vdm["tenkhongdau"].'-'.$vdm["id"];
       ?>
      <div class="tab-pane fade" id="td<?= md5($vdm["tenkhongdau"].$vdm["id"]) ?>">
        <div class="product-grid">
                <?php foreach ($thucdonnoibat as $key => $v) {
                  $img = _upload_sanpham_l.$v["thumb"];
                  $giasp = ($v["giakm"]>0)?$v["giakm"]:$v["gia"];
                  $gia = ($giasp>0)?num_format($giasp).'đ':_lienhe;
                  $s_gia = "";
                  if($v["giakm"]>0) {
                    $s_gia .= '<span>'.num_format($v["giakm"]).'đ</span>';
                    $s_gia .= '<del>'.num_format($v["gia"]).'đ</del>';
                  }else{
                    $s_gia .= '<span>'.$gia.'</span>';
                  }
                  echo '<div class="thucdon-box">
                    <a href="'.get_url($v,'thuc-don').'">
                      <figure><img src="'.$img.'" alt="'.$v["ten"].'"></figure>
                      <h3>'.$v["ten"].'</h3>
                      <p>Giá: '.$s_gia.'</p>
                    </a>
                  </div>';
                } ?>
                </div>
                <?= (count($thucdonnoibat)>2)?'<div class="xemthucdon"><a href="'.$linkxem.'">'.
                _xemthem.'</a></div>':'' ?>
      </div>
    <?php } ?>
    </div>
  </div>
</div>
<div class="video">
  <div class="container">
    <div class="title"><?= $txtvideo["ten"] ?></div>
    <div class="desc"><?= $txtvideo["mota"] ?></div>
    <div class="video-main">
      <?php foreach ($video as $key => $value) {
        $vco = getYoutubeIdFromUrl($value["link"]);
        $img = '//i.ytimg.com/vi/'.$vco.'/mqdefault.jpg';
        echo '<div class="video-item"><a data-fancybox="" href="//www.youtube.com/watch?v='.$vco.'">
            <figure><img src="'.$img.'" alt="'.$value["ten"].'"></figure>
            <h5>'.$value["ten"].'</h5>
          </a></div>';
      } ?>
    </div>
  </div>
</div>
<?php /* <div class="tieude_giua"><div><?=_chitiet?></div></div> */?>
<div class="box_container">
	<div class="wap_pro">
    <?php 
    $thumbphoto = '';
    $thumbhinhcon = 'thumb/78x102/3/';
    $img_row_detail = _upload_sanpham_l.$row_detail["thumb"];
    ?>
    <div class="zoom_slick">
      <div id="bs-carousel" class="mybs-carousel carousel slide" data-ride="carousel">
        <div class="carousel-slider">
          <!-- The slideshow -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a data-fancybox="gallery27" data-caption="<?= $row_detail["ten"] ?>" href="
                <?= _upload_sanpham_l.$row_detail["photo"] ?>">
                <img src="<?= $img_row_detail ?>" alt="<?= $row_detail["ten"] ?>"></a>
              </div>
              <?php foreach ($hinhthem as $k_hinh => $v_hinh) { 
                $img_hinhthem = _upload_hinhthem_l.$v_hinh["thumb"];
                ?>
                <div class="carousel-item">
                  <a data-fancybox="gallery27" data-caption="<?= $row_detail["ten"] ?>" href="
                    <?= _upload_hinhthem_l.$v_hinh["photo"] ?>">
                    <img src="<?= $img_hinhthem ?>" alt="<?= $row_detail["ten"] ?>"></a>
                  </div>
                <?php } ?>
              </div>
              <!-- Left and right controls -->
              <a class="carousel-control-prev" href="#bs-carousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#bs-carousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
            <!-- Indicators -->
            <ul class="carousel-indicators scrollstyle-4">
              <li data-target="#bs-carousel" data-slide-to="0" class="active">
                <figure><img src="<?= $img_row_detail ?>" alt="<?= $row_detail["ten"] ?>"></figure>
              </li>
              <?php foreach ($hinhthem as $k_hinh => $v_hinh) { 
                $img_hinhthem = _upload_hinhthem_l.$v_hinh["thumb"];
                ?>
                <li data-target="#bs-carousel" data-slide-to="<?= $k_hinh+1 ?>">
                  <figure><img src="<?= $img_hinhthem ?>" alt="<?= $row_detail["ten"] ?>"></figure>
                </li>
              <?php } ?>
            </ul>
          </div>
   </div><!--.zoom_slick-->
   <div class="product_info">
    <div class="ten li"><?=$row_detail['ten']?></div>
    <?php if($row_detail['masp'] != '') { ?><div class="li"><b><?=_masanpham?>:</b> 
      <?=$row_detail['masp']?></span></div><?php } ?>
    <?php if($row_detail['diachi'] != '') { ?><div class="li"><b>Địa điểm:</b> 
      <?=$row_detail['diachi']?></span></div><?php } ?>
    <?php if($row_detail['dientich'] != '') { ?><div class="li"><b>Dự án:</b> 
      <?=$row_detail['dientich']?></span></div><?php } ?>
    <div class="gia <?php if($row_detail['giakm'] > 0)echo 'giacu'; ?> li"><?=_gia?>: 
      <?php if($row_detail['gia'] > 0)echo number_format($row_detail['gia'],0, ',', '.').'  vnđ';
      else echo _lienhe; ?></div>

    <?php if($row_detail['giakm'] > 0) { ?><div class="giakm li"><?=_giakm?>: 
      <?=number_format($row_detail['giakm'],0, ',', '.').' vnđ';?> <span class="tinh_phantram">
        -<?=tinh_phantram($row_detail['gia'],$row_detail['giakm']);?>%</span></div><?php } ?>
    <?php /* <?php if($row_detail['size'] != '') { ?> <div class="li"><b><?=_chonsize?>:</b> 
    <?php $arr_size = explode(',',$row_detail['size']); foreach($arr_size as $key=>$value) {
      echo '<span class="size">'.$value.'</span>'; } ?> </div> <?php } ?> 
      <?php if($row_detail['mausac'] != '') { ?> <div class="li"><b style="float:left;"><?=_chonmau?>:</b> 
      <?php $arr_mausac = explode(',',$row_detail['mausac']); 
      foreach($arr_mausac as $key=>$value) {echo '<span class="mausac" 
      style="background:'.$value.'">'.$value.'</span>'; } ?> <div class="clear"></div> </div> <?php } ?> */?>

    <?php if(!empty($size2)) { ?>
     <div class="li"><b style="float:left;margin: 3px 7px 0 0"><?=_chonsize?>:</b>
      <?php 
      foreach($size2 as $key=>$value)
      {
        echo '<span class="size">'.$value["ten"].'</span>';
      }
      ?>
    </div>
  <?php } ?>

  <?php if(!empty($mausac2)) { ?>
   <div class="li"><b style="float:left;margin: 3px 7px 0 0"><?=_chonmau?>:</b>
    <?php 
    foreach($mausac2 as $key=>$value)
    {
      if($value["noibat"]>0){
        echo '<span class="mausac" style="background:url('._upload_tintuc_l.$value["photo"].')"></span>';
      }
      else{
        echo '<span class="mausac" style="background:'.$value["color"].'">'.$value["color"].'</span>';
      }

    }
    ?>
    <div class="clear"></div>
  </div>
<?php } ?>
<?php if($row_detail['mota2'] != '') { ?><div class="content li"><?=$row_detail['mota2']?></div><?php } ?>
<?php /* 
<div class="li"><b><?=_luotxem?>:</b> <span><?=$row_detail['luotxem']?></span></div> 
*/?>

<?php /*  <div class="li"><div class="danhgiasao" data-url="<?=getCurrentPageURL();?>">
<?php for($i=1;$i<=5;$i++) { ?><span data-value="<?=$i?>" data-id="<?=$row_detail["id"]?>"></span>
<?php } ?>&nbsp;&nbsp;<b class="num_danhgia"><?=$num_danhgiasao?>/5</b></div> </div> */?>
<div class="li"><?php include _template."layout/share.php";?></div>
</div>
</div><!--.wap_pro-->

<!-- Nav tabs -->
<ul class="nav nav-tabs mt-3">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#thongtinchitiet"><strong>
      <?= _thongtinchitiet ?></strong></a>
  </li>
  <?php /* <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#binhluan"></strong><?=_binhluan?></strong></a>
    </li */?>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="thongtinchitiet">
    <div class="box_detail_product">
      <div class="content"><?=$row_detail['noidung']?></div>
    </div>
    
    <?php if(!empty($tags_sp)) { ?>
      <div class="tukhoa">
        <div id="tags">
          <span>Tags:</span>
          <?php
          foreach($tags_sp as $k=>$tags_sp_item) { 
            ?>
            <a href="tags/<?=changeTitle($tags_sp_item['ten'])?>-<?=$tags_sp_item['id']?>" 
              title="<?=$tags_sp_item['ten']?>"><?=$tags_sp_item['ten']?></a>
          <?php } ?>
          <div class="clear"></div>
        </div>
      </div>
    <?php } ?>
  </div>
  <?php /* <div class="tab-pane fade" id="binhluan"><?php //include _template."layout/comment.php";?> 
  <div class="fb-comments" data-href="<?=getCurrentPageURL()?>" data-numposts="5" 
  data-width="100%"></div></div> */?>
</div>
<div class="clear"></div>
</div><!--.box_containe-->
<?php if(count($product)>0) { ?>
  <div class="tieude_giua mt-3"><div><?=$title_other?></div></div>
  <div class="product-grid">
    <?php foreach ($product as $k => $v) { 
      showProduct($v);
    } ?>

  </div><!---END .wap_item-->
  <div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
<?php } ?>


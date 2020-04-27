<?php /* <div class="tieude_giua"><div><?=$title_cat?></div></div> */?>
<?php echo $bread->display(); ?>
<div class="box_container">
  <div class="banggia__body">
    <?php 
    $spnoibat=get_result("select ten$lang as ten,mota$lang as mota,tenkhongdau,id,thumb,photo,type,gia 
        from #_product where type='bang-gia' and hienthi>0 order by stt asc");
    foreach ($spnoibat as $key => $value) {
      $gia = ($value["gia"]>0)?num_format($value["gia"]).'đ':_lienhe;
      ?>
      <div class="banggia__item">
        <div class="banggia__tieude">
          <div class="banggia__tieude--bold">
            <strong><?= $value["ten"] ?></strong>
          </div>
          <span><?= $gia ?></span>
        </div>
        <p><?= $value["mota"] ?></p>
      </div>
    <?php } ?>
  </div>
</div>


<div class="spnoibat-bg">

  <div class="title text-center ">
    <h5 class="text-uppercase">sản phẩm nổi bật</h5>
    <p>Chuyên Sản Xuất Kinh Doanh Cung Cấp Lưới Thép, Mâm Sắt</p>
  </div>
  <div class="spnoibat-main">
    <?php foreach ($spnoibat as $key => $value) {
      showProduct($value,["slick"=>true]);
    } ?>
  </div>
</div>
<?php foreach ($product_danhmucnb as $kdm => $vdm) { 
  $link1 = "san-pham/".$vdm["tenkhongdau"]."-".$vdm["id"]."/";
  $img1 = _upload_sanpham_l.$vdm["thumb"];
  $clsac = (($kdm+1) % 2 == 0) ? 'even' : 'odd';
  $spnoibat = get_result("select ten$lang as ten,mota$lang as mota,tenkhongdau,id,thumb,photo,type,gia,giakm 
      from #_product where type='san-pham' and noibat>0 and id_list='".$vdm["id"]."'
       and hienthi>0 order by stt asc limit 0,6");
  ?>
  <div class="sptieubieu-bg">
    <div class="idx-tit">
      <h4><a href="<?= $link1 ?>"><?= $vdm["ten"] ?></a></h4>
      <p>Hotline: <a href="tel:<?=preg_replace('/[^0-9]/','',$company['dienthoai']);?>">
              <?= $company['dienthoai'] ?></a></p>
    </div>

    <div class="sptieubieu-flex <?= $clsac ?>">
      <a href="<?= $link1 ?>" class="img-danhmuc"><img src="<?= $img1 ?>" alt="<?= $vdm["ten"] ?>"></a>
      <div class="product-grid">
        <?php foreach ($spnoibat as $key => $value) {
          showProduct($value);
        } ?>
      </div>
    </div>
  </div>
<?php } ?>
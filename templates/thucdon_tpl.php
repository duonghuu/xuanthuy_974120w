<div class="spnoibat-bg">
 
    <div class="container">
<?php foreach ($spnoibat as $kdm => $vdm) {
    $add_data = get_result("select id,ten,chucvu,link,tenkhongdau from #_news where id_danhmuc='".$vdm["id"]."' and type='giatour'");
    $clseven = (($kdm+1)%2==0)?'even':'odd';
 ?>
    <div class="spnoibat-item <?= $clseven ?>">
        <div class="spnoibat-left">
            <div class="web-slider-main clearfix">
                <figure><img src="images/1x1.png" class="img-fill" data-lazy="<?= _upload_sanpham_l.$vdm["photo"] ?>" alt="<?= $vdm["ten"] ?>"></figure>
            </div>
        </div>
        <div class="spnoibat-right">
            <div class="combo-flex">
                <div class="combo-left"><h2><?= $vdm["ten"] ?></h2> <?= $vdm["mattien"] ?></div>
                <div class="combo-right"><strong><?= $vdm["dientich"] ?></strong></div>
            </div>
        <?php foreach ($add_data  as $key => $value) {
            $link = get_url($value,'mon');
         ?>
            <div class="combo-flex">
                <div class="combo-left"><a href="<?= $link ?>"><?= $value["chucvu"] ?></a></div>
                <div class="combo-right"><span></span><span><?= $value["link"] ?></span></div>
            </div>
        <?php } ?>
        </div>
    </div>
<?php } ?>
    </div>
</div>
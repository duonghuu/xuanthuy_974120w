<?php echo $bread->display();
$banggia=get_result("select ten$lang as ten,tenkhongdau,id,type from #_news where type='bangmau' and hienthi>0 order by stt asc");
 ?>
<div class="box_container banggia-gallery">
    <!-- Nav pills -->
    <ul class="nav nav-pills mb-3">
        <?php foreach ($banggia as $kdm => $vdm) {
            $cls=($kdm==0)?'active':'';
            $iden=$vdm["tenkhongdau"].$vdm["id"];
            ?>
            <li class="">
                <a class="nav-link <?= $cls ?>" data-toggle="pill" href="#<?= $iden ?>"><?= $vdm["ten"] ?></a>
            </li>
        <?php } ?>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <?php foreach ($banggia as $kdm => $vdm) {
            $banggiaimg=get_result("select thumb,photo,id,type from #_hinhanh where type='bangmau' and id_hinhanh='".$vdm["id"]."' order by stt asc");
            $cls=($kdm==0)?'active':'';
            $iden=$vdm["tenkhongdau"].$vdm["id"];
            ?>
            <div class="tab-pane <?= $cls ?>" id="<?= $iden ?>">
<div class="banggiaimg-grid">

    <?php foreach ($banggiaimg as $key => $value) {
        $img=_upload_hinhthem_l.$value["photo"];
        echo '<div class="banggia-img"><a data-fancybox="gal'.$vdm["id"].'" href="'.$img.'">
                <figure><img class="img-fill lazy" data-src="'.$img.'" alt="'.$vdm["ten"].'"></figure>
                <div class="over-content"><i class="far fa-image"></i></div>
            </a></div>';
    } ?>
</div>
            </div>
        <?php } ?>
    </div>
</div><!---END .box_container-->
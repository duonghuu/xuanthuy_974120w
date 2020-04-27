<?php echo $bread->display(); ?>
<div class="box_container">
<div class="dichvu-grid">

    <?php foreach ($tintuc as $key => $value) {
        echo '<div class="dichvu-item"><a href="'.get_url($value,"dich-vu").'"><figure><img src="images/dichvu.png" class="hinhdv" alt="hinhdv"><img class="lazy img-fill" data-src="'._upload_tintuc_l.$value["photo"].'" alt="'.$value["ten"].'" ></figure><h5>'.$value["ten"].'</h5><div class="desc line-clamp">'.$value["mota"].'</div></a></div>';
    } ?>
</div>
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div>
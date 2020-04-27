<?php echo $bread->display(); ?>
<div class="box_container">
    <div class="lop-grid">
        <?php foreach ($tintuc as $key => $value) {
            $img=_upload_tintuc_l.$value["photo"];
            $link=get_url($value,"lop-yoga");
            echo '<div class="lop-item"><a href="'.$link.'">
                    <figure><img class="img-fill lazy" data-src="'.$img.'" alt="'.$value["ten"].'" ></figure>
                    <h5>'.$value["ten"].'</h5>
                </a></div>';
        } ?>
    </div>
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div><!---END .box_container-->
<?php echo $bread->display(); ?>
<div class="box_container">
<div class="product-grid">
    <?php foreach ($tintuc as $k => $v) { 
            showProduct($v);
    } ?>
</div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div>
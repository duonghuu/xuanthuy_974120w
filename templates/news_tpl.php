<?php /* <div class="tieude_giua"><div><?=$title_cat?></div></div> */?>
<div class="box_container">
    <div class="news-tpl-grid">
        <?php foreach($tintuc as $k => $v) { 
            $img = _upload_tintuc_l.$v['photo'];
            $com_var = ($com != "tim-kiem") ? $com : $type;
            ?>
            <div class="news-tpl-item">

                <a href="<?=get_url($v, $com_var)?>">
                    <figure class="zoom_hinh"><img src="<?= $img ?>" onerror="this.src='1x1.png';" alt="<?=$v['ten']?>" 
                        class="img-fill"></figure>
                    <div class="info">
                        <h5><?=$v['ten']?></h5>
                        <div class="desc line-clamp"><?= $v['mota'] ?></div>    
                    </div>
                </a>
            </div>
        <?php } ?>
    </div>
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div><!---END .box_container-->
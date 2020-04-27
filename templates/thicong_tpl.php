<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
    <div class="thicong-grid">
        <?php foreach($tintuc as $k=>$v){
            echo '<a href="'.get_url($v).'" class="thicong-item">
            <figure class="hover_sang1"><img src="'._upload_tintuc_l.$v["thumb"].'" alt="'.$v["ten"].'"></figure>
            <h3>'.$v["ten"].'</h3>
            </a>';
        } ?>
    </div>
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div><!---END .box_container-->
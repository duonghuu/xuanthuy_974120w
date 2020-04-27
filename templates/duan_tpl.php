<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
    <div class="wap_box_new wap-duan">
       <?php foreach($tintuc as $k => $v) {  
        $link = get_url($v,$com);
        $img= _upload_tintuc_l.$v["photo"];
        ?>

        <div class="wap-duan-item"><a href="<?= $link ?>">
            <figure><img src="<?= $img ?>" alt="<?= $v["ten"] ?>"></figure>
            <h5><?= $v["ten"] ?></h5>
        </a></div>
    <?php  }  ?>
</div><!---wap_box_new-->
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div><!---END .box_container-->
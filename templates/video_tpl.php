<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="video-grid">
    <?php foreach($product as $k => $v) { 
        ?>
        <a data-fancybox="video" href="https://www.youtube.com/watch?v=<?= getYoutubeIdFromUrl($v["link"]) ?>" class="vdg-item">
            <figure class="hover_sang3"><img src="https://img.youtube.com/vi/<?=getYoutubeIdFromUrl($v['link'])?>/0.jpg" alt="<?=$v['ten']?>"></figure>
            <h4><?=$v['ten']?></h4>
        </a>
    <?php }  ?>
</div><!---END .wap_item-->
    
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
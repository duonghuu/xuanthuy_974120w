<?php /* <div class="tieude_giua"><div><?=$title_cat?></div></div> */?>
<?php echo $bread->display(); ?>
<div class="box_container">
    <div class="hoc-flex">
       
        <?php foreach ($tintuc as $key => $value) {
            $cls = ($key % 2 == 0)?'even':'odd';
            $img=_upload_tintuc_l.$value["photo"];
            $link=get_url($value,$com);
            $linkvideo=(!empty($value["link"]))?'<a data-fancybox="" href="https://www.youtube.com/watch?v='. getYoutubeIdFromUrl($value["link"]).'"><img src="images/play.png" alt="play"></a>':'';
            echo '<div class="hoc-item '.$cls.'">
                <article>
                    <figure>'.$linkvideo.'<img src="'.$img.'" alt="'.$value["ten"].'"></figure>
                    <div class="info">
                        <h5><a href="'.$link.'">'.$value["ten"].'</a></h5>
                        <div class="content">'.$value["mota"].'</div>
                    </div>
                </article>
            </div>';
        } ?>
    </div>
<div class="clear"></div>
<div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div><!---END .box_container-->
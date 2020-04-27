<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
<div class="wap_box_new banggia-fl">
    <?php 
    $banggia = get_result("select id,ten$lang as ten,tenkhongdau,type,photo,thumb,mota$lang as mota from #_news where type='bang-gia' and hienthi=1 order by stt asc");
    foreach($banggia as $v){
            echo '<div class="banggia-item">
                <figure><img src="'._upload_tintuc_l.$v["photo"].'" alt="'.$v["ten"].'  "></figure>
            </div>';
        } ?> 
</div><!---END .wap_box_new-->
</div><!---END .box_container-->

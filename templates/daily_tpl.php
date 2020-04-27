<?php echo $bread->display();
$daily_danhmuc=get_result("select ten$lang as ten,tenkhongdau,id from #_news_danhmuc where type='daily' and hienthi>0 order by stt asc");
 ?>
<div class="box_container">
    <div class="daily-grid dailycolor">
        <?php foreach ($daily_danhmuc as $kdm => $vdm) {
            $daily=get_result("select ten$lang as ten,tenkhongdau,id,type from #_news where id_danhmuc='".$vdm["id"]."' and type='daily' and hienthi>0 order by stt asc");
            ?>
            <div class="daily-col">
                <h5><?= $vdm["ten"] ?></h5>
                <?php foreach ($daily as $key => $value) {
                    echo '<p><a href="'.get_url($value,'dai-ly').'">- '.$value["ten"].'</a></p>';
                } ?>
            </div>
        <?php } ?>
    </div>
</div><!---END .box_container-->
<?php echo $bread->display();
$tuvan=get_result("select noidung$lang as noidung,ten$lang as ten,tenkhongdau,id from #_news where type='tuvan' and hienthi>0 order by stt asc");
 ?>
<div class="box_container">
                <div class="cauhoi-flex">
                    <?php foreach ($tuvan as $key => $value) {
                        $iden=$value["tenkhongdau"].$value["id"];
                        echo '<div class="cauhoi-item">
                        <div class="cauhoi-head"><a href="#" rel="nofollow" data-toggle="collapse" data-target="#'.$iden.'"><span>'.$value["ten"].'</span><strong><i class="fas fa-plus"></i></strong></a></div>
    <div class="cauhoi-content"><div id="'.$iden.'" class="collapse">
    '.$value["noidung"].'
    </div></div>
                        </div>';
                    } ?>
                </div>
</div><!---END .box_container-->
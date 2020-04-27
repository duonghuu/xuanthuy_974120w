<?php 
$slider=get_result("select ten$lang as ten,mota$lang as mota,link,photo,thumb from #_slider where hienthi=1 and type='slider' order by stt");
 ?>
<!--start-->
    <div id="ninja-slider">
        <div class="slider-inner">
            <ul>
                <?php foreach($slider as $v){?> 
                <li>
                    <a class="ns-img" href="<?= _upload_hinhanh_l.$v["thumb"] ?>" style="background-size:cover;"></a>
                    <div class="caption cap1"><?= $company["ten"] ?></div>
                    <div class="caption cap1 cap2"><?= $company["slogan"] ?></div>
                </li>
            <?php } ?>
            </ul>
        </div>
    </div>
    <!--end-->
   
    <script src="js/ninja-slider/ninja-slider.js" type="text/javascript"></script>
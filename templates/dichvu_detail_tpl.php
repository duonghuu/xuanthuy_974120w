<div class="chitietdichvu">
    <div class="img-dichvu">
       <div class="swiper-container">
         <div class="swiper-wrapper">
            <?php foreach($hinhthem as $v){ ?> 
             <div class="swiper-slide">
                <img src="thumb/870x380/1/<?= _upload_hinhthem_l.$v["photo"] ?>" alt="<?= $v['ten'] ?>" title="<?= $v['ten'] ?>" />      
            </div>
        <?php } ?>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> 
    <div class="swiper-pagination"></div>
</div> 
</div>
<div class="info-dichvu">
    <a class="close" href="javascript:window.history.back();"><span class="icon clo"></span></a>
    <h1 class="line_item"><?= $row_detail["ten"] ?></h1>
    <div class="li"><div class="addthis_native_toolbox"><b><?=_chiase?>: </b></div></div>
    <div class="content"><?= $row_detail["noidung"] ?></div>
    <div class="back-btn my-5 pb-5">
            <a href="javascript:window.history.back();" style="color: #333;"> &lt; Back </a>
          </div>
</div>
</div>
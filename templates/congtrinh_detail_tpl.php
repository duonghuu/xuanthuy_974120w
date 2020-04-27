<?php 
echo $bread->display(); ?>
<div class="box_container">
  <div class="box_detail_product">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <?php foreach ($hinhthem as $kimg => $value) {
          $cls = ($kimg==0)?'class="active"' :'';
         ?>
        <li data-target="#carouselExampleIndicators" data-slide-to="<?= $kimg ?>" <?= $cls ?> ></li>
      <?php } ?>
      </ol>
      <div class="carousel-inner">
        <?php foreach ($hinhthem as $kimg => $v) {
          $cls = ($kimg==0)?'active' :'';
         ?>
        <div class="carousel-item <?= $cls ?>">
          <picture>
            <source media="(min-width: 1024px)" srcset="thumb/600x480/1/<?= _upload_hinhthem_l.$v["thumb"] ?>" />
              <source media="(min-width: 550px)" srcset="thumb/600x480/1/<?= _upload_hinhthem_l.$v["photo"] ?>" />
                <img src="<?= _upload_hinhthem_l.$v["thumb"] ?>" alt="<?= $v["ten"] ?>" class="d-block mx-auto" />
              </picture>
        </div>
      <?php } ?>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="content ">
      <?=$row_detail['noidung']?>

    </div><!--.content-->
    <?php include _template."layout/share.php";?></div>
    <?php if(count($tintuc) > 0) { ?>
      <div class="othernews">
        <h5><span class="badge badge-pill badge-primary"><?=$title_other?></span></h5>
        <ul class="khac">
          <?php foreach($tintuc as $k => $v) { ?>
            <li><a href="<?=get_url($v,$com)?>" title="<?=$v['ten']?>"><?=$v['ten']?></a></li>
          <?php }?>
        </ul> 
        <div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
      </div><!--.othernews-->
    <?php }?>
</div><!--.box_container-->
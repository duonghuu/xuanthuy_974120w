<?php /* <div class="tieude_giua"><div><?=$title_cat?></div></div> */?>
<div class="box_container">
  <div id="article">
    <h1 class="article__name"><?=$row_detail['ten']?></h1>
    <div class="content ">
        <?=$row_detail['noidung']?>
    </div><!--.content-->
    <?php include _template."layout/share.php";?>
  </div>
<?php if(count($tintuc) > 0) { ?>
            <div class="othernews">
              <h5><span class="badge badge-pill"><?=$title_other?></span></h5>
             <ul class="khac">
              <?php foreach($tintuc as $k => $v) { ?>
                  <li><a href="<?=get_url($v,$com)?>" title="<?=$v['ten']?>"><?=$v['ten']?></a></li>
              <?php }?>
          </ul> 
          <div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
      </div><!--.othernews-->
    <?php }?>
</div><!--.box_container-->
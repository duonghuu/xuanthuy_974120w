<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
    
        <?php 
        if((!empty($hinhthem)) && $type=="thu-vien"){
                           ?>
                           <div class="tva-detail w-clear" id="tva" style="display:none;">
                            <?php foreach ($hinhthem as $key => $value) {
                                $img = _upload_hinhthem_l.$value["photo"];
                                $thumbimg = _upload_hinhthem_l.$value["photo"];
                                echo '<a rel="prettyPhoto[tva]" href="'.$img.'" title="Hình ảnh"><img data-description="'.$title_cat.'" src="'.$thumbimg.'" alt="'.$title_cat.'"  data-image="'.$img.'" data-description="'.$title_cat.'"></a>';
                            } ?>
                        </div>
                        <?php /* <!-- Unitegallery -->
                                                <script type='text/javascript' src='js/unitegallery/js/unitegallery.min.js'></script> 
                                                <link rel='stylesheet' href='js/unitegallery/css/unite-gallery.css' type='text/css' /> 
                                                <script type="text/javascript" src="js/unitegallery/themes/tiles/ug-theme-tiles.js"></script> 
                                                <script type="text/javascript">
                                                    $(document).ready(function(){
                                                        $("#tva").unitegallery({
                                                            tile_as_link: false,
                                                            tile_link_newpage: false,
                                                            // tiles_type: "justified",
                                                            tiles_space_between_cols: 1
                                                        }); 
                                                    });
                                                </script>
                                                <!-- Photobox -->
                                                <link rel='stylesheet' href='js/photobox/photobox.css' type='text/css' /> 
                                                <script type="text/javascript" src="js/photobox/jquery.photobox.js"></script>
                                                <script type="text/javascript">
                                                    $(document).ready(function($) {
                                                        $('.tva-detail').photobox('a',{thumbs:true,loop:false});
                                                    });
                                                </script> */?>
                    <?php } ?>
                    <div class="content">
    <?php if($type == "du-an1"){ ?>
        <?php include _template."news/chitietduan.php";?>
    <?php }else{ ?>
        <?=$row_detail['noidung']?>
    <?php } ?>
    
</div><!--.content-->

<?php include _template."layout/share.php";?>
<?php /* <?php if(count($tintuc) > 0) { ?>
        <div class="othernews">
         <div class="cactinkhac"><?=$title_other?></div>
         <ul class="khac">
          <?php foreach($tintuc as $k => $v) { ?>
              <li><a href="<?=$v['type']?>/<?=$v['tenkhongdau']?>-<?=$v['id']?>.html" title="<?=$v['ten']?>"><i class="far fa-hand-point-right"></i><?=$v['ten']?></a> (<?=make_date($v['ngaytao'])?>)</li>
          <?php }?>
      </ul> 
      <div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
  </div><!--.othernews-->
<?php }?> */?>
</div><!--.box_container-->
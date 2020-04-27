<?php /* 
<div class="tieude_giua"><div><?=$title_cat?></div></div> 
*/?>
<div class="box_container">
    <?php /*<?php 
     $idthuvien=get_fetch("select mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo,type,ngaytao from #_news where type='thuvien'");
        if($idthuvien["id"]>0){
        $hinhthem=get_result("select ten$lang as ten,id,thumb,photo,type from #_hinhanh where id_hinhanh='".$idthuvien["id"]."' and type='thuvien' order by rand() limit 0,8");    
        }
        if((!empty($hinhthem)) && $type=="thuvien"){
                           ?>
                           <div class="tva-detail w-clear" id="tva" style="display:none;">
                            <?php foreach ($hinhthem as $key => $value) {
                                $img = _upload_hinhthem_l.$value["photo"];
                                $thumbimg = _upload_hinhthem_l.$value["thumb"];
                                echo '<a rel="prettyPhoto[tva]" href="'.$img.'" title="Hoạt Động Công Ty"><img data-description="'.$title_cat.'" src="'.$thumbimg.'" alt="'.$title_cat.'"  data-image="'.$img.'" data-description="'.$title_cat.'"></a>';
                            } ?>
                        </div>
                        <!-- Unitegallery -->
                        <script type='text/javascript' src='js/unitegallery/js/unitegallery.min.js'></script> 
                        <link rel='stylesheet' href='js/unitegallery/css/unite-gallery.css' type='text/css' /> 
                        <script type="text/javascript" src="js/unitegallery/themes/tiles/ug-theme-tiles.js"></script> 
                        <script type="text/javascript">
                            $(document).ready(function(){
                                $("#tva").unitegallery({
                                    tile_as_link: false,
                                    tile_link_newpage: false,
                                    tiles_type: "justified",
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
                        </script>
                    <?php } ?> 
    */?>
  <div class="video-grid">
                    <?php 
                    foreach($tintuc as $k => $v) { 
                        ?>
                        <a href="<?= get_url($v,'thu-vien') ?>" class="vdg-item">
                            <figure class="hover_sang3"><img class="lazy" data-src="<?= _upload_tintuc_l.$v["thumb"] ?>" alt="<?=$v['ten']?>"></figure>
                            <h4><?=$v['ten']?></h4>
                        </a>
                    <?php  } ?>
                </div>
            <div class="clear"></div>
            <div class="pagination"><?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?></div>
</div><!---END .box_container-->
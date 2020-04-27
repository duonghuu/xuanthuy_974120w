<div >
<?php include _template."layout/css.php";?>
<div class="tieude_giua"><div><?=_chitiet?></div></div>
<div class="box_container ">
  <div class="wap_pro">
    <?php 
    $thumbphoto = '';
    $thumbhinhcon = '';
    ?>
    <div class="zoom_slick">
      <div class="zoom-container zoomflex">
        <div class="slick2">
          <a data-zoom-id="Zoom-detail" id="Zoom-detail" class="MagicZoom" href="<?php if($row_detail['photo']!=NULL) echo $thumbphoto._upload_sanpham_l.$row_detail['photo']; else echo 'images/noimage.gif';?>" title="<?=$row_detail['ten']?>"><img class='cloudzoom' src="<?php if($row_detail['photo']!=NULL) echo $thumbphoto._upload_sanpham_l.$row_detail['photo']; else echo 'images/noimage.gif';?>" /></a>
          <?php $count=count($hinhthem); if($count>0) {?>
            <?php for($j=0,$count_hinhthem=count($hinhthem);$j<$count_hinhthem;$j++){?>
              <a data-zoom-id="Zoom-detail" id="Zoom-detail" class="MagicZoom" href="<?php if($hinhthem[$j]['photo']!=NULL) echo $thumbphoto._upload_hinhthem_l.$hinhthem[$j]['photo']; else echo 'images/noimage.gif';?>" title="<?=$row_detail['ten']?>" ><img src="<?php if($hinhthem[$j]['photo']!=NULL) echo $thumbphoto._upload_hinhthem_l.$hinhthem[$j]['photo']; else echo 'images/noimage.gif';?>" /></a>
            <?php }} ?>
          </div><!--.slick-->
          <?php $count=count($hinhthem); if($count>0) {?>
            <div class="slick">
              <p><img src="<?= ($row_detail['thumb'] != NULL)? $thumbhinhcon._upload_sanpham_l.$row_detail['thumb']:'images/noimage.gif' ?>" /></p>
              <?php for($j=0,$count_hinhthem=count($hinhthem);$j<$count_hinhthem;$j++){?>
                <p><img src="<?php if($hinhthem[$j]['thumb']!=NULL) echo $thumbhinhcon._upload_hinhthem_l.$hinhthem[$j]['thumb']; else echo 'images/noimage.gif';?>" /></p>
              <?php } ?>
            </div><!--.slick-->
          <?php } ?>
        </div>
      </div><!--.zoom_slick-->
      <ul class="product_info">
        <li class="ten"><?=$row_detail['ten']?></li>
        <?php if($row_detail['masp'] != '') { ?><li><b><?=_masanpham?>:</b> <?=$row_detail['masp']?></span></li><?php } ?>
        <?php if($row_detail['diachi'] != '') { ?><li><b><?=_diachi?>:</b> <?=$row_detail['diachi']?></span></li><?php } ?>
        <?php if($row_detail['dientich'] != '') { ?><li><b>Diện tích:</b> <?=$row_detail['dientich']?></span></li><?php } ?>
        <?php if($row_detail['phaply'] != '') { ?><li><b>Địa thế:</b> <?=$row_detail['phaply']?></span></li><?php } ?>
        <li class="gia <?php if($row_detail['giakm'] > 0)echo 'giacu'; ?>"><?=_gia?>: <?php if($row_detail['gia'] > 0)echo number_format($row_detail['gia'],0, ',', '.').'  vnđ';else echo _lienhe; ?></li>
        <?php if($row_detail['giakm'] > 0) { ?><li class="giakm"><?=_giakm?>: <?=number_format($row_detail['giakm'],0, ',', '.').' vnđ';?> <span class="tinh_phantram">-<?=tinh_phantram($row_detail['gia'],$row_detail['giakm']);?>%</span></li><?php } ?>
        <?php if($row_detail['size'] != '') { ?>
          <li><b><?=_chonsize?>:</b>
           <?php $arr_size = explode(',',$row_detail['size']);
           foreach($arr_size as $key=>$value)
           {
             echo '<span class="size">'.$value.'</span>';
           }
           ?>
         </li>
       <?php } ?>
       <?php if($row_detail['mausac'] != '') { ?>
        <li><b style="float:left;"><?=_chonmau?>:</b>
         <?php $arr_mausac = explode(',',$row_detail['mausac']);
         foreach($arr_mausac as $key=>$value)
         {
           echo '<span class="mausac" style="background:'.$value.'">'.$value.'</span>';
         }
         ?>
         <div class="clear"></div>
       </li>
     <?php } ?>
                   <?php /*  <?php if(!empty($size2)) { ?>
                                              <li>
                                                 <?php 
                                                 foreach($size2 as $key=>$value)
                                                 {
                                                   echo '<span class="size">'.$value["ten"].'</span>';
                                               }
                                               ?>
                                           </li>
                                       <?php } ?>
                                       <?php if(!empty($mausac2)) { ?>
                                          <li>
                                             <?php 
                                             foreach($mausac2 as $key=>$value)
                                             {
                                               if($value["noibat"]>0){
                                                   echo '<span class="mausac" style="background:url('._upload_tintuc_l.$value["photo"].')"></span>';
                                               }
                                               else{
                                                   echo '<span class="mausac" style="background:'.$value["color"].'"></span>';
                                               }
                                             }
                                             ?>
                                             <div class="clear"></div>
                                         </li>
                                     <?php } ?>
                                                */?>
                                                <?php if($row_detail['mota'] != '') { ?><li><?=$row_detail['mota']?></li><?php } ?>
                                                <li><b><?=_luotxem?>:</b> <span><?=$row_detail['luotxem']?></span></li>
                                                <div class="li"><b><?=_soluong?>:</b> <input type="number" value="1" class="soluong" /></div>   
                                                <div class="li"><a class="add_to_cart <?= ($deviceType=="computer")?'dathang':'muangay' ?>" data-id="<?=$row_detail['id']?>"><i class="fa fa-shopping-cart" aria-hidden="true"></i><?=_datmuasanpham?></a></div>
                                                <div class="li" style="display: flex;flex-wrap: wrap;justify-content: space-between;"><a class="dathang nutdathang" 
                                                  data-id="<?=$row_detail['id']?>">Thêm vào giỏ</a> <a class="muangay" data-id="<?=$row_detail['id']?>">Đặt mua ngay</a></div>
                  <?php /*  
                  
                  <li><div class="danhgiasao" data-url="<?=getCurrentPageURL();?>"><?php for($i=1;$i<=10;$i++) { ?><span data-value="<?=$i?>"></span><?php } ?>&nbsp;&nbsp;<b class="num_danhgia"><?=$num_danhgiasao?>/10</b></div>
                  </li> */?>
                  <li><div class="addthis_native_toolbox"><b><?=_chiase?>: </b></div></li>
                </ul>
                <div class="clear"></div>
              </div><!--.wap_pro-->
              <div id="tabs">
                <ul id="ultabs">
                  <li data-vitri="0"><?=_thongtinchitiet?></li>
                  <?php /* <li data-vitri="1"><?=_binhluan?></li> */?>
                </ul>
                <div style="clear:both"></div>
                <div id="content_tabs">
                  <div class="tab">
                    <?=$row_detail['noidung']?>
                    <?php if(!empty($tags_sp)) { ?>
                      <div class="tukhoa">
                        <div id="tags">
                          <span>Tags:</span>
                          <?php foreach($tags_sp as $k=>$tags_sp_item) { ?>
                           <a href="tags/<?=changeTitle($tags_sp_item['ten'])?>/<?=$tags_sp_item['id']?>" title="<?=$tags_sp_item['ten']?>"><?=$tags_sp_item['ten']?></a>
                         <?php } ?>
                         <div class="clear"></div>
                       </div>
                     </div>
                   <?php } ?>
                 </div>
               </div><!---END #content_tabs-->
             </div><!---END #tabs--> 
             <div class="clear"></div>
           </div><!--.box_containerlienhe-->
           <?php include _template."layout/js.php";?>
           </div>
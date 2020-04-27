
<?php if($timkiem_id_danhmuc!="" or $timkiem_id_list!="" or $timkiem_id_cat!="") {?>

<?php if($timkiem_id_list!="") {
	$d->reset();
	$sql = "select id,loc1,loc2,tenkhongdau from #_product_danhmuc where id=".$timkiem_id_list." limit 0,1";
	$d->query($sql);
	$result_ph = $d->fetch_array();
	
	$timkiem_id_danhmuc = $result_ph['id'];
	$timkiem_loc1 = $result_ph['loc1'];
	$timkiem_loc2 = $result_ph['loc2'];
	$timkiem_link = $com.'/'.$result_ph['tenkhongdau'].'-'.$result_ph['id'];
} ?>

<?php if($timkiem_id_cat!="") {
	$d->reset();
	$sql = "select id,loc1,loc2,tenkhongdau from #_product_danhmuc where id=".$timkiem_id_cat." limit 0,1";
	$d->query($sql);
	$result_ph = $d->fetch_array();
	
	$timkiem_id_danhmuc = $result_ph['id'];
	$timkiem_loc1 = $result_ph['loc1'];
	$timkiem_loc2 = $result_ph['loc2'];
	$timkiem_link = $com.'/'.$result_ph['tenkhongdau'].'-'.$result_ph['id'];
} ?>

<?php /* <script src="js/search_nangcao.js" type="text/javascript" ></script> */?>

	<div id="wap_tags"></div>

	
   <div class="box-tim-nc clearfix">
	<?php
		if($timkiem_loc1!="") {
	        $d->reset();
	        $sql="select id,ten from table_news_danhmuc where type='loc-san-pham' and id in (".$timkiem_loc1.") order by stt";
	        $d->query($sql);
	        $arr_loc1 = $d->result_array();
    	}
	?>
        
	<?php foreach ($arr_loc1 as $key => $value) {

	  	if($timkiem_loc2!="") {
			  $d->reset();
			  $sql="select id,ten,photo from table_news where id_danhmuc=".$value['id']." and id in (".$timkiem_loc2.") ";
			  $d->query($sql);
			  $items_loc = $d->result_array();
	  	}
	?>
	
	<?php if(count($items_loc)>0) { ?>
        <div class="item-nc">
            <div class="boxsectionloc clearfix" id="sectionloc_id_<?=$value['id']?>">
                <h2><?=$value['ten']?></h2>
                <div class="boxfilter">
                    <?php foreach ($items_loc as $key => $value1) { ?>
                        <div class="itemfilter" data-link="<?=$timkiem_link?>" data-value="<?=$value['id']?>_<?=$value1['id']?>" data-title="<?=$value1['ten']?>" data-danhmuc="<?=$timkiem_id_danhmuc?>">
                            <div class="checkboxfilter"><i class="fa fa-check" aria-hidden="true"></i></div>
                            <p><?=$value1['ten'];?></p>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
	<?php } ?>
	<?php } ?>
    </div>
	<?php } ?>
    
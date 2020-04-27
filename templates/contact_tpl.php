<?php if($com == "nhu-cau-khach-hang"){ ?>
<div class="tieude_giua"><div><?=$title_cat?></div></div> 
<?php } ?>
<div class="box_container">
   <div class="content contact-flex">
   		<div class="tt_lh">
        <?=lay_text('lienhe');?>
		    <div class="frm_lienhe">
            <form method="post" name="frm" class="frm" action="" enctype="multipart/form-data">
                <?php /* <div class="loicapcha thongbao"></div> */?>
                <div class="form-group"> <input required="" name="ten_lienhe" type="text" class="form-control" placeholder="<?= _hovaten ?>" /> </div>
                <div class="form-group"> <input required="" name="diachi_lienhe" type="text" class="form-control" placeholder="<?= _diachi ?>" /> </div>
                <div class="form-group"> <input required="" name="dienthoai_lienhe" type="text" class="form-control" placeholder="<?= _dienthoai ?>" /> </div>
                <div class="form-group"> <input required="" name="email_lienhe" type="text" class="form-control" placeholder="<?= _email ?>" /> </div>
                <div class="form-group"> 
                    <textarea required="" name="noidung_lienhe" class="form-control" placeholder="<?= _noidung ?>" ></textarea>
                 </div>
                <div class="form-group"> 
                    <button class="btn btn-primary" type="submit"><?= _gui ?></button>
                    <button class="btn btn-primary" type="button" onclick="document.frm.reset();"><?= _nhaplai ?></button>
                 </div>
                <input type="hidden" name="recaptchaContact" id="recaptchaContact">
            </form>
        </div><!--.frm_lienhe-->
        </div>
        <?php if($com != "nhu-cau-khach-hang"){ ?>
        <div class="bando">
                    
					<?=$company['bando']?>
           <?php /*<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyACyJA0Ifi-Y2FmzHOrZYNMY5q4-qATAUg"></script>

				   <script type="text/javascript">
				   var map;
				   var infowindow;
				   var marker= new Array();
				   var old_id= 0;
				   var infoWindowArray= new Array();
				   var infowindow_array= new Array();
				   function initialize(){
					   var defaultLatLng = new google.maps.LatLng(<?=$company['toado']?>);
					   var myOptions= {
						   zoom: 16,
						   center: defaultLatLng,
						   scrollwheel : false,
						   mapTypeId: google.maps.MapTypeId.ROADMAP
						};
						map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);map.setCenter(defaultLatLng);

					   var arrLatLng = new google.maps.LatLng(<?=$company['toado']?>);
					   infoWindowArray[7895] = '<div class="map_description"><div class="map_title"><?=$company['ten']?></div><div><?=_diachi?> : <?=$company['diachi']?><?='<br />'?><?=_dienthoai?>: <?=$company['dienthoai']?></div></div>';
					   loadMarker(arrLatLng, infoWindowArray[7895], 7895);

					   moveToMaker(7895);}function loadMarker(myLocation, myInfoWindow, id){marker[id] = new google.maps.Marker({position: myLocation, map: map, visible:true,icon: 'images/map-marker.gif' });
					   var popup = myInfoWindow;infowindow_array[id] = new google.maps.InfoWindow({ content: popup});google.maps.event.addListener(marker[id], 'mouseover', function() {if (id == old_id) return;if (old_id > 0) infowindow_array[old_id].close();infowindow_array[id].open(map, marker[id]);old_id = id;});google.maps.event.addListener(infowindow_array[id], 'closeclick', function() {old_id = 0;});}function moveToMaker(id){var location = marker[id].position;map.setCenter(location);if (old_id > 0) infowindow_array[old_id].close();infowindow_array[id].open(map, marker[id]);old_id = id;}</script>
		           <div id="map_canvas"></div> */?>
        </div><!--.bando-->
      <?php } ?>
   </div><!--.content-->
</div><!--.box_container-->

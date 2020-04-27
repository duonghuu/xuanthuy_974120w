<?php 
$slider=get_fetch("select ten$lang as ten,mota$lang as mota,link,photo,thumb from #_slider where hienthi=1 and type='slider'");
if(!empty($slider)){
 ?>

<section id="slideshow">
  <img src="<?= _upload_hinhanh_l.$slider["photo"] ?>" class="bg" alt="img">
  <img src="plugins/slider_new/cafe_01.png" class="cafe " data-position="1" alt="img" >
  <img src="plugins/slider_new/cafe_02.png" class="cafe " data-position="2" alt="img" >
  <img src="plugins/slider_new/cafe_03.png" class="cafe " data-position="3" alt="img" >
  <img src="plugins/slider_new/cafe_04.png" class="cafe " data-position="4" alt="img" >
  <img src="plugins/slider_new/cafe_05.png" class="cafe " data-position="5" alt="img" >
  <img src="plugins/slider_new/cafe_06.png" class="cafe " data-position="6" alt="img" >

  <img src="plugins/slider_new/cafe_left_01.png" class="cafe " data-position="left-1" alt="img" >
  <img src="plugins/slider_new/cafe_left_02.png" class="cafe " data-position="left-2" alt="img" >
  <img src="plugins/slider_new/cafe_left_03.png" class="cafe " data-position="left-3" alt="img" >
  <img src="plugins/slider_new/cafe_left_04.png" class="cafe " data-position="left-4" alt="img" >
  <img src="plugins/slider_new/cafe_left_05.png" class="cafe " data-position="left-5" alt="img" >
  <img src="plugins/slider_new/cafe_left_06.png" class="cafe " data-position="left-6" alt="img" >
  <img src="plugins/slider_new/cafe_left_07.png" class="cafe " data-position="left-7" alt="img" >
  <img src="plugins/slider_new/cafe_left_08.png" class="cafe " data-position="left-8" alt="img" >
  <img src="plugins/slider_new/cafe_left_09.png" class="cafe " data-position="left-9" alt="img" >
  <img src="plugins/slider_new/cafe_left_10.png" class="cafe " data-position="left-10" alt="img" >
  <img src="plugins/slider_new/cafe_left_11.png" class="cafe " data-position="left-11" alt="img" >

  <img src="plugins/slider_new/cafe_right_01.png" class="cafe " data-position="right-1" alt="img" >
  <img src="plugins/slider_new/cafe_right_02.png" class="cafe " data-position="right-2" alt="img" >
  <img src="plugins/slider_new/cafe_right_03.png" class="cafe " data-position="right-3" alt="img" >
  <img src="plugins/slider_new/cafe_right_04.png" class="cafe " data-position="right-4" alt="img" >
  <img src="plugins/slider_new/cafe_right_05.png" class="cafe " data-position="right-5" alt="img" >
  <img src="plugins/slider_new/cafe_right_06.png" class="cafe " data-position="right-6" alt="img" >
</section>

<?php } ?>
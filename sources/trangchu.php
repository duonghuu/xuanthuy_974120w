<?php  if(!defined('_source')) die("Error");
$spnoibat=get_result("select gia,giakm,mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo,type,masp from #_product where type='".$_GET["keyword"]."' and noibat>0 and hienthi=1 order by stt asc");
$thuviennb=get_result("select thumb,photo,ten$lang as ten,tenkhongdau,id,type,chucvu$lang as chucvu from #_news where type='thu-vien' and noibat>0 and hienthi=1 order by stt asc");
$tinnb=get_result("select mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo,type,ngaytao from #_news where type='tin-".$_GET["keyword"]."' and noibat>0 and hienthi=1 order by stt asc");
$c_tinnb = count($tinnb);
$video = get_result("select id,ten$lang as ten,link,photo,ngaytao from #_video where hienthi=1 and type='video-".$_GET["keyword"]."' order by stt asc");
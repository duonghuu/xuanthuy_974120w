<?php  if(!defined('_source')) die("Error");

	#Chi tiết bài viết
	$row_detail = get_fetch("select ten$lang as ten,noidung$lang as noidung,title,keywords,description,h1,h2,h3 from #_about where type='".$type."'");

	#Thông tin seo web
	$title_cat = (!empty($row_detail['ten']))?$row_detail['ten']:$title_cat;
    $bread->add($title_cat,'');
	$title = $row_detail['title'];$keywords = $row_detail['keywords'];$description = $row_detail['description'];
	$h1 = $row_detail['h1'];$h2 = $row_detail['h2'];$h3 = $row_detail['h3'];

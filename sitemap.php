<?php
		session_start();
		$session=session_id();
		@define ( '_lib' , './libraries/');

		include_once _lib."config.php";
		include_once _lib."functions.php";
		include_once _lib."functions_for.php";
		include_once _lib."class.database.php";
		include_once _lib."file_requick.php";
		$time_sitemap = time();
		function get_http(){
			$pageURL = 'http';
			if ($_SERVER["HTTPS"] == "on") {
				$pageURL .= "s";
			}
			$pageURL .= "://";
			return $pageURL;
		}
		function urlElement($url,$pri,$time) {
			global $config_url; 
			$url = get_http().$config_url.$url;
			$str_sitemap='<url>'; 
			$str_sitemap.='<loc>'.$url.'</loc>'; 
			$str_sitemap.='<lastmod>'.date("c",$time).'</lastmod>';
			$str_sitemap.='<changefreq>weekly</changefreq>'; 
			$str_sitemap.='<priority>'.$pri.'</priority>';
			$str_sitemap.='</url>';
			echo $str_sitemap;
		} 
		function CreateXML2($tbl='',$type='',$priority=1){
			global $d,$link_id;
			
			if($tbl=='') return false;
			$d->reset();
			$sql = "SELECT id,type,tenkhongdau,ngaytao FROM table_$tbl where type='".$type."' and hienthi=1 order by ngaytao desc";
			$d->query($sql);
			$result_data = $d->result_array();
			foreach ($result_data as $key => $v) { 
				if( !$link_id ){
					urlElement('/'.$v['tenkhongdau'],$priority,$v['ngaytao']);
					continue;
				}
				// if($link_id){
				// 	urlElement('/'.$v["type"].'/'.$v["tenkhongdau"].'-'.$v["id"].'.html',$priority,$v['ngaytao']);
				// }else{
				// 	urlElement('/'.$v['tenkhongdau'],$priority,$v['ngaytao']);
				// }
				if($tbl=='product'){
					if(!empty($v["tenkhongdau"])){
						urlElement('/'.$v["type"].'/'.$v["tenkhongdau"].'-'.$v["id"].'.html',$priority,$v['ngaytao']);
					}
				}else if($tbl=='product_danhmuc'){
					if(!empty($v["tenkhongdau"])){
						urlElement('/'.$v["type"].'/'.$v["tenkhongdau"].'-'.$v["id"],$priority,$v['ngaytao']);
					}
				}else if($tbl=='product_list'){
					urlElement('/'.$v["type"].'/'.$v["tenkhongdau"].'-'.$v["id"].'/',$priority,$v['ngaytao']);
				}else if($tbl=='product_cat'){
					urlElement('/'.$v["type"].'/'.$v["tenkhongdau"].'/'.$v["id"],$priority,$v['ngaytao']);
				}else if($tbl=='product_item'){
					urlElement('/'.$v["type"].'/'.$v["tenkhongdau"].'/'.$v["id"].'/',$priority,$v['ngaytao']);
				}
			}	
		}
		header("Content-Type: application/xml; charset=utf-8"); 
		echo '<?xml version="1.0" encoding="UTF-8"?>'; 
		echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'; 
		urlElement('','1.0',$time_sitemap); 
		foreach ($datacom as $k => $v) {
			$priority = $v['field']=='id' ? "1.0" : "0.8";
			if($v['field']=='id'){
				if($link_id){
					urlElement('/'.$v['com'].'.html',$priority,$time_sitemap); 
				}else{
					urlElement('/'.$v['com'],$priority,$time_sitemap); 
				}
			}
			if($v['tbl']!='about'){
				CreateXML2($v['tbl'],$v['type'],$priority);
			}
		}
		echo '</urlset>'; 
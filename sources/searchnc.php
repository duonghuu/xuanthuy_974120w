<?php  if(!defined('_source')) die("Error");
$id_danhmuc = (int)$_GET["id_danhmuc"];
$id_khoanggia = (string)magic_quote(trim(strip_tags($_GET['id_khoanggia'])));
$id_dientich = (string)magic_quote(trim(strip_tags($_GET['id_dientich'])));
$id_huong = (int)$_GET["id_huong"];

$a_khoanggia = explode('-', $id_khoanggia);
$a_dientich = explode('-', $id_dientich);

$where = " type='".$type."' and hienthi=1 ";
if($id_huong > 0) $where .= " and id_huong='".$id_huong."'";
if($id_khoanggia != "") $where .= " and (gia between ".$a_khoanggia[0]." and ".$a_khoanggia[1].")";
if($id_dientich != "") $where .= " and (dientich between ".$a_dientich[0]." and ".$a_dientich[1].")";
if($id_danhmuc > 0) $where .= " and id_danhmuc='".$id_danhmuc."'";
$where .= " order by stt asc";

// $dem = get_fetch("SELECT count(id) AS numrows FROM #_product where $where");
// $totalRows = $dem['numrows'];
// $page = $_GET['p'];
// $pageSize = $company['soluong_sp'];
// $offset = 5;
// if ($page == "")$page = 1;
// else $page = $_GET['p'];
// $page--;
// $bg = $pageSize*$page;

// $product = get_result("select *,ten$lang as ten,mota$lang as mota from #_product where $where limit $bg,$pageSize");
// $url_link = getCurrentPageURL();
$duannb = get_result("select toado,mota$lang as mota,ten$lang as ten,tenkhongdau,id,thumb,photo,type,id_huong,dientich,mattien,gia,spmoi,nhasanxuat from #_product where $where");

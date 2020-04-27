<?php  if(!defined('_source')) die("Error");
$a_danhmuc = array();
@$id_danhmuc = (int)trim(strip_tags(addslashes($_GET['id_danhmuc'])));
if($id_danhmuc > 0)
{
  $title_bar = get_fetch("select id,ten$lang as ten,type,tenkhongdau,title,keywords,description,h1,h2,h3,mota$lang as mota,noidung$lang as noidung,thumb,photo FROM #_news where id=".$id_danhmuc." limit 0,1");
  if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}
  $a_danhmuc["id_danhmuc"] = $title_bar["id"];
  $a_danhmuc["id_list"] = "";
  $title_cat = $title_bar['ten']; $mota = $title_bar['mota']; $noidung = $title_bar['noidung'];
  $title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
  $h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];
  $bread->add($title_cat,'');

  $where = " type='".$type."' and thuonghieu=".$title_bar['id']." and hienthi=1 ";
}
$where .= " order by stt,id desc";
$dem = get_fetch("SELECT count(id) AS numrows FROM #_product where $where");

$totalRows = $dem['numrows'];
$page = $_GET['p'];
if($id > 0){
  $pageSize = $company['soluong_spk'];
}
else{
  $pageSize = $company['soluong_sp'];
}
$offset = 5;
if ($page == "")$page = 1;
else $page = $_GET['p'];
$page--;
$bg = $pageSize*$page;

$product = get_result("select *,mota$lang as mota,id,ten$lang as ten,tenkhongdau FROM #_product where $where limit $bg,$pageSize");
$url_link = getCurrentPageURL();

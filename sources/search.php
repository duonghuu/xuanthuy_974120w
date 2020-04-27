<?php  if(!defined('_source')) die("Error");
	$keyword = (string)$_GET['keyword'];
	$danhmuc = (int)$_GET['danhmuc'];
	if($keyword!=''){
		$tukhoa = trim(strip_tags($keyword));
		
		// $where = " (ten$lang LIKE '%$tukhoa%' or masp LIKE '%$tukhoa%') and type='".$type."' and hienthi=1 ";
		$where = " ((ten$lang LIKE '%$tukhoa%')) and type='".$type."' and hienthi=1 ";
		if($danhmuc > 0)
			$where .= " and id_danhmuc='".$danhmuc."'";
		$where .= " order by stt,id desc";

		#Lấy sản phẩm và phân trang
		$dem = get_fetch("SELECT count(id) AS numrows FROM #_product where $where");

		$totalRows = $dem['numrows'];
		$page = $_GET['p'];
		$pageSize = $company['soluong_sp'];//Số item cho 1 trang
		$offset = 5;//Số trang hiển thị
		if ($page == "")$page = 1;
		else $page = $_GET['p'];
		$page--;
		$bg = $pageSize*$page;

		$product = get_result("select *,ten$lang as ten,mota$lang as mota from #_product where $where limit $bg,$pageSize");
		$url_link = getCurrentPageURL();
	}
?>

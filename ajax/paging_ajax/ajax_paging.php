<?php

	include ("../ajax_config.php");
	include_once "class_paging_ajax.php";
    $page = (int)$_POST["page"];
    $id_danhmuc = (int)$_POST["id_danhmuc"];
	if(!empty($page))
    {
		$paging = new paging_ajax();

		$paging->class_pagination = "pagination";
		$paging->class_active = "active";
		$paging->class_inactive = "inactive";
		$paging->class_go_button = "go_button";
		$paging->class_text_total = "total";
		$paging->class_txt_goto = "txt_go_button";
		$paging->per_page = 8;
		$paging->page = $_POST["page"];
        $paging->text_sql = "select id,ten$lang as ten,tenkhongdau,photo,type,thumb,giakm,gia from table_product where hienthi=1 and noibat>0 ";
        if($id_danhmuc>0){
            $paging->text_sql .= " and id_danhmuc='".$id_danhmuc."' ";    
        }
		$paging->text_sql .= " order by stt asc";
		$product = $paging->GetResult();
		$message = '';
		$paging->data = "".$message."";
    }
    $result["spthem"] = "";
    $result["morebtn"] = "";
?>

<?php foreach($product as $key=>$value){    
    $link = get_url($value,'san-pham');
    $giasp = ($value["giakm"]>0)?$value["giakm"]:$value["gia"];
    $gia = ($giasp>0)?num_format($giasp).'đ':_lienhe;
    $s_gia = "";
    if($value["giakm"]>0) {
        $s_gia .= '<span>'.num_format($value["giakm"]).'đ</span>';
        $s_gia .= '<del>'.num_format($value["gia"]).'đ</del>';
        
    }else{
        $s_gia .= '<span>'.$gia.'</span>';
    }
    $result["spthem"] .= '<div class="pr-box name "><article><a href="'.$link.'" class="imgsp hover_sang1"><img class="lazy" data-src="'._upload_sanpham_l.$value["thumb"].'" alt="'.$value["ten"].'">'.$cls_banchay.$giaspgiam.'</a> <div class="info"><h3><a class="line-clamp" href="'.$link.'">'.$value["ten"].'</a></h3><p>'.$s_gia.'</p></div></article></div>';
    
} 
?>
<?php /* <?=$paging->Load(); ?> */?>
<?php 
$result["morebtn"] = $paging->Load();
echo json_encode($result);
 ?>

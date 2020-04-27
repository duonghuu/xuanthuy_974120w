<?php
	include ("ajax_config.php");
	$danhmuc = $_POST['danhmuc'];
	$join_listid = $_POST['join_listid'];

	$arr_id2a = explode(',', $join_listid);
    $mang_tam = array();
    $where = "";

    foreach ($arr_id2a as $key => $value1) {
	  	$chia = explode('_', $value1);
	  	$mang_tam[$chia[0]][$key]=$chia[1];
	}

	foreach ($mang_tam as $key => $value) {

		$where.= " and (";

		$i = 0;

		foreach($value as $k=>$v)
		{

			if($i>0){
				$where.= " or ";
			}

			$i++;

			$where.=" FIND_IN_SET(".$v.",thuoctinh_list)>0 ";
			
		}
			$where.=" )";
		}
	
	$d->reset();
	if($join_listid!="") {
		$sql = "select id,ten$lang as ten,tenkhongdau,thumb,photo,masp,gia,giakm,type,mota$lang as mota,luotxem
     from #_product where hienthi=1 and id_danhmuc=".$danhmuc." $where order by stt,id desc";
	}
	else {
		$sql = "select id,ten$lang as ten,tenkhongdau,thumb,photo,masp,gia,giakm,type,mota$lang as mota,luotxem
     from #_product where hienthi=1 and id_danhmuc=".$danhmuc." order by stt,id desc";
	}
	$d->query($sql);
	$product = $d->result_array();
	//echo $sql;
?>
<?php foreach($product as $k=>$v){	
  $link = get_url($v,'san-pham');
  $giaspgiam = ($v["giakm"]>0)?'<span class="giam">-'.tinh_phantram($v["gia"],$v["giakm"]).
  '%</span>':"";
  // $cls_moi = ($v["spmoi"]>0)?'<i class="new">new</i>':"";
  // $cls_banchay = ($v["spbanchay"]>0)?'<i class="sale"></i>':"";
  $giasp = ($v["giakm"]>0)?$v["giakm"]:$v["gia"];
  $gia = ($giasp>0)?num_format($giasp).' vnđ':_lienhe;
  $s_gia = "";
  if($v["giakm"]>0) {
    
    $s_gia .= '<span>'.num_format($v["giakm"]).' vnđ</span>';
    $s_gia .= '<del>'.num_format($v["gia"]).' vnđ</del>';
  }else{
    $s_gia .= '<span>'.$gia.'</span>';
  }
  // $danhgiasao = get_result("select ROUND(AVG(giatri)) as giatri FROM #_danhgiasao 
  // where id_sanpham='".$v["id"]."' order by time desc");
  // if($danhgiasao[0]['giatri']==0){$num_danhgiasao=0;}
  // else{$num_danhgiasao=$danhgiasao[0]['giatri'];};
  // $linkct="";
  // $prostar='';
  // for($i=1;$i<=5;$i++) { 
    
  //  if($i<=$danhgiasao[0]['giatri']){
  //    $prostar .='<i class="fas active fa-star"></i>';
  //  }else{
  //    $prostar .='<i class="fas fa-star"></i>';
  //  }
  // }
  $imgurl='<img src="'._upload_sanpham_l.$v["thumb"].'" alt="'.$v["ten"].
  '" />';
  $slickdiv=$slickenddiv="";
  $wowclass='';
  // $linkct= '<a href="'.$link.'" class="chitietnt" >Xem chi tiết</a>';
  // $linkct .= '<a href="#" data-id="'.$v["id"].'" class="dathang">
  // <i class="fas fa-shopping-cart"></i> Đặt hàng</a>';
  $linkct = '<a href="#" data-id="'.$v["id"].'" class="dathang">
  <i class="fas fa-shopping-cart"></i></a>';
  echo $slickdiv.'<div class="pr-box name '.$wowclass.'" >
  <article>
      <a href="'.$link.'" class="imgsp zoom_hinh">'.$imgurl.$cls_moi.$cls_banchay.
      $giaspgiam.'</a> 
    <div class="info">
    <h3><a href="'.$link.'">'.$v["ten"].'</a></h3>
    <div class="price-wrap">
      <p>'.$s_gia.'</p>
      '.$linkct.'
    </div>
    </div>
  </article></div>'.$slickenddiv;
  ?>
<?php } ?>

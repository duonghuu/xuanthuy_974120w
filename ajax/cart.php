<?php
	include ("ajax_config.php");

	$act =  (string)magic_quote(trim(strip_tags($_POST['act'])));

	switch($act){
		case "dathang":
			order();
			break;
		case "delete":
			delete();
			break;
		case "update":
			update();
			break;
		case "tinhship":
			tinhship();
			break;
		case "coupon":
			coupon();
			break;
		default:
			break;
	}

	function order()
	{
		global $d;
		$id = (int) $_POST['id'];
		$size = (string)magic_quote(trim(strip_tags($_POST['size'])));
		$mausac = (string)magic_quote(trim(strip_tags($_POST['mausac'])));
		$soluong = (int)$_POST['soluong'];

		addtocart($id,$size,$mausac,$soluong);

		$row_detail = get_fetch("select id,ten$lang as ten,masp,type,photo,thumb,gia,giakm FROM #_product where id='$id'");

		$return['thongbao'] = _sanphamthemvaogiohang.'.<br /><a class="xemgiohang" href="gio-hang.html">'._xemgiohang.'</a>';
		$link = get_url($row_detail,'san-pham');
		$img = _upload_sanpham_l.$row_detail["thumb"];
		$giasp = ($row_detail["giakm"]>0)?$row_detail["giakm"]:$row_detail["gia"];
		$gia = ($giasp>0)?num_format($giasp).'đ':_lienhe;
		$s_gia = "";
		if($row_detail["giakm"]>0) {
			
			$s_gia .= '<span>'.num_format($row_detail["giakm"]).'đ</span>';
			$s_gia .= '<del>'.num_format($row_detail["gia"]).'đ</del>';
		}else{
			$s_gia .= '<span>'.$gia.'</span>';
		}
		$return['thongtin'] = '<div class="giohang-left-cont-flex">
            <div class="giohang-left-img">
              <a href="'.$link.'" target="_blank">
                <img src="'.$img.'" alt="'.$row_detail["ten"].'">
              </a>
            </div>
            <div class="giohang-left-info">
              <div class="giohang-left-protit">
                '.$row_detail["ten"].'
              </div>';
    if(!empty($row_detail["masp"])){
    	$return['thongtin'] .= '<div class="giohang-left-promasp">
    	  '.__masp.':  '.$row_detail["masp"].'
    	</div>';
    }
    $return['thongtin'] .= '<div class="giohang-left-proprice">
                '.$s_gia.'
              </div></div>
            </div>';
 		$return['ok'] = '';
		$return['sl'] = count($_SESSION['cart']);
		$tongtien = get_order_total();
		$return['tongtien'] = num_format($tongtien).'đ';
		echo json_encode($return);
	}

	function delete()
		{
			global $d;
			$id = (int)$_POST['id'];
			$size = (int)$_POST['size'];
			$mausac = (int)$_POST['mausac'];
			remove_product($id,$size,$mausac);
			$return['tongtien'] = number_format(get_order_total(),0, ',', '.').' đ';
			$return['sl'] = count($_SESSION['cart']);
			echo json_encode($return);
		}

	function update()
	{
		global $d;
		$soluong = (int)$_POST['soluong'];
		$vitri = (int)$_POST['vitri'];
		$id = (int)$_POST['id'];

		$_SESSION['cart'][$vitri]['qty'] = $soluong;

		$return['tonggia'] = number_format(get_price($id)*$soluong,0, ',', '.').' đ';
		$return['tongtien'] = number_format(get_order_total(),0, ',', '.').' đ';

		echo json_encode($return);
	}
	function tinhship()
	{
		global $d;
		$id = (int)$_POST['id'];
		// $tong_gia = (string)$_POST['tong_gia'];
		$rs_ship = get_fetch("select gia from table_place_dist where id='".$id."'");
		$phiship=$rs_ship['gia'];
		$tonggia=get_order_total()+$phiship;
		$return['price_ship'] = $phiship;
		$return['tonggia'] = $tonggia;
		echo json_encode($return);	
	}
	function coupon()
	{
		global $d;
		$id = (string)$_POST['id'];
		// $tong_gia = (string)$_POST['tong_gia'];
		$rs_ship = get_fetch("select gia from table_news where type='coupon' and ten='".$id."'");
		$phiship=$rs_ship['gia'];
		$tonggia=get_order_total()-$phiship;
		$return = array();
		if($phiship > 0){

			$return['price_coupon'] = $phiship;
			$return['code_coupon'] = $id;
			$return['tonggia'] = $tonggia;
		}
		echo json_encode($return);	
	}
?>

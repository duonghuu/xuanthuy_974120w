<?php 
	include ("ajax_config.php");
	insert_comment();
	
function insert_comment(){
		global $d;
		$data['product_id'] = (int)$_POST['product_id'];
		$data['parent_id'] = (int)$_POST['parent_id'];
		$data['lang'] = $lang;
		$data['ten'.$lang] = (string)magic_quote(trim(strip_tags($_POST['ten'])));
		$data['email'] = (string)magic_quote(trim(strip_tags($_POST['email'])));
		$data['mota'] = (string)magic_quote(trim(strip_tags($_POST['mota'])));
		$data['type'] = (string)magic_quote(trim(strip_tags($_POST['type'])));
		$data['hienthi'] = 0;
		$data['ngaytao'] = time();
		
		$d->setTable('comment');
		if($d->insert($data)){
			$return['thongbao'] = _binhluanthanhcong;
			$return['nhaplai'] = 'nhaplai';
		}
		else
		{
			$return['thongbao'] = _hethongloi;
			$return['nhaplai'] = '0';
		}
		
	echo json_encode($return);
}

?>

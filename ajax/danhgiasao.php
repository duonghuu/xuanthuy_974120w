<?php 

	include ("ajax_config.php");
	
	$data['giatri'] = (int)$_POST['giatri'];
	$data['id_sanpham'] = (int)$_POST['idsp'];
	$data['link'] = (string)$_POST['url'];
	$data['code'] = (string)$session;
	$data['time'] = (int)time();
	
	$d->reset();
	$sql = "select time from #_danhgiasao where id_sanpham='".$data['id_sanpham']."' and code='".$session."' order by time desc limit 0,1";		
	$d->query($sql);
	$kiemtra = $d->fetch_array();	
		
	if(time() < $kiemtra['time']+86400)
	{
		echo 2;exit;
	}
	
	$d->setTable('danhgiasao');
	
	if($d->insert($data)){
		echo 1;
	}else{
		echo 0;
	}
	
?>

<?php
	session_start();
	$session=session_id();

	@define ( '_source' , '../sources/');
	@define ( '_lib' , '../libraries/');
	

	
	include_once _lib."config.php";
	require_once _source."lang$lang.php";
	include_once _lib."Mobile_Detect.php";
	$detect = new Mobile_Detect;
	$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
	include_once _lib."constant.php";
	include_once _lib."functions.php";
	include_once _lib."functions_for.php";
if (version_compare(phpversion(), '7.0.0', '<')) include_once _lib."class.database.php";
else include_once _lib."class.database7.3.php"; 
	include_once _lib."functions_user.php";
	include_once _lib."functions_giohang.php";
	include_once _lib."file_requick.php";
?>

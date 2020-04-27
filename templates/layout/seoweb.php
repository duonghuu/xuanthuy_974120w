<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="theme-color" content="#ffffff">
<meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="//www.google.com/">
<link rel="dns-prefetch" href="//code.jquery.com/">
<link rel="dns-prefetch" href="//stackpath.bootstrapcdn.com/">
<link rel="SHORTCUT ICON" href="<?=_upload_hinhanh_l.$company['favicon']?>" type="image/x-icon" />
<META NAME="ROBOTS" CONTENT="<?=$meta_robots?>" />
<meta name="author" content="<?=$company['ten']?>" />
<meta name="copyright" content="<?=$company['ten']?> [<?=$company['email']?>]" />
<!--Meta seo web-->
<title><?php if($title!='')echo $title;else echo $company['title'];?></title>
<meta name="keywords" content="<?php if($keywords!='')echo $keywords;else echo $company['keywords'];?>" />
<meta name="description" content="<?php if($description!='')echo $description;else echo $company['description'];?>" />
<!--Meta seo web-->
<!--Meta Geo-->
<meta name="DC.title" content="<?php if($title!='')echo $title;else echo $company['title'];?>" />
<meta name="geo.region" content="VN" />
<meta name="geo.placename" content="<?=$company['diachi']?>" />
<meta name="geo.position" content="<?=str_replace(',',':',$company['toado'])?>" />
<meta name="ICBM" content="<?=$company['toado']?>" />
<meta name="DC.identifier" content="<?=$config_url_ssl?>/" />
<!--Meta Geo-->

<!--Meta facebook-->
<meta property="og:image" content="<?php if($images_facebook!='')echo $images_facebook;else echo $config_url_ssl.'/thumb/200x200/2/'._upload_hinhanh_l.$logolang['photo'];?>" />
<meta property="og:title" content="<?php if($title_facebook!='')echo $title_facebook;else echo $company['title'];?>" />
<meta property="og:image:alt" content="<?php if($title_facebook!='')echo $title_facebook;else echo $company['title'];?>" />
<meta property="og:url" content="<?php if($url_facebook!='')echo $url_facebook;else echo getCurrentPageURL();?>" />
<meta property="og:description" content="<?php if($description_facebook!='')echo $description_facebook;else echo $company['description'];?>" />
<meta property="og:type" content="<?= $type_og ?>" />
<meta property="og:site_name" content="<?=$company['ten']?>" />
<link rel="canonical" href="<?=getCurrentPageURL();?>" />
<?php if($config['reponsive']==true) { ?>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<?php } else { ?>
<meta name="viewport" content="width=1300">
<?php } ?>
<!--Meta facebook-->
     

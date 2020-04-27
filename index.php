<?php
session_start();
$session=session_id();

@define ( '_template' , './templates/');
@define ( '_source' , './sources/');
@define ( '_lib' , './libraries/');
include_once _lib."breadcrumb.php";
$bread = new breadcrumb();
include_once _lib."Mobile_Detect.php";
$detect = new Mobile_Detect;
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
include_once _lib."config.php";
include_once _lib."constant.php";
require_once _source."lang$lang.php";
$bread->add(_trangchu,'//'.$config_url);
include_once _lib."functions.php";
include_once _lib."functions_for.php";
include_once _lib."class.database.php";
// if (version_compare(phpversion(), '7.0.0', '<')) include_once _lib."class.database.php";
// else include_once _lib."class.database7.3.php"; 
include_once _lib."functions_user.php";
include_once _lib."functions_giohang.php";
include_once _lib."file_requick.php";
include_once _source."template.php";
include_once _source."counter.php";
$_SESSION['dong'] = lay_banner('dong');
?>
<!doctype html>
<html lang="<?php if($lang=='')echo 'vi';else echo $lang;?>">
<head itemscope itemtype="https://schema.org/WebSite">
    <base href="//<?=$config_url?>/" />
    <?php include _template."layout/seoweb.php";?>
    <?php include _template."layout/css.php";?>
    <?php /* <style><?php echo file_get_contents('http://'.$config_url.'/css_optimize.php');?></style> */?>
    <?= $company['codethem'] ?>
</head>
<?php //include _template."layout/background.php";?>
<body class="cls<?= $template ?>" <?=$str_background?> >
    <?php /* <div class="wap_load"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div>
    <div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div>
    <div class="cssload-cube cssload-c3"></div></div></div> */
    if($template != "checkouts"){
    ?>
    <div id="wapper"  >
        <section class="head-main">
            <?php 
            include _template."layout/header.php";
            include _template."layout/menu_top.php";
            // include _template."layout/valak_menu.php";
            include _template."layout/slider.php";
            if($source != "index") echo $bread->display();
            ?>
            <div class="main_content <?php if($source!="index") echo 'container';  ?>">
                <?php if($template == 'productxx') {  ?>
                    <div class="clearfix">
                        <div class="left">
                            <?php include _template."layout/left.php";?>
                        </div><!---END .left-->
                        <div class="right">
                            <?php include _template.$template."_tpl.php"; ?>
                        </div><!---END .right-->
                    </div>
                <?php }else{ ?>
                    <?php include _template.$template."_tpl.php"; ?>
                <?php } ?>
            </div><!---END .main_content-->
        </section>
        <?php 
        include _template."layout/footer.php";
        ?>
    </div><!---END .wapper-->
    <?php 
    // include _template."layout/pupop.php";
    //include _template."layout/facebook.php";
    //include _template."layout/phone.php";
    //include _template."layout/chat_facebook.php";
    // include _template."layout/cart_popup.php";
    // if($deviceType=="computer") include _template."layout/phone3.php";
    // include _template."layout/phone2.php";
}else{
    include _template.$template."_tpl.php";
}

    include _template."layout/js.php";
    ?>
    <?=$company['codethem2']?>
</body>
</html>
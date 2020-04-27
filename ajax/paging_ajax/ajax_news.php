<?php
    include ("../ajax/ajax_config.php");
    include_once "class_paging_ajax.php";
    $page = (int)$_POST["page"];
    if(!empty($page))
    {
        $paging = new paging_ajax();

        $paging->class_pagination = "pagination";
        $paging->class_active = "active";
        $paging->class_inactive = "inactive";
        $paging->class_go_button = "go_button";
        $paging->class_text_total = "total";
        $paging->class_txt_goto = "txt_go_button";
        $paging->per_page = 10;
        $paging->page = $_POST["page"];
        $paging->text_sql = "select mota$lang as mota,ten$lang as ten,chucvu,tenkhongdau,id,thumb,photo,type,ngaytao from table_news where hienthi=1 and type='thong-tin' and noibat>0 order by stt asc";
        $product = $paging->GetResult();
        $message = '';
        $paging->data = "".$message."";
    }
    $result["spthem"] = "";
    $result["morebtn"] = "";
?>

<?php foreach($product as $key=>$value){  
    $img = _upload_tintuc_l.$value["thumb"];
    $link = get_url($value);
    $ngay = date('d',$value["ngaytao"]).' tháng '.date('M, y',$value["ngaytao"]);
    $result["spthem"] .= '<div class="thongtin-item">
        <article><a href="'.$link.'" class="imgsp"><img src="'.$img.'" alt="'.$value["ten"].'"></a><div class="info">
            <h3><a href="'.$link.'" class="line-clamp">'.$value["ten"].'</a></h3>
            <div class="post-d"><span><i class="fas fa-calendar-alt"></i> '.$ngay.'</span><span><i class="fas fa-user"></i> '.$value["chucvu"].'</span></div>
            <div class="desc line-clamp">'.$value["mota"].'</div>
            <a href="'.$link.'" class="xem">Xem chi tiết <i class="fas fa-long-arrow-alt-right"></i></a>
        </div></article>
    </div>';
} ?>
<?php /* <?=$paging->Load(); ?> */?>
<?php 
$result["morebtn"] = $paging->Load();
echo json_encode($result);
 ?>

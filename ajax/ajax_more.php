<?php
include ("ajax_config.php");
$id = (int)$_POST['id'];
$itemshow = (int)$_POST['itemshow'];
if(!empty($id)){

    
    
    // Count all records except already displayed
    $row = get_fetch("SELECT COUNT(*) as num_rows FROM table_product WHERE type='san-pham' and tieubieu>0 and hienthi=1 and  id < ".$id." ORDER BY id DESC");
    $totalRowCount = $row['num_rows'];
    
    $showLimit = $itemshow;
    
    // Get records from the database
    $query = get_result("SELECT * FROM table_product WHERE type='san-pham' and tieubieu>0 and hienthi=1 and  id < ".$id." ORDER BY id DESC LIMIT $showLimit");
    $result["spthem"] = "";
    $result["morebtn"] = "";
    if(!empty($query)){ 
        foreach($query as $k=>$v){
            $postID = $v['id'];
            $link = get_url($v);
            $giaspgiam = ($v["giakm"]>0)?'<span class="giam">-'.tinh_phantram($v["gia"],$v["giakm"]).'%</span>':"";
            $giasp = ($v["giakm"]>0)?$v["giakm"]:$v["gia"];
            $gia = ($giasp>0)?num_format($giasp).'đ':_lienhe;
            $s_gia = "";
            if($v["giakm"]>0) {
                $s_gia .= '<span>'.num_format($v["giakm"]).'đ</span>';
                $s_gia .= '<del>'.num_format($v["gia"]).'đ</del>';
            }else{
                $s_gia .= '<span>'.$gia.'</span>';
                $s_gia .= '<del></del>';
            }
            $result["spthem"] .= '<div class="pr-box name "> <article> <a href="'.$link.'" class="imgsp hover_sang1"><img class="" src="'._upload_sanpham_l.$v["thumb"].'" alt="'.$v["ten"].'">'.$cls_banchay.$giaspgiam.'</a> <div class="info"><h3><a href="'.$link.'">'.$v["ten"].'</a></h3><div class="price_info"><p>'.$s_gia.'</p><a href="javascript:;" class="dathang" data-id="'.$v["id"].'">Mua ngay</a></div></div></article> </div>';
         } ?>
    <?php if($totalRowCount > $showLimit){ 
        $result["morebtn"] = '<div class="show_more_main" id="show_more_main'.$postID.'">
            <span data-itemshow="'.$showLimit.'" id="'.$postID.'" class="show_more" title="Load more posts">'._xemthem.' ('.($totalRowCount - $showLimit).' '._sanphamkhac.')'.'</span>
            <span class="loding" style="display: none;"><span class="loding_txt">Loading...</span></span>
        </div>';
         } ?>
<?php
    }
    echo json_encode($result);
}
?>
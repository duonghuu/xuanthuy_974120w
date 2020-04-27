<?php 
@$id_danhmuc = (int)trim(strip_tags(addslashes($_GET['id_danhmuc'])));
$rs = get_result("select id_pro from table_protag where id_tag='".$id_danhmuc."'");
if(!empty($rs)) {
 $str_loc = implode(',', array_map(function($x) { return $x['id_pro']; }, $rs));
}
$product = get_result("select ten$lang as ten,tenkhongdau,id,type,thumb,photo,gia,giakm from #_product where (id in (".$str_loc.")) and hienthi=1 and type='san-pham' order by stt,id desc");
 ?>
<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="product-grid">
    <?php foreach ($product as $k => $v) { 
            showProduct($v);
    } ?>
</div>
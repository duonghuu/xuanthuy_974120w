<div class="tieude_giua"><div><?=_tuyendung?></div></div>
<?php 
$listtuyendung = get_result("select ten$lang as ten,id,tenkhongdau,noidung$lang as noidung,type from table_news where type='tuyen-dung' and hienthi>0 order by stt");
 ?>
<div class="career-flex">
<?php foreach ($listtuyendung as $key => $value) {
        $ac = ($value["id"] == $id)?"active":(($id=="" && $key==0)?"active":"");
    echo '<h5><a class="'.$ac.'" href="'.get_url($value).'"><i class="fas fa-chevron-right"></i> '.$value["ten"].'</a></h5>';    
    
} ?>
    
</div>
<div class="box_container">
    <div class="content">
        <?=($id!="")?$row_detail['noidung']:$listtuyendung[0]["noidung"]?>
        </div>
    </div>
<div class="tieude_giua"><?=$title_cat?></div>
<div class="wap_box_new">
    <?php foreach($tintuc as $k => $v) { ?>
        <div class="box_news">
            <a href="<?=$v['type']?>/<?=$v['tenkhongdau']?>-<?=$v['id']?>.html" title="<?=$v['ten']?>"><img src="<?php if($v['thumb']!=NULL)echo _upload_tintuc_l.$v['thumb'];else echo 'images/noimage.png';?>" alt="<?=$v['ten']?>" /></a>      
            <h3><a href="<?=$v['type']?>/<?=$v['tenkhongdau']?>-<?=$v['id']?>.html" title="<?=$v['ten']?>"><?=$v['ten']?></a></h3>
            <p class="ngaytao"><i class="fa fa-calendar" aria-hidden="true"></i><?=make_date($v['ngaytao'])?><span><i class="fa fa-eye" aria-hidden="true"></i><?=_luotxem?>: <?=$v['luotxem']?></span></p>
            <div class="mota"><?=$v['mota']?></div>  
            <div class="clear"></div>         
        </div><!---END .box_new--> 
    <?php } ?>
</div><!---END .wap_box_new-->
<div class="clear"></div>
<div class="phantrang" ><?=$paging['paging']?></div>
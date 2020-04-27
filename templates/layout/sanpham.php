<div class="item">
		<p class="sp_img zoom_hinh hover_sang1"><a href="<?=$v['type']?>/<?=$v['tenkhongdau']?>-<?=$v['id']?>.html" title="<?=$v['ten']?>">
		<img src="<?php if($v['thumb']!=NULL) echo _upload_sanpham_l.$v['thumb']; else echo 'images/noimage.png';?>" alt="<?=$v['ten']?>" /></a></p>
		<h3 class="sp_name"><a href="<?=$v['type']?>/<?=$v['tenkhongdau']?>-<?=$v['id']?>.html" title="<?=$v['ten']?>" ><?=$v['ten']?></a></h3>
		<p class="sp_gia">
				<span class="gia <?php if($v['giakm']>0)echo 'giacu'?>"><?php if($v['giakm']<=0)echo _gia.': '?><?php if($v['gia']>0)echo number_format($v['gia'],0, ',', '.').' vnđ';else echo _lienhe;?></span>
				<span class="giakm"><?php if($v['giakm']>0) echo number_format($v['giakm'],0, ',', '.').' vnđ';?></span>
		</p>
</div><!---END .item-->

<?php 
$huong=get_fetch("select ten from table_news where id='".$row_detail["id_huong"]."'");
$tinhtrang=($row_detail["spmoi"]==0)?'Chưa bán':'Đã bán';
$gia=convert_number_to_string($row_detail["gia"]);
 ?>
<div class="duan-detail-head">
    <div class="container">
    <div class="duan-padding">
        
            <div class="mota"><?= $row_detail["mota"] ?></div>
            <h1><?= $row_detail["ten"] ?></h1>
            
            <div class="fl-line1">
                <span><img src="images/i-phongngu.png" alt="phongngu"> <?= $row_detail["nhasanxuat"] ?></span>
                <span><img src="images/i-wc.png" alt="wc"> <?= $row_detail["mattien"] ?></span>
                <span><img src="images/i-dientich.png" alt="dientich"> <?= $row_detail["dientich"] ?></span>
                <span><img src="images/i-huong.png" alt="huong"> <?= $huong["ten"] ?></span>
            </div>
            <div class="fl-line2">
                <span><img src="images/i-gia.png" alt="gia"> <?= $gia ?></span>
                <span><img src="images/i-tinhtrang.png" alt="tinhtrang"> <?= $tinhtrang ?></span>
                <a href="tel:<?=preg_replace('/[^0-9]/','',$company['dienthoai']);?>"><img src="images/call.png" alt="call"> <?= $company['dienthoai'] ?></a>
            </div>
    </div>
    </div>
</div>
<div class="duan-detail-body">
    <div class="container">
    <div class="duan-padding">
        <div class="content">
            <?= $row_detail["noidung"] ?>
        </div>
    </div>
    </div>
</div>
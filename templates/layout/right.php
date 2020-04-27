<div class="chaysp danhmuc">

 <div class="tieude">Đối tác khách hàng</div>
 <div class="danhmuc-box">
    <ul class="right-link"><?php foreach ($khachhang as $key => $value) {
        echo '<li><a href="'.get_url($value).'">'.$value["ten"].'</a></li>';
    } ?>
    </ul>
</div>
</div>

<div class="chaysp danhmuc">

 <div class="tieude">Liên kết website</div>
 <div class="danhmuc-box">
    <ul class="right-link"><?php foreach ($lkweb as $key => $value) {
        echo '<li><a href="'.$value["link"].'">'.$value["ten"].'</a></li>';
    } ?>
    </ul>
</div>
</div>
<div class="web-slider-main clearfix">
    <?= lay_slider('quang-cao2','qc-item') ?>
</div>
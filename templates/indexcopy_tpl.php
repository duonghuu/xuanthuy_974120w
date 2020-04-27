<div class="spnoibat-bg lazy" data-bg="url(images/spnoibat-bg.jpg)">

    <div class="pharaon-tit">
        <img src="images/text-phara.png" alt="pharaon">
        <strong>Hot !</strong>
    </div>

    <div class="product-grid">
        <?php foreach ($spnoibat as $key => $value) {
            $link=get_url($value,'san-pham');
            $img=_upload_sanpham_l.$value["photo"];
            $giasp = ($value["giakm"]>0)?$value["giakm"]:$value["gia"];
            $gia = ($giasp>0)?num_format($giasp).'đ':_lienhe;
            $s_gia = "";
            if($value["giakm"]>0) {
                
                $s_gia .= '<span>'.num_format($value["giakm"]).'đ</span>';
                $s_gia .= '<del>'.num_format($value["gia"]).'đ</del>';
            }else{
                $s_gia .= '<span>'.$gia.'</span>';
            }
            echo '<div class="phong-item zoom_hinh"><article><a class="imgsp" href="'.$link.'">
<img src="'.$img.'" alt="'.$value["ten"].'"><h3>'.$value["ten"].'</h3></a>
<div class="info">
    <div class="info-box">
        <h3>'.$value["ten"].'</h3>
        <p>Giá: '.$s_gia.'</p>
        <div class="line-clamp desc">'.$value["mota"].'</div>
        <div class="pr-tools">
            <a href=""><i class="fas fa-eye"></i></a>
            <a href=""><i class="fas fa-bars"></i></a>
            <a href=""><i class="fas fa-check"></i></a>
        </div>
    </div>
</div>
            </article></div>';
        } ?>
    </div>
</div>
<div class="menudichvu-bg lazy" data-bg="url(images/menu-bg.jpg)">
    <div class="container">

        <div class="menudichvu-box">
            
            <?php if(!empty($mnkara)){ ?>
            <div class="menudichvu-flex">
                <?php foreach ($mnkara as $key => $value) {
                    if($key>1) break; 
                    $img=_upload_hinhthem_l.$value["photo"];
                echo '<a data-fancybox="gallery27" href="'.$img.'"> <figure><img class="img-fill lazy" data-src="'.$img.'" alt="karaoke pharaon"></figure> </a>';    
                } ?>
            </div>
            <?php } ?>
            <div class="menudichvu-head">
                <h4>Menu</h4>
                <h5>karaoke pharaon</h5>
                <div class="img"><img src="images/pharaon.png" alt="pharaon"></div>
            </div>
            <?php if(count($mnkara)>2){ ?>
            <div class="menudichvu-flex">
                <?php foreach ($mnkara as $key => $value) {

                    if($key<2) continue; 
                    if($key>3) break; 
                    $img=_upload_hinhthem_l.$value["photo"];
                echo '<a data-fancybox="gallery27" href="'.$img.'"> <figure><img class="img-fill lazy" data-src="'.$img.'" alt="karaoke pharaon"></figure> </a>';    
                } ?>
            </div>
            <?php } ?>
            <?php foreach ($mnkara as $key => $value) {
                if($key<4) continue; 
                $img=_upload_hinhthem_l.$value["photo"];
            echo '<a data-fancybox="gallery27" href="'.$img.'"></a>';    
            } ?>
        </div>
    </div>
</div>
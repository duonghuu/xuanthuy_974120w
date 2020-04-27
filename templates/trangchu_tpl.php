<div class="about-bg">
  
    <div class="container">
        <div class="idx-tit"><span>Giới thiệu công ty</span></div>
        <div class="idx-desc">Tristique laudantium tenetur porttitor commodi occaecati nunc iste eius semper ridiculus doloremque ipsum nunc tempore nulla reprehenderit asperiores, soluta iusto aliquet! Nam ullamcorper egestas? Deleniti quia montes! Quae laboris risus tempor adipisci magnam, vehicula proident, accusamus, laboris aliquip ut vero sapien duis rem exercitationem leo velit posuere vivamus accusamus. Dignissim tristique sociis delectus lorem torquent! Exercitationem optio </div>
    </div>
</div>
<div class="trangchu-bg">
    
    <div class="container">
        <div class="trangchu-flex">
            <div class="spnoibat-bg">
                <div class="spnoibat-head">
                    <span>Sản phẩm nổi bật</span><a href="">Xem tất cả</a>
                </div>
                <div class="product-grid">
                    <?php
                    // for($i=0;$i< 8 ;$i++) 
                    // echo '<div class="pr-box name "><article><a href="'.$link.'" class="imgsp"><img src="http://placehold.it/280x260/ed555a?text=." alt="'.$v["ten"].'">'.$cls_banchay.$giaspgiam.'</a> <div class="info"><h3><a href="'.$link.'">Sản phẩm nổi bật</a></h3><div class="boxmota"><div class="promasp">Mã sp: '._masp.'</div><p>Giá: '._lienhe.'</p></div></div></article></div>';
                    foreach ($spnoibat as $key => $value) {
                       showProduct($value);
                    }
                     ?>
                </div>
            </div>
            <div class="trangchu-left">
              
                <div class="dm-left">
                    <div class="title"><?= _danhmucsanpham ?></div>
                    <?= for2cap('product_danhmuc','product_list',$_GET["keyword"],$_GET["keyword"],'','/') ?>
                </div>
                <div class="dm-left dm-hotro">
                    <div class="title"><?= _hotrotructuyen ?></div>
                    <div class="dm-body">
                     
                        <div class="text-center"><img src="images/hotro.png" alt="<?= _hotrotructuyen ?>"></div>
                        <div class="dm-hotline"><img src="images/dm-hotline.png" alt="hotline"> <a href="tel:+<?=preg_replace('/[^0-9]/','',$company['dienthoai']);?>"><?= $company['dienthoai'] ?></a></div>
                        <div class="dm-hotro-box">
                            <?php foreach ($yahoo as $key => $value) {
                                echo '<div class="dm-hotro-item"><p><strong>'.$value['ten'].'</strong></p><p><i class="fas fa-phone-alt"></i> '.$value['dienthoai'].'</p><p><i class="fas fa-envelope-open"></i> '.$value['email'].'</p></div>';
                            } ?>
                        </div>
                        <div class="mxh"><span>Mạng xã hội</span><?= lay_mxh('mxh') ?></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="web-slider-main clearfix">
    <?= lay_slider('quang-cao') ?>
</div>
<div class="hinhanhtc-bg">
    
    <div class="container">
        <div class="title">Hình ảnh</div>
        <div class="hinhanhtc-main clearfix">
            <?php foreach ($thuviennb as $key => $value) {
                $img= _upload_tintuc_l.$value["thumb"];
                echo '<div class="hinhanhtc-item"><a href="'.get_url($value).'"> <figure class="hover_sang1"><img src="'.$img.'" alt="'.$value["ten"].'"></figure> <div class="info"> <h5>'.$value["ten"].'</h5><p>Ngày hoàn thành: '.$value["chucvu"].'</p> </div> </a></div>';
            } ?>
            
        </div>
    </div>
</div>
<div class="dknt-bg">
   
    <div class="container">
        <div class="dknt-main-flex">
            <div class="dknt-main-box">
                <h6><?= _dangkynhantin ?> báo giá</h6>
                <p class="maildesc"><?= _maildesc ?></p>
                <form action="index.html" method="post">
                    <input type="text" name="fid[ten]" required="" placeholder="<?= _hovaten ?>" class="form-control">
                    <input type="text" name="fid[dienthoai]" required="" placeholder="<?= _dienthoai ?>" class="form-control">
                    <input type="text" name="fid[email]" required="" placeholder="Email" class="form-control">
                    <button type="submit" class="btn btn-default"><?= _dangky ?></button>
                    <input type="hidden" value="1" name="nltval">
                    <input type="hidden" value="<?= time() ?>" name="nlttoken">
                    <input type="hidden" name="recaptcha_response2" id="recaptchaResponse2">
                </form>
            </div>
        </div>
    </div>
</div>
<div class="tin-video-bg">
    
    <div class="container">
        <div class="tin-video-flex">
            <div class="tin-bg">
                <div class="title"><span><?= _tintucsukien ?></span><strong></strong></div>
                <div class="tinnb-flex">
                    <?php if($c_tinnb>0){ 
                        $img= _upload_tintuc_l.$tinnb[0]["photo"];
                        ?>
                    <div class="first-news">
                        <a href="<?= get_url($tinnb[0]) ?>">
                            <figure><img src="<?= $img ?>" alt="<?= $tinnb[0]["ten"] ?>"></figure>
                            <div class="info">
                                <h5 class="line-clamp"><?= $tinnb[0]["ten"] ?></h5>
                                <div class="line-clamp desc"><?= $tinnb[0]["mota"] ?></div>
                                <span>Xem thêm</span>
                            </div>
                        </a>
                    </div>
                    <?php } ?>
                    <div class="tinnb-main clearfix">
                        <?php foreach ($tinnb as $key => $value) {
                            if($key==0) continue;
                            $img= _upload_tintuc_l.$value["thumb"];
                            echo '<div class="tinnb-item"><a href="'.get_url($value).'"> <figure><img src="'.$img.'" alt="'.$value["ten"].'"></figure> <div class="info"> <h5 class="line-clamp">'.$value["ten"].'</h5> <div class="line-clamp desc">'.$value["mota"].'</div> </div> </a></div>';
                        } ?>
                    </div>
                </div>
            </div>
            <div class="video-bg">
                
                <div class="title"><span>Video - clip</span><strong></strong></div>
                <div id="video-idx">
                  <iframe id="iframe" src="https://www.youtube.com/embed/<?= getYoutubeIdFromUrl($video[0]["link"]) ?>" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="video-khac-main clearfix">
                    <?php foreach ($video as $key => $value) {
                        echo '<div class="video-khac"><a href="#" data-val="'.getYoutubeIdFromUrl($value["link"]).'"><img src="https://i.ytimg.com/vi/'.getYoutubeIdFromUrl($value["link"]).'/mqdefault.jpg" alt="'.$value["ten"].'"></a></div>';
                    } ?>
                </div>
            </div>
        </div>
    </div>
</div>
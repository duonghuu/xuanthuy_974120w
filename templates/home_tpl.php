<div class="about-bg">
    
    <div class="container">
        <div class="about-flex">
            <div class="about-gallery">
                <a href="gioi-thieu.html" class="imgsp"><img src="<?= _upload_hinhanh_l.$about["photo"] ?>" alt="<?= _gioithieu ?>"></a>
            </div>
            <div class="about-info">
                <div class="about-head">
                    <h6><?= _congtytuvanbds ?></h6>
                    <h2><?= $company["ten"] ?></h2>
                </div>
                <div class="content"><?= $about["mota"] ?></div>
                <div class="xem"><a href="gioi-thieu.html"><span><?= _xemthem ?></span><img src="images/xemthem.png" alt="read"></a></div>
            </div>
        </div>
    </div>
</div>
<div class="themanh-bg lazy" data-bg="url(<?= _upload_hinhanh_l.$txtthemanh["photo"] ?>)">
    <div class="container">
        
        <div class="themanh-mota">
            <div class="themanh-text ">
               <div class="themanh-text-box line-clamp"><?= $txtthemanh["mota"] ?></div>
            </div>
        </div>
        <div class="themanh-flex">
            <?php foreach ($themanh as $key => $value) {
                echo '<div class="themanh-item"><a href="'.$value["link"].'">
                        <div class="img">
                            <figure><img src="'._upload_tintuc_l.$value["photo"].'" alt="'.$value["ten"].'"></figure>
                        </div>
                        <div class="info"><h5>'.$value["ten"].'</h5>
                        <div class="desc line-clamp">'.$value["mota"].'</div>
                        </div>
                    </a></div>';
            } ?>
        </div>
    </div>
</div>
<div class="spnoibat-bg">
    
    <div class="container">
        <div class="idx-tit">
            <a href="san-pham.html"><?= _sanpham ?></a>
        </div>
        <div class="idx-desc">
            <?= $txtsp["mota"] ?>
        </div>
        <div class="product-grid">
            <?php foreach ($spnoibat as $key => $value) {
                showProduct($value);
            } ?>
        </div>
    </div>
</div>
<div class="dichvu-bg lazy" data-bg="url(images/dichvu.jpg)">
    
    <div class="container">
        <div class="idx-tit">
            <a href="dich-vu.html"><?= _dichvu ?></a>
        </div>
        <div class="idx-desc">
            <?= $txtdv["mota"] ?>
        </div>
        <div class="dichvu-main clearfix">
            <?php foreach ($dichvu as $key => $value) {
                $link=get_url($value,"dich-vu");
                echo '<div class="dichvu-item"><a href="'.$link.'">
                        <figure><img class="img-fill" src="1x1.png" data-lazy="'._upload_tintuc_l.$value["thumb"].'" alt="'.$value["ten"].'"></figure>
                        <div class="info"><h5>'.$value["ten"].'</h5><div class="line-clamp desc">'.$value["mota"].'</div><div class="xemthem"><span>'._xemthem.' <img src="images/xemtin.png" alt="read"></span></div></div>
                    </a></div>';
            } ?>
        </div>
    </div>
</div>
<div class="web-slider-main clearfix">
    <?= lay_slider('quang-cao','qc-item') ?>
</div>
<div class="dknt-bg lazy" data-bg="url(images/dknt.jpg)">
    <div class="container">
        
        <form action="" method="post">
            <div class="mail-tit"><?= _dangkynhantin ?></div>
            <div class="formline">
                <input type="text" class="form-control" placeholder="<?= _hovaten ?>" name="">
                <input type="text" class="form-control" placeholder="<?= _dienthoai ?>" name="">
            </div>
            <input type="text" class="form-control" placeholder="<?= _email ?>" name="">
            <textarea class="form-control" placeholder="<?= _noidung ?>" name=""></textarea>
            <div class="d-flex justify-content-center"><button class="btn btn-default "><?= _dangky ?></button></div>
        </form>
    </div>
</div>
<div class="tin-video-bg ">
    
    <div class="container">
        <div class="tin-video-flex">
            <div class="tin-bg">
                <div class="title">Tin tức mới</div>
                <div class="tinnb-main clearfix">
                    <?php foreach ($tinnb as $key => $value) {

                        echo '<div class="tinnb-item"><a href="'.get_url($value,"tin-tuc").'">
                                <div class="img">
                                    <figure><img class="img-fill" src="1x1.png" data-lazy="'._upload_tintuc_l.$value["thumb"].'" alt="'.$value["ten"].'"></figure>
                                </div>
                                <div class="info">
                                    <div class="info-head">
        <div class="postd"><strong>'.date('d',$value["ngaytao"]).'</strong><span>T'.date('m',$value["ngaytao"]).'</span></div><h5 class="line-clamp">'.$value["ten"].'</h5>
                                    </div>
                                    <div class="desc line-clamp">'.$value["mota"].'</div>
                                </div>
                            </a></div>';
                    } ?>
                </div>
            </div>
            <div class="video-bg">
                <div class="title">Video clip</div>
                <div id="video-idx"></div>

                <select class="form-control" id="lstvideo" name="lstvideo">
                  <option value="">Video ...</option>
                  <?php foreach($video as $v) { ?>
                  <option value="<?= getYoutubeIdFromUrl($v["link"]) ?>"><?= $v["ten"] ?></option>
                  <?php } ?>
                </select>
            </div>
        </div>
    </div>
</div>
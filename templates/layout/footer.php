<footer id="footer" class="lazy" data-bg="url(images/ft-bg.jpg)">
  <div class="ft-top ">
    <div class="container">
      <div class="ft-flex">
        <div class="ft-info">
          <a href="" class="ft-logo"><img src="<?= _upload_hinhanh_l.$logolang["thumb"] ?>" alt="logo"></a> 
          <h4 class="ft-company"><a href=""><?= $company["ten"] ?></a></h4> 
          <div class="mxh"><?= lay_mxh('mxh') ?></div>
          <?php /* 
          <div class="content"> <?php echo lay_text('footer'); ?> </div> 
          */?>
        </div>
        <div class="ft-chinhanh">
          <?php foreach ($diachi as $key => $value) { ?>
            <article>
            <h5><?= $value["ten"] ?></h5>
            <?= (!empty($value["diachi"]))?'<p>'._diachi.': '.$value["diachi"].'</p>':'' ?>
            <?= (!empty($value["dienthoai"]))?'<p>Hotline: '.$value["dienthoai"].'</p>':'' ?>
            <?= (!empty($value["email"]))?'<p>Email: '.$value["email"].'</p>':'' ?>
            </article>
          <?php } ?>
        </div>
        <div class="ft-baiviet">
          <p class="ft-tit"><span>hỗ trợ khách hàng</span></p>
          <?= for1('news','chinh-sach','chinh-sach','.html') ?>
        </div>
        
        <?php  if($deviceType != "phone"){ ?>
          <div class="ft-fanpage">
            <p class="ft-tit"><span>Fanpage</span></p>
            <div class="fanpageplace">
              <div class="fb-page" data-href="<?=$company['fanpage']?>" data-width="470" data-height="380" 
                data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" 
                data-show-posts="false">
                <div class="fb-xfbml-parse-ignore">
                  <blockquote cite="<?=$company['fanpage']?>">
                    <a href="<?=$company['fanpage']?>">Facebook</a>
                  </blockquote>
                </div>
              </div>      <!-- end fb-page  -->
            </div>
          </div>

        <?php } ?>
    </div>
  </div>
</div>
<div class="copyright">
  <div class="container">
    <div class="ft-wrap">
      <p class="text">Copyright © 2020 <?= $company["ten"] ?>. Design by Nina</p>
             <?php /*  
      <ul class="ft-thongke">
        <li>Đang Online: <span><?php $count=count_online();echo $tong_xem=$count['dangxem'];?></span></li>
        <li><?=_thongketuan?>: <span><?=$trongtuan;?></span></li>   
        <li><?=_thongkethang?>: <span><?=$trongthang;?></span></li> 
        <li><?=_tongtruycap?>: <span><?php $count=count_online();echo $tong_xem=$count['daxem'];?></span></li>
      </ul>
        
        <li><?=_ngayhomqua?>: <span><?=$homqua;?></span></li> 
*/?>
    </div>
  </div>
</div>
</footer>
<div class="codebando"></div>
          <?php /* <div class="codebando"><?= $company["bando"] ?></div>
            include _template."layout/dangkynhantin.php";<img src="http://placehold.it/600x520" 
            alt="" style="   -webkit-clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
            clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);   "> 
            https://bennettfeely.com/clippy/ */?>
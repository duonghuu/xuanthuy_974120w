<h1 style="position:absolute; top:-1000px;"><?php if($h1!='')echo $h1;else echo $company['h1'];?></h1>
<h2 style="position:absolute; top:-1000px;"><?php if($h2!='')echo $h2;else echo $company['h2'];?></h2>
<h3 style="position:absolute; top:-1000px;"><?php if($h3!='')echo $h3;else echo $company['h3'];?></h3>
<div id="fb-root"></div>
<script src="//code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="js/jquery-3.4.1.min.js"><\/script>')</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<!-- Bootstrap JS CDN -->
<script src="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<!-- Bootstrap JS local fallback -->
<script>if(typeof($.fn.modal) === 'undefined') {document.write('<script src="js/bootstrap.min.js"><\/script>')}</script>
<script>
  let _curl = "<?= getCurrentPageURL() ?>";
  var js_deviceType = '<?= $deviceType ?>';
  var js_template = '<?= $template ?>';
  var js_langfb = '<?= ($lang=='') ? 'vi_VN' : 'en_EN' ?>';
  var js_linkvideo = '<?= getYoutubeIdFromUrl($video[0]["link"]) ?>';
  var js_bando = '<?= $company["bando"] ?>';
  var js_num_danhgiasao = '<?=$num_danhgiasao?>';
  var lang_thongbao = '<?= _thongbao ?>';
  var lang_chonhinhthucthanhtoan = '<?= _chonhinhthucthanhtoan ?>';
  var lang_nhaphoten = '<?= _nhaphoten ?>';
  var lang_nhapsodienthoai = '<?= _nhapsodienthoai ?>';
  var lang_chontinhthanhpho = '<?= _chontinhthanhpho ?>';
  var lang_chonquanhuyen = '<?= _chonquanhuyen ?>';
  var lang_nhapdiachi = '<?= _nhapdiachi ?>';
  var lang_nhapnoidung = '<?= _nhapnoidung ?>';
  var lang_nhapemailcuaban = '<?= _nhapemailcuaban ?>';
  var lang_emailkhonghople = '<?= _emailkhonghople ?>';
  var lang_nhaptukhoatimkiem = '<?= _nhaptukhoatimkiem ?>...';
  var lang_chuanhaptukhoa = '<?=_chuanhaptukhoa?>';
  var lang_chonsize = '<?=_chonsize?>';
  var lang_chonmau = '<?=_chonmau?>';
  var lang_hethongloi = '<?=_hethongloi?>';
  var lang_nhapsoluong = '<?=_nhapsoluong?>';
  var lang_bandanhgia = '<?=_bandanhgia?>';
  var lang_danhgiaroi = '<?=_danhgiaroi?>';
  var lang_tencty = '<?=$company["ten"]?>';
</script>
  <script src="js/main.js" ></script>
  <script src="//www.google.com/recaptcha/api.js?render=<?=$config['recaptcha_sitekey']?>"></script>
  <script>
    var recaptchaResponse = document.getElementById('recaptchaResponse');
    var recaptcha2 = document.getElementById('recaptcha2');
    var recaptchaContact = document.getElementById('recaptchaContact');
    var recaptchaResponse_dknt = document.getElementById('recaptchaResponse_dknt');
    var recaptchaUser = document.getElementById('recaptchaUser');
    if(recaptchaResponse || recaptcha2 || recaptchaContact || recaptchaResponse_dknt || recaptchaUser){
      grecaptcha.ready(function () {
        grecaptcha.execute('<?=$config['recaptcha_sitekey']?>', { action: 'contact' }).then(function (token) {
          if(recaptchaResponse){recaptchaResponse.value = token;}
          if(recaptcha2){recaptcha2.value = token;}
          if(recaptchaContact){recaptchaContact.value = token;}
          if(recaptchaResponse_dknt){recaptchaResponse_dknt.value = token;}
          if(recaptchaUser){recaptchaUser.value = token;}
        });
      });
    }
  </script>
  <?php if($id>0 or $source=='about') { ?>
    <script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-51d3c996345f1d03" async="async"></script>
    <script src="//sp.zalo.me/plugins/sdk.js" ></script>
    <?php } ?>
    <?php if($template == "thuvien_detail"){ ?>
      <!-- Unitegallery -->
      <script type='text/javascript' src='js/unitegallery/js/unitegallery.min.js'></script> 
      <link rel='stylesheet' href='js/unitegallery/css/unite-gallery.css' type='text/css' /> 
      <script type="text/javascript" src="js/unitegallery/themes/tiles/ug-theme-tiles.js"></script> 
      <script type="text/javascript">
          $(document).ready(function(){
              $("#tva").unitegallery({
                  tile_as_link: false,
                  tile_link_newpage: false,
                  // tiles_type: "justified",
                  tiles_space_between_cols: 1
              }); 
          });
      </script>
      <!-- Photobox -->
      <link rel='stylesheet' href='js/photobox/photobox.css' type='text/css' /> 
      <script type="text/javascript" src="js/photobox/jquery.photobox.js"></script>
      <script type="text/javascript">
          $(document).ready(function($) {
              $('.tva-detail').photobox('a',{thumbs:true,loop:false});
          });
      </script>
      <?php } ?>
      <?php /* 
      <script src="js/search_nangcao.js" type="text/javascript" ></script> 
      */?>
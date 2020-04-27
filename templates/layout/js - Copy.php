<h1 style="position:absolute; top:-1000px;"><?php if($h1!='')echo $h1;else echo $company['h1'];?></h1><h2 style="position:absolute; top:-1000px;"><?php if($h2!='')echo $h2;else echo $company['h2'];?></h2><h3 style="position:absolute; top:-1000px;"><?php if($h3!='')echo $h3;else echo $company['h3'];?></h3>
<div id="fb-root"></div>
<script
  src="//code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script>window.jQuery || document.write('<script src="js/jquery-3.4.1.min.js"><\/script>')</script>
  <script src="js/main.min.js" ></script>
<?php /* <script src="js/jquery-migrate-3.1.0.min.js" ></script>
<script src="js/loadCSS.js"></script>
<script src="js/lazyload.min.js"></script>

<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/jquery.fancybox.min.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/list.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.waypoints.min.js"></script>
<script src="css/magiczoomplus/magiczoomplus.js" ></script> */?>
<?php /* <script src="js/popper.min.js"></script> 
<script src="js/numscroller-1.0.js"></script>
*/?>
<script src="js/my_script.js"></script>
<script>
  function scrollTO_ex(id){
      $("html, body").animate({ scrollTop: $(id).offset().top  }, 900);
  }
  <?php if($deviceType == "computer"){ ?>
    new WOW().init();

  <?php } ?>
  var $v_thongbao = '<?= _thongbao ?>';
  var myLazyLoad = new LazyLoad({
   elements_selector: ".lazy"
  });
  function loadData(page,id_tab,loai){
    $.ajax({
      type: "POST",
      dataType:'json',
      url: "ajax/paging_ajax/ajax_paging.php",
      data: {page:page,id_danhmuc:loai},
      success: function(msg)
      {
        $(id_tab+' .pagination').remove();
        $(id_tab+' .product-grid').html(msg.spthem);
        $(id_tab).append(msg.morebtn);
        myLazyLoad.update();
        $(id_tab+" .pagination li.active").click(function(){
          var pager = $(this).attr("p");
          var id_danhmucr = $(this).parents().parents().parents().attr("data-rel");
          loadData(pager,id_tab,id_danhmucr);
        });  
      }
    });
  }
  function doEnter(evt){
      var key;
      if(evt.keyCode == 13 || evt.which == 13){
       onSearch(evt);
     }
   }
   function onSearch(evt) {
     var keyword1 = $('.keyword:eq(0)').val();
     var keyword2 = $('.keyword:eq(1)').val();
        // var danhmuc1 = $('.danhmuc1').val();
     if(keyword1=='<?=_nhaptukhoatimkiem?>...')
     {
      keyword = keyword2;
    }
    else
    {
      keyword = keyword1;
    }
    if(keyword=='' || keyword=='<?=_nhaptukhoatimkiem?>...')
    {
      alert('<?=_chuanhaptukhoa?>');
    }
    else{
          // location.href = "tim-kiem.html&keyword="+keyword+"&danhmuc="+danhmuc1;
      location.href = "tim-kiem/keyword="+keyword;
    }
  }
   function onSearch2(evt) {
     var id_huong = $('#id_huong').val();
     var id_danhmuc = $('#id_danhmuc').val();
     var id_dientich = $('#id_dientich').val();
     var id_khoangia = $('#id_khoangia').val();
    location.href = "tim-kiem/id_huong="+id_huong+"&id_danhmuc="+id_danhmuc+"&id_dientich="+id_dientich+"&id_khoangia="+id_khoangia;
  }
  <?php if($template=='product_detail' || $template=='product_detail2' ) { ?>
     var mzOptions = {
      zoomMode:true,
      zoomPosition: 'inner ',
      onExpandClose: function(){MagicZoom.refresh();}
    };
  <?php } ?>
  
  $(document).ready(function(){
            $('#submit_nhantin').click(function(){
          if(isEmpty($('#email_nhantin').val(), "<?=_nhapemailcuaban?>"))
          {
            $('#email_nhantin').focus();
            return false;
          }
          if(isEmail($('#email_nhantin').val(), "<?=_emailkhonghople?>"))
          {
            $('#email_nhantin').focus();
            return false;
          }
          document.frm_dknt.submit(); 
        });
    $('.hoverhori').hover(function() {
        var vitri = $(this).position().top;
        $('.hoverhori> ul').css({
          'top': vitri + 'px'
        })
      });
    if ($(document.body).height() < $(window).height()) {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id; js.async=true;
        js.src = "//connect.facebook.net/<?php if($lang=='en')echo 'en_EN';else echo 'vi_VN' ?>/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      $(".codebando").html('<?= $company["bando"] ?>');
      <?php if(!empty($video)){ ?>
        $("#video-idx").html('<iframe id="iframe" src="https://www.youtube.com/embed/<?= getYoutubeIdFromUrl($video[0]["link"]) ?>" frameborder="0" allowfullscreen></iframe>');
      <?php } ?>
    }else{
      
      var fired = false;
      window.addEventListener("scroll", function(){
        if ((document.documentElement.scrollTop != 0 && fired === false) || (document.body.scrollTop != 0 && fired === false)) {
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id; js.async=true;
            js.src = "//connect.facebook.net/<?php if($lang=='en')echo 'en_EN';else echo 'vi_VN' ?>/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
          $(".codebando").html('<?= $company["bando"] ?>');
          <?php if(!empty($video)){ ?>
            $("#video-idx").html('<iframe id="iframe" src="https://www.youtube.com/embed/<?= getYoutubeIdFromUrl($video[0]["link"]) ?>" frameborder="0" allowfullscreen></iframe>');
          <?php } ?>
          fired = true;
        }
      }, true);
    }
    //BEGIN valak menu
      $('.main_manu_valak ul li').each(function(index, el) {
        if($(this).children("ul").length) {
          $(this).prepend('<div class="btn_expand_menu_valak"></div>');
        }
      });
    $(document).on('click', '#humber_valak', function(event) {
      event.preventDefault();
      $("#valak_openmmenu").addClass('expand_menu');
    });
    $(document).on('click', '#close_valak', function(event) {
      event.preventDefault();
      $("#valak_openmmenu").removeClass('expand_menu');
    });
    $(document).on('click', '.btn_expand_menu_valak', function(event) {
      event.preventDefault();
      if($(this).hasClass('more')) {
        $(this).removeClass('more');
      }
      else {
        $(this).addClass('more');
      }
      $(this).parent('li').children('ul').toggle();
    });
    $(window).scroll(function() {
      if($(window).scrollTop() >= $(".hd-bg").height()) 
        // if($(window).scrollTop() >= 50) 
      {
                // $("div.menu").css({position:"fixed",left:'0px',right:'0px',top:'0px',zIndex:'999',height:"45px",background:"#86186F"});
        $("#valak_mmenu").css({position:"fixed",left:'0px',right:'0px',top:'0px',zIndex:'999'});
                // $(".logo").css({top:"8px",width:"130px"});
      }
      else
      {
                // $("div.menu").css({position:"static",height:"95px",background:"#fff"});
        $("#valak_mmenu").css({position:"relative"});
                // $(".logo").css({top:"18px",width:"auto"});
      }
    });
    //END valak menu
    $('.timkiem_icon').click(function(event) {
      if($('#search').hasClass('hien')){
        $('#search').removeClass('hien');
      }else{
        $('#search').addClass('hien');
      }
    });
    
    <?php if($deviceType == "computer"){ ?>
      function myfunc_zoomIn(target, direction){
          if(direction === "down"){
            $(target).removeClass("hidden");
            $(target).addClass("animated zoomIn");
            setTimeout(function(){
                $(target).removeClass("animated zoomIn");
            }, 1000);
          }
        }
        $('.way-wow').addClass('hidden');
        $('.way-wow').waypoint(function(direction) {
          myfunc_zoomIn(this.element, direction);
        },{offset:'80%'});
      // hide our element on page load
       
        // $('.way-wow').waypoint(function() {
        //     $('.way-wow').addClass('fadeInLeft');
        // }, { offset: '50%' });
      // $('.way-wow').waypoint({
      //   handler: function() {
      //     $(this).addClass('fadeInLeft');
      //   },
      //   offset: '100%'
      // })
      // $(".way-wow").waypoint(function() {
      //   var waytype = $(this).data("waytype");
      //     $('.way-wow').addClass(waytype);
      //   }
      // , { offset: '100%'});
      // $(window).scroll(function(){
      //   var cach_top = $(window).scrollTop();
      //   var heaigt_header = $('.hd-bg').height();
      //   if(cach_top >= 100){
      //     $('.hd-bg').css({position: 'fixed', top: '0px', zIndex:99999});
      //     $('.hd-bg').addClass('fixed');
      //   }else{
      //     $('.hd-bg').css({position: 'relative', top: 'auto'});
      //     $('.hd-bg').removeClass('fixed');
      //   }
      // });
    <?php } ?>
  <?php if($source=="index"){ ?>
    $('.about__main').on({
          beforeChange: function(event, slick, currentSlide, nextSlide){
            myLazyLoad.update();
          }
        }).slick({lazyLoad: 'ondemand',  infinite: true, accessibility:false, slidesToShow: 2, slidesToScroll: 1, autoplay:false, autoplaySpeed:3000, speed:1000, arrows:true, centerMode:false, dots:false, draggable:true,responsive: [{breakpoint: 800, settings: {slidesToShow: 2, } },{breakpoint: 430, settings: {slidesToShow: 1} },{breakpoint: 330, settings: {slidesToShow: 1} } ]});
  $('.dichvu-main,.video-main').on({
        beforeChange: function(event, slick, currentSlide, nextSlide){
          myLazyLoad.update();
        }
      }).slick({lazyLoad: 'ondemand',  infinite: true, accessibility:false, slidesToShow: 3, slidesToScroll: 1, autoplay:false, autoplaySpeed:3000, speed:1000, arrows:true, centerMode:false, dots:false, draggable:true,responsive: [{breakpoint: 800, settings: {slidesToShow: 2, } },{breakpoint: 430, settings: {slidesToShow: 1} } ]});
    $('.tinnb-main').on({
        beforeChange: function(event, slick, currentSlide, nextSlide){
          myLazyLoad.update();
        }
      }).slick({lazyLoad: 'ondemand',  infinite: true, accessibility:false, slidesToShow: 2, slidesToScroll: 1, autoplay:false,  vertical:true, autoplaySpeed:3000, speed:1000, arrows:true, dots:false, draggable:true,responsive: [{breakpoint: 800, settings: { slidesToShow: 2 } },{breakpoint: 430, settings: {slidesToShow: 2  } } ] });
     <?php /*  var options = {
               valueNames: [ 'name', 'category' ],
               page: 8,
               pagination: true
             };
             <?php foreach ($product_danhmuc as $kdm => $vdm) { ?>
             var listObj = new List('pdm<?= $vdm["tenkhongdau"] ?>', options);
             <?php } ?> */?>
       
  <?php } ?>
  
  <?php if($template=='product_detail' ) { ?>
        $('.slick2').slick({slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, autoplay:false, autoplaySpeed:5000, asNavFor: '.slick'});
        $('.slick').slick({slidesToShow: 4, slidesToScroll: 1, asNavFor: '.slick2', dots: false, centerMode: false, focusOnSelect: true, responsive: [{breakpoint: 800, settings: {slidesToShow: 3, slidesToScroll: 1, } }, {breakpoint: 376, settings: {slidesToShow: 2, slidesToScroll: 1, } } ] });
        $('.size').click(function(){
          $('.size').removeClass('active_size');
          $(this).addClass('active_size');
        });
        $('.mausac').click(function(){
          $('.mausac').removeClass('active_mausac');
          $(this).addClass('active_mausac');
        });
        // $('.size').click(function(){
        //  $('.size').removeClass('active_size');
        //  $(this).addClass('active_size');
        // });
        // $('.mausac').click(function(){
        //  $('.mausac').removeClass('active_mausac');
        //  $(this).addClass('active_mausac');
        // }); 
        $('.cart_popup').click(function(){
          if($('.size').length && $('.active_size').length==false){
            alert('<?=_chonsize?>');
            return false;
          }
          if($('.active_size').length){
            var size = $('.active_size').html();
          }
          else{
            var size = '';
          }
          if($('.mausac').length && $('.active_mausac').length==false){
            alert('<?=_chonmau?>');
            return false;
          }
          if($('.active_mausac').length){
            var mausac = $('.active_mausac').html();
          }
          else{
            var mausac = '';
          }
          var act = "dathang";
          var id = $(this).data('id');
          var soluong = $('.soluong').val();
          if (soluong != undefined){
            soluong = 1;
          }
          if(soluong>0)
          {
            $.ajax({
             type:'post',
             url:'ajax/cart_popup.php',
             data:{id:id,size:size,mausac:mausac,soluong:soluong,act:act},
             beforeSend: function() {
              $('.thongbao').html('<p><img src="images/loader_p.gif"></p>');
            },
            error: function(){
              alert('<?=_hethongloi?>');
            },
            success:function(kq){
              $('body').append('<div class="wap_giohang"></div>');
              $('.wap_giohang').html(kq);
              $('.popup_donhang').fadeIn(300);
              $('body').append('<div id="baophu"></div>').fadeIn(300);
            }
          });
          }
          else
          {
            alert('<?=_nhapsoluong?>');
          }
          return false;
        });
        //Đánh giá sao
        var giatri_default = "<?=$num_danhgiasao?>";
        $('.danhgiasao span:lt('+giatri_default+')').addClass('active');
        $('.danhgiasao span').hover(function(){
          var giatri = $(this).data('value');
          $('.danhgiasao span').removeClass('hover');
          $('.danhgiasao span:lt('+giatri+')').addClass('hover');
        },function(){
          $('.danhgiasao span').removeClass('hover');
        });
        $('.danhgiasao span').click(function(){
          var url = $('.danhgiasao').data('url');
          var giatri = $(this).data('value');
          var idsp = $(this).data('id');
          $.ajax({
            type:'post',
            url:'ajax/danhgiasao.php',
            data:{idsp:idsp,giatri:giatri,url:url},
            success:function(kq){
              if(kq==1){
                $('.danhgiasao span:lt('+giatri+')').addClass('active');
                alert('<?=_bandanhgia?>: '+giatri+'/5');
                $('.num_danhgia').html(+giatri+'/5');
              }
              else if(kq==2){
                alert('<?=_danhgiaroi?>');
              }
              else{
                alert('<?=_hethongloi?>');
              }
            }
          });
        });
  <?php } ?>
  $('.slideshow-slider-main').slick({lazyLoad: 'ondemand', infinite: true, accessibility:false, slidesToShow: 1, slidesToScroll: 1, autoplay:false, autoplaySpeed:3000, speed:1000, arrows:true, centerMode:false, dots:false, draggable:true, });
    $('.web-slider-main').slick({lazyLoad: 'ondemand', infinite: true, accessibility:false, slidesToShow: 1, slidesToScroll: 1, autoplay:false, autoplaySpeed:3000, speed:1000, arrows:true, centerMode:false, dots:false, draggable:true, });
    $(".video-khac a").click(function(a) {
     $("#iframe").attr("src", "https://www.youtube.com/embed/" + $(this).data("val") + "?autoplay=1"), a.preventDefault()
    });
    $('#lstvideo').change(function(){
     $("#iframe").attr("src","https://www.youtube.com/embed/"+$(this).val()+"?autoplay=1");
    }); 
    $('img').each(function(index, element) {
     if(!$(this).attr('alt') || $(this).attr('alt')=='')
     {
      $(this).attr('alt','<?=$company['ten']?>');
    }
  });
    $( "body" ).on( "click", ".muangay", function() {
          if($('.size').length && $('.active_size').length==false)
          {
            alert('Chọn size');
            return false;
          }
          if($('.active_size').length)
          {
            var size = $('.active_size').html();
          }
          else
          {
            var size = '';
          }
          if($('.mausac').length && $('.active_mausac').length==false)
          {
            alert('Chọn màu');
            return false;
          }
          if($('.active_mausac').length)
          {
            var mausac = $('.active_mausac').html();
          }
          else
          {
            var mausac = '';
          }
          var act = "dathang";
          var id = $(this).data('id');
          var soluong = $('.soluong').val();
          if(soluong==undefined){
            soluong = 1;
          }
          if(soluong>0)
          {
            $.ajax({
              type:'post',
              url:'ajax/cart.php',
              dataType:'json',
              data:{id:id,size:size,mausac:mausac,soluong:soluong,act:act},
              beforeSend: function() {
                $('.thongbao').html('<p><img src="images/loader_p.gif"></p>');
              },
              error: function(){
                add_popup('Hệ thống bị lỗi, xin quý khách chuyển sang mục khác.');
              },
              success:function(kq){
                location.href = "gio-hang.html";
                // add_popup(kq.thongbao);
                // $('.giohang_fix span').html(kq.sl);
                // console.log(kq);
              }
            });
          }
          else
          {
            alert('Nhập số lượng');
          }
          return false;
        });
    $( "body" ).on( "click", ".dathang", function() {
      if($('.size').length && $('.active_size').length==false)
      {
        alert('<?=_chonsize?>');
        return false;
      }
      if($('.active_size').length)
      {
        var size = $('.active_size').html();
      }
      else
      {
        var size = '';
      }
      if($('.mausac').length && $('.active_mausac').length==false)
      {
        alert('<?=_chonmau?>');
        return false;
      }
      if($('.active_mausac').length)
      {
        var mausac = $('.active_mausac').html();
      }
      else
      {
        var mausac = '';
      }
      var act = "dathang";
      var id = $(this).data('id');
      var soluong = $('.soluong').val();
      if(soluong==undefined){
        soluong = 1;
      }
      if(soluong>0)
      {
        $.ajax({
          type:'post',
          url:'ajax/cart.php',
          dataType:'json',
          data:{id:id,size:size,mausac:mausac,soluong:soluong,act:act},
          beforeSend: function() {
            $('.thongbao').html('<p><img src="images/loader_p.gif"></p>');
          },
          error: function(){
            add_popup('<?=_hethongloi?>');
          },
          success:function(kq){
            add_popup(kq.thongbao);
            $('.giohang_fix span').html(kq.sl);
            console.log(kq);
          }
        });
      }
      else
      {
        alert('<?=_nhapsoluong?>');
      }
      return false;
    });
    
  });

  
</script>

              
<!--Tooltip hình ảnh
<script src="js/ImageTooltip.js"></script>
<!--Tooltip hình ảnh-->
<!--Tooltip có nội dung
<script src="Toolstip/ajax.js" ></script>
<script src="Toolstip/ajax-dynamic-content.js" ></script>
<script src="Toolstip/home.js" ></script>
<link href="Toolstip/tootstip.css" rel="stylesheet" type="text/css" />
Tooltip có nội dung-->
<!--lockfixed
<script src="js/jquery.lockfixed.min.js"></script>
<script >
  $(window).load(function(e) {
    (function($) {
        var left_h=$('#left').height();
        var right_h=$('#right').height();
                var footer_h=$('#wap_footer').height();
        if(right_h>left_h)
        {
          $.lockfixed("#left",{offset: {top: 10, bottom: footer_h}});
        }
    })(jQuery);
  });
</script>
<!--lockfixed-->
<!--Cấm click chuột phải-->
<?php /* <script >
  //ondragstart="return false;" ondrop="return false;"; sự kiện thẻ body
  var message="Đây là bản quyền thuộc về <?=$company['ten']?>";
  function clickIE() {
  if (document.all) {(message);return false;}
  }
  function clickNS(e) {
  if (document.layers||(document.getElementById&&!document.all)) {
    if (e.which==2||e.which==3) {alert(message);return false;}}}
    if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;document.onselectstart=clickIE}document.oncontextmenu=new Function("return false")
</script>
<script >
  function disableselect(e){
    return false
  }
  function reEnable(){
    return true
  }
  //if IE4+
  document.onselectstart=new Function ("return false")
  //if NS6
  if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
  }
  </script> */?>
  <!--Cấm click chuột phải-->
  <script src="https://www.google.com/recaptcha/api.js?render=<?=$config['recaptcha_sitekey']?>"></script>
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
    <script src="https://sp.zalo.me/plugins/sdk.js"></script>
    <?php } ?>
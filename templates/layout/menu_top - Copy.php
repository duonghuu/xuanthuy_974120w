<?php
    $d->reset();
    $sql="select ten$lang as ten,tenkhongdau,id from #_product_danhmuc where hienthi=1 and type='san-pham' order by stt,id desc";
    $d->query($sql);
    $product_danhmuc=$d->result_array();
?>
<!--Hover menu-->
<script language="javascript" type="text/javascript">
    $(document).ready(function() { 
        //Hover vào menu xổ xuống
        $(".menu ul li").hover(function(){
            $(this).find('ul:first').css({visibility: "visible",display: "none"}).show(300); 
            },function(){ 
            $(this).find('ul:first').css({visibility: "hidden"});
            }); 
        $(".menu ul li").hover(function(){
                $(this).find('>a').addClass('active2'); 
            },function(){ 
                $(this).find('>a').removeClass('active2'); 
        }); 
        //Click vào danh mục xổ xuống
        $("#danhmuc > ul > li > a").click(function(){
            if($(this).parents('li').children('ul').find('li').length>0)
            {
                $("#danhmuc ul li ul").hide(300);
                if($(this).hasClass('active'))
                {
                    $("#danhmuc ul li a").removeClass('active');
                    $(this).parents('li').find('ul:first').hide(300); 
                    $(this).removeClass('active');
                }
                else
                {
                    $("#danhmuc ul li a").removeClass('active');
                    $(this).parents('li').find('ul:first').show(300); 
                    $(this).addClass('active');
                }
                return false;
            }
        });
    });  
</script>
<!--Hover menu-->
<nav id="menu" class="clearfix">
    <a href="" class="logo"><img src="<?=lay_banner('logo')?>" alt="Banner" /></a>
<ul>
    <li><a class="<?php if($source=='index') echo 'active'; ?>" href=""><?=_trangchu?></a></li>
    <li><a class="<?php if($_REQUEST['com'] == 'gioi-thieu') echo 'active'; ?>" href="gioi-thieu.html"><?=_gioithieu?></a></li>
    <li><a class="<?php if($_REQUEST['com'] == 'san-pham') echo 'active'; ?>" href="san-pham.html"><?=_sanpham?></a>
        <?=for2cap('product_danhmuc','product_list','san-pham','san-pham','','/')?>
    </li>
    
    <li><a class="<?php if($_REQUEST['com'] == 'video') echo 'active'; ?>" href="video.html">Video</a></li>
    
    <li class="pull-right"><a class="<?php if($_REQUEST['com'] == 'lien-he') echo 'active'; ?>" href="lien-he.html"><?=_lienhe?></a>
    </li>
    <li class="pull-right"><a class="<?php if($_REQUEST['com'] == 'tin-tuc') echo 'active'; ?>" href="tin-tuc.html"><?=_tintuc?></a></li>
    <li class="pull-right"><a class="<?php if($_REQUEST['com'] == 'thu-vien') echo 'active'; ?>" href="thu-vien.html">Thư viện</a></li>
    
</ul>
</nav>
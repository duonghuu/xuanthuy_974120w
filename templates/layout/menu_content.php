<?php /* 
<i class="fas fa-home"></i> 
*/
?>
<li class="<?php if($source=='index') echo 'active'; ?>"><a href=""><?= _trangchu ?></a></li>
<li class="<?php if($com=='gioi-thieu') echo 'active'; ?>"><a href="gioi-thieu.html">
  <?= _gioithieu ?></a></li>
<li class="<?php if($com=='thuc-don') echo 'active'; ?>"><a href="thuc-don.html"><?= _thucdon ?></a>
  <?= for2cap('product_danhmuc','product_list','thuc-don','thuc-don','','/')?>
</li> 
<li class="<?php if($com == 'thu-vien') echo 'active'; ?>"><a href="thu-vien.html">
  <?= _thuvien ?></a></li>
<li class="<?php if($com == 'tin-tuc') echo 'active'; ?>"><a href="tin-tuc.html"><?= _tintuc ?></a></li>
<li class="<?php if($com == 'lien-he') echo 'active'; ?>"><a href="lien-he.html">
  <?= _lienhe ?></a></li>
<?php /* 
<?= for1('news_danhmuc','nang-luc','nang-luc','')?>
  */?>
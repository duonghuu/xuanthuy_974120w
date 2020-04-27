<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
<div class="sitemap-flex">
<ul class="mysitemap">
    
    <li class="<?php if($source=='index') echo 'active'; ?>"><a href=""><?= _trangchu ?></a></li> 
    <li><a href="gioi-thieu.html"><?= _gioithieu ?></a>
        <?= for1('news','gioi-thieu','gioi-thieu',$duoi='.html') ?>
    </li> 
    <li><a href="linh-vuc.html"><?= _linhvucdautu ?></a>
            <?= for1('news','linh-vuc','linh-vuc',$duoi='.html') ?>
        </li>
        <li><a href="quan-he-co-dong.html"><?= _quanhecodong ?></a>
    <?= for1('news','quan-he-co-dong','quan-he-co-dong',$duoi='.html') ?>
        </li>
        <li><a href="tin-tuc.html"><?= _tintuc ?></a>
    <?= for1('news','tin-tuc','tin-tuc',$duoi='.html') ?>
        </li>
        <li><a href="tuyen-dung.html"><?= _tuyendung ?></a>
    <?= for1('news','tuyen-dung','tuyen-dung',$duoi='.html') ?>
        </li>
        <li><a href="lien-he.html"><?= _lienhe ?></a></li>
</ul>

</div>
</div>
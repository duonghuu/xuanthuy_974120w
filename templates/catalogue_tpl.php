
<?php 
$hinhcatalogue=get_result("select thumb,photo from #_hinhanh where type='catalogue'");
?>
<div id="wowslider-container1">
    <div class="ws_images">
        <ul>
            <?php foreach ($hinhcatalogue as $key => $value) {
                
             ?>
                <li><img src="<?= _upload_hinhthem_l.$value["thumb"] ?>" title="catalogue" alt="catalogue"/></li>

            
                <?php } ?>

                    </ul>
    </div>
</div>   
<link href="css/wowslider.css" rel="stylesheet">
<script type="text/javascript" src="js/wowslider.js"></script>  
<script type="text/javascript" src="js/script.js"></script>
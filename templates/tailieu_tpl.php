<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
    
    <link rel="stylesheet" href="plugin/datatable/media/css/dataTables.bootstrap4.css">
    <table id="example" class="table table-striped table-bordered " style="width:100%">
        
        <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <?php 
                    $taitaptin=get_result("select ten$lang as ten,taptin,mota$lang as mota from table_news where type='tailieu' and hienthi>0 order by stt asc");
                    foreach ($taitaptin as $key => $value) { ?>
                        
                    
                    <tr>
                        <td><?= $value["ten"] ?></td>
                        <td><?= $value["mota"] ?></td>
                        <td><a style="font-size:20px" href="<?= _upload_khac_l.$value["taptin"] ?>" download><i class="fas fa-download"></i></a></td>
                    </tr>
                    <?php } ?>
                </tbody>
    </table>
    
</div>
<form action="" method="post" enctype="multipart/form-data">
    <div class="col-md-12 ">
        <div class="shadow-sm p-4 text-white bg-secondary mt-1">
        <h4>Upload file</h4>
        <div class="form-group">
            <input type="text" required="" class="form-control" placeholder="Tên" name="ten" />
        </div>
        <div class="form-group">
            <textarea name="mota" class="form-control" placeholder="Mô tả"></textarea>
        </div>
        <div class="form-group">
            <input type="file" required="" name="file" />
        </div>
        <input type="hidden" name="recaptcha2" id="recaptcha2">
        <input type="hidden" value="1" name="nltval">
        <input type="hidden" value="<?= time() ?>" name="nlttoken">
        <button type="submit" class="btn btn-primary">Gửi</button>
        </div>
    </div>
</form>

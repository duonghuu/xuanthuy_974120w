<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container">
<form action="" method="post" class="col-md-6 mx-auto">
    <input type="text" name="ten" class="form-control mb-1" placeholder="<?= _hovaten ?>" />
    <input type="text" name="email" class="form-control mb-1" placeholder="<?= _email ?>" />
    <input type="text" name="dienthoai" class="form-control mb-1" placeholder="<?= _dienthoai ?>" />
    <input type="text" name="diachi" class="form-control mb-1" placeholder="<?= _diachi ?>" />
    <textarea name="noidung" placeholder="<?= _noidung ?>" class="form-control mb-1" ></textarea>
    <input type="hidden" name="recaptcha2" id="recaptcha2">
    <input type="hidden" value="1" name="nltval">
    <input type="hidden" value="<?= time() ?>" name="nlttoken">
    <div class="text-center"><button class="btn btn-primary ">Gửi</button></div>
</form>
</div>
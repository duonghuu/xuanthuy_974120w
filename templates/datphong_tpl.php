<div class="tieude_giua"><div><?=$title_cat?></div></div>
<div class="box_container boxdat">
    <div class="row">
        <div class="col-md-8">
            <h4 class="text-uppercase title text-danger"><strong><?= _datphongngay ?></strong></h4>
            <form action="" method="post">
                <div class="form-box">
                    <div class="form-group"><label for=""><?= _hovaten ?> (<span class="text-danger">*</span>)</label><input type="text" required="true" name="dp[ten]" class="form-control"></div>
                    <div class="form-group"><label for=""><?= _dienthoai ?> (<span class="text-danger">*</span>)</label><input type="text" required="true" name="dp[dienthoai]" class="form-control"></div>
                </div>
                <div class="form-box">
                    <div class="form-group"><label for="">Email</label><input type="text" name="dp[email]" class="form-control"></div>
                    <div class="form-group"><label for=""><?= _diachi ?></label><input type="text" name="dp[diachi]" class="form-control"></div>
                </div>
                <div class="form-box">
                    <div class="form-group"><label for=""><?= _ngayden ?></label><input title="<?= _ngayden ?>" type="date" name="dp[ngayden]" value="<?= $datphong['ngayden'] ?>" class="form-control placeholder-2" id="ngayden" min="<?= date('Y-m-d',time()) ?>" required="true" aria-invalid="false" placeholder="<?= _ngayden ?>"></div>
                    <div class="form-group"><label for=""><?= _ngaydi ?></label><input title="<?= _ngaydi ?>" type="date" name="dp[ngaydi]" value="<?= $datphong['ngaydi'] ?>" class="form-control placeholder-2" id="ngaydi" min="<?= date('Y-m-d',time()) ?>" required="true" aria-invalid="false" placeholder="<?= _ngaydi ?>" <?php if(empty($datphong['ngaydi'])) echo 'disabled="disabled"'; ?> ></div>
                </div>
                <div class="form-box">
                    <div class="form-group">
                        <label for=""><?= _nguoilon ?></label>
                        <input type="number" placeholder="<?= _nguoilon ?>" class="form-control " required="true" name="dp[nguoilon]" min="1" value="<?= $datphong['nguoilon'] ?>">
                    </div>
                    <div class="form-group">
                        <label for=""><?= _treem ?></label>
                        <input type="number" placeholder="<?= _treem ?>" class="form-control " required="true" name="dp[treem]" min="0" value="<?= $datphong['treem'] ?>">
                    </div>
                </div>
                <div class="form-group">
                    <label for=""><?= _loaiphong ?></label>
                    <select required="true"  name="dp[loaiphong]" class="form-control"><option value=""><?= _loaiphong ?></option>
                    <?php foreach($room as $v){
                        if($id>0){
                            $selected = ($v["id"] == $id)?'selected':'';
                        }
                        echo '<option value="'.$v["ten"].'" '.$selected.'>'.$v["ten"].'</option>';} ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for=""><?= _noidung ?></label>
                    <textarea name="dp[noidung]" class="form-control" cols="30" rows="5" placeholder="<?= _noidung ?>"></textarea>
                </div>
                <input type="hidden" value="1" name="dpval">
                <input type="hidden" value="<?= time() ?>" name="dptoken">
                <div class="text-right"><button class="btn btn-default text-uppercase btn-danger" type="submit"><?= _datphong ?></button></div>
            </form>
        </div>
        <div class="col-md-4">
            <div class="cacphong">
                <?php foreach($room as $v){
                    echo '<div class="cacphong-item"><a href="'.get_url($v).'">
                            <figure><img src="'._upload_sanpham_l.$v["thumb"].'" alt="'.$v["ten"].'"></figure>
                            <h3>'.$v["ten"].'</h3>
                        </a></div>';
                } ?>
            </div>
        </div>
    </div>
<div class="clear"></div>
</div><!---END .box_container-->
<script language="javascript">  
  $(function() {
    // $("#ngaydi").attr("disabled", "disabled");
    $("#ngayden").on("change", function() {
        onCheckOut();
        onCheckin();
        $("#ngaydi").removeAttr("disabled");
    });
    $("#ngaydi").on("change", function() {
        onCheckOut();
        onCheckin();
    });
    function onCheckin() {
        if ($("#ngayden").val() !== "") {
            var dateMin_den = $('#ngayden').val();
            var rMin = new Date(dateMin_den);
            var rMiny = rMin.getFullYear();
            var rMinm = rMin.getMonth();
            var rMind = rMin.getDate();
        }
        if ($("#ngaydi").val() !== "") {
            var dateMin_ngaydi = $('#ngaydi').val();
            var rMin_ngaydi = new Date(dateMin_ngaydi);
            var rMin_ngaydi_d = rMin_ngaydi.getDate();

            if (rMin_ngaydi_d >= rMind) {
                console.log('OK');
            } else {
                var ngayale = '<?php echo _ngayalert; ?>';
                alert(ngayale+' (' + rMind + '/' + rMinm + '/' + rMiny + ')');
                $('#ngaydi').each(function resetDate() {
                    this.value = this.defaultValue;
                });
            }
        }
    }
    function onCheckOut() {
        if ($("#ngayden").val() !== "") {
            var $date_ngayden = $('#ngayden').val();
            $("#ngaydi").attr('min', $date_ngayden);
        }
    }
    });
</script>
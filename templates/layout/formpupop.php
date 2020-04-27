

<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Đặt bàn</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
<form action="" method="post">
      <!-- Modal body -->
      <div class="modal-body">
        <div class="form-group">
          <label for=""><strong>Thời gian tổ chức</strong></label>
          <input type="date" class="form-control" name="fpu3[thoigian]">
        </div>
        <hr>
        <input type="text" required="true" class="form-control" placeholder="<?= _hovaten ?>" name="fpu3[ten]" />
        <input type="text" class="form-control" placeholder="<?= _email ?>" name="fpu3[email]" />
        <input type="text" required="true"  class="form-control" placeholder="<?= _dienthoai ?>" name="fpu3[dienthoai]" />
        <textarea class="form-control" required="true" placeholder="<?= _noidung ?>" name="fpu3[note]" ></textarea>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <input type="hidden" name="recaptcha2" id="recaptcha2">
        <input type="hidden" name="rp3val" value="1">
        <input type="hidden" name="rp3token" value="<?= time() ?>">
        <button type="submit" class="btn btn-primary" >Gửi</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
</form>
    </div>
  </div>
</div>
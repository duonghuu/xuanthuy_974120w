<?php 
if(isset($_SESSION['donhang']) && !empty($_SESSION['donhang'])){
 ?>

<div class="panel panel-default">
  <div class="panel-heading "><h4 class="text-uppercase"><?= _xacnhan." "._dattour ?></h4></div>
  <div class="panel-body">
    <h4 class="text-capitalize"><?=$row_detail['ten']?></h4>
    <p><?= _masp ?>: <strong><?=$row_detail['masp']?></strong></p>
    <p><?= _thoigian ?>: <strong><?=$row_detail['dientich']?></strong></p>
    <p><?= _khoihanh ?>: <strong><?=date('d/m/Y',$row_detail['phaply'])?></strong></p>
    
  </div>
</div>
<div class="table-giatour">
  <div class="table-giatour-th">
    <div class="table-giatour-title">Giá tour</div>
    <div class="table-giatour-title">Việt Nam</div>
    <div class="table-giatour-title">Nước ngoài</div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Giá người lớn (Từ 12 tuổi trở lên)</div>
    <div class="giatour-dt"><?=num_format($row_detail['nguoilon'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['nguoilon1'])?></div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Giá trẻ em (Từ 10 - 12 tuổi)</div>
    <div class="giatour-dt"><?=num_format($row_detail['treem'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['treem1'])?></div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Giá em bé (Từ 5 - dưới 10 tuổi)</div>
    <div class="giatour-dt"><?=num_format($row_detail['embe'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['embe1'])?></div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Giá em nhỏ (Từ 2 - dưới 5 tuổi)</div>
    <div class="giatour-dt"><?=num_format($row_detail['emnho'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['emnho1'])?></div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Giá bé sơ sinh (Dưới 2 tuổi)</div>
    <div class="giatour-dt"><?=num_format($row_detail['sosinh'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['sosinh1'])?></div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Phụ thu phòng đơn</div>
    <div class="giatour-dt"><?=num_format($row_detail['phongdon'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['phongdon1'])?></div>
  </div>
  <div class="table-giatour-tr">
    <div class="giatour-dt">Phụ thu Visa</div>
    <div class="giatour-dt"><?=num_format($row_detail['visa'])?></div>
    <div class="giatour-dt"><?=num_format($row_detail['visa1'])?></div>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading "><h4 class="text-uppercase"><?= _thongtinlienhe ?></h4></div>
  <div class="panel-body">
    <div class="form-group-row">
      <div class="form-group">
        <label for=""><?= _hovaten ?>: </label> <?= $_SESSION["donhang"]["hoten"] ?>
      </div>
      <div class="form-group">
        <label for=""><?= _diachi ?>: </label> <?= $_SESSION["donhang"]["diachi"] ?>
      </div>

    </div>
    <div class="form-group-row">
      <div class="form-group">
        <label for=""><?= _dienthoai ?>: </label> <?= $_SESSION["donhang"]["dienthoai"] ?>
      </div>
      <div class="form-group">
        <label for=""><?= _email ?>: </label> <?= $_SESSION["donhang"]["email"] ?>
      </div>
    </div>
    <div class="form-group-full">
      <div class="form-group">
        <label for=""><?= _noidung ?>: </label> <?= $_SESSION["donhang"]["noidung"] ?>
      </div>

    </div>
    
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading "><h4 class="text-uppercase"><?= _danhsachkhachhang ?></h4></div>
  <div class="panel-body">
    <div class="table-customer text-center">

      <div class="tbl-cus-head">
        <div class="tbl-cus-title"><?= _hovaten ?></div>
        <div class="tbl-cus-title"><?= _ngaysinh ?></div>
        <div class="tbl-cus-title"><?= _gioitinh ?></div>
        <div class="tbl-cus-title"><?= _loaikhach ?></div>
        <div class="tbl-cus-title"><?= _dotuoi ?></div>
        <div class="tbl-cus-title"><?= _phongdon ?></div>
        <div class="tbl-cus-title"><?= _visa ?></div>
        <div class="tbl-cus-title"><?= _tonggia ?></div>
      </div>
      <?php 
      $a_tuoi = array("nguoilon"=>_nguoilon, "treem"=>_treem, "embe"=>_embe, "emnho"=>emnho, "sosinh"=>_sosinh );
      foreach ($_SESSION["chitietdonhang"] as $key => $value) {       ?>
      <div class="tbl-cus-row">
        <div><?= $value["ten"] ?></div>
        <div><?= date('d/m/Y',$value["ngay"]) ?></div>
        <div><?= ($value["gioi"]==1)?_gtnu:_gtnam ?></div>
        <div><?= ($value["gioi"]==1)?_nuocngoai:_vietnam ?></div>
        <div><?= $a_tuoi[$value["tuoi"]] ?></div>
        <div><?= ($value["phong"]==1)?_co:_khong ?></div>
        <div><?= ($value["visa"]==1)?_co:_khong ?></div>
        <div><?= num_format($value["sum_perone"]) ?></div>
        </div>
      <?php } ?>
      </div>
    </div>
  </div>
  <form action="" method="post">
    <div class="text-center"><button type="submit" class="btn btn-primary"><?= _trangchu ?></button></div>
    <input type="hidden" value="1" name="rp2val">
    </form>
<?php }else{
  redirect($config_url_ssl);
} ?>
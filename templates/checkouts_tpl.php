<div class="checkouts-bg">
  <div class="checkouts-cart-info">
    <div class="cart-info-product-list">
        <?php 
        foreach($_SESSION['cart'] as $k => $v){
            $pid = $v['productid'];
            $size = $v['size'];
            $mausac = $v['mausac'];
            $q = $v['qty'];
            $pmasp = get_code($pid);
            $pname = get_product_name($pid);
            $pphoto = get_product_photo($pid);
            $img = _upload_sanpham_l.$pphoto;
            if($q == 0) continue;
             ?>
      <div class="product">
        <div class="product-image">
          <figure>
            <img class="product-thumbnail-image" alt="<?= $pname ?>" src="<?= $img ?>">
          </figure>
          <span class="product-thumbnail-quantity"><?= $q ?></span>
        </div>
        <div class="product-description">
          <span class="product-description-name"><?= $pname ?></span>
          <span class="product-description-variant">
            <?php if(!empty($size)){ ?><strong><?= $size ?></strong><?php } ?> 
            <?php if(!empty($mausac)){ ?><span class="mau" style="background: <?= $mausac ?>"></span><?php } ?>
          </span>
        </div>
        <div class="product-quantity visually-hidden"><?= $q ?></div>
        <div class="product-price"><span><?=number_format(get_price($pid)*$q,0, ',', '.') ?>₫</span></div>
      </div>
  <?php } ?>
    </div>
   <?php /* 
    <div class="order-summary-section-discount">
         <input type="text" placeholder="Mã giảm giá" name="coupon" id="coupon" class="form-control">
         <button class="btn btn-primary" id="sudung">Sử dụng</button>
         <p class="field-message field-message-error show-coupon">Không tìm thấy mã giảm giá</p>
       </div> 
   */?>

    <div class="order-summary-section-total-lines">
      <div class="total-line total-line-subtotal">
        <label for="">Tạm tính</label>
        <span><?=number_format(get_order_total(),0, ',', '.')?>₫</span>
      </div>
      <div class="total-line total-line-reduction">
        <label for="">Mã giảm giá</label>
        <span>0₫</span>
      </div>
      <?php /* 
      <div class="total-line total-line-shipping">
              <label for="">Phí vận chuyển</label>
              <span>0₫</span>
            </div> 
      */?>
      <div class="total-line-table-footer">
        <div class="total-line">
          <label for="">Tổng cộng</label>
          <span><?=number_format(get_order_total(),0, ',', '.')?>₫</span>
        </div>
      </div>
    </div>
  </div>
  <div class="checkouts-customer-info">

    <div class="main">
      <div class="main-header">
        <h2 class="logo-text"><a href=""><?= $company["ten"] ?></a></h2>
        <?php echo $bread->display(); ?>
      </div>
      <form method="post" name="frm_order" id="frm_order" action="" enctype="multipart/form-data" onsubmit="return check();">
      <div class="main-content">
        <div class="step">
          <div class="step-sections">
            <div class="section">
              <div class="section-header">
                <h2 class="section-title">Thông tin giao hàng</h2>
              </div>
              <div class="section-content">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="<?= _hovaten ?>" name="hoten">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="<?= _dienthoai ?>" name="dienthoai">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="<?= _diachi ?>" name="diachi">
                </div>
                <div class="form-group d-flex justify-content-between">
                  <select name="thanhpho" id="thanhpho" class="form-control col">
                      <option value=""><?=_chontinhthanhpho?></option>
                      <?php foreach($place_city as $k => $v) { ?>
                          <option value="<?=$v['id']?>"><?=$v['ten']?></option>
                      <?php } ?>
                  </select>
                  <select name="quan" id="quan" class="form-control col ml-2">
                    <option><?=_chonquanhuyen?></option>
                  </select>
                </div>
              </div>
              <div class="section-header">
                <h2 class="section-title">Thông tin giao hàng</h2>
              </div>
              <div class="section-content">
                    <div class="cus-radio-items content-box">
                        <?php foreach($get_httt as $k=>$v){ ?>
                            <label class="cus-radio <?= ($k==0)?'active':'' ?>"><?=$v['ten']?>
                            <input type="radio" <?= ($k==0)?'checked="checked"':'' ?> name="httt" value="<?=$v['id']?>">
                            <span class="checkmark"></span>
                        </label>
                        <div class="content ">
                            <?=$v['noidung']?>
                        </div>
                    <?php } ?>
                </div>
              </div>
            </div>      
          </div> <!-- end step-sections  -->
          <div class="step-footer">
            <a href="gio-hang.html" class="step-footer-previous-link">
                <svg class="previous-link-icon icon-chevron icon" xmlns="http://www.w3.org/2000/svg" width="6.7" height="11.3" viewBox="0 0 6.7 11.3"><path d="M6.7 1.1l-1-1.1-4.6 4.6-1.1 1.1 1.1 1 4.6 4.6 1-1-4.6-4.6z"></path></svg>
                <?= _giohang ?>
            </a>
            <button class="btn btn-primary" type="button">Hoàn tất đơn hàng</button>
          </div> <!-- end step-footer  -->
        </div>
      </div>      <!-- end main-content  -->
      <input id="code_coupon" name="code_coupon" type="hidden" value="0">
      <input id="price_coupon" name="price_coupon" type="hidden" value="0">
      <input id="price_ship" name="price_ship" type="hidden" value="0">
      <input id="gia_cart" name="gia_cart" type="hidden" value="<?= get_order_total() ?>">
      <input id="tong_gia" name="tong_gia" type="hidden" value="<?= get_order_total() ?>">
      </form>
    </div>
  </div>
</div>
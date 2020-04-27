<?php 
$city_items = get_result("select id,ten from table_place_city where hienthi>0 order by id");
$hientrang = get_result("select id,ten from table_news where type='hientrang' and hienthi>0 order by id");
$huong = get_result("select id,ten from table_news where type='huong' and hienthi>0 order by id");
 ?>
<div class="tieude_giua"><div><?=$title_cat?></div><span></span></div>
<div class="dangtin-flex">
   
    <div class="dangtin-right">
        <div class="panel panel-default">
          <div class="panel-heading"><strong>Tin đăng mẫu</strong></div>
          <div class="panel-body"><?= $tinmau["noidung"] ?></div>
        </div>
    </div>
    <div class="dangtin-left">
        <form action="save-tin.html" method="post">
            <div class="form-group">
                <label for="">Danh mục BĐS (<span>*</span>)</label>
                <select required="" onchange="city_onchange('id_list',this.value)" name="tin[id_danhmuc]" class="form-control" id="id_danhmuc">
                    <option value="">Chọn danh mục</option>
                    <?php foreach ($product_danhmuc as $key => $value) {
                        $chkstu = ($value["id"] == $item["id_danhmuc"])?'selected':'';
                        echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
                </select>
            </div>
            <div class="form-group">
                <label for="">Tỉnh/Thành (<span>*</span>)</label>
                <select name="tin[id_city]" onchange="city_onchange('id_dist',this.value)" required="" class="form-control" id="id_city">
                    <option value="">Chọn tỉnh/thành</option>
                    <?php 
                    
                    foreach ($city_items as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_city"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
                </select>
            </div>
            <div class="form-group">
                <label for="">Quận/Huyện (<span>*</span>)</label>
                <select required="" name="tin[id_dist]" onchange="city_onchange('id_ward',this.value)" class="form-control" id="id_dist">
                    <option value="">Chọn quận/huyện</option>
                    <?php 
                    if(!empty($item["id_city"])){
                        $dist_items = get_result("select id,ten from table_place_dist where id_city='".$item["id_city"]."' and hienthi>0 order by id");
                    }
                    
                    foreach ($dist_items as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_dist"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
                </select>
            </div>
            <div class="form-group">
                <label for="">Phường/Xã</label>
                <select name="tin[id_ward]" onchange="city_onchange('id_street',this.value)" class="form-control" id="id_ward">
                    <option value="">Chọn phường/xã</option>
                    <?php 
                    if(!empty($item["id_dist"])){
                        $ward_items = get_result("select id,ten from table_place_ward where id_dist='".$item["id_dist"]."' and hienthi>0 order by id");
                    }
                    
                    foreach ($ward_items as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_ward"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
            </select>
            </div>
            <div class="form-group ">
                <label for="">Địa chỉ </label>
                <div class="formduong">
                    <input type="text" value="<?= $item["diachi"] ?>" name="tin[diachi]" placeholder="Số nhà" class="form-control">
                    <select name="tin[id_street]" class="form-control" id="id_street">
                        <option value="">Chọn đường</option>
                        <?php 
                    if(!empty($item["id_ward"])){
                        $street_items = get_result("select id,ten from table_place_street where id_ward='".$item["id_ward"]."' and hienthi>0 order by id");
                    }
                    
                    foreach ($street_items as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_street"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
                </select>
                </div>
            </div>
            <div class="form-group">
                <label for="">Loại bất động sản (<span>*</span>)</label>
                <select name="tin[id_list]" class="form-control" id="id_list">
                    <option value="0">Chọn danh mục</option>
                    <?php 
                    if(!empty($item["id_danhmuc"])){
                        $list_items = get_result("select id,ten from table_product_list where id_danhmuc='".$item["id_danhmuc"]."' and hienthi>0 order by id");
                    }
                    
                    foreach ($list_items as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_list"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
            </select>
            </div>
            <div class="form-group">
                <label for="">Diện tích (<span>*</span>)</label>
                <input type="text" value="<?= $item["dientich"] ?>" name="tin[dientich]" placeholder="Diện tích" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Pháp lý</label>
                <select name="tin[id_hientrang]" class="form-control" id="id_hientrang">
                    <option value="0">Chọn danh mục</option>
                    <?php foreach ($hientrang as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_hientrang"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
                </select>
            </div>
            <div class="form-group">
                <label for="">Hướng</label>
                <select name="tin[id_huong]" class="form-control" id="id_huong">
                    <option value="0">Chọn danh mục</option>
                    <?php foreach ($huong as $key => $value) {
                      $chkstu = ($value["id"] == $item["id_huong"])?'selected':'';
                      echo '<option '.$chkstu.' value="'.$value["id"].'">'.$value["ten"].'</option>';
                    } ?>
                </select>
            </div>
            <div class="form-group">
                <label for="">Giá (<span>*</span>)</label>
                <input required="" value="<?= $item["gia"] ?>" name="tin[gia]" onkeypress="return validateQty(this,event);" placeholder="Giá" type="text" class="form-control conso">
            </div>
            <div class="form-group">
                <label for="">Tiêu đề (<span>*</span>)</label>
                <input required="" value="<?= $item["ten"] ?>" type="text" id="ten" placeholder="Tiêu đề" name="tin[ten]" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Nội dung (<span>*</span>)</label>
                <textarea required="" id="noidung" placeholder="Nội dung" name="tin[noidung]" class="form-control" rows="5"><?= $item["noidung"] ?></textarea>
            </div>
            <div class="form-group">
                <label for="">Hình đại diện</label>
                <div class="formduong">
                    <input type="file" id="file" name="file" accept="image/*" onchange="loadFile(event)" /> 
                    <img id="output" src="<?= _upload_sanpham_l.$item["photo"] ?>" onerror="this.src='images/chonhinh.png';" style="max-width:150px !important" alt="NO PHOTO" />   
                </div>
                
            </div>
            <div class="form-group">
                <label for="">Hình thêm</label>
                <div class="formduong">
                    <a class="file_input" data-jfiler-name="files" data-jfiler-extensions="jpg, jpeg, png, gif"><i class="fa fa-paperclip"></i>Thêm ảnh</a>   
                </div>
                
            </div>
            <div class="form-group">
                <label for="">&nbsp;</label>
                <div class="text-left">
                    <button type="submit" class="btn btn-primary" >Gửi</button>
                    <a href="tin-dang.html" class="btn btn-default" >Hủy</a>
                </div>
                
            </div>
            <input type="hidden" name="id" id="id" value="<?=@$item['id']?>" />
        </form>
    </div>
    
</div>
<link href="plugin/multiupload/css/jquery.filer.css" type="text/css" rel="stylesheet" />
<link href="plugin/multiupload/css/themes/jquery.filer-dragdropbox-theme.css" type="text/css" rel="stylesheet" />
<script src="admin/js/jquery.price_format.2.0.js" type="text/javascript"></script>
<!-- MultiUpload -->
<script type="text/javascript" src="plugin/multiupload/jquery.filer.min.js"></script>
<script type="text/javascript">
    function city_onchange($el,$id_pare)
    {
     $.ajax({
       type:'post',
       url:'ajax/place.php',
       dataType:'html',
       data:{id:$id_pare,act:$el},
       success:function(kq){
         $('#'+$el).html(kq);
       }
     });
     return false;
    }

    function validateQty(el, evt) {
       var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode != 45 && charCode != 8 && (charCode != 46) && (charCode < 48 || charCode > 57))
            return false;
        if (charCode == 46) {
            if ((el.value) && (el.value.indexOf('.') >= 0))
                return false;
            else
                return true;
        }
        return true;
        var charCode = (evt.which) ? evt.which : event.keyCode;
        var number = evt.value.split('.');
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
    };
    var loadFile = function(event) {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };
    $(document).ready(function() {
        $('.conso').priceFormat({
            limit: 13,
            prefix: '',
            centsLimit: 0
        });
        $('.file_input').filer({
            showThumbs: true,
            templates: {
                box: '<ul class="jFiler-item-list"></ul>',
                item: '<li class="jFiler-item">\
                <div class="jFiler-item-container">\
                <div class="jFiler-item-inner">\
                <div class="jFiler-item-thumb">\
                <div class="jFiler-item-status"></div>\
                <div class="jFiler-item-info">\
                <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                </div>\
                {{fi-image}}\
                </div>\
                <div class="jFiler-item-assets jFiler-row">\
                <ul class="list-inline pull-left">\
                <li><span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span></li>\
                </ul>\
                <ul class="list-inline pull-right">\
                <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                </ul>\
                </div>\<input type="text" name="stthinh[]" class="stthinh" />\
                </div>\
                </div>\
                </li>',
                itemAppend: '<li class="jFiler-item">\
                <div class="jFiler-item-container">\
                <div class="jFiler-item-inner">\
                <div class="jFiler-item-thumb">\
                <div class="jFiler-item-status"></div>\
                <div class="jFiler-item-info">\
                <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                </div>\
                {{fi-image}}\
                </div>\
                <div class="jFiler-item-assets jFiler-row">\
                <ul class="list-inline pull-left">\
                <span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span>\
                </ul>\
                <ul class="list-inline pull-right">\
                <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                </ul>\
                </div>\<input type="text" name="stthinh[]" class="stthinh" />\
                </div>\
                </div>\
                </li>',
                progressBar: '<div class="bar"></div>',
                itemAppendToEnd: true,
                removeConfirmation: true,
                _selectors: {
                    list: '.jFiler-item-list',
                    item: '.jFiler-item',
                    progressBar: '.bar',
                    remove: '.jFiler-item-trash-action',
                }
            },
            addMore: true
        });
    });
</script>
<div class="search-box">

    <div class="search-box-container">
        <div class="search-box-head"><i class="fas fa-search"></i> Hỗ trợ tìm kiếm</div>
        <div class="search-box-body">
            <form action="index.html" method="post">
            <div class="stv-radio-tabs-wrapper">
                <?php foreach ($product_danhmuc as $key => $value) {
                    $chksta = ($key == 0)?'checked':'';
                    ?>
                <input type="radio" class="stv-radio-tab" name="radioTabTest" value="<?= $value["id"] ?>" id="tab<?= $value["id"] ?>" <?= $chksta ?> />
                <label for="tab<?= $value["id"] ?>"><?= $value["mota"] ?></label>
                <?php } ?>
                
            </div>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <select name="" id="" class="form-control"><option value="">Chọn danh mục</option></select>
            <button type="submit" class="btn center-block btn-default btntimkiem">Tìm kiếm</button>
            <p id="sotinmoi">Có <span>000</span> tin mới trong ngày</p>
            </form>
        </div>
    </div>
</div>
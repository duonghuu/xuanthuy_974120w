<div class="tin-video-bg">
  <div class="container">
    <div class="tin-video-flex">
      <div class="tin-bg">
        <div class="title text-uppercase">Tin tức sự kiện</div>
        <?php if($c_tinnb>0){
        $link = get_url($tinnb[0], "tin-tuc");
        $img = _upload_tintuc_l.$tinnb[0]["photo"];
         ?>
        <div class="tinnb-flex">
        <div class="first-news">
          <a href="<?= $link ?>">
            <figure><img src="<?= $img ?>" alt="<?= $tinnb[0]["ten"] ?>"></figure>
            <h5><?= $tinnb[0]["ten"] ?></h5>
            <p><?= $tinnb[0]["mota"] ?></p>
            <span class="btn-idx">Xem chi tiết</span>
          </a>
        </div>
        <div class="tinnb-main">
          <?php foreach ($tinnb as $key => $value) { 
            $link = get_url($value, "tin-tuc");
            $img = _upload_tintuc_l.$value["photo"];
            ?>
          <div class="tinnb-item"><a href="<?= $link ?>">
              <figure><img src="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure>
              <div class="info">
                <h5><?= $value["ten"] ?></h5>
                <p><?= $value["mota"] ?></p>
              </div>
            </a></div>
          <?php } ?>
        </div>
        </div>
        <?php } ?>
      </div>
      <div class="video-bg">
        <div class="title text-uppercase">Video clip</div>
        <div id="video-idx">
        </div>
        <div class="video-khac-main">
          <?php foreach ($video as $key => $value) { 
            $iden = getYoutubeIdFromUrl($value["link"]);
            $img = "https://i.ytimg.com/vi/".$iden."/mqdefault.jpg";
            ?>
            <div class="video-khac"><a href="#" data-val="<?= $iden ?>">
              <figure><img src="<?= $img ?>" alt="<?= $value["ten"] ?>"></figure></a></div>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>
</div>
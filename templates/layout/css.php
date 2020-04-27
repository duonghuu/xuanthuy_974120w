<!-- Bootstrap CSS CDN -->
<link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <!-- Bootstrap CSS local fallback -->
  <script>
    var test = document.createElement("div")
    test.className = "hidden d-none"

    document.head.appendChild(test)
    var cssLoaded = window.getComputedStyle(test).display === "none"
    document.head.removeChild(test)

    if (!cssLoaded) {
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "css/bootstrap.min.css";

        document.head.appendChild(link);
    }
  </script>
<?php /* <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="main.css"> */?>
<link rel="stylesheet" type="text/css" href="main.css">
<?php if($template == "product_detail"){ ?>
<link rel="stylesheet" media="screen" href="css/magiczoomplus/magiczoomplus.css">
<?php } ?>
<?php if($config['reponsive']==true) { ?>
  <?php /* <link rel="stylesheet" href="css/mobile.css"> */?>
<?php } ?>

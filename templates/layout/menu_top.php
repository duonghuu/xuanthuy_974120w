<div class="nav-bg">
    <div class="container">
    <div class="main-nav">
      <ul >
        <?php include _template."layout/menu_content.php";?>
      </ul>
      <div id="search">
        <div class="my-search">
          <input type="text" class="form-control keyword" required="true" 
          onkeypress="doEnter(event)" value="<?=_nhaptukhoatimkiem?>..." 
          onclick="if(this.value=='<?=_nhaptukhoatimkiem?>...'){this.value=''}" 
          onblur="if(this.value==''){this.value='<?=_nhaptukhoatimkiem?>...'}"> 
          <span onclick="onSearch($(this));return false;" class="btn_search">
            <i class="fas fa-search"></i></span>
          </div>
        </div> 
      <?php /* 
      <button class="openBtn timkiem_icon" ><i class="fas fa-search"></i></button>
            
      */?>
    <?php /*
         <div id="myOverlay" class="overlay" style="display: none;">
        <span class="closebtn" onclick="closeSearch()" title="Close Overlay">×</span> 
        <div class="overlay-content"><input type="text" autocomplete="off" placeholder="Nhập từ khóa cần tìm"
         class="keyword" required="true" placeholder="<?=_nhaptukhoatimkiem?>..." 
        onclick="if(this.value=='<?=_nhaptukhoatimkiem?>...'){this.value=''}" 
        onblur="if(this.value==''){this.value='<?=_nhaptukhoatimkiem?>...'}">
        <button type="button" onclick="onSearch($(this));return false;"><i class="fas fa-search"></i>
        </button></div> </div> 

    */?>
  </div>
  </div>
  </div>
<?php /* 
<script> function openSearch() {document.getElementById("myOverlay").style.display = "block"; } function closeSearch() {document.getElementById("myOverlay").style.display = "none"; } </script> 
<script type="text/javascript">
  $(document).ready(function() {
    $('.timkiem_icon').click(function(event) {
      if($('#search').hasClass('hien')){
        $('#search').removeClass('hien');
      }else{
        $('#search').addClass('hien');
      }
    });
  });
</script>
*/?>
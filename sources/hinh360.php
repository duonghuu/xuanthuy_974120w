<?php  if(!defined('_source')) die("Error");
@$id =   (int)trim(strip_tags(addslashes($_GET['id'])));
if($id>0)
{
    $row_detail = get_fetch("select *,ten$lang as ten,mota$lang as mota,noidung$lang as noidung FROM #_news where hienthi=1 and id='$id' limit 0,1");
    if(empty($row_detail)){redirect($config_url_ssl.'/404.php');}
}
<?php  if(!defined('_source')) die("Error");
if($_SESSION[$login_name]==false)
{
    transfer(_banchuadangnhap, 'http://'.$config_url);
}
$tinmau = get_fetch("select noidung$lang as noidung from table_about where type='tinmau'");
@define ( _width_thumb , 200 );
@define ( _height_thumb , 130 );
@define ( _style_thumb , 1 );
switch($com){

    case "tin-dang":
    get_items();
    $template_sub = "product/items";
    break;
    case "dang-tin":
    break;
    case "sua-tin":
    get_item();
    break;
    case "save-tin":
    save_item();
    break;
    case "xoa-tin":
    delete_item();
    break;
}
function fns_Rand_digit($min,$max,$num)
{
    $result='';
    for($i=0;$i<$num;$i++){
        $result.=rand($min,$max);
    }
    return $result;
}
function get_items(){
    global $d, $tindangs, $url_link,$totalRows , $pageSize, $offset,$paging,$urlcu,$type;

    $where.=" and type='".$type."'";
    if((int)$_SESSION['login']["id"]!='')
    {
        $where.=" and id_thanhvien=".(int)$_SESSION['login']["id"]."";
    }
    if((int)$_REQUEST['id_danhmuc']!='')
    {
        $where.=" and id_danhmuc=".(int)$_REQUEST['id_danhmuc']."";
    }
    if((int)$_REQUEST['id_list']!='')
    {
        $where.=" and id_list=".(int)$_REQUEST['id_list']."";
    }
    if((int)$_REQUEST['id_cat']!='')
    {
        $where.=" and id_cat=".(int)$_REQUEST['id_cat']."";
    }
    if((int)$_REQUEST['id_item']!='')
    {
        $where.=" and id_item=".(int)$_REQUEST['id_item']."";
    }
    if($_REQUEST['key']!='')
    {
        $where.=" and ten like '%".$_REQUEST['key']."%'";
    }
    $where.= " order by id_danhmuc,id_list,id_cat,id_item,stt asc,id desc";

    $sql="SELECT count(id) AS numrows FROM #_product where id<>0 $where";
    $d->query($sql);
    $dem=$d->fetch_array();
    $totalRows=$dem['numrows'];
    $page=$_GET['p'];

    $pageSize=20;
    $offset=10;

    if ($page=="")
        $page=1;
    else
        $page=$_GET['p'];
    $page--;
    $bg=$pageSize*$page;

    $sql = "select * from #_product where id<>0 $where limit $bg,$pageSize";
    $d->query($sql);
    $tindangs = $d->result_array();
    $url_link="tin-dang.html".$urlcu;
}
function get_item(){
    global $d, $item,$urlcu,$uudiem_value,$uptaptin_value;
    $id = isset($_GET['id']) ? themdau($_GET['id']) : "";
    if(!$id)
        transfer("Không nhận được dữ liệu", "tin-dang.html");

    $sql = "select * from #_product where id='".$id."'";
    $d->query($sql);
    if($d->num_rows()==0) transfer("Dữ liệu không có thực", "tin-dang.html");
    $item = $d->fetch_array();
}
function save_item(){
    global $d,$config,$urlcu;
    $file_name=$_FILES['file']['name'];

    if(empty($_POST)) transfer("Không nhận được dữ liệu", "dang-tin.html");
    $id = isset($_POST['id']) ? themdau($_POST['id']) : "";
    $data=$_POST["tin"];
    if($id){
        $id =  themdau($_POST['id']);
        if($photo = upload_image("file", _format_duoihinh, _upload_sanpham_l,$file_name)){
            $data['photo'] = $photo;
            if(_width_thumb > 0 and _height_thumb > 0)
            $data['thumb'] = create_thumb($data['photo'], _width_thumb, _height_thumb, _upload_sanpham_l,$file_name,_style_thumb);
            $d->setTable('product');
            $d->setWhere('id', $id);
            $d->select();
            if($d->num_rows()>0){
                $row = $d->fetch_array();
                delete_file(_upload_sanpham_l.$row['photo']);
                delete_file(_upload_sanpham_l.$row['thumb']);
            }
        }

        $data["id_danhmuc"] = (int)$data["id_danhmuc"];
        $data["id_city"] = (int)$data["id_city"];
        $data["id_dist"] = (int)$data["id_dist"];
        $data["id_ward"] = (int)$data["id_ward"];
        $data["id_street"] = (int)$data["id_street"];
        $data["id_list"] = (int)$data["id_list"];
        $data["id_hientrang"] = (int)$data["id_hientrang"];
        $data["id_huong"] = (int)$data["id_huong"];
        $data["ten"] = (string)trim(strip_tags($data['ten']));
        $data["noidung"] = (string)trim(strip_tags($data['noidung']));
        $data["tenkhongdau"] = changeTitle($data['ten']);
        $data['gia'] = str_replace(',','',$data['gia']);
        $data["dientich"] = (string)trim(strip_tags($data['dientich']));
        $data["ngaysua"] = time();
        $d->setTable('product');
        $d->setWhere('id', $id);
        if($d->update($data))
        {
                if (isset($_FILES['files'])) {
                 $arr_chuoi = str_replace('"','',$_POST['jfiler-items-exclude-files-0']);
                 $arr_chuoi = str_replace('[','',$arr_chuoi);
                 $arr_chuoi = str_replace(']','',$arr_chuoi);
                 $arr_file_del = explode(',',$arr_chuoi);
                for($i=0;$i<count($_FILES['files']['name']);$i++){
                    if($_FILES['files']['name'][$i]!=''){
                        if(!in_array(($_FILES['files']['name'][$i]),$arr_file_del,true))
                        {
                            $file['name'] = $_FILES['files']['name'][$i];
                            $file['type'] = $_FILES['files']['type'][$i];
                            $file['tmp_name'] = $_FILES['files']['tmp_name'][$i];
                            $file['error'] = $_FILES['files']['error'][$i];
                            $file['size'] = $_FILES['files']['size'][$i];
                            $file_name = images_name($_FILES['files']['name'][$i]);
                            $photo = upload_photos($file, _format_duoihinh, _upload_hinhthem_l,$file_name);
                            $data1['photo'] = $photo;
                            $data1['thumb'] = create_thumb($data1['photo'], _width_thumb, _height_thumb, _upload_hinhthem_l,$file_name,_style_thumb);
                            $data1['stt'] = $_POST['stthinh'][$i];
                            $data1['type'] = 'bat-dong-san';
                            $data1['id_hinhanh'] = $id;
                            $data1['hienthi'] = 1;
                            $d->setTable('hinhanh');
                            $d->insert($data1);
                        }
                    }
                }
            }
            redirect("tin-dang.html");
        }
        else
            transfer("Cập nhật dữ liệu bị lỗi", "tin-dang.html");
    }else{

        if($photo = upload_image("file", _format_duoihinh, _upload_sanpham_l,$file_name))
        {
            $data['photo'] = $photo;
            if(_width_thumb > 0 and _height_thumb > 0)
            $data['thumb'] = create_thumb($data['photo'], _width_thumb, _height_thumb, _upload_sanpham_l,$file_name,_style_thumb);
        }
        $data["id_danhmuc"] = (int)$data["id_danhmuc"];
        $data["id_city"] = (int)$data["id_city"];
        $data["id_dist"] = (int)$data["id_dist"];
        $data["id_ward"] = (int)$data["id_ward"];
        $data["id_street"] = (int)$data["id_street"];
        $data["id_list"] = (int)$data["id_list"];
        $data["id_hientrang"] = (int)$data["id_hientrang"];
        $data["id_huong"] = (int)$data["id_huong"];
        $data["ten"] = (string)trim(strip_tags($data['ten']));
        $data["noidung"] = (string)trim(strip_tags($data['noidung']));
        $data["tenkhongdau"] = changeTitle($data['ten']);
        $data['gia'] = str_replace(',','',$data['gia']);
        $data["dientich"] = (string)trim(strip_tags($data['dientich']));
        $data["ngaytao"] = time();
        $data["stt"] = 1;
        $data["type"] = "bat-dong-san";
        $data["id_thanhvien"] = $_SESSION["login"]["id"];
        $d->setTable('product');
        if($d->insert($data))
        {
            $id=mysql_insert_id();
            $type=$_POST['type'];
                 if (isset($_FILES['files'])) {
                 $arr_chuoi = str_replace('"','',$_POST['jfiler-items-exclude-files-0']);
                 $arr_chuoi = str_replace('[','',$arr_chuoi);
                 $arr_chuoi = str_replace(']','',$arr_chuoi);
                 $arr_file_del = explode(',',$arr_chuoi);
                 for($i=0;$i<count($_FILES['files']['name']);$i++){
                    if($_FILES['files']['name'][$i]!=''){
                        if(!in_array(($_FILES['files']['name'][$i]),$arr_file_del,true))
                        {
                            $file['name'] = $_FILES['files']['name'][$i];
                            $file['type'] = $_FILES['files']['type'][$i];
                            $file['tmp_name'] = $_FILES['files']['tmp_name'][$i];
                            $file['error'] = $_FILES['files']['error'][$i];
                            $file['size'] = $_FILES['files']['size'][$i];
                            $file_name = images_name($_FILES['files']['name'][$i]);
                            $photo = upload_photos($file, _format_duoihinh, _upload_hinhthem_l,$file_name);
                            $data1['photo'] = $photo;
                            $data1['thumb'] = create_thumb($data1['photo'], _width_thumb, _height_thumb, _upload_hinhthem_l,$file_name,_style_thumb);
                            $data1['stt'] = $_POST['stthinh'][$i];
                            $data1['type'] = "bat-dong-san";
                            $data1['id_hinhanh'] = $id;
                            $data1['hienthi'] = 1;
                            $d->setTable('hinhanh');
                            $d->insert($data1);
                        }
                    }
                }
            }
            redirect("tin-dang.html");
        }
        else
            transfer("Lưu dữ liệu bị lỗi", "dang-tin.html");
    }
}
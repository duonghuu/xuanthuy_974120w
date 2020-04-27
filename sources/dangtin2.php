<?php  if(!defined('_source')) die("Error");
if($_SESSION[$login_name]==false)
{
    transfer(_banchuadangnhap, 'http://'.$config_url);
}
@$id =   (int)trim(strip_tags(addslashes($_GET['id'])));
function fns_Rand_digit($min,$max,$num)
    {
        $result='';
        for($i=0;$i<$num;$i++){
            $result.=rand($min,$max);
        }
        return $result;
    }
if($com=="dang-tin"){
    $tinmau = get_fetch("select noidung$lang as noidung from table_about where type='tinmau'");
    if(!empty($_POST["nltval"])){
        if($id>0){
            $data = $_POST["tin"];
            $randnum = fns_Rand_digit(0,9,6);
            $ori_name = (string)trim(strip_tags($_FILES['file']['name']));
            $file_name=changeTitle($ori_name).$randnum;

            if($photo = upload_image("file", "jpg|png|jpeg|gif|JPG|PNG|JPEG|GIF", _upload_sanpham_l,$file_name))
            {
                $data['photo'] = $photo;
                $data['thumb'] = create_thumb($data['photo'], 200, 130, _upload_sanpham_l,$file_name,1);
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
            $data["ngaytao"] = time();
            $data["stt"] = 1;
            $data["type"] = "bat-dong-san";
            $data["id_thanhvien"] = $_SESSION["login"]["id"];
            $d->setTable('product');
            if($d->insert($data))
            {
                $id=mysql_insert_id();
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
                            $photo = upload_photos($file, "jpg|png|jpeg|gif|JPG|PNG|JPEG|GIF", _upload_hinhthem_l,$file_name);
                            $data1['photo'] = $photo;
                            $data1['thumb'] = create_thumb($data1['photo'], 200, 130, _upload_hinhthem_l,$file_name,1);
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
            transfer("Bạn đã đăng tin thành công! Xin cám ơn","tin-dang.html");
            }else{
                transfer("Có lỗi xảy ra trong quá trình đăng tin! Xin hãy thử lại","dang-tin.html");
            }
        }else{
            $data = $_POST["tin"];
            $randnum = fns_Rand_digit(0,9,6);
            $ori_name = (string)trim(strip_tags($_FILES['file']['name']));
            $file_name=changeTitle($ori_name).$randnum;

            if($photo = upload_image("file", "jpg|png|jpeg|gif|JPG|PNG|JPEG|GIF", _upload_sanpham_l,$file_name))
            {
                $data['photo'] = $photo;
                $data['thumb'] = create_thumb($data['photo'], 200, 130, _upload_sanpham_l,$file_name,1);
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
            $data["ngaytao"] = time();
            $data["stt"] = 1;
            $data["type"] = "bat-dong-san";
            $data["id_thanhvien"] = $_SESSION["login"]["id"];
            $d->setTable('product');
            if($d->insert($data))
            {
                $id=mysql_insert_id();
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
                            $photo = upload_photos($file, "jpg|png|jpeg|gif|JPG|PNG|JPEG|GIF", _upload_hinhthem_l,$file_name);
                            $data1['photo'] = $photo;
                            $data1['thumb'] = create_thumb($data1['photo'], 200, 130, _upload_hinhthem_l,$file_name,1);
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
            transfer("Bạn đã đăng tin thành công! Xin cám ơn","tin-dang.html");
            }else{
                transfer("Có lỗi xảy ra trong quá trình đăng tin! Xin hãy thử lại","dang-tin.html");
            }
        }
        //end else
      }
}

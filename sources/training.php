<?php  if(!defined('_source')) die("Error");
$a_danhmuc = array();
    @$id_danhmuc =  (int)trim(strip_tags(addslashes($_GET['id_danhmuc'])));
    @$id_list =   (int)trim(strip_tags(addslashes($_GET['id_list'])));
    @$id_cat =   (int)trim(strip_tags(addslashes($_GET['id_cat'])));
    @$id_item =   (int)trim(strip_tags(addslashes($_GET['id_item'])));
    @$id =   (int)trim(strip_tags(addslashes($_GET['id'])));
    $bread->add($title_cat,$type.".html");
  if($id>0)
    {
        //Cập nhật lượt xem
        $d->reset();
        $sql_lanxem = "UPDATE #_news SET luotxem=luotxem+1 WHERE id ='$id'";
        $d->query($sql_lanxem);

        $row_detail = get_fetch("select *,ten$lang as ten,mota$lang as mota,noidung$lang as noidung FROM #_news where hienthi=1 and id='$id' limit 0,1");
        if(empty($row_detail)){redirect($config_url_ssl.'/404.php');}

        $a_danhmuc["id_danhmuc"] = $row_detail["id_danhmuc"];
        $a_danhmuc["id_list"] = $row_detail["id_list"];

        $title_cat = $row_detail['ten'];
        $title = $row_detail['title'];$keywords = $row_detail['keywords'];$description = $row_detail['description'];
        $h1 = $row_detail['h1'];$h2 = $row_detail['h2'];$h3 = $row_detail['h3'];

        #Thông tin share facebook
        $images_facebook = $config_url_ssl.'/thumb/200x200/2/'._upload_tintuc_l.$row_detail['photo'];
        $title_facebook = $row_detail['ten'];
        $description_facebook = trim(strip_tags($row_detail['mota']));
        $url_facebook = getCurrentPageURL();

        //Hình ảnh khác của tin tức
        $hinhthem = get_result("select id,ten$lang as ten,thumb,photo FROM #_hinhanh where id_hinhanh='".$row_detail['id']."' and type='".$row_detail['type']."' and hienthi=1 order by stt,id desc");
        //tin tức cùng loại
        $where = " type='".$row_detail['type']."' ";
        if($row_detail['id_danhmuc']>0) $where .= " and id_danhmuc='".$row_detail['id_danhmuc']."'";
        if($row_detail['id_list']>0) $where .= " and id_list='".$row_detail['id_list']."'";
        $where .= " and id <> ".$id." and hienthi=1 order by stt,id desc";
    }
    //Danh mục tin tức cấp 4
    elseif($id_item>0)
    {
        $title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_item where id=".$id_item." limit 0,1");
        if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

        $title_cat = $title_bar['ten']; $mota = $title_bar['mota']; $noidung = $title_bar['noidung'];
        $title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
        $h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

        $where = " type='".$title_bar['type']."' and id_item=".$title_bar['id']." and hienthi=1 order by stt,id desc";
    }
    //Danh mục tin tức cấp 3
    elseif($id_cat > 0)
    {
        $title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_cat where id=".$id_cat." limit 0,1");
        if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

        $title_cat = $title_bar['ten']; $mota = $title_bar['mota']; $noidung = $title_bar['noidung'];
        $title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
        $h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

        $where = " type='".$title_bar['type']."' and id_cat=".$title_bar['id']." and hienthi=1 order by stt,id desc";
    }
    //Danh mục tin tức cấp 2
    elseif($id_list>0)
    {
        $title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_list where id=".$id_list." limit 0,1");
        if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

        $title_cat = $title_bar['ten']; $mota = $title_bar['mota']; $noidung = $title_bar['noidung'];
        $title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
        $h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

        $where = " type='".$title_bar['type']."' and id_list=".$title_bar['id']." and hienthi=1 order by stt,id desc";
    }

    //Danh mục tin tức cấp 1
    else if($id_danhmuc!='')
    {
        $title_bar = get_fetch("select id,ten$lang as ten,tenkhongdau,type,title,keywords,description,h1,h2,h3,mota,noidung FROM #_news_danhmuc where id=".$id_danhmuc." limit 0,1");
        if(empty($title_bar)){redirect($config_url_ssl.'/404.php');}

        $title_cat = $title_bar['ten']; $mota = $title_bar['mota']; $noidung = $title_bar['noidung'];
        $title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];
        $h1 = $title_bar['h1'];$h2 = $title_bar['h2'];$h3 = $title_bar['h3'];

        $where = " type='".$title_bar['type']."' and id_danhmuc=".$title_bar['id']." and hienthi=1 order by stt,id desc";
    }
    //Tất cả tin tức
    else{
        $where = " type='".$type."' and hienthi=1 order by stt,id desc";
        $title_bar = get_fetch("select * FROM #_title where type='".$type."'");
        $title = $title_bar['title'];$keywords = $title_bar['keywords'];$description = $title_bar['description'];

        #Thông tin share facebook
        if(!empty($title_bar['photo'])) $images_facebook = $config_url_ssl.'/thumb/200x200/2/'._upload_hinhanh_l.$title_bar['photo'];
        $title_facebook = $title_bar['title'];
        $description_facebook = trim(strip_tags($title_bar['description']));
        $url_facebook = getCurrentPageURL();
    }

    #Lấy tin tức và phân trang
    $dem = get_fetch("SELECT count(id) AS numrows FROM #_news where $where");

    $totalRows = $dem['numrows'];
    $page = $_GET['p'];
    if($id > 0){
        if($type=='du-an' or $type=='cong-trinh' or $type=='thu-vien' or $type=='album' or $type=='hinh-anh')
            $pageSize = $company['soluong_spk'];//Số item cho 1 trang
        else
            $pageSize = $company['soluong_tink'];//Số item cho 1 trang
    }
    else{
            if($type=='du-an' or $type=='cong-trinh' or $type=='thu-vien' or $type=='album' or $type=='hinh-anh')
                $pageSize = $company['soluong_sp'];//Số item cho 1 trang
            else
                $pageSize = $company['soluong_tin'];//Số item cho 1 trang
    }
    $offset = 5;//Số trang hiển thị
    if ($page == "")$page = 1;
    else $page = $_GET['p'];
    $page--;
    $bg = $pageSize*$page;

    $tintuc = get_result("select id,ten$lang as ten,tenkhongdau,type,thumb,photo,thumb2,photo2,mota$lang as mota,ngaytao,luotxem,taptin,link,noibat FROM #_news where $where limit $bg,$pageSize");
    $url_link = getCurrentPageURL();
    function fns_Rand_digit($min,$max,$num)
        {
            $result='';
            for($i=0;$i<$num;$i++){
                $result.=rand($min,$max);
            }
            return $result;
        }
    if(!empty($_POST["fdk1_val"])){
        if($_SESSION['fdk1_token'] == $_POST['fdk1_token']){ // refresh page
          unset($_SESSION['fdk1_token']);
          header('location: '.getCurrentPageURL());
          exit();
        }else{
          $_SESSION['fdk1_token'] = $_POST['fdk1_token'];
            $datafdk1 = $_POST["fdk1"];
            $datafdk1['email'] = (string)magic_quote(trim(strip_tags($datafdk1['email'])));
            $get_userbyemail = get_fetch("select id,email,ho,ten,quoctich,curjob,didong,dienthoai,ngaysinh from #_user where email='".$datafdk1['email']."'");
            if(count($get_userbyemail)>0){
                $id_user = $get_userbyemail["id"];
                $donhangmau = date('dmY').'NN';
                $d->reset();
                $sql = "select id,madonhang from #_donhang where madonhang like '$donhangmau%' order by id desc limit 0,1";
                $d->query($sql);
                $max_order = $d->fetch_array();
                if(empty($max_order['id']))
                {
                    $songaunhien = 101;
                }
                else
                {
                    (int)$songaunhien =  substr($max_order['madonhang'],10)+1;
                }
                $madonhang = date('dmY').'NN'.$songaunhien;
                if($id>0){
                    $get_jobname = get_fetch("select ten from table_news where id='".$id."'");
                }
                $d->reset();
                $d->setTable("donhang");
                $isrt_data = array();
                $isrt_data["madonhang"] = $madonhang;
                $isrt_data["hoten"] = $get_userbyemail["ho"];
                $isrt_data["ten"] = $get_userbyemail["ten"];
                $isrt_data["dienthoai"] = $get_userbyemail["dienthoai"];
                $isrt_data["email"] = $get_userbyemail["email"];
                $isrt_data["didong"] = $get_userbyemail["didong"];
                $isrt_data["quoctich"] = $get_userbyemail["quoctich"];
                $isrt_data["ngaytao"] = time();
                $isrt_data["noidung"] = "Apply job : ".$get_jobname["ten"];
                $isrt_data["tinhtrang"] = 1;
                $isrt_data["ngaysinh"] = $get_userbyemail['ngaysinh'];
                $isrt_data["ngaycapnhat"] = time();
                $isrt_data["id_user"] = $id_user;
                $file_name = images_name($_FILES['cv1']['name']);
                if($file_att = upload_image("cv1", 'doc|docx|pdf|DOC|DOCX|PDF', _upload_khac_l,$file_name)){
                    $isrt_data['nguongoc'] = $file_att;
                }
                $d->insert($isrt_data);
                transfer("Thank you for your apply, we will contact with you as soon as posible!", getCurrentPageURL());
            }
            else{
                $d->reset();
                $datafdk1['ho'] = (string)magic_quote(trim(strip_tags($datafdk1['ho'])));
                $datafdk1['ten'] = (string)magic_quote(trim(strip_tags($datafdk1['ten'])));
                $datafdk1['quoctich'] = (string)magic_quote(trim(strip_tags($datafdk1['quoctich'])));
                $datafdk1['curjob'] = (string)magic_quote(trim(strip_tags($datafdk1['curjob'])));
                $datafdk1['didong'] =(string) magic_quote(trim(strip_tags($datafdk1['didong'])));
                $datafdk1['dienthoai'] = (string)magic_quote(trim(strip_tags($datafdk1['dienthoai'])));
                $datafdk1['ngaysinh'] = strtotime($datafdk1['ngaysinh']);
                $datafdk1['role'] = 1;
                $datafdk1['com'] = "user";
                $d->setTable('user');
                if($d->insert($datafdk1)){
                    $id_user = $d->insert_id;
                        $donhangmau = date('dmY').'NN';
                        $d->reset();
                        $sql = "select id,madonhang from #_donhang where madonhang like '$donhangmau%' order by id desc limit 0,1";
                        $d->query($sql);
                        $max_order = $d->fetch_array();
                        if(empty($max_order['id']))
                        {
                            $songaunhien = 101;
                        }
                        else
                        {
                            (int)$songaunhien =  substr($max_order['madonhang'],10)+1;
                        }
                        $madonhang = date('dmY').'NN'.$songaunhien;
                        if($id>0){
                            $get_jobname = get_fetch("select ten from table_news where id='".$id."'");
                        }
                        $d->reset();
                        $d->setTable("donhang");
                        $isrt_data = array();
                        $isrt_data["madonhang"] = $madonhang;
                        $isrt_data["hoten"] = $datafdk1["ho"];
                        $isrt_data["ten"] = $datafdk1["ten"];
                        $isrt_data["dienthoai"] = $datafdk1["dienthoai"];
                        $isrt_data["email"] = $datafdk1["email"];
                        $isrt_data["didong"] = $datafdk1["didong"];
                        $isrt_data["quoctich"] = $datafdk1["quoctich"];
                        $isrt_data["ngaytao"] = time();
                        $isrt_data["noidung"] = "Apply job : ".$get_jobname["ten"];
                        $isrt_data["tinhtrang"] = 1;
                        $isrt_data["ngaysinh"] = $datafdk1['ngaysinh'];
                        $isrt_data["ngaycapnhat"] = time();
                        $isrt_data["id_user"] = $id_user;
                        $file_name = images_name($_FILES['cv1']['name']);
                        if($file_att = upload_image("cv1", 'doc|docx|pdf|DOC|DOCX|PDF', _upload_khac_l,$file_name)){
                            $isrt_data['nguongoc'] = $file_att;
                        }
                        $d->insert($isrt_data);
                        transfer("Thank you for your apply, we will contact with you as soon as posible!", getCurrentPageURL());
                }
            }

        }
    }
    if(!empty($_POST["fdk2_val"])){
        if($_SESSION['fdk2_token'] == $_POST['fdk2_token']){ // refresh page
          unset($_SESSION['fdk2_token']);
          header('location: '.getCurrentPageURL());
          exit();
        }else{
          $_SESSION['fdk2_token'] = $_POST['fdk2_token'];
            $datafdk1 = $_POST["fdk2"];
            $datafdk1['email'] = (string)magic_quote(trim(strip_tags($datafdk1['email'])));
            $get_userbyemail = get_fetch("select id,email,ho,ten,quoctich,curjob,didong,dienthoai,ngaysinh from #_user where email='".$datafdk1['email']."'");
            if(count($get_userbyemail)>0){
                $id_user = $get_userbyemail["id"];
                $donhangmau = date('dmY').'NN';
                $d->reset();
                $sql = "select id,madonhang from #_donhang where madonhang like '$donhangmau%' order by id desc limit 0,1";
                $d->query($sql);
                $max_order = $d->fetch_array();
                if(empty($max_order['id']))
                {
                    $songaunhien = 101;
                }
                else
                {
                    (int)$songaunhien =  substr($max_order['madonhang'],10)+1;
                }
                $madonhang = date('dmY').'NN'.$songaunhien;
                if($id>0){
                    $get_jobname = get_fetch("select ten from table_news where id='".$id."'");
                }
                $d->reset();
                $d->setTable("donhang");
                $isrt_data = array();
                $isrt_data["madonhang"] = $madonhang;
                $isrt_data["hoten"] = $get_userbyemail["ho"];
                $isrt_data["ten"] = $get_userbyemail["ten"];
                $isrt_data["dienthoai"] = $get_userbyemail["dienthoai"];
                $isrt_data["email"] = $get_userbyemail["email"];
                $isrt_data["didong"] = $get_userbyemail["didong"];
                $isrt_data["quoctich"] = $get_userbyemail["quoctich"];
                $isrt_data["ngaytao"] = time();
                $isrt_data["noidung"] = "Apply job : ".$get_jobname["ten"];
                $isrt_data["tinhtrang"] = 1;
                $isrt_data["ngaysinh"] = $get_userbyemail['ngaysinh'];
                $isrt_data["ngaycapnhat"] = time();
                $isrt_data["id_user"] = $id_user;
                $file_name = images_name($_FILES['cv2']['name']);
                if($file_att = upload_image("cv2", 'doc|docx|pdf|DOC|DOCX|PDF', _upload_khac_l,$file_name)){
                    $isrt_data['nguongoc'] = $file_att;
                }
                $d->insert($isrt_data);
                transfer("Thank you for your apply, we will contact with you as soon as posible!", getCurrentPageURL());
            }
            else{
                $d->reset();
                $datafdk1['ho'] = (string)magic_quote(trim(strip_tags($datafdk1['ho'])));
                $datafdk1['ten'] = (string)magic_quote(trim(strip_tags($datafdk1['ten'])));
                $datafdk1['quoctich'] = (string)magic_quote(trim(strip_tags($datafdk1['quoctich'])));
                $datafdk1['curjob'] = (string)magic_quote(trim(strip_tags($datafdk1['curjob'])));
                $datafdk1['didong'] =(string) magic_quote(trim(strip_tags($datafdk1['didong'])));
                $datafdk1['dienthoai'] = (string)magic_quote(trim(strip_tags($datafdk1['dienthoai'])));
                $datafdk1['ngaysinh'] = strtotime($datafdk1['ngaysinh']);
                $datafdk1['role'] = 1;
                $datafdk1['com'] = "user";
                $d->setTable('user');
                if($d->insert($datafdk1)){
                    $id_user = $d->insert_id;
                        $donhangmau = date('dmY').'NN';
                        $d->reset();
                        $sql = "select id,madonhang from #_donhang where madonhang like '$donhangmau%' order by id desc limit 0,1";
                        $d->query($sql);
                        $max_order = $d->fetch_array();
                        if(empty($max_order['id']))
                        {
                            $songaunhien = 101;
                        }
                        else
                        {
                            (int)$songaunhien =  substr($max_order['madonhang'],10)+1;
                        }
                        $madonhang = date('dmY').'NN'.$songaunhien;
                        if($id>0){
                            $get_jobname = get_fetch("select ten from table_news where id='".$id."'");
                        }
                        $d->reset();
                        $d->setTable("donhang");
                        $isrt_data = array();
                        $isrt_data["madonhang"] = $madonhang;
                        $isrt_data["hoten"] = $datafdk1["ho"];
                        $isrt_data["ten"] = $datafdk1["ten"];
                        $isrt_data["dienthoai"] = $datafdk1["dienthoai"];
                        $isrt_data["email"] = $datafdk1["email"];
                        $isrt_data["didong"] = $datafdk1["didong"];
                        $isrt_data["quoctich"] = $datafdk1["quoctich"];
                        $isrt_data["ngaytao"] = time();
                        $isrt_data["noidung"] = "Apply job : ".$get_jobname["ten"];
                        $isrt_data["tinhtrang"] = 1;
                        $isrt_data["ngaysinh"] = $datafdk1['ngaysinh'];
                        $isrt_data["ngaycapnhat"] = time();
                        $isrt_data["id_user"] = $id_user;
                        $file_name = images_name($_FILES['cv2']['name']);
                        if($file_att = upload_image("cv2", 'doc|docx|pdf|DOC|DOCX|PDF', _upload_khac_l,$file_name)){
                            $isrt_data['nguongoc'] = $file_att;
                        }
                        $d->insert($isrt_data);
                        transfer("Thank you for your apply, we will contact with you as soon as posible!", getCurrentPageURL());
                }
            }

        }
    }

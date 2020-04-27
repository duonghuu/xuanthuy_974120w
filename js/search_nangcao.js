$('body').on('click', '#wap_tags span.tagfilter', function(event) {
	var id = $(this).attr('data');
	var id_danhmuc = $(this).attr('data-danhmuc');
	var link = $(this).attr('data-link');
	$('body').find(".itemfilter[data-value="+id+"]").removeClass('checked');
	$("#wap_tags").find("span[data="+id+"]").remove();
	doFilter(id_danhmuc,link);
	if($("#wap_tags").find("span").hasClass('tagfilter')) {

	}
	else {
		$("#wap_tags").find("span.delall").remove();
	}
});

$('body').on('click', 'span.delall', function(event) {
	var link = $(this).attr('data-link');
	ChangeUrl('<?=$title_cat?>',link);
	location.reload();
});

$(document).ready(function() {
	$(".itemfilter").click(function(event) {
		//alert('abc');
		var id = $(this).attr('data-value');
		var title = $(this).attr('data-title');
		var link = $(this).attr('data-link');
		var id_danhmuc = $(this).attr('data-danhmuc');
		if($(this).hasClass('checked')) {
			$(this).removeClass('checked');
			removeTag(id);
		}
		else {
			addTag(id,title,id_danhmuc,link);
			$(this).addClass('checked');
		}
		doFilter(id_danhmuc,link);
		return true;
	});
});

function ChangeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        alert("Trình duyệt không hỗ trợ HTML5.");
    }
}

function removeTag(id) {
	$("#wap_tags").find("span[data="+id+"]").remove();
	if($("#wap_tags").find("span").hasClass('tagfilter')) {

	}
	else {
		$("#wap_tags").find("span.delall").remove();
	}
}

function addTag(id,title,id_danhmuc,link) {
	var tag = "<span class='tagfilter' data-link="+link+" data="+id+" data-danhmuc="+id_danhmuc+">"+title+"</span>";
	$("#wap_tags").append(tag);
	if($("#wap_tags").find("span").hasClass('delall')) {

	}
	else {
		var tag1 = '<span class="delall" data-link="'+link+'">Xoá tất cả</span>';
		$("#wap_tags").append(tag1);
	}
}

function doFilter(id_danhmuc,link) {
	var danhmuc = id_danhmuc;
	var listid = []; /* mảng id lọc sản phẩm */
	
	$(".itemfilter").each(function(index, el) {
		if($(this).hasClass('checked')) {
			var id = $(this).attr('data-value');
			listid.push(id);
		}
		return true;
	});
	//alert(listid);
	var join_listid = listid.join();
	//ChangeUrl('<?=$title_cat?>',''+link+'&filter=1&category='+danhmuc+'&list-filter='+join_listid);
	ChangeUrl('<?=$title_cat?>',''+link);
	$.ajax({
		url: 'ajax/search_nangcao.php',
		type: 'post',
		data: {danhmuc:danhmuc,join_listid:join_listid},
		success:function(result) {
			$("#content_sp_return").html(result);
		}
	});
	return true;
}

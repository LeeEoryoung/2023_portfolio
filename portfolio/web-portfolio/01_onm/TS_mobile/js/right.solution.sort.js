/*
 * 이제노(dlwpsh@gmail.com)
 * 정렬이 가능한 목록 javascript
 */
function init_sort_list(e) {
	var search_form = $(e).find("form[name=frmSearch]"),
		page = $(e).find("input[name=p]"),
		pagesize = $(e).find("select[name=ps]"),
		query = $(e).find("input[name=qs]").val(),
		order = $(e).find("input[name=ordo]"),
		path = $(e).find("input[name=path]").val(),
		table = $(e).find("table.tbl_sort_list"),
		target = $(e).find("ul.list_data_photo").length > 0 ? $(e).find("ul.list_data_photo") : table.children("tbody");

	search_form.on("submit", function () { //검색 시
		query = $(search_form).serialize();
		page.val(1);
		load_contents(page.val(), pagesize.val(), query, order.val(), target, path);
	});

	search_form.find(".btn_search_aside .reset").on("click", function () {
		page.val(1);
		search_form.find("input[type=text]").val('');
		search_form.find("input[type=date]").val('');
		search_form.find("input[type=number]").val('');
		search_form.find("select").each(function () {
			$(this).val($(this).children("option").eq(0).val());
		});
		if (search_form.find("input[type=checkbox]").length > 0) {
			var cb_data = '';
			search_form.find("input[type=checkbox]").each(function () {
				if (cb_data.indexOf($(this).attr("name")) < 0) {
					if (cb_data.length > 0) {
						cb_data += '|^|';
					}
					cb_data += $(this).attr("name");
				}
			});

			cb_arr = cb_data.split('|^|');
			for (i = 0; i < cb_arr.length; i++) {
				$("input[name=" + cb_arr[i] + "]").prop("checked", false);
				if ($("input[name=" + cb_arr[i] + "_o]").val().indexOf('|') > 0) {
					cb_o_arr = $("input[name=" + cb_arr[i] + "_o]").val().split('|');
					$("input[name=" + cb_arr[i] + "]").each(function () {
						for (j = 0; j < cb_o_arr.length; j++) {
							if ($(this).val() == cb_o_arr[j]) {
								$(this).prop("checked", true);
								return;
								return false;
							}
						}
					});
				} else {
					$("input[name=" + cb_arr[i] + "]").each(function () {
						if ($(this).val() == $("input[name=" + cb_arr[i] + "_o]").val()) {
							$(this).prop("checked", true);
							return false;
						}
					});
				}
			}
		}
		qs = '';
		search_form.find("input[type=hidden]").each(function () {
			if (qs.length > 0) {
				qs += '&';
			}
			qs += $(this).attr("name") + '=' + $(this).val();
		});

		load_contents(page.val(), pagesize.val(), qs, order.val(), target, path);
	});

	$(table).find("thead tr span").each(function () { //정렬 마크업
		$(this).append('<i class="fa fa-sort fs10 ml5"></i>');

		ordo = order.val();
		if (ordo.split('_')[0] == $(this).attr("c")) {
			find_order_css = ordo.split('_')[1].toLowerCase() == 'asc' ? 'up' : 'down';

			$(this).children("i").removeClass("fa-sort").addClass("fa-sort-" + find_order_css);
		}
	}).on("click", function () { //클릭 액션
		var col = $(this).attr("c"),
			ordo = order.val(),
			sort = 'asc';

		if (ordo.split('_')[0] == col) {
			sort = (ordo.split('_')[1].toLowerCase() == 'asc') ? 'desc' : 'asc';
		}
		var orderby = col + '_' + sort.toUpperCase();

		load_contents(page.val(), pagesize.val(), query, orderby, target, path);
	});

	//출력수 변경
	pagesize.on("change", function () {
		page.val(1);
		load_contents(page.val(), pagesize.val(), query, order.val(), target, path);
	});

	//페이저 맹글기
	init_pager(e);
}

function load_contents(p, ps, qs, o, t, url) {
	var section = searchParent(t, ".sec_list_group"),
		url = url + '?' + qs;

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'html',
		data: {
			p: p,
			ps: ps,
			ordo: o
		},
		beforeSend: function () {
			call_layer_loader(section, "불러오는 중입니다.");
			$("button").prop("disabled", true);
		},
		success: function (html) {
			remove_layer_loader(section);
			$("button").prop("disabled", false);
			$(t).empty().html(html);

			$(section).find("input[name=p]").val(p);

			//order mark change
			find_art = searchParent(t, "article");
			find_art.find("input[name=ordo]").val(o);

			find_sort = o.split('_')[0],
				find_order = o.split('_')[1];
			find_order_css = find_order.toLowerCase() == 'asc' ? 'up' : 'down';

			if (find_art.find("ul.list_data_photo").length > 0) { //포토갤러리일 때
			} else {
				find_art.find("table thead tr th span").each(function () {
					cls = ($(this).attr("c") == find_sort) ? 'fa fa-sort-' + find_order_css + ' fs10 ml5' : 'fa fa-sort fs10 ml5';
					$(this).children("i").removeClass().addClass(cls);
				});
			}

			//pagination
			init_pager(section);

			// button action
			if (typeof load_button_action == 'function') {
				load_button_action(section); // 버튼과 관련된 게 있음 로딩~
			};
		},
		error: function () {
			remove_layer_loader(section);
			$("button").prop("disabled", false);
			alert('스크립트 에러');
		}
	});
}

function init_pager(e) {
	var int_last_page_num = Math.ceil($(e).find("input[name=tc]").val() / $(e).find("select[name=ps]").val());
	var int_now_page_num = $(e).find("input[name=p]").val();
	var int_start_page_num, int_end_page_num;
	var int_view_page_size = 10;
	var target = '';

	// calc first, last
	if (int_last_page_num < ((int_view_page_size * 1) + 1)) {
		int_start_page_num = 1;
		int_end_page_num = int_last_page_num;
	} else {
		int_start_page_num = int_now_page_num;
		int_end_page_num = (int_start_page_num * 1) + ((int_view_page_size * 1) - 1);
		if (int_last_page_num < int_end_page_num) int_end_page_num = int_last_page_num;

		if (int_start_page_num < ((int_view_page_size * 1) - 4)) {
			int_start_page_num = 1;
			int_end_page_num = int_start_page_num + ((int_view_page_size * 1) - 1);

		} else if (int_now_page_num > (int_last_page_num - 4)) {
			int_end_page_num = int_last_page_num;
			int_start_page_num = int_end_page_num - ((int_view_page_size * 1) - 1);

		} else {
			int_start_page_num = int_start_page_num - 4;
			int_end_page_num = int_start_page_num + ((int_view_page_size * 1) - 1);

		}
	}

	// make html
	var pager_html = '';
	pager_html += '<button type="button" p="1" class="btn_arrow first" title="첫 페이지"><i class="fa fa-angle-double-left"></i></button>';
	pager_html += '<button type="button" p="' + ((int_now_page_num * 1) - 1) + '" class="btn_arrow prev" title="이전 페이지"><i class="fa fa-angle-left"></i></button>';
	for (i = int_start_page_num; i <= int_end_page_num; i++) {
		if (i == int_now_page_num) {
			pager_html += '<button type="button" p="' + i + '" class="page active"><span>' + i + '</span></button>';
		} else {
			pager_html += '<button type="button" p="' + i + '" class="page"><span>' + i + '</span></button>';
		}
	}
	pager_html += '<button type="button" p="' + ((int_now_page_num * 1) + 1) + '" class="btn_arrow next" title="다음 페이지"><i class="fa fa-angle-right"></i></button>';
	pager_html += '<button type="button" p="' + int_last_page_num + '" class="btn_arrow last" title="마지막 페이지"><i class="fa fa-angle-double-right"></i></button>';

	// make pagination
	var pager = $(e).find(".pagination");
	pager.empty();
	if ($(e).find("input[name=tc]").val() > 0) {
		pager.html(pager_html);
	}

	// disabled
	if (int_now_page_num == 1) {
		pager.children("button.btn_arrow.first").addClass("disabled");
		pager.children("button.btn_arrow.prev").addClass("disabled");
	} else if (int_now_page_num == int_last_page_num) {
		pager.children("button.btn_arrow.next").addClass("disabled");
		pager.children("button.btn_arrow.last").addClass("disabled");
	}
	if (int_last_page_num == 1) {
		pager.children("button.btn_arrow.next").addClass("disabled");
		pager.children("button.btn_arrow.last").addClass("disabled");
	}

	// button action
	pager.children("button:not(.disabled)").on("click", function () {
		var page = $(this).attr("p"),
			pagesize = $(e).find("select[name=ps]").val(),
			query = $(e).find("input[name=qs]").val(),
			order = $(e).find("input[name=ordo]").val(),
			path = $(e).find("input[name=path]").val(),
			table = $(e).find("table.tbl_sort_list");

		if (page != $("input[name=p]").val()) {
			target = $(e).find("ul.list_data_photo").length > 0 ? $(e).find("ul.list_data_photo") : table.children("tbody");
			load_contents(page, pagesize, query, order, target, path);
		}
	});

	$(e).find(".tot_article strong").html($(e).find("input[name=tc]").val());
	$(e).find(".page_info strong").html(int_now_page_num);
	$(e).find(".page_info em").html(int_last_page_num);
}

//목록 새로고침
function reload_basic_list(e) {
	var page = $(e).find("input[name=p]").val(),
		pagesize = $(e).find("select[name=ps]").val(),
		query = $(e).find("input[name=qs]").val(),
		order = $(e).find("input[name=ordo]").val(),
		path = $(e).find("input[name=path]").val(),
		table = $(e).find("table.tbl_sort_list"),
		target = '';

	target = $(e).find("ul.list_data_photo").length > 0 ? $(e).find("ul.list_data_photo") : table.children("tbody");
	load_contents(page, pagesize, query, order, target, path);
}

/* trigger toggle */ 
$(function(){
	$('.trigger').click(function () {
		$(this).toggleClass('active');
		$('.gnb').toggleClass('active');
	})
})

/* gnb dropdown */ 
$(function(){
	$('.dropdown-navi').click(function () {
		// $('.dropdown-content').slideToggle()
		$(this).siblings('.dropdown-content').slideUp();
		$(this).next().slideDown();
		$(this).addClass('active');
		$(this).siblings('.dropdown-navi').removeClass('active');
	})
})
/* slick slide */ 
$(function () {
	$('.slideshow').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 2000
	});
	$('.slick-prev').html('<button><i class="xi-arrow-left"></i></button>');
	$('.slick-next').html('<button><i class="xi-arrow-right"></i></button>');
})
// slick 넘버링
$(function () {
	$('.slideshow').on('afterChange', function (event, slick, currentSlide) {
		$(".current-num").text(currentSlide + 1);
	});
})
// slick play & pause [재생,멈춤 기능] //

$(function(){
	$('.play').click(function(){
		var $sliderWrap = $(this).parent();

		if ( $sliderWrap.attr('data-slick-autoplay-status') == 'Y' ){
			$sliderWrap.attr('data-slick-autoplay-status', 'N');
			$('.slideshow').slick('slickPause');
			$('.play').removeClass('on');
			console.log('stop');
		}
		else if ( $sliderWrap.attr('data-slick-autoplay-status') == 'N' ){
			$sliderWrap.attr('data-slick-autoplay-status', 'Y');
			$('.slideshow').slick('slickPlay');
			$('.play').addClass('on');
			console.log('go');
		}
	})
});
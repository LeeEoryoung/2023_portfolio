/*
 * 이제노(dlwpsh@gmail.com)
 * 공통함수 모음
 */
$(document).ready(function(){
	//calculate the window height
	$(".left_wing_sec").height( $(window).height() );
	$(".left_wing_body").height( $(window).height() - $(".left_wing_header").outerHeight(true) );
	$(".right_wing_contents").height( ($(window).height() - 50) );
	$(window).resize(function(){
		$(".left_wing_sec").height( $(window).height() );
		$(".left_wing_body").height( $(window).height() - $(".left_wing_header").outerHeight(true) );
		$(".right_wing_contents").height( ($(window).height() - 50) );
	});

	//left menu activate
	$(".left_wing_nav > ul > li > a").each(function(){
		if($(this).attr("href") == '#folder'){ $(this).attr("onclick","return false;"); }
		if($(this).parent().children("ul").length > 0){ $(this).append(' <i class="fa fa-angle-double-down right"></i>'); }
	});
	$(".left_wing_nav > ul > li > a").on("click",function(){
		var	parent = $(this).parent(),
			tH = $(this).outerHeight(true) * 1;

		if(!parent.hasClass("active")){
			$(".left_wing_nav > ul > li > a > i.fa-angle-double-up").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
			parent.children("a").children("i.fa-angle-double-down").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
			$(".left_wing_nav > ul > li > ul").stop().animate({height: 0}, 300, function(e){ $(this).parent().removeClass("active");parent.addClass("active"); });
			$(".left_wing_nav > ul > li").stop().animate({height: tH}, 300);

			parent.stop().animate({height: (parent.children("ul").children("li").length * 38) + tH}, 300);
			parent.children("ul").stop().animate({height: (parent.children("ul").children("li").length * 38)}, 300);
		} else {
			$(".left_wing_nav > ul > li > a > i.fa-angle-double-up").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
			$(".left_wing_nav > ul > li > ul").stop().animate({height: 0}, 300, function(e){ $(this).parent().removeClass("active"); });
			$(".left_wing_nav > ul > li").stop().animate({height: tH}, 300);
		}
	});

	//mask form
	$(".isdate").numeric().css("ime-mode","disabled").mask("9999-99-99").attr("placeholder","____-__-__");
	$(".istime").numeric().css("ime-mode","disabled").mask("99:99").attr("placeholder","__:__");

	//keyup
	$(".isnum").on("keyup",function(e){
		this.value = onlyNum($.trim(this.value));
	});
	$(".ismoney").on("keyup",function(e){
		this.value = onlyMoney($.trim(this.value));
	});
	$(".istel").on("keyup",function(e){
		this.value = onlyTel($.trim(this.value));
	});
	$(".isprice").on("keyup",function(e){
		this.value = setComma(onlyNum($.trim(this.value)));
	});
});
var onlyNum = function(str){ return str.replace(/[^0-9]/gi,''); }
var onlyMoney = function(str){ return str.replace(/.,:-+0123456789/gi,''); }
var onlyTel = function(str){ return str.replace(/[^0-9-+]/gi,''); }
var onlyEng = function(str){ return str.replace(/[^a-zA-Z]/gi,''); }

//로그아웃
function fnc_logout(){
	var out_html = '';
		out_html += '<section class="pop_total_wrap a_c">';
		out_html += '	<h2><strong>로그아웃</strong> 확인</h2>';
		out_html += '	<p>로그아웃 하시겠습니까?</p>';
		out_html += '	<div class="btn_pop_wrap p20">';
		out_html += '		<a href="/member/logout/action.asp" class="btns darkgray"><i class="fa-fw fas fa-running"></i> 로그아웃</a>';
		out_html += '		<button class="btns red ml5" onclick="btn_fancy_close();"><i class="fa-fw fa fa-times"></i> 창닫기</button>';
		out_html += '	</div>';
		out_html += '</section>';
	$.fancybox(out_html,{ autoSize:false, width:280, height:'auto', type:'inline' });
}

//ajax loader
function call_layer_loader(target, load_txt){
	var load_html = '';
	load_html += '<div class="fancybox-overlay" style="display:block;width:100%;height:'+ $(target).outerHeight() +'px;">';
	load_html += '	<div class="layer_loader_outer" style="padding-top:'+ (($(target).outerHeight() / 2) - 55) +'px;">';
	load_html += '		<div class="layer_loader_cont"><p><em class="fas fa-spinner fa-pulse fs24"></em></p><p>'+ load_txt +'</p></div>';
	load_html += '	</div>';
	load_html += '</div>';

	$(target).append(load_html);
}
function remove_layer_loader(target){
	$(target).find(".fancybox-overlay").remove();
}

//fancybox close
function btn_parent_fancy_close(){
	parent.$.fancybox.close();
}
function btn_fancy_close(){
	$.fancybox.close();
}

//부모태크 찾기
var searchParent = function(obj, tag){
	var objParent = $(obj);
	for(i=0; i<=10; i++){
		if(objParent.is(tag)) break;
		objParent = objParent.parent();
	};
	return objParent;
};

/* ajax 호출 핸들러 */
$( document ).ajaxStart(function() {

});
$( document ).ajaxSend(function( event, jqxhr, settings ) {
	call_layer_loader("body", "처리 중입니다.");
});

$( document ).ajaxSuccess(function( event, res, settings ) {
});
$( document ).ajaxComplete(function( event, xhr, settings ) {
	remove_layer_loader("body");
});
$( document ).ajaxStop(function() {
});
$( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
	switch (jqxhr.status) {
		case 401:
			alert("세션이 만료됐습니다.");
			if (self !== top) {
				parent.location.reload();
			} else {
				location.href="/login";
			}
			break;
		case 403:
			alert("권한이 없습니다.");
			break;
		case 500:
			alert("처리중 오류가 발생했습니다.\n다시 시도해주십시오.");
			break;
		default:
			alert("처리중 오류가 발생했습니다 ("+jqxhr.status+").\n다시 시도해주십시오.");
			break;
	}
});
(function ($) {

    // input
    function inputChange() {
        const $inputWrap = $('.inputWrap');
        $inputWrap.each(function (e) {
            if ($(this).find('.inp').val().length >= 1) {
                $(this).find('.inp').addClass('on');
            } else {
                $(this).find('.inp').removeClass('on');
            }

            $(this).find('.inp').change(function () {
                if ($(this).val().length >= 1 || !$(this).find('option:selected').hasClass('basic')) {
                    $(this).addClass('on');
                } else {
                    $(this).removeClass('on');
                }
            });
        });
    }

    function agreeAll() {
        var $check_all_button = $('.chkAll');
        var $target_checkboxes = $('.agrList input');



        $check_all_button.on('change', function () {
            if ($(this).prop('checked')) {
                $(this).closest('.agrWrap').find('.agrList input').prop('checked', true);
            } else {
                $(this).closest('.agrWrap').find('.agrList input').prop('checked', false);
            }
        });

        $target_checkboxes.each(function () {
            $(this).on('click', function () {
                var lng = $(this).closest('.agrList').find('input').not('.exception').length;
                var checkedLng = $(this).closest('.agrList').find('input:checkbox:checked').not('.exception').length;
                if (lng === checkedLng) {
                    $(this).closest('.agrWrap').find('.chkAll').prop('checked', true);
                } else {
                    $(this).closest('.agrWrap').find('.chkAll').prop('checked', false);
                }
            });
        });
    }

    function selectInput() {
        const $selectWrap = $('.selectWrap').children('div');
        $('.selectCont').not('.selectWrap.etc .selectCont').hide();

        $selectWrap.each(function () {
            $(this).on('click', function () {
                if ($(this).find('label').children('input').is(":checked") == true) {
                    $('.selectCont').hide();
                    $(this).find('.selectCont').show();
                }
            });
        });
    }

    function accordion_wrap() {
        $(".title").click(function () {
            $(this).toggleClass('on').siblings().removeClass('on');
            $(this).next(".acc-cont").siblings(".acc-cont").slideUp(300);
            $(this).next(".acc-cont").stop().slideToggle(300);
        });
    }



    $(function () {

        inputChange();
        agreeAll();
        selectInput();
        accordion_wrap();


        // popup 열기/닫기
        var popOpenClose = function () {
            $(document).on('click', '[data-pop-open]', function () {
                var $data = $(this).data('pop-open');
                $('[data-popup="' + $data + '"]').show();
            });
            $(document).on('click', '[data-pop-close]', function () {
                $(this).closest('.fullPopup').hide();
            });

            $(document).on('click', '[data-bottompop-close]', function () {
                $(this).closest('.bottompop').removeClass('opened');
            });
        }
        popOpenClose();

        // script
    });

    /* see_more accordion */
    $(function () {
        $('.see_more_drop_title').click(function () {
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        });
    });
    /* 보험사 연동 on,off */
    $(function () {
        $(".brand_item img").click(function () {
            $(this).toggleClass('on');
        });
    });
    /* 고객리스트 추가 하단 버튼 */
    $(function () {
        $("#allCheck").click(function () {
            if ($(this).is(":checked")) { //대상이 체크 되어 있을 때
                $(".selectall").addClass('on');
                $(".selectitem").addClass('on');
                $('.bottomContent .btn').addClass('on');
                //모든 체크박스 체크
                $(".selectitem input").attr("checked", true);
            } else { //대상이 체크 해제 되어 있을 때
                $(".selectall").removeClass('on');
                $(".selectitem").removeClass('on');
                $('.bottomContent .btn').removeClass('on');
                //모든 체크박스 체크해제
                $(".selectitem input").attr("checked", false);
            }
        });
        $("#allCheck").change(function () {
            if ($(this).is(":checked")) { //대상이 체크 되어 있을 때
                //같은 네임을 가진 체크박스 체크
                $("input:checkbox[name='chk']").prop("checked", true);
            } else { //대상이 체크 해제 되어 있을 때
                //같은 네임을 가진 체크박스 체크해제
                $("input:checkbox[name='chk']").prop("checked", false);
            }
        });
        /* 각자 개별 클릭 */
        $(".selectitem input").click(function () {
            $(this).closest('.selectitem').toggleClass('on');
            $('.bottomContent .btn').toggleClass('on');

        });
    });
})(jQuery);


/* 고객홈- edit javascript */
/* 전화번호 자동 하이픈 */
function inputPhoneNumber(obj) {
    var number = obj.value.replace(/[^0-9]/g, "");
    var phone = "";
    if (number.length < 4) {
        return number;
    } else if (number.length < 7) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3);
    } else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 3);
        phone += "-";
        phone += number.substr(6);
    } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7);
    }
    obj.value = phone;
}

/* 생년월일 자동 마침표 */
const autoHyphen = (target) => {
    target.value = target.value
        .replace(/[^0-9]/, '')
        .replace(/^(\d{4})(\d{2})(\d{2})$/, `$1.$2.$3`);
}

// header
$("body").on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel > 0) {
        $('header').removeClass('active');
    } else {
        $('header').addClass('active');
    }
});
// trigger
$(function () {
    $('.trigger').click(function () {

        $(this).toggleClass("active");
        $('nav').toggleClass("active");
    })
});
$(function () {
    $('.gnb_menu > a').click(function () {

        $('nav').toggleClass("active");
        $('.trigger').toggleClass("active");
    })
})
// gototop
$(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var gototop = $(".gototop");

        if (scrollPosition > windowHeight / 2) {
            gototop.addClass("active");
        } else {
            gototop.removeClass("active");
        }
    })
});



$(function () {
    $('#Skill01').click(function () {
        $('.modal_html').addClass('active');
    });
    $('#Skill02').click(function () {
        $('.modal_css').addClass('active');
    });
    $('#Skill03').click(function () {
        $('.modal_js').addClass('active');
    });
    $('#Skill04').click(function () {
        $('.modal_cafe24').addClass('active');
    });
    $('#Skill05').click(function () {
        $('.modal_adoby').addClass('active');
    });
    $('#Skill06').click(function () {
        $('.modal_zeplin').addClass('active');
    });
    $('#Skill07').click(function () {
        $('.modal_figma').addClass('active');
    });

    $('.close_btn').click(function () {
        $('.modal').removeClass('active');
    });
});

// swiper slide
const SwiperContainer = new Swiper(".swiper_container", {
    slidePerView: 1,
    speed: 500,
    loop: true,
    centeredSlides: true,
    spaceBetween: 70,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// $(window).scroll(function () { 
//     var scrollValue = $(document).scrollTop(); 
//     var Gitem1 = $('#Gitem1').offset().top;
//     var Gitem2 = $('#Gitem2').offset().top;
//     var Gitem3 = $('#Gitem3').offset().top;
//     var Gitem4 = $('#Gitem4').offset().top;
//     var Gitem5 = $('#Gitem5').offset().top;
//     var Gitem6 = $('#Gitem6').offset().top;
//     var Gitem7 = $('#Gitem7').offset().top;
//     var Gitem8 = $('#Gitem8').offset().top;
//     var Gitem9 = $('#Gitem9').offset().top;
//     var Gitem10 = $('#Gitem10').offset().top;
//     var Gitem11 = $('#Gitem11').offset().top;
//     var Gitem12 = $('#Gitem12').offset().top;

//     var windowHight = $(window).height();
    
//     if (Gitem1 - windowHight <= scrollValue) {
//         $('#Gitem1').addClass('on');
//     } else {
//         $('#Gitem1').removeClass('on');
//     }
//     if (Gitem2 - windowHight <= scrollValue) {
//         $('#Gitem2').addClass('on');
//     } else {
//         $('#Gitem2').removeClass('on');
//     }
//     if (Gitem3 - windowHight <= scrollValue) {
//         $('#Gitem3').addClass('on');
//     } else {
//         $('#Gitem3').removeClass('on');
//     }
//     if (Gitem4 - windowHight <= scrollValue) {
//         $('#Gitem4').addClass('on');
//     } else {
//         $('#Gitem4').removeClass('on');
//     }
//     if (Gitem5 - windowHight <= scrollValue) {
//         $('#Gitem5').addClass('on');
//     } else {
//         $('#Gitem5').removeClass('on');
//     }
//     if (Gitem6 - windowHight <= scrollValue) {
//         $('#Gitem6').addClass('on');
//     } else {
//         $('#Gitem6').removeClass('on');
//     }
//     if (Gitem7 - windowHight <= scrollValue) {
//         $('#Gitem7').addClass('on');
//     } else {
//         $('#Gitem7').removeClass('on');
//     }
//     if (Gitem8 - windowHight <= scrollValue) {
//         $('#Gitem8').addClass('on');
//     } else {
//         $('#Gitem8').removeClass('on');
//     }
//     if (Gitem9 - windowHight <= scrollValue) {
//         $('#Gitem9').addClass('on');
//     } else {
//         $('#Gitem9').removeClass('on');
//     }
//     if (Gitem10 - windowHight <= scrollValue) {
//         $('#Gitem10').addClass('on');
//     } else {
//         $('#Gitem10').removeClass('on');
//     }
//     if (Gitem11 - windowHight <= scrollValue) {
//         $('#Gitem11').addClass('on');
//     } else {
//         $('#Gitem11').removeClass('on');
//     }
//     if (Gitem12 - windowHight <= scrollValue) {
//         $('#Gitem12').addClass('on');
//     } else {
//         $('#Gitem12').removeClass('on');
//     }
// });

$(window).scroll(function () { 
    var scrollValue = $(document).scrollTop(); 
    var windowHight = $(window).height();
    
    var itemOffsets = [
        $('#Gitem1').offset().top,
        $('#Gitem2').offset().top,
        $('#Gitem3').offset().top,
        $('#Gitem4').offset().top,
        $('#Gitem5').offset().top,
        $('#Gitem6').offset().top,
        $('#Gitem7').offset().top,
        $('#Gitem8').offset().top,
        $('#Gitem9').offset().top,
        $('#Gitem10').offset().top,
        $('#Gitem11').offset().top,
        $('#Gitem12').offset().top
    ];

    for (var i = 0; i < itemOffsets.length; i++) {
        var item = $('#Gitem' + (i + 1));

        if (itemOffsets[i] - windowHight <= scrollValue) {
            item.addClass('on');
        } else {
            item.removeClass('on');
        }
    }
});




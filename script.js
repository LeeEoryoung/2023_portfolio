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
// 	var scrollValue = $(document).scrollTop(); 
//     var gi1 = $('.gi1').offset().top
//     var windowHight = $(window).height();
//     console.log(scrollValue);
//     if( item1 - windowHight <= scrollValue){
//         $('.gi1').addClass('on')
//     }
// });
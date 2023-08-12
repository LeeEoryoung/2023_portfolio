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

// skill modal
$(function () {
    $('#Skill01').click(function () {
        $('.modal_html').addClass('active');
        $('.modal_background').addClass('active');
    });
    $('#Skill02').click(function () {
        $('.modal_css').addClass('active');
        $('.modal_background').addClass('active');
    });
    $('#Skill03').click(function () {
        $('.modal_js').addClass('active');
        $('.modal_background').addClass('active');
    });
    $('#Skill04').click(function () {
        $('.modal_cafe24').addClass('active');
        $('.modal_background').addClass('active');
    });
    $('#Skill05').click(function () {
        $('.modal_adoby').addClass('active');
        $('.modal_background').addClass('active');
    });
    $('#Skill06').click(function () {
        $('.modal_zeplin').addClass('active');
        $('.modal_background').addClass('active');
    });
    $('#Skill07').click(function () {
        $('.modal_figma').addClass('active');
        $('.modal_background').addClass('active');
    });

    $('.close_btn').click(function () {
        $('.modal').removeClass('active');
        $('.modal_background').removeClass('active');
    });

    $('.modal_background').click(function (event) {
        if ($(event.target).hasClass('modal_background')) {
            $('.modal').removeClass('active');
            $('.modal_background').removeClass('active');
        }
    });
});

// gallery image slide
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

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
$(document).ready(function () {
    var trigger = $('.trigger');
    var nav = $('nav');

    trigger.click(function () {
        $(this).toggleClass("active");
        nav.toggleClass("active");
    });

    $(document).click(function (e) { 
        if (!trigger.is(e.target) && trigger.has(e.target).length === 0 &&
            !nav.is(e.target) && nav.has(e.target).length === 0) {
            trigger.removeClass("active");
            nav.removeClass("active");
        }
    });
});


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

// welcome fade in animation
$(function () {
    var welcomeTitle = $(".welcome_page h1");

    welcomeTitle.addClass("active");

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollPosition <= 0) {
            welcomeTitle.addClass("active");
        } else if (scrollPosition > windowHeight) {
            welcomeTitle.removeClass("active");
        }
    });
});




// skill modal
$(function () {
    $('#Skill01').click(function () {
        $('.modal_html').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill02').click(function () {
        $('.modal_css').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill03').click(function () {
        $('.modal_js').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill04').click(function () {
        $('.modal_cafe24').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill05').click(function () {
        $('.modal_scss').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill06').click(function () {
        $('.modal_adobe').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill07').click(function () {
        $('.modal_zeplin').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill08').click(function () {
        $('.modal_figma').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill09').click(function () {
        $('.modal_adobexd').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill10').click(function () {
        $('.modal_slack').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill11').click(function () {
        $('.modal_google').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill12').click(function () {
        $('.modal_svn').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });
    $('#Skill13').click(function () {
        $('.modal_ftp').addClass('active');
        $('.modal_background').addClass('active');
        $('body').addClass('active');
    });

    // close 버튼과 background 클릭 시 닫힘
    $('.close_btn').click(function () {
        $('.modal').removeClass('active');
        $('.modal_background').removeClass('active');
        $('body').removeClass('active');
    });

    $('.modal_background').click(function (event) {
        if ($(event.target).hasClass('modal_background')) {
            $('.modal').removeClass('active');
            $('.modal_background').removeClass('active');
            $('body').removeClass('active');

        }
    });
});

// gallery image slide
$(window).scroll(function () {
    var scrollPosition = $(document).scrollTop();
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

        if (itemOffsets[i] - windowHight <= scrollPosition) {
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
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

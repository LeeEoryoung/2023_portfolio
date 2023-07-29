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

$(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
        $('.gototop').addClass('active')
    } else {
        $('.gototop').removeClass('active')
    }
});
$(window).scrollTop()

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

console.log('test')
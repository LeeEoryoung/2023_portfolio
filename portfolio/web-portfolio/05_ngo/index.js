// login modal

$(function (){
    $('.login_btn').click(function () {
        $('.modal_login, body').addClass('active')
    });
    $('.mo_login_btn').click(function () {
        $('.modal_login, body').addClass('active')
    });
    $('.btn_close').click(function () {
        $('.modal_login, body').removeClass('active')
    });
});





var mySwiper = new Swiper('.swiper-container', {
    speed: 500,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    //slide page num
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'fraction',
    },
    //slide arrow button 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

var sw = 0;
$('.btn_pause').click(function () {
    if (sw == 0) {
        $('.btn_pause').addClass('on');
        mySwiper.autoplay.stop();
        sw = 1;
    } else {
        $('.btn_pause').removeClass('on');
        mySwiper.autoplay.start();
        sw = 0;
    }
});
// web gnb
$(function(){
    $(".gnb li > a").click(function(){
        $(this).toggleClass('active');
        $(".gnb li > a").not($(this)).removeClass("active");
    });
});

// responsive trigger 
$(function () {
    $('.trigger').click(function () {
        $(this).toggleClass('active')
        $('.mo_gnb').toggleClass('active')
    })
});


// mobile gnb
$(function(){
    $(".mo_gnb > li > a").click(function(){
        $(this).toggleClass('active');
        $(".mo_gnb > li > a").not($(this)).removeClass("active");
    });
});

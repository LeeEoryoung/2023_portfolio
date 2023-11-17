// header
$(function () {
    function handleScroll(e) {
        var wheel = e.originalEvent.wheelDelta;

        if (window.innerWidth > 800) { 
            if (wheel > 0) {
                $('.header').removeClass('active');
            } else {
                $('.header').addClass('active');
            }
        }
    }

    if (window.innerWidth > 800) {
        $("body").on("mousewheel", handleScroll);
    }

    $(window).on("resize", function () {
        if (window.innerWidth > 800) {
            $("body").on("mousewheel", handleScroll);
        } else {
            $("body").off("mousewheel", handleScroll);
        }
    });
});

$(function () {
    $(".trigger").on("click", function () {
        $(this).toggleClass("active");
        $(".mo_gnb").toggleClass("active");
    });
});




// main_slide
$(document).ready(function () {
    $('.main_slide').slick({
        infinite: true,
        speed: 15000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        draggable: false,
        arrows: false,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: 'linear'
    });
});

// mv_slide
var swiper = new Swiper(".mv_slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    keyboard: {
        enabled: true
    },
    breakpoints: {
        400: {
            slidesPerView: 1
        },
        801: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 3
        }
    }
});


AOS.init({
    duration: 1200,
});


$(function() {
    $('#search').click(function(){
        $('.search_popup').addClass('active');
    })
    $('.search_popup .close_btn').click(function () {
        $('.search_popup').removeClass('active');
    });
});
$(document).mouseup(function(e) {
    var popup = $('.search_popup .inner');
    
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
        $('.search_popup').removeClass('active');
    }
});





// top btn
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
});


$(document).ready(function() {
    var productPrice = 45000;
    var shippingPrice = 3000;
    var quantity = 1;

    $('#quantity').change(function() {
        quantity = parseInt($(this).val());
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1;
        }
        updateTotals();
    });

    function updateTotals() {
        var productTotal = productPrice * quantity;
        var shippingTotal = shippingPrice;
        var total = productTotal + shippingTotal;

        if (quantity < 1) {
            quantity = 1;
        }

        $('#quantity').val(quantity);
        $('#productTotal').text(productTotal);
        $('#shippingTotal').text(shippingTotal);
        $('#total').text(total);
    }

    updateTotals();
});

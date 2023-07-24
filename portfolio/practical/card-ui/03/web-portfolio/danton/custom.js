$(function(){
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })

  $('.gnb a, section').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').toggleClass('active')
  })
  $('.slideshow').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
})

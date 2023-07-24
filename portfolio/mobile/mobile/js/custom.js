$(function(){
  /* welcome page slick slider */ 
  $('.welcome-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  })
  /* trigger toggle */ 
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  /* gnb navi accordion */ 
  $('.dropdown-navi').click(function(){
    $(this).siblings('.dropdown-content').slideUp()
    $(this).next().slideDown()
    $(this).addClass('active')
    $(this).siblings('.dropdown-navi').removeClass('active')
  })
  /* user page accordion */ 
  $('.down-navi').click(function(){
    $(this).siblings('.down-content').slideUp()
    $(this).next().slideDown()
    $(this).addClass('active')
    $(this).siblings('.down-navi').removeClass('active')
  })
})
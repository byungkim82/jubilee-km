$(function(){

  var mediaQuery = window.matchMedia('(max-width: 768px)')

    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) { $('.goto-top').addClass('active') }
      else { $('.goto-top').removeClass('active') } })

    $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb > ul').toggleClass('active')
    $('.goyoutube').toggleClass('active')
  })
    $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
});
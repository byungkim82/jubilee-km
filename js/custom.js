$(function(){
     $(window).scroll(function () {
       if ($(window).scrollTop() > 50) { $('.goto-top').addClass('active') }
       else { $('.goto-top').removeClass('active') }
 })
});
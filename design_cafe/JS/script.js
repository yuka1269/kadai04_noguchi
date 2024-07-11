

$(function(){
    $('.slider_g').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
  });


  $(function() {
    const pageTop = $("#js-pageTop").hide();
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
  
  
    pageTop.click(function() {
      $("body,html").animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });


  $(function(){
    $(".hamburger").click(function (){
      $(".hamburger").toggleClass("open");
      $(".header_nav-sp").fadeToggle();
 
  });
});
  
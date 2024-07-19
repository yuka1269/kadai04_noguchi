

//$(function(){
    $('.slider_g').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      });
      
 // });


  $(function () {
    $('.slider_g').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      dots: true,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplaySpeed: 2000,
          slidesToShow: 1,
          dots: false
          },
        },
      ],
    });
  });




  $(function(){
    $('.mainvisual').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
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
  
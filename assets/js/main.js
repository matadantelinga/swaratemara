$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
  });

  var headerHeight =  $("header").height();
  var windowHeight = $(window).height();
  var bodyHeight = windowHeight - headerHeight;
  $(".fullScreen-container").css({height: bodyHeight})
});
$(document).ready(function () {
  // Nav mobile
  $("#humburgerBtn").click(function () {
    $("#mobileNav").toggle(200);
  });
  $(".mobileCloser").click(function () {
    $(this).parent().parent().hide(200);
  });

  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
  });

  var headerHeight = $("header").height();
  var windowHeight = $(window).height();
  var bodyHeight = windowHeight - headerHeight;
  $(".fullScreen-container").css({ height: bodyHeight })
});
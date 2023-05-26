
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll >= 100) {
      $(".barra-menu").addClass("fixed");
    } else {
      $(".barra-menu").removeClass("fixed");
    }
  });
  
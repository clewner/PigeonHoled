$(document).ready(function() {
    var header = $("#dropdownheader");
    
    $(window).scroll(function() {
      if ($(window).scrollTop() > $("#navbar").height()) {
        header.addClass("fixed");
        header.slideDown();
      } else {
        header.slideUp(100, function() {
          header.removeClass("fixed");
        });
      }
    });  
  });
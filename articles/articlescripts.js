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
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      
      if($("#hiddennavbar").hasClass("is-active")){
        $("#hiddennavbar").removeClass("is-active");
        $("#hiddennavbar").addClass("is-removed");
       
      }else if($("#hiddennavbar").hasClass("is-removed")){
        $("#hiddennavbar").addClass("is-active");
        $("#hiddennavbar").removeClass("is-removed");
        
        
      }else{
        $("#hiddennavbar").addClass("is-active");
        
      }
      
      $("html").toggleClass("htmlnav");
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  

  

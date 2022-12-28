function validateContact(){
  const contactname = document.getElementById("contactname");
  const contactemail = document.getElementById("contactemail");
  const contactmessage = document.getElementById("contactmessage");

  if(contactname.checkValidity() && contactemail.checkValidity() && contactmessage.checkValidity() ){
    document.getElementById("contactform").submit();
  }else{
    if(!contactname.checkValidity()){
      document.getElementById("nameerror").style.display = "block";
      contactname.classList.add("inputerror");
    }else{
      document.getElementById("nameerror").style.display = "none";
      if(contactname.classList.contains("inputerror")){
        contactname.classList.remove("inputerror");
      }
    }

    if(!contactemail.checkValidity()){
      document.getElementById("emailerror").style.display = "block";
      contactemail.classList.add("inputerror");
    }else{
      document.getElementById("emailerror").style.display = "none";
      if(contactemail.classList.contains("inputerror")){
        contactemail.classList.remove("inputerror");
      }
    }

    if(!contactmessage.checkValidity()){
      document.getElementById("messageerror").style.display = "block";
      contactmessage.classList.add("inputerror");
    }else{
      document.getElementById("messageerror").style.display = "none";
      if(contactmessage.classList.contains("inputerror")){
        contactmessage.classList.remove("inputerror");
      }
    }
  }

  

}


var isMobile;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ){
      isMobile = true;
    }

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
    
    if(isMobile){
      $("h1").css("letter-spacing", "-2px");
      $("h2").css("letter-spacing", "-1.2px");
      $("h3").css("letter-spacing", "-1px");
      $("h5").css("letter-spacing", "-1.2px");


    }
    
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

  

  

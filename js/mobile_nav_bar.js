$(document).ready(function() {
    $(".accordion").hide();
    $(".mobileNavBar_btn").click(function () {
      $(".accordion").slideToggle("slow").siblings(".accordion:visible").slideUp("slow");
      $(this).toggleClass("active");
    });
 
    $(".accordion .dropdown-content-mobile").hide();
    $(".accordion h3").click(function () {
      $(this).next(".dropdown-content-mobile").slideToggle("slow").siblings("dropdown-content-mobile:visible").slideUp("slow");
      $(this).toggleClass("active");
      $(this).siblings("h3").removeClass("active");
    });  
   }); 
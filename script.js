$(document).ready(function(){
  var navbar = $('.navbar');
  var currentUrl = window.location.href;

  $(window).scroll(function(){
      if($(window).scrollTop() <= 40){
         navbar.removeClass("fixed-top ");
      }else{
         navbar.addClass("fixed-top");
      }
  });
  
});
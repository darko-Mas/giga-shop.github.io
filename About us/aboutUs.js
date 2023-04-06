$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "rgba(15, 15, 15, 1)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".imgSection").css("opacity", "1");
        $(".navbar-fixed-top").css("border-bottom", "0.5px solid white"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar-fixed-top").css("background-color", "rgba(43, 5, 59, 0.996)"); // if not, change it back to transparent
        $(".imgSection").css("opacity", "0");
        $(".navbar-fixed-top").css("border-bottom", "none"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      }
    });
  });
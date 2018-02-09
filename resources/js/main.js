$(document).ready(function() {

  //Offset navbar when clicking anchor

  $(".navbar a").on("click", function(event){
    //event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("body, html").animate({
      scrollTop : newScrollCoordinate
    });
  });

  $(".navbar a").on("click", function(event){
    //event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(index.html).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("body, html").animate({
      scrollTop : newScrollCoordinate
    });
  });

  //Offset & animate jumbotron anchor

  $(".jumbotron a").on("click", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("body, html").animate({
      scrollTop : newScrollCoordinate
    });
  });


});

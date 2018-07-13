$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() >= $("#one").position().top) {
    $('body').css('background', $("#one").attr("data-color"));
  };

  if ($(document).scrollTop() > $("#two").position().top) {
    $('body').css('background', $("#two").attr("data-color"))
  };

  if ($(document).scrollTop() > $("#three").position().top) {
    $('body').css('background', $("#three").attr("data-color"))
  };
  
});


/*
jQuery(window).scroll(function(){
    var fromTopPx = 200; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('body').addClass('unl');
    }else{
        jQuery('body').removeClass('unl');
    }
});
*/

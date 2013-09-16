/* Menu animation */
$(document).ready(function() {

  var header = $('.nav-header'),
      ended = false,
      offset = 50;

  var switchHeaderClass = function(){
      var currentOffset = getCurrentOffSet();
      if(currentOffset >= offset){
        header.addClass('nav-header-shrink');
      }
      else {
        header.removeClass('nav-header-shrink');
      }
      ended=false;
  };

  var getCurrentOffSet = function() {
    return window.pageYOffset|| document.documentElement.scrollTop;
  };

  window.addEventListener('scroll',function(evt){
    if(!ended){
        ended=true;
        setTimeout(switchHeaderClass, 250);
    }
  },false);

});;
$(document).ready(function (){

    // alert($(window).width());

    var scrollAnimation = function(picto, section) {
        $(picto).click(function (){
            if($(window).width()>1024) {
            $('body,html').animate({
                scrollTop: $(section).offset().top - $('html').height() * .1
            }, 1000);
        } else {
            $('body,html').animate({
                scrollTop: $(section).offset().top
            }, 1000);
        }
        });
    };

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto'+i, '#section-0'+i);
    }

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto-min-'+i, '#section-0'+i);
    }

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto-min-landscape-'+i, '#section-0'+i);
    }
    
    scrollAnimation('#logo','#section-00');

    scrollAnimation('#scroll-top', '.container');
});;$(document).ready(function() {
    $('.slideButton, button[type=button]').click(function() {
	    var thisSlide = $(this).closest('ul.slide');
	    thisSlide.toggleClass('slided');
    });
});

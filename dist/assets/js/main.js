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
    $(".button").click( function(){
        $('#section-02').addClass('section-video-hide');
        $('#section-02-player').addClass('section-video-show');
    });

    
    var scrollAnimation = function(picto, section) {
        $(picto).click(function (){
            $('body,html').animate({
                scrollTop: $(section).offset().top-100
            }, 1000);
        });
    };

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto'+i, '#section-0'+i);
    }
});;$(document).ready(function() {
    $('.slide-01').click(function() {
        $(this).toggleClass('hide-section');
        $(this).parent().find('.slide-02').toggleClass('show-section');
    });

    $('.slide-02').click(function() {
        $(this).parent().find('.slide-01').toggleClass('hide-section');
        $(this).toggleClass('show-section');
    });
});

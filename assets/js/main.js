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

    var scrollAnimation = function(picto, section) {
        $(picto).click(function (){
            $('body,html').animate({
                scrollTop: $(section).offset().top - $('html').height() * .1
            }, 1000);
        });
    };

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto'+i, '#section-0'+i);
    }

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto-min-'+i, '#section-0'+i);
    }

    scrollAnimation('#logo','#section-00');
});;$(document).ready(function() {
    $('.play_button').click(function() {
        $(this).parent().parent().parent().toggleClass('hide-section');
        $(this).parent().parent().parent().parent().find('.slide-02').toggleClass('show-section');
    });

    $('button').click(function() {
        $(this).parent().parent().parent().parent().find('.slide-01').toggleClass('hide-section');
        $(this).parent().parent().parent().toggleClass('show-section');
    });
});

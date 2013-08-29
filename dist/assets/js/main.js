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

});;$(document).ready(function (){
    $('.button').click( function(){
        $('#section-02').addClass('section-video-hide');
        $('#section-02-player').addClass('section-video-show');
    });
    var scrollAnimation = function(picto, section) {
        $(picto).click(function (){
            $('body', 'html').animate({
                scrollTop: $(section).offset().top-100
            }, 1000);
        });
    };

    for(var i=1; i<9; i++) {
        scrollAnimation('#picto'+i, '#section-0'+i);
        console.log('#picto'+i);
    }
});;$(document).ready(function() {
    $('.btn-transition-01').click(function() {
        $('.section-texte-01').toggleClass('hide-section');
        $('.section-video-01').toggleClass('show-section');
    });

    $('.btn-transition-02').click(function() {
        $('.section-texte-02').toggleClass('hide-section');
        $('.section-video-02').toggleClass('show-section');
    });
});

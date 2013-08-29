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

});
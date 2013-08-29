/* Menu animation */

var cbpAnimatedHeader=(function(){
    var b=document.documentElement,
    g=document.querySelector(".nav-header"),
    e=false,
    a=50;
    function f(){
        window.addEventListener("scroll",function(h){
            if(!e){
                e=true;
                setTimeout(d,250)
            }
        },false)
    }
    function d(){
        var h=c();
        if(h>=a){
            classie.add(g,"nav-header-shrink")
        }else{
            classie.remove(g,"nav-header-shrink")
        }
        e=false
    }
    function c(){
        return window.pageYOffset||b.scrollTop
    }f()})();





    ( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
;$(document).ready(function (){
    $(".button").click( function(){
        $('#section-02').addClass('section-video-hide');
        $('#section-02-player').addClass('section-video-show');
    });

    var scrollAnimation = function(picto, section) {
        $(picto).click(function (){
            $('html').animate({
                scrollTop: $(section).offset().top-100
            }, 1000);
        });
    };

    for(var i=1; i>9; i++) {
        scrollAnimation("#picto"+i);
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

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

/* /Menu animation */





/* Paralax animation */
$(document).ready(function() {






        var controller = $.superscrollorama({
            triggerAtCenter: true,
            playoutAnimations: true
        });

        controller.addTween('#section01-left', 
        TweenMax.from($('#section01-left'), .5, {css:{opacity:0, left: -500}}));

        controller.addTween('#section01-right', 
        TweenMax.from($('#section01-right'), .5, {css:{opacity:0, right: -500}}));

        controller.addTween('#section02-left', 
        TweenMax.from($('#section02-left'), .5, {css:{opacity:0, left: -500}}));

        controller.addTween('#section02-right', 
        TweenMax.from($('#section02-right'), .5, {css:{opacity:0, right: -500}}));

        controller.addTween('#section03-left', 
        TweenMax.from($('#section03-left'), .5, {css:{opacity:0, left: -500}}));

        controller.addTween('#section03-right', 
        TweenMax.from($('#section03-right'), .5, {css:{opacity:0, right: -500}}));

        controller.addTween('#section04-left', 
        TweenMax.from($('#section04-left'), .5, {css:{opacity:0, left: -500}}));

        controller.addTween('#section04-right', 
        TweenMax.from($('#section04-right'), .5, {css:{opacity:0, right: -500}}));

        controller.addTween('#section05-left', 
        TweenMax.from($('#section05-left'), .5, {css:{opacity:0, left: -500}}));

        controller.addTween('#section05-right', 
        TweenMax.from($('#section05-right'), .5, {css:{opacity:0, right: -500}}));
    });

/* /Paralax animation */


// Scroll menu to section
$(document).ready(function (){
            $("#picto1").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-01").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto2").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-02").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto3").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-03").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto4").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-04").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto5").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-05").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto6").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-06").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto7").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-07").offset().top-100
                    }, 1000);
                //});
            });
            $("#picto8").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#section-08").offset().top-100
                    }, 1000);
                //});
            });
        });

// /Scroll menu to section

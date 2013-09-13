$(document).ready(function() {
    $('.slideButton').click(function() {
	    var thisSlide1 = $(this).closest('li'); 
	    var thisSlide2 = thisSlide1.next();
	    TweenMax.to(thisSlide1, 0.5, {className:"+=slideLeft", onComplete:myFunction});
			function myFunction() {
				thisSlide2.show();
				thisSlide1.hide();
		    TweenMax.to(thisSlide2, 0.5, {className:"+=slideLeft"});
			}
    });
    $('button[type=button]').click(function() {
	    var thisSlide2 = $(this).closest('li'); 
	    var thisSlide1 = thisSlide2.prev();
	    TweenMax.to(thisSlide2, 0.5, {className:"-=slideLeft", onComplete:myFunction});
			function myFunction() {
				thisSlide1.show();
				thisSlide2.hide();
		    TweenMax.to(thisSlide1, 0.5, {className:"-=slideLeft"});
			}
    });
});

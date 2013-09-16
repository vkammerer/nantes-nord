$(document).ready(function() {
    $('.slideButton, button[type=button]').click(function() {
	    var thisSlide = $(this).closest('ul.slide');
	    thisSlide.toggleClass('slided');
    });
});

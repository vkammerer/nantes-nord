
$(document).ready(function (){

    // alert($(window).width());

    var scrollAnimation = function(picto, section) {
        $(picto).click(function (){
            if($(window).width()>764) {
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

    scrollAnimation('#logo','#section-00');

    scrollAnimation('#scroll-top', '.container');
});

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

    scrollAnimation('#logo','#section-00');
});
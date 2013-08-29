// Scroll menu to section
$(document).ready(function (){
            $(".button").click( function(){
//                alert('hey');
                $('#section-02').addClass('section-video-hide');
                $('#section-02-player').addClass('section-video-show');
            });

            var scrollAnimation = function(picto, section) {
                $(picto).click(function (){
                //$(this).animate(function(){
                    $('html').animate({
                        scrollTop: $(section).offset().top-100
                    }, 1000);
                //});
            });
            });

            for(var i=1; i>9; i++)
            scrollAnimation("#picto"+i);
        });

// /Scroll menu to section
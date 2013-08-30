$(document).ready(function() {
    $('.slide-01').click(function() {
        $(this).toggleClass('hide-section');
        $(this).parent().find('.slide-02').toggleClass('show-section');
    });

    $('.slide-02').click(function() {
        $(this).parent().find('.slide-01').toggleClass('hide-section');
        $(this).toggleClass('show-section');
    });
});

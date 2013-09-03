$(document).ready(function() {
    $('.play_button').click(function() {
        $(this).parent().parent().parent().toggleClass('hide-section');
        $(this).parent().parent().parent().parent().find('.slide-02').toggleClass('show-section');
    });

    $('button').click(function() {
        $(this).parent().parent().parent().parent().find('.slide-01').toggleClass('hide-section');
        $(this).parent().parent().parent().toggleClass('show-section');
    });
});

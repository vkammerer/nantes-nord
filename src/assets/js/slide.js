$(document).ready(function() {
    $('.btn-transition-01').click(function() {
        $('.section-texte-01').toggleClass('hide-section');
        $('.section-video-01').toggleClass('show-section');
    });

    $('.btn-transition-02').click(function() {
        $('.section-texte-02').toggleClass('hide-section');
        $('.section-video-02').toggleClass('show-section');
    });
});

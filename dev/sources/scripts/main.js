$(function(){

    $(".navigation-link").on('click', function(e) {
        e.preventDefault();
        scrollToElement($(this).attr('data-anchor'), $(this).attr('data-offset'));
    });

});

function scrollToElement(selector, offset){
    $('html, body').animate({
        scrollTop: $(selector).offset().top - offset
    }, 2000);
}
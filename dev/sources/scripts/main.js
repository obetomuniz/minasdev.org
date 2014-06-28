$(function(){

    $(".navigation-link").on('click', function(e) {
        e.preventDefault();
        scrollToElement($(this).attr('data-anchor'), $(this).attr('data-offset'));
    });

    $('.newsletter-form').on('submit', function(){

        if($("#email").val() === "" || !validateEmail($("#email").val()))
            return false;

    });

});

function scrollToElement(selector, offset){
    $('html, body').animate({
        scrollTop: $(selector).offset().top - offset
    }, 2000);
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
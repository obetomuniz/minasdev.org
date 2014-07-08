$(function(){

    $(document).on('scroll', function(){
        if($(window).scrollTop() < 170){
            $('header').addClass('on-top');
        }else{
            $('header').removeClass('on-top');
        }
    });

    // Tem que ter suporte via teclado
    $(".nav-link").on('click', function(e) {
        e.preventDefault();
        scrollToElement($(this).attr('data-anchor'), $(this).attr('data-offset'));
    });

    $('.newsletter-form').on('submit', function(){
        var emailInpt = $("#email");
        if(emailInpt.val() === "" || !validateEmail(emailInpt.val())){
            emailInpt.addClass("animate-error");
            setTimeout(function(){ emailInpt.removeClass('animate-error') }, 300);
            return false;
        }

    });

});

function scrollToElement(selector, offset){
    $('html, body').animate({
        scrollTop: $(selector).offset().top - offset
    }, 1200, 'easeInOutCubic');
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
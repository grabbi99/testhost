$(document).ready(function() {
    "use strict";

    // Scroll To Top
    $('body').prepend('<div class="go-top"><span id="top"><i class="ion-chevron-up"></i></span></div>');

    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $('.go-top').fadeIn(600);
        }else{
            $('.go-top').fadeOut(600);
        }
    });
    $('#top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInQuad');
        return false;
    });

    // Mobile Menu
    $('#nav').slicknav({
        label: '',
        duration: 700,
        prependTo: '.mobile-menu'
    });

    // Match Height
    $('.items-row').each(function() {
        $(this).find('.single-item').matchHeight();
    });
  
});
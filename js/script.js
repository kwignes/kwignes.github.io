/*
    Scroll To Top button
 */



var goToTop = $('.go-to-top');
var win = $(window);
var windowHeight = win.height();
var timeoutHandler;

win.on('scroll', function () {
    var top = $(this).scrollTop();
    if (top > windowHeight / 2 && !goToTop.is(':visible')) {
        goToTop.fadeIn();
    }
    if (top <= windowHeight / 2 && goToTop.is(':visible')) {
        goToTop.fadeOut();
    }
    if (timeoutHandler) {
        clearTimeout(timeoutHandler);
    }

    goToTop.removeClass('less-opacity');
    timeoutHandler = setTimeout(function () {
        goToTop.addClass('less-opacity');
    }, 2000);
});
goToTop.on('click', function () {
    $('body, html').animate({ scrollTop: 0 });
});



$(document).ready(function(){
    $('#wrapper').fadeIn();
});

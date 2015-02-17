$('html').removeClass('no_js');
$('html').addClass('js');

var $body = $('body');
var $nav = $('.page_nav');

var $overlay = $('<div class="overlay"></div>');
$overlay.prependTo($body);
//$('.mobile_menu').clone().appendTo($overlay);
$('.page_nav').clone().appendTo($overlay);

$body.prepend($overlay);

var $mobileMenu = $('.mobile_menu');

$mobileMenu.on('click', function (e) {
    $body.toggleClass('show_menu');
})
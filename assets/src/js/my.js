$(document).ready(function(){
    $('.header-nav-contacts-language').click(function ()
    {
        $(".header-nav-contacts-language").removeClass('lang-active');
        $(this).addClass('lang-active');
    });
        $('.service-carousel').owlCarousel({
            loop: false,
            dots: false,
            nav: true,
            items:1,
            navSpeed: 1400,
            nextArrow: '<a class="arrow-next"></a>',
            prevArrow: '<a class="arrow-prev"></a>',
            responsive: {
                700: {
                    items: 2,
                },
                1610: {
                    items: 3,
                }
        }
    });

    $(document).on('click', function (e) {

        if (e.target.closest('.header-nav-menu-scroll')) {
            var headr = e.target.closest('.header-nav-menu-scroll').getAttribute("href");
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(headr).offset().top
            }, 2000);
        }
        if (e.target.closest('.service-order')) {
            var order = e.target.closest('.service-order').getAttribute("href");
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(order).offset().top
            }, 3000);
        }
    });

    $('.header-nav-burger').click(function ()
    {
        if($(".header-nav-burger").hasClass('clicked'))
        {
            $(".header-nav-burger").removeClass('clicked');
            $(".header-nav-mobile").removeClass('burger-open');
            $(".header-nav-burger-line-1").removeClass('burger-line-1');
            $(".header-nav-burger-line-2").removeClass('burger-line-2');
            $(".header-nav-burger-line-3").removeClass('burger-line-3');
        }
        else {
            $(".header-nav-burger").addClass('clicked');
            $(".header-nav-mobile").addClass('burger-open');
            $(".header-nav-burger-line-1").addClass('burger-line-1');
            $(".header-nav-burger-line-2").addClass('burger-line-2');
            $(".header-nav-burger-line-3").addClass('burger-line-3');
        }
    });

    var wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0
        }
    );
    wow.init();
});
if ($(window).width() > 1024) {
    $('.service.download').click(function () {
        $('.arr-down-main').addClass("animated fadeOutDown slow for-arr")
        $(".container-for-arr").addClass('for-container');
    });
}
if ($(window).width() < 1024) {
    $('.service.download').click(function () {
        $('.arr-down-main').addClass("for-arr")
        $(".container-for-arr").addClass('for-container');
    });
}
$('.doc-download-icon').click(function () {
    $('.download-arrow').addClass("animated fadeOutDown slow for-arr")
});
$('.service.order').click(function ()
{
    $(".arrow-icon").addClass('for-arrow');
});
$('.btn-more').click(function ()
{
    $(this).addClass('button-click');
});
$('input[name="phone"]').mask('+0 (000) 000-00-00');
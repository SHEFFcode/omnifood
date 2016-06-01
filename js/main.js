$(document).ready(function () {
    /* Sticky Nav */
    $('.section-features').waypoint(function (direction) {
       if (direction === 'down') {
            $('nav').addClass('sticky');
       } else {
            $('nav').removeClass('sticky');
       }
    }, {
        offset: '60px'
    });

    /* Scroll on click */
    $('.scroll-to-plans').click(function () {
        $('html body').animate({ scrollTop: $('.section-plans').offset().top }, 1000);
    });
    $('.scroll-to-start').click(function () {
        $('html body').animate({ scrollTop: $('.section-features').offset().top }, 1000);
    });

    /* Navigation Scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animation on Scroll */
    $('.waypoint1').waypoint(function (direction) {
       $('.waypoint1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.waypoint2').waypoint(function (direction) {
        $('.waypoint2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.waypoint3').waypoint(function (direction) {
        $('.waypoint3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.waypoint4').waypoint(function (direction) {
        $('.waypoint4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile Nav */
    $('.mobile-nav-icon').click(function () {
        var nav     = $('.main-nav');
        var icon    = $('.mobile-nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round').removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round').removeClass('ion-close-round');
        }
    });
    /* Google Maps */
    new GMaps({
        div: '#map',
        lat: 37.7749,
        lng: -122.4194,
        zoom: 12
    });
});

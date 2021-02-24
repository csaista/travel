$(document).ready(function () {
    $('.header-carousel').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        navText: ["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"]

    });
    $('.offers-carousel').owlCarousel({
        nav: false,
        dots: false,
        items: 6,
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:
            {
                items: 1
            },
            300:
            {
                items: 2
            },
            576:
            {
                items: 3
            },
            768:
            {
                items: 4
            },
            992:
            {
                items: 5
            },
            1200:
            {
                items: 6
            }

        }
    });
    $('.client-carousel').owlCarousel({
        nav: false,
        dots: false,
        items: 6,
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:
            {
                items: 1
            },
            300:
            {
                items: 2
            },
            576:
            {
                items: 3
            }

        }
    });



});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

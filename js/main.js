//owl carousel for offerings
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        center: true,
        autoplayTimeout: 2000,
        navText: [
            '<i class="fa-solid fa-chevron-left me-5 mt-5"></i>',
            '<i class="fa-solid fa-chevron-right ms-5"></i>'
        ],
        responsive: {
            0: { items: 1 },
            767: { items: 2 },
            900: { items: 3 },
            1400: { items: 4 }
        }
    });
});
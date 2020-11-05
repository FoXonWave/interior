$(document).ready(function() {
    $('.banner .banner-sliders').slick({
        dots: true
    });
    $('.exclusive .banner-sliders').slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
    $('.hotdeal .banner-sliders').slick({
        dots: true
    });
});
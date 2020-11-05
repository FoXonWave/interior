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

$(document).scroll(function() {
    var scrolled = $(document).scrollTop();
     if ( scrolled >= 799 ) {
         $("header").addClass("sticky")
     } else {
        $("header").removeClass("sticky")
     }
 });
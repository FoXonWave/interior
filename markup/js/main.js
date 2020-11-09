$(document).ready(function() {
    $('.banner .banner-sliders').slick({
        dots: true,
        infinite: true,
        autoplay: true
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

    if( $('.products').length > 0) {
        let items = $('.items').html();
        $('.refresh').on('click', function() {
            $(".items").append(items);
            setTimeout(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".refresh").offset().top
                }, 1000);
            }, 200)
            
        });
    }
    
});

$(document).scroll(function() {
    var scrolled = $(document).scrollTop();
     if ( scrolled >= 799 ) {
         $("header").addClass("sticky")
     } else {
        $("header").removeClass("sticky")
     }
 });
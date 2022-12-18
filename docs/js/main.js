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

    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-small'
      });
      $('.slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-big',
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        arrows: false
      });

    if( $('.products').length > 0) {      
        let items = $('.items.active').html();  
        $('.refresh').on('click', function() {            
            $(".items.active").append(items);
            setTimeout(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".refresh").offset().top
                }, 1000);
            }, 200)
            
        });
    }

    $('.featured .tab').on('click', function() {
        let name = $(this).attr("data-name");
        $('.featured .tab').removeClass("active");
        $('.featured .items').removeClass("active");
        $('.featured .tab[data-name="'+name+'"]').addClass("active");
        $('.featured .items[data-name="'+name+'"]').addClass("active");
    });

    $('.products .tab').on('click', function() {
        let name = $(this).attr("data-name");
        $('.products .tab').removeClass("active");
        $('.products .items').removeClass("active");
        $('.products .tab[data-name="'+name+'"]').addClass("active");
        $('.products .items[data-name="'+name+'"]').addClass("active");
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
// banner
$('.banner__slide').slick({
    autoplay: true,
    prevArrow:"<button type='button' class='slick-prev pull-left banner-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right banner-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});


// Product Carousel

$('.new-products__lists').slick({
    autoplay: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left product-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right product-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});
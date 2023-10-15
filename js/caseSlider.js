$(document).ready(function () {
  $('.carousel_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    infinite: true,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.testimonials').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
});

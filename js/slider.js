// $(document).ready(function () {
//   $('.testimonials').slick({
//     slidesToShow: 3.5,
//     slidesToScroll: 1,
//     //   speed: 2000,
//     //   dots: true,
//     centerMode: true,
//     centerPadding: '0px',
//     // autoplay: true,
//     //   autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           // dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

$(document).ready(function () {
  $('.testimonials').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: false, // Це змінено на false
    infinite: false, // Це додано
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

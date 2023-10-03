$(document).ready(function () {
  $('.my-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Вмикаємо стрілки за замовчуванням
    centerMode: false,
    infinite: true,
    adaptiveHeight: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200, // На розширенні 1200px і менше
        settings: {
          arrows: false, // Вимикаємо стрілки
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // На розширенні 768px і менше
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Вимикаємо стрілки
          dots: true,
        },
      },
    ],
  });
});

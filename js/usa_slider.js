document.addEventListener('DOMContentLoaded', function () {
  const mainSlider = new Swiper('.main-slider', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const subSliders = document.querySelectorAll('.sub-slider');
  subSliders.forEach(subSlider => {
    new Swiper(subSlider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Показуємо або ховаємо кнопку
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Функція для скролінгу нагору
scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

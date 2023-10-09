document.addEventListener('DOMContentLoaded', function () {
  let hash = window.location.hash;

  // // Приховуємо всі елементи
  // document.querySelectorAll('.content-item').forEach(item => {
  //   item.style.display = 'none';
  // });

  // Показуємо потрібний елемент в залежності від хештегу
  if (hash) {
    let targetElement = document.querySelector(hash);
    if (targetElement) {
      // Приховуємо всі елементи
      document.querySelectorAll('.content-item').forEach(item => {
        item.style.display = 'none';
      });
      targetElement.style.display = 'block';
    }
  }
});

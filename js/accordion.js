document.addEventListener('DOMContentLoaded', function () {
  let hash = window.location.hash;
  if (hash) {
    let targetItem = document.querySelector(hash);
    if (targetItem) {
      targetItem.classList.add('active');
    }
  }
  let accordionItems = document.querySelectorAll('.accordion-item');
  let allContents = [
    ...document.querySelectorAll('.accordion-content-display li'),
    ...document.querySelectorAll('.accordion-content-display2 li'),
  ];

  accordionItems.forEach(item => {
    item.addEventListener('click', function () {
      let targetId = this.getAttribute('data-target');
      let targetContent = document.getElementById(targetId);
      let wasActive = this.classList.contains('active');

      // Видаліть клас 'active' з усіх елементів
      accordionItems.forEach(i => {
        i.classList.remove('active');
      });

      // Приховуємо всі елементи
      allContents.forEach(content => {
        content.classList.add('hidden');
      });

      // Якщо клікнутий елемент був закритий, то відкриваємо його
      if (!wasActive) {
        this.classList.add('active');
        targetContent.classList.remove('hidden');
      }
    });
  });
});

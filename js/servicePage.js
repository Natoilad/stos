document.addEventListener('DOMContentLoaded', function () {
  let hash = window.location.hash;
  if (hash) {
    let targetElement = document.querySelector(hash);
    if (targetElement) {
      document.querySelectorAll('.content-item').forEach(item => {
        item.style.display = 'none';
      });
      targetElement.style.display = 'block';
    }
  }
});

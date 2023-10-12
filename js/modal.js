(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'), // вибрати усі кнопки
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  });
  refs.modal.addEventListener('click', function (event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

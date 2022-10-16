(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    docBody: document.querySelector('body'),

    headerBtn: document.querySelector('.header__btn'),
    heroBtn: document.querySelector('.hero__btn'),
    offeringsBtn: document.querySelector('.offerings__btn'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.headerBtn.addEventListener('click', toggleModal);
  refs.heroBtn.addEventListener('click', toggleModal);
  refs.offeringsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.docBody.classList.toggle('_lock');
  }
})();
const btnOpen = document.querySelector('.open-btn');
const backdrop = document.querySelector('.backdrop');
const btnClose = document.querySelector('.close-btn');

const handleShowModal = () => {
  document.body.classList.toggle('is-modal-open');
};

btnOpen.addEventListener('click', handleShowModal);
btnClose.addEventListener('click', handleShowModal);

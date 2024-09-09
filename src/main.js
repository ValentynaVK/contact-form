const btnOpen = document.querySelector('.open-btn');
const backdrop = document.querySelector('.modal');
const btnClose = document.querySelector('.close-btn');

const handleShowModal = () => {
  document.body.classList.toggle('is-modal-open');
};

btnOpen.addEventListener('click', handleShowModal);
btnClose.addEventListener('click', handleShowModal);

// new Promise((resolve, reject) => {
//   resolve(true);
// })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(value => {
//     console.log(value);
//   })
//   .finally(() => {
//     setTimeout(() => {
//       console.log('final');
//     }, 1500);
//   });

console.log(1);

new Promise((resolve, reject) => {
  resolve();
}).then(value => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

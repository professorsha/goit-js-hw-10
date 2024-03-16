import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const delayForm = document.querySelector('.form');
delayForm.addEventListener('submit', event => {
  event.preventDefault();
  const timer = event.currentTarget.elements.delay.value;
  const radio = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radio === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, timer);
  });

  // Registering promise callbacks
  promise
    .then(value => {
      iziToast.success({
        color: 'green',
        position: 'topCenter',
        message: `✅ Fulfilled promise in ${timer}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: 'bottomCenter',
        message: `❌ Rejected promise in ${timer}ms`,
      });
    });
});

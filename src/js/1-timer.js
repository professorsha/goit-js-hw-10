import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let timeInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    timeInterval = userSelectedDate - options.defaultDate;
    if (userSelectedDate < options.defaultDate) {
      iziToast.error({
        color: 'red',
        theme: 'dark',
        position: 'topCenter',
        message: `Please choose a date in the future`,
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};
const calendar = flatpickr('#datetime-picker', options);
const inputTime = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
startButton.disabled = true;
// ===================
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
const showTimer = document.querySelectorAll('.value');
startButton.addEventListener('click', event => {
  const repeatTime = setInterval(() => {
    timeInterval = userSelectedDate - new Date();
    event.preventDefault();
    inputTime.disabled = true;
    if (timeInterval < 1) {
      startButton.disabled = true;
      inputTime.disabled = false;
      clearInterval(repeatTime);
      return;
    }

    const timer = convertMs(timeInterval);
    showTimer[0].innerText = timer.days.toString().padStart(2, '0');
    showTimer[1].innerText = timer.hours.toString().padStart(2, '0');
    showTimer[2].innerText = timer.minutes.toString().padStart(2, '0');
    showTimer[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});

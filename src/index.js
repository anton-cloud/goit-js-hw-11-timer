import './sass/main.scss';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  renderPage(days, hours, mins, secs) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.minutes.textContent = mins;
    this.seconds.textContent = secs;
  }

  showTime() {
    setInterval(() => {
      const currentTime = new Date().getTime();
      const time = this.targetDate - currentTime;

      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.renderPage(days, hours, mins, secs);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sept 31, 2021'),
});

const startBtn = document.querySelector('button[data-action-start]');
startBtn.addEventListener('click', startTimer);

function startTimer() {
  startBtn.setAttribute('disabled', '');
  timer.showTime();
}

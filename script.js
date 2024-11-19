// Select DOM Elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const themeToggle = document.getElementById('themeToggle');

// Helper Function: Add Leading Zero
function pad(number) {
  return number < 10 ? `0${number}` : number;
}

// Update Clock Function
function updateClock() {
  const now = new Date();
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();

// Theme Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

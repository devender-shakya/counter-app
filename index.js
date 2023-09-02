let interval;
let seconds = 0;
let minutes = 0;
let running = false;

function toggleTimer() {
  if (running) {
    stopTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  running = true;
  document.getElementById('startStopButton').innerText = 'Stop';

  // Clear existing interval if any
  clearInterval(interval);

  interval = setInterval(() => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(interval);
      running = false;
      document.getElementById('startStopButton').innerText = 'Start';
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    updateDisplay();
  }, 1000);
}

function stopTimer() {
  running = false;
  document.getElementById('startStopButton').innerText = 'Start';
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

function editTimer() {
  const timeInput = document.getElementById('timeInput');
  const setButton = document.getElementById('setButton');
  timeInput.style.display = 'inline-block';
  setButton.style.display = 'inline-block';
}

function setTime() {
  const timeInput = document.getElementById('timeInput');
  const timeParts = timeInput.value.split(':');
  if (timeParts.length === 2) {
    minutes = parseInt(timeParts[0], 10);
    seconds = parseInt(timeParts[1], 10);
    updateDisplay();
  }
  timeInput.style.display = 'none';
  document.getElementById('setButton').style.display = 'none';
}

function updateDisplay() {
  // Convert to 00:00 format
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

  document.getElementById('timer').innerText = `${displayMinutes}:${displaySeconds}`;
}

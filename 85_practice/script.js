const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const display = document.getElementById("timer");

let hours = 0;
let mins = 0;
let secs = 0;

function getTime() {
  let time = "";
  let timeInHrs = hours < 10 ? `0${hours}` : `${hours}`;
  let timeInMin = mins < 10 ? `0${mins}` : `${mins}`;
  let timeInSecs = secs < 10 ? `0${Math.floor(secs)}` : `${Math.floor(secs)}`;
//   console.log(time);
  return `${timeInHrs}:${timeInMin}:${timeInSecs}`;
}

// console.log(getTime());
console.log(display.innerHTML = getTime());

function increaseTime() {
  secs += 0.5;
//   console.log(secs);
  if (secs === 60) {
    secs = 0;
    mins += 1;
  }
  if (mins === 60) {
    mins = 0;
    hours += 1;
  }
  if (Number.isInteger(secs)) {
    display.innerHTML = getTime();
  }
}

let interval;
function start() {
  interval = setInterval(function() {
    increaseTime();
  }, 500);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  hours = 0;
  secs = 0;
  mins = 0;
  display.innerText = getTime();
}

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
const display = document.querySelector("#display");

let hrs = 0;
let mins = 0;
let secs = 0;
let interval;

function getTime() {
  secs += 60;
  if (secs === 60) {
    secs = 0;
    mins += 10;
  }
  if (mins === 60) {
    mins = 0;
    hrs += 1;
  }
  display.innerHTML = `${hrs < 10 ? `0${hrs}` : `${hrs}`}:${
    mins < 10 ? `0${mins}` : `${mins}`
  }:${secs < 10 ? `0${secs}` : `${secs}`}`;
}

function start() {
  interval = setInterval(() => {
    getTime();
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  display.innerHTML = "00:00:00";
}

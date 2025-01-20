const display = document.querySelector("#display");

let timer;
let secs = 0;
let mins = 0;
let hrs = 0;

function getTime() {
  secs += 1;
  if (secs === 60) {
    secs = 0;
    mins += 1;
  }
  if (mins === 60) {
    mins = 0;
    hrs += 1;
  }
  let seconds = secs < 10 ? `0${secs}` : secs;
  let minutes = mins < 10 ? `0${mins}` : mins;
  let hours = hrs < 10 ? `0${hrs}` : hrs;
  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function start() {
  timer = setInterval(() => {
    getTime();
  }, 1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    display.innerHTML = `00:00:00`
    clearInterval(timer);
}

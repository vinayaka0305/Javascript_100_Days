const display = document.querySelector("#display");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let time;
let timer = false;
let hours = 0;
let min = 0;
let sec = 0;

const startTime = () => {
  timer = true;
  timerFn();
};

const stopTime = ()=>{
   timer = false;
}

const resetTime = ()=>{
    timer = false;
    display.innerHTML = "00:00:00";
}

const timerFn = () => {
  if (timer) {
    sec = parseInt(sec);
    min = parseInt(min);
    hours = parseInt(hours);
    sec += 1;
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hours += 1;
      min = 0;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    display.innerHTML = hours + ":" + min + ":" + sec;
    setTimeout(() => {
      timerFn();
    }, 1000);
  }
};

start.addEventListener("click", () => {
  startTime();
});
stop.addEventListener("click", () => {
  stopTime();
});
reset.addEventListener("click", () => {
  resetTime();
});


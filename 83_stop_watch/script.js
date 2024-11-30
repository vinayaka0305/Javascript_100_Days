const timeElement = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const pauseBtn = document.getElementById('pause');


let hours = 0;
let mins = 0;
let secs = 0;

function getTime(){
    let time = '';
    time += hours < 10? `0${hours}`:`${hours}`;
    time += mins < 10 ? `:0${mins}`:`${mins}`;
    time += secs <10 ? `:0${secs}` : `${secs}`;
    return time;
}

// console.log(getTime());

timeElement.innerText = getTime();

pauseBtn.setAttribute('disabled',true);
stopBtn.setAttribute('disabled',true);

function increaseTime(){
    secs += 0.5;
    if(secs === 60){
        secs = 0;
        mins += 1;
    }
    if(mins === 60){
        mins = 0;
        hours += 1;
    }
    if(Number.isInteger(secs)){
        timeElement.innerHTML = getTime();
    }
}

let interval;
function start(){
    interval = setInterval(()=>{
        increaseTime();
    },500)
    startBtn.setAttribute('disabled',true);
    pauseBtn.removeAttribute('disabled');
    stopBtn.removeAttribute('disabled');
}

function pause(){
    if(pauseBtn.innerText === "pause"){
        clearInterval(interval);
        pauseBtn.innerText = "continue";
    }else{
        start();
        pauseBtn.innerText = "pause";
    }
}

function stop(){
    clearInterval(interval);
    hours = 0;
    mins = 0;
    secs = 0;
    timeElement.innerHTML = getTime();
    pauseBtn.setAttribute('disabled',true);
    stopBtn.setAttribute('disabled',true);
    startBtn.removeAttribute('disabled');
    pauseBtn.innerText = "pause";
}

const display = document.querySelector('#display');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');

let secs = 0;
let mins = 0;
let hours = 0;


display.innerHTML = getTime()

pauseBtn.setAttribute('disabled',true);
resetBtn.setAttribute('disabled',true);

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
        display.innerHTML = getTime();
    }
}

let interval;
function getTime(){
   let secReturn = secs<10 ? `0${secs}`:`${secs}`;
   let minsReturn = mins<10 ? `0${mins}`:`${mins}`;
   let hrsReturn = hours<10 ? `0${hours}`:`${hours}`;
   return `${hrsReturn}:${minsReturn}:${secReturn}`
}   

function start(){
    interval = setInterval(()=>{
        increaseTime()
    },500)
    startBtn.setAttribute('disabled',true);
    pauseBtn.removeAttribute('disabled');
    resetBtn.removeAttribute('disabled');
}

function pause(){
    if(pauseBtn.innerHTML === 'pause'){
        clearInterval(interval);
        pauseBtn.innerHTML = 'continue'
    }else{
        start();
        pauseBtn.innerHTML = 'pause';
    }
    
}

function reset(){
    clearInterval(interval);
    display.innerHTML = `00:00:00`
    startBtn.removeAttribute('disabled');
    pauseBtn.setAttribute('disabled',true);
    resetBtn.setAttribute('disabled',true);
    if(pauseBtn.innerHTML === 'continue'){
        pauseBtn.innerHTML = 'pause';
    }
}
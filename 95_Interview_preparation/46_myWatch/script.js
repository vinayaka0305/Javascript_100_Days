const dispaly = document.querySelector("#display");

let hrs = 0;
let mins = 0;
let secs = 0;
let timer;

function getTime(){
    secs += 1;
    console.log(secs);
    if(secs === 60){
        secs = 0;
        mins += 1;
    }
    if(mins === 60){
        mins = 0;
        hrs += 1;
    }
    let nSec = secs<10?`0${secs}`:secs
    let nMin = mins<10?`0${mins}`:mins
    let nHrs = hrs<10?`0${hrs}`:hrs
    dispaly.textContent = `${nHrs}:${nMin}:${nSec}`

}

function start(){
    timer = setInterval(()=>{
        getTime();
    },1000)
}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    dispaly.textContent = `00:00:00`
}
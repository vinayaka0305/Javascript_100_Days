const dateInput = document.querySelector('#dateInput');
const colorInput= document.querySelector('#color');
const highlight= document.querySelector('#highlight');
const clear= document.querySelector('#clear');
const calendarDay = document.querySelectorAll('.calendar-day');
const inputDate = dateInput.value;
const color = colorInput.value;

function changeColor(){
    const inpudate = Number(dateInput.value);
    const color = colorInput.value;
    // console.log(inpudate,color);
    calendarDay.forEach((obj)=>{
        if(Number(obj.innerHTML) === inpudate){
            // console.log(Number(obj.innerHTML))
            // console.log(inpudate)
            // console.log(color);
            obj.style.backgroundColor= color;
        }
    })
}

highlight.addEventListener('click',changeColor)

function reset(){
    calendarDay.forEach((obj)=>{
        obj.style.backgroundColor = "";
    })
}

clear.addEventListener('click',reset)
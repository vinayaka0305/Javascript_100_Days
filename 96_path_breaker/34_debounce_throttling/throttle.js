const userInput = document.querySelector("#user-input");
const display = document.querySelector("#display");

const myThrottle = (fn, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

//how this works?
//The first function call happens immeadiately
//Then,the function waits(setTimeout) for 1 sec before allowing another call
//If the event fires again within 1 sec, it is ignored
//Once the timer is over, the function can run again

const handleChange = (e)=>{
    display.innerHTML = e.target.value;
}

const handleThrottle = myThrottle(handleChange,1000);


userInput.addEventListener('input',handleThrottle)

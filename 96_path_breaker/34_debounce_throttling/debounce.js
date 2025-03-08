const userInput = document.querySelector("#user-input");
const display = document.querySelector("#display");

const myDebounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
//How debounce works?

//The function does not immeadiately
//Every time the event fires, the previous timer is cleared
//The function only runs after user stops triggering the event for set time(setTimeout)
//If the event fires again before the timer completes, the timer resets and start over

const handleChange = (e) => {
  display.innerHTML = e.target.value;
};

const handleDebounce = myDebounce(handleChange, 1000);

userInput.addEventListener("input", handleDebounce);


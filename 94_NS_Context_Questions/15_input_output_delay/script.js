const input2 = document.querySelector("#input2");
const input1 = document.querySelector("#input1");
const tBtn = document.querySelector("#toggleinputs");
const count = document.querySelector('#count');
const display = document.querySelector('#textouput');
let counts = 0;
let typingTimer;

tBtn.addEventListener("click", () => {
  if (input2.style.display === "none") {
    input2.style.display = "inline";
    input2.removeAttribute("disabled");
  } else {
    input2.style.display = "none";
    input2.setAttribute("disabled", true);
  }
});

const handleChange = (e)=>{
    const inputValue = e.target.value;
    count.textContent = inputValue.length;

    clearTimeout(typingTimer);

    typingTimer = setTimeout(()=>{
        if(inputValue.length>0){
            display.textContent = inputValue
            input1.value = '';
            count.textContent = 0;
        }
    },4000)
}

const handleChange1 = (e)=>{
    const inputValue = e.target.value;
    count.textContent = inputValue.length;

    clearTimeout(typingTimer);

    typingTimer = setTimeout(()=>{
        display.textContent = inputValue;
        input2.value = '';
        count.textContent = '';
        count.textContent = 0;
    },4000)
}

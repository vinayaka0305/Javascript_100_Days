const numBtns = document.querySelectorAll("[data-number]");
const currDisplay = document.querySelector("[data-curr-operand]");
const prevDisplay = document.querySelector("[data-prev-operand]");
const operationBtns = document.querySelectorAll("[data-operation]");
const allClearBtn = document.querySelector("[data-all-clear]");
const delBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equal]");

let currOperand = "";
let prevOperand = "";
let selectedOperand = "";

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.textContent;
    currOperand += number;
    currDisplay.textContent = currOperand;
  });
});

allClearBtn.addEventListener("click", () => {
  currOperand = "";
  prevOperand = "";
  selectedOperand = "";
  currDisplay.textContent = "";
  prevDisplay.textContent = "";
});

delBtn.addEventListener("click", () => {
  let displayContent = currDisplay.textContent;
  if (displayContent.length > 0) {
    displayContent = displayContent.slice(0, -1);
    // console.log(currOperand);
    currDisplay.textContent = displayContent;
    currOperand = displayContent;
    console.log(currOperand);
  }
});

operationBtns.forEach(function(btn) {
  btn.addEventListener("click", function(){
    if (currOperand === "") return;
    if (prevOperand !== "") {
      calculate();
    }
    selectedOperand = btn.textContent;
    // console.log(selectedOperand);
    prevOperand = currOperand;
    currOperand = "";
    prevDisplay.textContent = prevOperand + " " + selectedOperand;
    currDisplay.textContent = "";
  });
});

equalsBtn.addEventListener('click',()=>{
    if(currOperand === '' || prevOperand === '')return;
    calculate();
    selectedOperand = '';
    prevOperand = '';
})

function calculate() {
  const num1 = parseFloat(prevOperand);
  const num2 = parseFloat(currOperand);

  console.log(num1,num2);
  if (isNaN(num1) || isNaN(num2)) return;

  let result;

  switch (selectedOperand) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "error";
      } else {
        result = num1 / num2;
      }
      break;

    default:
      return;
  }
  currDisplay.textContent = result.toString();
  currOperand = result.toString();
  prevOperand = result.toString();
  selectedOperand = "";
  prevDisplay.textContent = "";
 
}

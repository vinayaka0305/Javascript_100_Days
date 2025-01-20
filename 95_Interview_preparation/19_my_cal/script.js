const prevDisplay = document.querySelector("[data-prev]");
const currDisplay = document.querySelector("[data-curr]");
const deleteBtn = document.querySelector("[data-del]");
const clearBtn = document.querySelector("[data-clear]");
const equalsBtn = document.querySelector("[data-equal]");
const numBtns = document.querySelectorAll("[data-num]");
const operationBtns = document.querySelectorAll("[data-oper]");

let currOperand = "";
let preveOperand = "";
let selectedOperand = "";

numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currOperand += btn.textContent;
    currDisplay.textContent = currOperand;
  });
});

deleteBtn.addEventListener("click", () => {
  let display = currDisplay.textContent;
  display = display.slice(0, -1);
  currDisplay.textContent = display;
});

clearBtn.addEventListener("click", () => {
  currDisplay.textContent = "";
  prevDisplay.textContent = "";
  currOperand = "";
  preveOperand = "";
  selectedOperand = "";
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedOperand = btn.textContent;
    preveOperand = currOperand;
    currOperand = "";
    prevDisplay.textContent = preveOperand + " " + selectedOperand;
    currDisplay.textContent = "";
  });
});

equalsBtn.addEventListener("click", () => {
  if (currOperand === "") return;
  let result = calculate();
  currDisplay.textContent = result;
  prevDisplay.textContent = "";
  currOperand = result;
});

function calculate() {
  let num1 = parseFloat(preveOperand);
  let num2 = parseFloat(currOperand);
  switch (selectedOperand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 !== 0 ? num1 / num2 : "error";
  }
}

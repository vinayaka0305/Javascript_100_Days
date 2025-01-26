const numbtns = document.querySelectorAll("[data-num]");
const operbtns = document.querySelectorAll("[data-oper]");
const delBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-clear]");
const eqaulsBtn = document.querySelector("[data-equal]");
const prevDisplay = document.querySelector("[data-prev]");
const currDisplay = document.querySelector("[data-curr]");

let currOperand = "";
let prevOperand = "";
let selectedOperand = "";

numbtns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener("click", () => {
    currOperand += btn.textContent;
    currDisplay.textContent = currOperand;
  });
});

clearBtn.addEventListener("click", () => {
  currDisplay.textContent = "";
  prevDisplay.textContent = "";
  currOperand = "";
  prevOperand = "";
  selectedOperand = "";
});

delBtn.addEventListener("click", () => {
  let display = currDisplay.textContent;
  if (display.length > 0) {
    display = display.slice(0, -1);
    currOperand = display;
    currDisplay.textContent = display;
  }
});

operbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedOperand = btn.textContent;
    prevOperand = currOperand;
    prevOperand += selectedOperand;
    prevDisplay.textContent = prevOperand;
    currDisplay.textContent = "";
    currOperand = "";
  });
});

eqaulsBtn.addEventListener("click", () => {
  if (currOperand === "") {
    return;
  }
  let result = calculate();
  currDisplay.textContent = result;
  prevDisplay.textContent = "";
  currOperand = currDisplay.textContent;
});

function calculate() {
  const num1 = parseInt(prevOperand);
  const num2 = parseInt(currOperand);

  switch (selectedOperand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "error";
  }
}

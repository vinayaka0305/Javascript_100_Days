const nums = document.querySelectorAll("[data-num]");
const operation = document.querySelectorAll("[data-oper]");
const equalBtn = document.querySelector("[data-equal]");
const delBtn = document.querySelector("[data-del]");
const clearBtn = document.querySelector("[data-ac]");
const currDisplay = document.querySelector("[data-currDis]");
const preveDisplay = document.querySelector("[data-prevDis]");

let currOperand = "";
let prevOperand = "";
let selectedOperand = "";
let result;

nums.forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.textContent;
    currOperand += number;
    currDisplay.textContent = currOperand;
  });
});

delBtn.addEventListener("click", () => {
  let content = currDisplay.textContent;
  if (content.length > 0) {
    content = content.slice(0, -1);
    currDisplay.textContent = content;
    currOperand = content;
  }
});

clearBtn.addEventListener("click", () => {
  currDisplay.textContent = "";
  preveDisplay.textContent = "";
  currOperand = "";
  prevOperand = "";
  selectedOperand = "";
});

operation.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currOperand === "") return;
    selectedOperand = btn.textContent;
    prevOperand = currOperand;
    currOperand = "";
    preveDisplay.textContent = prevOperand + " " + selectedOperand;
    currDisplay.textContent = "";
  });
});

equalBtn.addEventListener("click", () => {
  if (currOperand === "" || prevOperand === "") return;
  calculate();
  currDisplay.textContent = result;
  preveDisplay.textContent = "";
  prevOperand = "";
  currOperand = "";
  currOperand = result.toString();
});

function calculate() {
  const num1 = parseFloat(prevOperand);
  const num2 = parseFloat(currOperand);

  if (isNaN(num1) || isNaN(num2)) return;

  switch (selectedOperand) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "error";
      break;
    default:
      return "";
  }
}

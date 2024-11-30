const display = document.querySelector("#display");
const userInput = document.querySelector("#user-input");

function add() {
  const li = document.createElement("li");
  const div = document.createElement("div");
  li.innerText = userInput.value;
  const cBtn = document.createElement("button");
  const dBtn = document.createElement("button");
  cBtn.innerText = "complete";
  dBtn.innerText = "delete";
  div.appendChild(li);
  div.appendChild(cBtn);
  div.appendChild(dBtn);
  display.appendChild(div);
  completTask(cBtn, li);
  deleteTask(dBtn,div);
  userInput.value = '';
}

function completTask(btn, task) {
  btn.addEventListener("click", () => {
    if (task.style["text-decoration"] !== "") {
      task.style["text-decoration"] = "";
    } else {
      task.style["text-decoration"] = "line-through";
    }
  });
}

function deleteTask(btn,div){
    btn.addEventListener('click',()=>{
        div.remove()
    })
}
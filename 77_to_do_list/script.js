const btn = document.querySelector(".add");
let userInput = document.querySelector(".todo-input");
const list = document.querySelector(".list");

function addTaks() {
  const task = userInput.value;
  // console.log(task);
  const div = document.createElement("div");
  const li = document.createElement("li");
  li.innerText = task;
  li.setAttribute("class", "item");
  const cBtn = document.createElement("button");
  cBtn.innerText = "complete";
  const dBtn = document.createElement("button");
  dBtn.innerText = "delete";
  div.appendChild(li);
  div.appendChild(cBtn);
  div.appendChild(dBtn);
  list.appendChild(div);

  completeTask(cBtn, li);
  deleteTask(dBtn, div);
  userInput.value = "";
}

btn.addEventListener("click", () => {
  addTaks();
});

function completeTask(btn, task) {
  btn.addEventListener("click", () => {
    if (task.style["text-decoration"] !== "") {
      task.style["text-decoration"] = "";
    } else {
      task.style["text-decoration"] = "line-through";
    }
  });
}

function deleteTask(btn, div) {
  btn.addEventListener("click", () => {
    div.remove();
  });
}

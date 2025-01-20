const ulContainer = document.querySelector("#container");
const input = document.querySelector("#input");

const handleClick = () => {
  // console.log(e.target.value);
  const inputValue = input.value;
  console.log(inputValue);
  const li = document.createElement("li");
  li.textContent = inputValue;
  const div = document.createElement("div");
  const cBtn = document.createElement("button");
  cBtn.textContent = "complete";
  const dBtn = document.createElement("button");
  dBtn.textContent = "delete";
  li.appendChild(cBtn);
  li.appendChild(dBtn);
  div.appendChild(li);
  ulContainer.appendChild(div);
  completeTask(cBtn, li);
  deleteTask(dBtn, div);
  input.value = ''
};

function completeTask(btn, task) {
  btn.addEventListener("click", () => {
    if (task.style["textDecoration"] !== "") {
      task.style["textDecoration"] = "";
    } else{
      task.style["textDecoration"] = "line-through";
    }
  });
}

function deleteTask(btn,div){
    btn.addEventListener('click',()=>{
        div.remove()
    })
}

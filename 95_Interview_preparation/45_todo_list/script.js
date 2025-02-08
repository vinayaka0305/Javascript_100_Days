const userInput = document.querySelector("#user-input");
const display = document.querySelector("#display");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const val = userInput.value;
  const div = document.createElement("div");
  const li = document.createElement("li");
  li.textContent = val;
  const cbtn = document.createElement("button");
  const dbtn = document.createElement("button");

  cbtn.textContent = "complete";
  dbtn.textContent = "delete";

  div.appendChild(li);
  div.appendChild(cbtn);
  div.appendChild(dbtn);

  display.appendChild(div);

  completeTask(cbtn, li);
  deleteTask(dbtn, div);
  userInput.value = '';
});

function completeTask(btn, li) {
  btn.addEventListener("click", () => {
    if( li.style["textDecoration"] === ""){
        li.style["textDecoration"] = "line-through";
    }else{
        li.style["textDecoration"] = "";
    }
   
  });
}

function deleteTask(btn,div){
    btn.addEventListener('click',()=>{
        div.remove();
    })
}

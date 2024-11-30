const input = document.querySelector("#input");
const listContainer = document.querySelector("#l-container");

const addTask = () => {
  if (input.value === "") {
    alert("Please enter something");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;

    // Create the "completed" button
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Completed";
    li.appendChild(completeBtn); // Add it to the li element

    // Create the "delete" button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    li.appendChild(deleteBtn); // Add it to the li element

    listContainer.appendChild(li); // Add the li element to the list container

    input.value = ""; // Clear the input field
  }
};

// Event delegation to handle both "completed" and "delete" button clicks

listContainer.addEventListener('click',(e)=>{
        let li = e.target.parentElement;
        if(e.target.innerHTML === 'Completed'){
            li.classList.toggle('check')
        }else if(e.target.innerHTML === 'Delete'){
            li.remove()
        }
})

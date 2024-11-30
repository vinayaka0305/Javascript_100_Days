const submitBtn = document.querySelector(".submit-btn");
const firstDiv = document.querySelector('.first');
const secondDiv = document.querySelector('.second');
 const output = document.querySelector('#output')

firstDiv.addEventListener('click',()=>{
     console.log('.parent div')
     output.innerHTML += "firstdiv called"
})
secondDiv.addEventListener('click',(e)=>{
    e.stopPropagation()
    output.innerHTML += "second called"
     console.log('.child div')
})

let username = false;
let useremail = false;
let usermessage = false

function handleChange(e) {
  // console.log(e.target);
  if (e.target.id === "name") username = !!e.target.value;
  if (e.target.id === "email") useremail = !!e.target.value;
  if (e.target.id === "message") usermessage = !!e.target.value;
}

function handleSubmit(event){
    event.preventDefault();

    const formData = {
        userName:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        message:document.querySelector('#message').value
    }

    console.log(formData);
}



const options = document.querySelector('#options');
const message = document.querySelector('#message');
const btn = document.querySelector('#btn');
const myform = document.querySelector('#myForm');


myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const val = options.value;
    message.textContent = val;

})

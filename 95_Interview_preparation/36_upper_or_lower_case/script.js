const upperCaseBtn = document.querySelector('#upperCaseBtn');
const lowerCaseBtn = document.querySelector('#lowerCaseBtn');
const form = document.querySelector('#textForm');
const inputText = document.querySelector('#inputText');
const result = document.querySelector('#result');


upperCaseBtn.addEventListener('click',()=>{
    const input = inputText.value;
    result.textContent = input.toUpperCase();
})
lowerCaseBtn.addEventListener('click',()=>{
    const input = inputText.value;
    result.textContent = input.toLowerCase();
})
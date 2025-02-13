const plength = document.querySelector("#plength");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const result = document.querySelector("#result");
const generateBtn = document.querySelector("#gbtn");


const upperCharacters = `ABCDEFGHIJKLMNOPQRSTUVIWXYZ`;
const lowerCharacters = `abcdefghijklmnopqrstuvwxyz`;
const numCharacters = `0123456789`
const symbolCharacters = `!@#$%^&*()_+[]{}|;:,.<>?`

generateBtn.addEventListener('click',()=>{
    const length = parseInt(plength.value);

    let charSet = '';

    if(uppercase.checked) charSet += upperCharacters;
    if(lowercase.checked) charSet += lowerCharacters;
    if(numbers.checked) charSet += numCharacters;
    if(symbols.checked) charSet += symbolCharacters;

    if(charSet === ''){
        result.textContent = 'pls select at least one option'
        return;
    }

    let password='';

    for(let i=0;i<length;i++){
        password += charSet.charAt(Math.floor(Math.random()*charSet.length))
    }
    result.textContent = password;
})
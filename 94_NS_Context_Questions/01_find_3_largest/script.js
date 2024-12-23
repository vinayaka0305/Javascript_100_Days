const inputArea = document.querySelector('#input-area');
const btn = document.querySelector('#btn')
const output = document.querySelector('#output');


btn.addEventListener('click',()=>{
    const ages = inputArea.value;
    const number = ages.split(',').map((age)=>Number(age.trim()));
    const sort = number.sort((a,b)=>b-a);
    output.innerHTML =  sort.slice(0,3).join(',');
})

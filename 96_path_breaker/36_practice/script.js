const selection = document.querySelector('#selection');
const display = document.querySelector('#display');
const btn = document.querySelector('#btn');

const fruits = [
    { name: "Lemon", type: "citrus" },
    { name: "Orange", type: "citrus" },
    { name: "Strawberry", type: "berry" },
    { name: "Blueberry", type: "berry" },
    { name: "Peach", type: "stone" },
    { name: "Cherry", type: "stone" },
];

btn.addEventListener('click',()=>{
    const selectedVal = selection.value;
    const filteredList = fruits.filter((item)=>
        selectedVal === "all" || item.type == selectedVal
    )
    console.log(filteredList);

    display.innerHTML = '';
    filteredList.forEach((item)=>{
        const li = document.createElement('li');
        li.textContent = item.name;
        display.appendChild(li)
    })

})

fruits.forEach((item)=>{
    const li = document.createElement('li');
    li.textContent = item.name;
    display.appendChild(li)
})
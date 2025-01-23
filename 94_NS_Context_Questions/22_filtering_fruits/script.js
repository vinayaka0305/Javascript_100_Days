const fruitType = document.querySelector('.fruit-type');
const filterBtn = document.querySelector('#filterBtn');
const list = document.querySelector('#fruitList');

const fruits = [
    { name: "Lemon", type: "citrus" },
    { name: "Orange", type: "citrus" },
    { name: "Strawberry", type: "berry" },
    { name: "Blueberry", type: "berry" },
    { name: "Peach", type: "stone" },
    { name: "Cherry", type: "stone" },
];

filterBtn.addEventListener('click',()=>{
    const selected = fruitType.value;
    const filtering = fruits.filter((fruit)=>{
        if(selected === "all"){
            return true;
        }else{
            return fruit.type === selected;
        }
    })
    list.textContent = '';
    filtering.forEach((fruit)=>{
        const li = document.createElement('li');
        li.textContent = fruit.name;
        list.appendChild(li);
    })
})
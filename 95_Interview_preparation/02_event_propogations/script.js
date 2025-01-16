const parent = document.getElementById('parent');
const child = document.getElementById('child')
const gChild = document.getElementById('g-child')



gChild.addEventListener('click',()=>{
    // e.stopPropagation();
    console.log('g-child')
})
child.addEventListener('click',()=>{
    console.log('child')
})
parent.addEventListener('click',()=>{
    console.log('parent')
},{capture:true})

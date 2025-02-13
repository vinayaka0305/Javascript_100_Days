const firstDiv = document.querySelector('#firstDiv');
const otherDiv = document.querySelectorAll('.exampleClass')
const logFirstDivBtn = document.querySelector('#logFirstDiv');
const logOtherDivsBtn = document.querySelector('#logOtherDivs');

logFirstDivBtn.addEventListener('click',()=>{
    console.log(firstDiv);
})

logOtherDivsBtn.addEventListener('click',()=>{
    otherDiv.forEach((div,index)=>{
       if(index>0){
        console.log(div);
       }
    })
})

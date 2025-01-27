const feedback = document.querySelector('#feedback');
const val1 = document.querySelector('#ans-1')
const val2 = document.querySelector('#ans-2')
const val3 = document.querySelector('#ans-3');
const btn = document.querySelector('#btn');

const ans1 = 7 + 3 * 2 - 4;
const ans2 = (6/2) * (8-3);
const ans3 = 5 % 3 + 4;

console.log(ans1,ans2,ans3)

btn.addEventListener('click',()=>{
    let v1 = parseInt(val1.value);
    let v2 = parseInt(val2.value);
    let v3 = parseInt(val3.value);

    console.log(v1,v2,v3);
    if(v1 === ans1 && v2 === ans2 && v3 === ans3){
        feedback.textContent = "All answers are correct";
        feedback.style.color = "green";
    }else{
        feedback.textContent = "wrong answer";
        feedback.style.color = "red";
    }
})





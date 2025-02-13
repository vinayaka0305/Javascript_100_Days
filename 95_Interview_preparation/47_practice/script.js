const textDis = document.querySelector('#text');
const countDis = document.querySelector('#count');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const toggleBtn = document.querySelector('#toggle');


let timer;


toggleBtn.addEventListener('click',()=>{
    if(input2.style.display === "none"){
      input2.style.display = "inline"
      // input2.removeAttribute('disabled')
    }else{
      input2.style.display = "none";
      // input2.setAttribute('disabled','true');
    }
})

const handleChange1=(e)=>{
  const inputVal = e.target.value;
  countDis.textContent = inputVal.length;
  clearTimeout(timer);
  timer = setTimeout(()=>{
    if(inputVal.length>0){
      textDis.textContent = inputVal;
      input1.value = '';
      countDis.textContent = 0;
    }
  },1000)
}


const handleChange2=(e)=>{
  const inputVal = e.target.value;
  countDis.textContent = inputVal.length;
  clearTimeout(timer);
  timer = setTimeout(()=>{
    if(inputVal.length>0){
      textDis.textContent = inputVal;
      input2.value = '';
      countDis.textContent = 0;
    }
  },1000)
}
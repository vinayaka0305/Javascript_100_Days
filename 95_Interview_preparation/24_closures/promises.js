const getData = document.querySelector('#getData');
const output = document.querySelector('#output');

getData.addEventListener('click',getData);

function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Data received!')
        },2000)
    })
}


fetchData().then((data)=>{
   output.textContent = data
}).catch((err)=>{
    console.log(err);
})
//A promise is an object that represent eventual result of ayshronous operations can be pending,fullfilled,reject
//A promise in js is used to handle asynchronous operations(like fetching data or reading file);

//why use promises?

//Helps manage async tasks without callback hell;
//Makes code easier to read and maintain
//can be in 3 states
//1.Pending(still waiting);
//2.Resolved(Fulfilled)(successful)
//3.Reject(Failed);


//Example 1 creating a promise

let myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("promise resolved")
    }else{
        reject("promise rejected")
    }
})

myPromise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


//Example 2
//CallBack hell reduction

function getData(){
   return new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("Step 1")
        resolve();
    },1000)
   })
}

function processData(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Step 2")
            res()
        },1000)
    })
}
function displayData(){
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log("Step 3")
            res()
        },1000)
    })
}

getData()
.then(()=>processData())
.then(()=>displayData())
.then(()=>console.log('all tasks completed'))
.catch((err)=>console.log('error'))
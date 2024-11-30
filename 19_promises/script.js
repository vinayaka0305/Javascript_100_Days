//promise in js is an object which tells you the completion or failure of an event
//whenever you request either resolves or rejects ur request
//to create a promise we need to use new keyword with Promise constructor
//and it as callback function which has two parameter resolve or reject

//the promise has 3 state 1.pending 2.resolve 3.reject
//whenever the promise is created by default it goes to pending state and 
//-after sometime it will get resolved or rejected

//Example

const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        const serverLoad = 200;
        if(serverLoad>100){
            resolve('data fetched')
        }
        reject('error while fetching data')
    })
}

fetchData().then((data)=>{
    console.log('success',data)
}).catch((error)=>{
    console.log('error',error)
})
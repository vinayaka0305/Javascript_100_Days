//then block and catch are used to handle promises in java script

const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        const serverLoad = 100;
        if(serverLoad>100){
            resolve('fetched data')
        }
        reject('error while fetching data')
    })
}

fetchData().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

//if the our fetchedData executed successfully 
//the promise resolved the then the then block is going to be executed
//if rejected the catch block will get executed

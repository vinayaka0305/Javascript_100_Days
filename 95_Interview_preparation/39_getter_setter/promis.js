function checker(num){
    return new Promise((res,rej)=>{
        if(num % 2 === 0){
            setTimeout(()=>{
                res('even')
            },1000)
        }else{
            setTimeout(()=>{
                rej('odd')
            },1000)
        }
    })
}

checker(3).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})
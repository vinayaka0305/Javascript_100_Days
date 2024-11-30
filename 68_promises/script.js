function counterIncrement(val){
   return new Promise((res)=>{
        setTimeout(()=>{
            console.log(val);
            res()
        },1000)
   })
}

counterIncrement(1)
.then(()=>counterIncrement(2))
.then(()=>counterIncrement(3))
.then(()=>console.log('timer completed'))
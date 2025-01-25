const arr =  [[3, 2], [1], [4, 12]];

const flattenArr=(arr,n)=>{
    if(n===0) return arr;
    // console.log(arr);
    
    const result = [];

    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === Number){
            result.push(arr[i]);
        }else{
            result.push(...flattenArr(arr[i],n-1))
        }
    }
    const sum = result.reduce((a,b)=>a+b,0);
    return sum;
}


console.log(flattenArr(arr,1))
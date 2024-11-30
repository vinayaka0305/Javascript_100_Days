function takeMultipeNumAndAdd(...nums){
    const result = nums.reduce((acc,int)=>(
        acc + int
    ),0)
    return result;
}

console.log(takeMultipeNumAndAdd(-1,2,-1,5))
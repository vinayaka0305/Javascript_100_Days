function largetOddNumber(num){

    //convert tht string into array of characters
    let numArr = num.split('');

    //find the index of the last odd number
    let lastOddIndex = numArr.reverse().findIndex((digit)=>(parseInt(digit))%2 !==0);

    //if no last numbers found return empty string
    if(lastOddIndex === -1) return "";

    //reverse the index back to the original number
    //Convert reversed index back to the original index
    lastOddIndex = num.length-lastOddIndex-1;

    // Slice the string from the start to the last odd number (inclusive)
    return num.slice(0,lastOddIndex+1);
}

console.log(largetOddNumber("5688248"));
console.log(largetOddNumber("61632826"));
console.log(largetOddNumber("616338261"));
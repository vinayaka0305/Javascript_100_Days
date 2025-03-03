Array.prototype.squareAndSort=function(){
    const squaredNums = this.filter((num)=>typeof num === "number")
    .map((val)=>val ** 2)
    .sort((a,b)=>a-b)
    return squaredNums;
}


const numArr = [2,"four",1,3];

console.log(numArr.squareAndSort())
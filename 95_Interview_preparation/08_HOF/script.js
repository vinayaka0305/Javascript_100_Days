function double(x){
    return x *2;
}

function applyOperation(number,operation){
    return operation(number);
}

console.log(applyOperation(2,double));


//and map,filter,reduce are the HOF in js.....
// Array.map(): Applies a function to each element in an array and returns a new array.
//Array.filter(): Filters elements in an array based on a condition.

// Array.reduce(): Reduces an array to a single value by applying a function.

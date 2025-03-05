//Pure function
//An pure function is a function is that:
//Always give the same output for the same input;

function add(a,b){
    return a+b;
}
console.log(add(2,3));

//it always returns the same result when given the same input;


//Impure functions

//An impure function is a function is that 
// May give different outputs for the same input;
//changes something outside the function.(Has side effects);

//Example:

let total =0;

function addTotal(val){
    total += val;
    return total;
}

console.log(addTotal(5));//5
console.log(addTotal(5));//10 changes every time

//why use pure functions?
//Easier to test and debug
//More predictable behaviour
//Helps in function programming
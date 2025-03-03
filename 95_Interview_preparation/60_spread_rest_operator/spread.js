// use case of spread operator

const arr1 = [1,2,3];
const arr2 = [...arr1];
console.log(arr2);

//merging arrays

const number1 = [1,2];
const number2 = [3,4];

const merged = [...number1,...number2]
console.log(merged);


//spreading the elements in function calls
function sum(a,b,c){
    return a+b+c;
}

const nums = [1,2,3];

console.log(sum(...nums))

//copying or merging the objects

const obj1 = {a:1,b:1};
const obj2 = {c:3,d:4};

const mergedObj = {...obj1,...obj2};

console.log(mergedObj);


// Spread (...) expands elements into individual items.

//Rest (...) collects multiple elements into a single array or object


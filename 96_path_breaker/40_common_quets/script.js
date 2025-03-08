let count = 0; // Global variable initialized to 0

function increment(value = ++count) {
  // Default parameter: If no argument is passed, it increments 'count' and uses the new value
  console.log(value); // Print the value passed to the function
}

increment(); // No argument passed, so 'count' is incremented (count = 1) -> Output: 1
increment(); // No argument passed, so 'count' is incremented again (count = 2) -> Output: 2
increment(10); // Argument provided (10), so default value is ignored -> Output: 10
increment(); // No argument passed, 'count' is incremented again (count = 3) -> Output: 3

////////////////////////////////////////////////////////////////////////////////

console.log([1, 2] + [3, 4]);
// Arrays are converted to strings: "1,2" + "3,4" -> Concatenation -> Output: "1,23,4"

console.log([1, 2] + 3);
// Array [1,2] is converted to string "1,2", then concatenated with "3" -> Output: "1,23"

console.log([1] - 1);
// Array [1] is converted to number 1, then 1 - 1 = 0 -> Output: 0

////////////////////////////////////////////////////////////////////////////////

const str =
  "We need to take of care of our world for future generations".toLowerCase();

let obj = {};

// for(let x of str){
//     if(obj[x]){
//         obj[x]+=1
//     }else{
//         obj[x] = 1;
//     }
// }

for (let x of str) {
  if (x !== " ") {
    //Ignore spaces
    obj[x] = (obj[x] || 0) + 1; // Increment count or initialize to 1
  }
}

// console.log(obj);

/////////////////////////////////////////////////////////////////////////

const name = "Vinayaka"; // Declaring a constant variable

age = 28; // Assigning a value to an undeclared variable (implicitly becomes a global property)

console.log(delete name); // Attempting to delete a variable declared with 'const' -> Output: false
// delete removes properties from objects, but it cannot delete variables declared with var, let, or const.

console.log(delete age); // Attempting to delete an implicitly created global variable -> Output: true (in non-strict mode)
// delete age works (true is returned) because age is an implicitly declared global variable, which means it's a property of the global object (window in browsers, global in Node.js).

/////////////////////////////////////////////////////////////////////////////////////

const str1 = "javascript";

const revStr = str1.split("").reverse().join("");

console.log(revStr);

//////////////////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];

const firstTwoElements = arr.slice(-2).reverse();
console.log(firstTwoElements);
const firstThreeElements = arr.slice(0, 3);
console.log(firstThreeElements);

const newArr = [...firstTwoElements, ...firstThreeElements];
console.log(newArr);

//////////////////////////////////////////////////////////

const strArr = ["a", "b", "c", "d", "e"];
const nObj = {};

strArr.forEach((val, index) => {
  nObj[index] = val;
});

console.log(nObj);

///////////////////////////////////////////////////////////

const nestedArr = [[1, 2], [3, 4], [[5, 6]]];

function flatArr(arr, n) {
  if (n === 0) return arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    } else {
      result.push(...flatArr(arr[i], n - 1));
    }
  }
  return result;
}

console.log(flatArr(nestedArr, 2));

////////////////////////////////////////////////////////////////////////////////////

let a = 1, 
    b = 2, 
    c = 3; 

// Assignment operator (`=`) evaluates from right to left
a = b = c + 1; 

// Step-by-step breakdown:
// 1. `c + 1` is evaluated first -> `3 + 1 = 4`
// 2. `b = 4` (b gets assigned the value 4)
// 3. `a = 4` (a gets assigned the same value as b)

console.log(a, b, c); // Output: 4 4 3

//here assignment operator evaluates the expression from right to left

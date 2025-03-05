// Creating an array with a length of 10 (empty slots)
const arr = new Array(10);
console.log(arr); // Output: [ <10 empty slots> ] (Array exists but has no values)

// Creating an array of length 10 and filling it with index values (0 to 9)
const numArr = Array.from({ length: 10 }, (_, i) => i);
console.log(numArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Using spread operator to create an array and mapping values from 0 to 9
let arr1 = [...Array(10)].map((_, i) => i);
console.log(arr1); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Using a loop to push values into an array
let newArr = [];
for (let i = 0; i < 10; i++) {
    newArr.push(i); // Adding values from 0 to 9
}
console.log(newArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

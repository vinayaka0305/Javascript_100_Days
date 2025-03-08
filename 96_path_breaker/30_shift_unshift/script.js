//shift
//Removes the first item from the array from start
//Modify the original array

const fruits = ["apple", "banana", "mango"];

fruits.shift();

console.log(fruits);//['banana', 'mango']

//unshift
//Adds the item into the array from start
//Modify the original array

fruits.unshift("butterfruit");

console.log(fruits); //['butterfruit', 'banana', 'mango']

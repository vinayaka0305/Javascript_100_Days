//1.slice - Cuts out a portion(Does not change original array);

//Extract part of an array without changing original array;

//Syntax: array.slice(startIndex,endIndex) (endIndex not inclueded);

let fruits = ["apple", "banana", "mango", "orange"];

let slicedFruits = fruits.slice(1,3) 

console.log(slicedFruits);//(2) ['banana', 'mango']

console.log(fruits);// ["apple", "banana", "mango", "orange"] (Original array is unchanged) ✅

////////////////////////////////////////////////////////////////////////////////////

//2.splice - Removes or adds Items(Changes Original Array)

//Removes,replaces,or adds elements in an array;
//Modifies the original array
//Syntax: array.splice(startIndex,deleteCount,item1,item2,...)

//Example removing elements

let colors = ["red", "blue", "green", "yellow"];

let removedColors = colors.splice(1,2);//removes 2 elements from index 1;

console.log(removedColors);//(2) ['blue', 'green']
console.log(colors)// ["red", "yellow"] (Original array changed) ✅

//Example adding elements

let numbers = [1,2,5];

numbers.splice(2,0,3,4)//from index 2 insert 3 and 4 elements without removing

console.log(numbers);

// ✅ Use slice() when you want a copy of part of an array without modifying it.
// ✅ Use splice() when you want to add or remove elements and modify the array.
const arr = [1, 2, 3, 4, 5]; //declare an array of numbers


//used reduce method to reverse an array;
//acc which stores the reversed array so far;
//curravl is the value being iterated over
const reversedArr = arr.reduce((acc, currVal) => [currVal, ...acc], []);

//create new arr with currVal at the front and spread the acc(previouse element)
//this prepends currVal to the begining of the acc array, effectively reversing it 

console.log(reversedArr);
// This code reverses the array using the reduce method. 
// It works by adding each element (currVal) to the front of the result (acc) as it goes through the array.
// In the end, the array is reversed.
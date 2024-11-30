const months = ["jan","feb","march"];

console.log(months.sort());//(3) ['feb', 'jan', 'march']

//here we get alphabetically sorted strings in ascending order

// const arr = [1,29,10000,3];

// console.log(arr.sort());//(4) [1, 10000, 29, 3]
//here the we get unexpected output because 
//when we sort on numbers the "sort()" fn converts
//number value into string value then it sorts
//each of the string value has special unicode assigned to it

//if we need to sort numbers arr we need special comparision
//it has two paremeters current value and next value 
//it compares the unicode and the it will compare if -ve value came it does not sorts
//if +ve came it will sort,this process will continue till arr get sorted

const arr = [1, 3, 2, 4];  // An array of numbers

const sorted = arr.sort((a, b) => { // Sorting the array using a comparison function
    console.log(a - b);  // Log the result of subtracting 'b' from 'a'
    return a - b;  // Return the result of the subtraction to sort the array
});

console.log(sorted);  // Log the sorted array

// How a - b works in sorting:
// arr.sort((a, b) => a - b) is a comparison function used by the sort() method. It helps sort numbers in ascending order.
// a is the current value, and b is the next value in the array.
// Based on the value returned by a - b, the array gets sorted.
// Sorting Logic:
// If the result is negative (a - b < 0): This means a is smaller than b, so a comes before b (no change in order).
// If the result is positive (a - b > 0): This means a is larger than b, so a comes after b (they will be swapped).
// If the result is zero (a - b === 0): The two values are equal, so no changes in order.
// Example of what's happening:
// First iteration (1 and 3):
// a = 1, b = 3, so 1 - 3 = -2 (negative) → No swap, because 1 is less than 3.

// Second iteration (3 and 2):
// a = 3, b = 2, so 3 - 2 = 1 (positive) → Swap, because 3 is greater than 2.

// Third iteration (3 and 4):
// a = 3, b = 4, so 3 - 4 = -1 (negative) → No swap, because 3 is less than 4.

// At the end, the sorted array will be [1, 2, 3, 4].
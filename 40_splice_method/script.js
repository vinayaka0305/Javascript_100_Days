const numbers = [1, 2, 3, 4, 5]; // Original array

// The splice method will start from index 1, delete 2 elements, and insert "apple" and "orange" in their place

// It modifies the original array and returns the deleted elements
const splicedArr = numbers.splice(1, 2, "apple", "orange");

console.log("deleted elements", splicedArr); // Logs the deleted elements [2, 3]

console.log("original arr", numbers); // Logs the modified original array [1, "apple", "orange", 4, 5]

//////////////////////////////////////////////////////////////////////////

const numbers2 = [1, 2, 3, 4, 5]; // Original array

// The toSpliced method creates a new array without modifying the original one.

// It starts from index 1 and removes 2 elements (at index 1 and 2).

// The original array remains unchanged, and a new array is returned with the splicing done.
const splicedArr2 = numbers2.toSpliced(1, 2);

console.log("deleted elements", splicedArr2); // Logs the new array with the splicing applied: [1, 4, 5]

console.log("original arrr", numbers2); // Logs the original array which remains unchanged: [1, 2, 3, 4, 5]

// Define an object called 'person' with two properties: 'name' and 'country'
const person = {
    name: "akbar",     // 'name' property with the value "akbar"
    country: "pakistan" // 'country' property with the value "pakistan"
}

// Use the delete operator to remove the 'country' property from the 'person' object
delete person.country;

// Print the updated 'person' object to the console
console.log(person); // Outputs: { name: "akbar" }

// When we use the delete operator, JavaScript removes the reference to the 'country' property.
// It doesn't mean that the memory is immediately freed(clears), but the property becomes unreachable.
// JavaScript has an automatic garbage collection mechanism that periodically looks for objects 
// or properties that are no longer accessible (not reachable by code anymore).
// The garbage collector will then eventually reclaim (free up) the memory used by those objects.
 
/////////////////////////////////////////////////////////////////////////////

const arr = [1, 2, 3]; // Define an array with three elements: [1, 2, 3]

delete arr[1]; // Use the delete operator to remove the element at index 1 (value 2)

console.log(arr); // Outputs: [1, empty, 3]
// The element at index 1 is removed, but the space is not freed. 
// Instead, it leaves an "empty" slot (also known as a sparse array).

console.log(arr.length); // Outputs: 3
//when we console(arr.length) it is going to take the highest index + 1 as a length;
// The length of the array remains 3. The delete operator doesn't affect the length of the array,
// it only removes the value at the specified index, leaving an "empty" spot in the array.

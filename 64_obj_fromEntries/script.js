// Create an array of arrays, where each inner array has a key-value pair
const entries = [['name', 'vinayak'], ['age', '28'], ['place', 'KA']];

// Convert the array of key-value pairs into an object using Object.fromEntries
const obj = Object.fromEntries(entries);

// Print the resulting object to the console
console.log(obj);


// Convert the object back to an array of key-value pairs
const entriesArray = Object.entries(obj);

// Print the result
console.log(entriesArray);

// Object.entries(obj): This method takes obj and converts it into an array of arrays, where each inner array represents a key-value pair.

// Object.fromEntries() converts an array of key-value pairs into an object.

// Object.entries() converts an object back into an array of key-value pairs.
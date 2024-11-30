// Map is a built-in object that holds key-value pairs
// It differs from a plain object in that Map keys can be any data type, whereas object keys must be strings or symbols
// Maps are created using the Map constructor class

const person = new Map(); // Creating a new Map object

person.set("name", "vinayaka"); // Adding a key-value pair to the Map (key: 'name', value: "vinayaka")
person.set("age", "28"); // Adding another key-value pair to the Map (key: 'age', value: "28")

console.log(person.size, "size"); // Outputting the size of the Map, which returns the number of key-value pairs

console.log(person.get("name")); // Getting the value associated with the key 'name' ("vinayaka")

// console.log(person.delete('name')) // Deleting the key 'name' from the Map. Returns true if the key existed and was removed
// person.clear(); // Clearing all key-value pairs from the Map

// console.log(person); // Outputting the Map, which should now be empty after clearing

// We cannot iterate over plain JavaScript objects using for...of loop directly.
// However, we can iterate over Map objects using a for...of loop or using Map's built-in iterators.


//for of..

for(const personDetails of person){
    console.log(personDetails);
}

for(let [key,value] of person){
    console.log(key,value,"not a string");
}
for (const [key, value] of person) {
  console.log(`${key}-${value}`);
}

//for each..

person.forEach((value, key) => {
  console.log(`${key}-${value}`);
});

//using keys method;

for (const key of person.keys()) {
  console.log(key);
}

//using values method;

for (const value of person.values()) {
  console.log(value);
}

//using entries method;

for (const [key, value] of person.entries()) {
  console.log(`${key}-${value}`);
}

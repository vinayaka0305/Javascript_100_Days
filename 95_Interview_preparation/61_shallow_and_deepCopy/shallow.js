//shallow copy creates a new object, but it only copies references to nested objects instead of duplicating them.
//This means if the original object has nested objects, the copied object will still reference the same nested objects

const obj1 = {
  name: "Alice",
  details: { age: 25, city: "New York" },
};

const obj2 = { ...obj1 }; // Shallow copy using spread operator

obj1.details.city = "Los Angeles"; // Modifying nested object

console.log(obj1.details.city); // "Los Angeles" (Changes reflect in obj1)
console.log(obj2.details.city); // "Los Angeles"

// Here, obj1.details and obj2.details refer to the same memory location.

//If your object is flat (no nested structures) → Shallow copy is enough.
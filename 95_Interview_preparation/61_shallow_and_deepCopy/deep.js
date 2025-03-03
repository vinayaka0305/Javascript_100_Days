//deep copy creates a completely independent clone of the original object,including nested objects.
//Changes to the copied object do not affect the original object

const obj1 = {
  name: "Alice",
  details: { age: 25, city: "New York" },
};

//deep copy using JSON methods
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.details.city = "Los Angeles";

console.log(obj1.details.city); //New York
console.log(obj2.details.city); //Lost Angeles

// Here, obj2.details is a completely separate object, so modifying it does not affect obj1.

//If your object has nested objects and you need full independence → Use deep copy.
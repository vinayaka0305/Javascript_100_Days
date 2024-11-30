// Set a global variable 'age'
// global.age = 10; // In a browser environment, this would be window.age instead of global.age

// Define an object 'person' with an 'age' property and a 'getAge' method
const person = {
    age: 20, // Person's age is 20
    getAge: function() {
        return `hi my age is ${this.age}`; // 'this' refers to the object calling this method
    }
}

// If we call person.getAge(), 'this' refers to the 'person' object
// console.log(person.getAge()); // Outputs: hi my age is 20

// Bind the 'getAge' function to 'person' to ensure 'this' refers to 'person'
const personAge = person.getAge.bind(person);

console.log(personAge()); // Outputs: hi my age is 20
// Explanation:
// - 'person.getAge.bind(person)' creates a new function where 'this' is always bound to 'person'.
// - Even if called separately (like 'personAge()'), 'this' still refers to 'person' so 'age' is 20.

// bind(): Ensures that the this context inside the getAge method always refers to the person object. This avoids issues when the method is called independently.

// Animal constructor function
function Animal(name, lifeSpan) {
    // Initialize name and lifespan properties
    this.name = name;
    this.lifeSpan = lifeSpan;
}

// Reptile constructor function
function Reptile(name, lifeSpan) {
    // Call the Animal constructor to initialize name and lifeSpan
    Animal.call(this, name, lifeSpan);
    
    // Define a new method for Reptile specific behavior
    this.layEggs = function layEggs() {
        console.log('Reptile laid eggs'); // Log when the reptile lays eggs
    }
}

// Set up Reptile to inherit from Animal
Reptile.prototype = Object.create(Animal.prototype);
// Reset the constructor of Reptile to Reptile itself

// After inheritance, the constructor property of Reptile.prototype is set back to Reptile because when we use Object.create(), the constructor of the prototype is automatically set to Object, not Reptile.

Reptile.prototype.constructor = Reptile;

// Create a new instance of Reptile
const name = 'snake';  // Name of the reptile
const age = 10;        // Life span of the reptile
const reptile = new Reptile(name, age);

// Output the constructor of the reptile instance
console.log(reptile.constructor); // Will log the Reptile constructor function

// Output the name and lifespan of the reptile instance
console.log(reptile.name);        // Will log 'snake'
console.log(reptile.lifeSpan);    // Will log '10'

// Call the layEggs method of the reptile instance
reptile.layEggs();               // Will log 'Reptile laid eggs'

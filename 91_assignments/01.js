// Define a base object `vehicle` with default properties
const vehicle = {
    name: '',        // Name of the vehicle
    wheelCount: '',  // Number of wheels on the vehicle
    type: ''         // Type of vehicle (e.g., Car, Bike)
};

// Function to create a "Car" using `Object.create`
// This allows the new object to inherit properties from `vehicle`
function makeAcar(name, wheelCount) {
    // Create a new object based on the `vehicle` object
    const car = Object.create(vehicle);
    console.log(car);
    // Set properties specific to the car
    car.name = name;           // Assign the given name to the car
    car.wheelCount = wheelCount; // Set the number of wheels
    vehicle.type = "truck";          // Define the type as "Car"
    console.log(car.type);
    return car; // Return the created car object
}

// Function to create a "Bike" using spread syntax (...)
// This creates a shallow copy of the `vehicle` object
function makeAbike(name, wheelCount) {
    // Create a new object by copying properties from `vehicle`
    const bike = { ...vehicle };
    console.log(bike);
    // Set properties specific to the bike
    bike.name = name;           // Assign the given name to the bike
    bike.wheelCount = wheelCount; // Set the number of wheels
    vehicle.type = "Bikers";
    console.log(bike.type);         // Define the type as "Bike"
    
    return bike; // Return the created bike object
}

// Create a car object and log it
console.log(makeAcar('nexon', 4));
// Output: { name: 'nexon', wheelCount: 4, type: 'Car' }

// Create a bike object and log it
console.log(makeAbike('pulsar', 2));
// Output: { name: 'pulsar', wheelCount: 2, type: 'Bike' }


// These techniques help determine whether an object is using prototype inheritance (Object.create) or is an independent copy ({...}), making it easier to debug and understand their behavior in your code.

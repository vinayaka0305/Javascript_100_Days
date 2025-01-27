// Define the School class
class School {
    constructor() {
        // Initialize an empty array to store the data
        this.arr = [];
    }
    
    // Method to add an input to the array
    add(input) {
        this.arr.push(input); // Add the input to the end of the array
    }
    
    // Method to retrieve the latest added element
    latest() {
        // Check if the array has at least one element
        if (this.arr.length > 0) {
            // Return the last element in the array
            return this.arr[this.arr.length - 1];
        }
    }
}

// Create an instance of the School class
const std = new School();

// Add names to the array
std.add('veerachari'); // Add 'veerachari' to the array
std.add('padma');      // Add 'padma' to the array
std.add('vinayaka');   // Add 'vinayaka' to the array
std.add('yuvraj');     // Add 'yuvraj' to the array

// Log the latest added name to the console
console.log(std.latest()); // Output: 'yuvraj'

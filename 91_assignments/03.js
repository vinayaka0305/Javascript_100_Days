// Product constructor function
function Product(name, price, manufacturer) {
    // Initialize public properties
    this.name = name;
    this.price = price;
    this.manufacturer = manufacturer;

    // Define a public method to get product details
    this.getDetails = function () {
        return `name:${name}, price:${price}, manufacturer:${manufacturer}`;
    }

    // Private variable to store tax (not directly accessible outside)
    let tax;

    // Public method to set the tax value
    this.setTax = function (amount) {
        tax = amount; // Assign tax value
    }

    // Public method to get the tax value
    this.getTax = function () {
        return tax; // Return the private tax value
    }

    // Private method to calculate the total price
    this.calculateTotalPrice = function () {
        // Formula: price + price * (tax / 1000)
        return this.price + this.price * (tax / 1000);
    }

    // Public method to get the total price using the private calculateTotalPrice
    this.getTotalPrice = function () {
        // Bind 'this' context to ensure the proper reference to Product object
        return this.calculateTotalPrice.bind(this)();
    }

    // Public method to delete a specified method from the instance
    this.deleteMethod = function (methodName) {
        delete this[methodName]; // Dynamically delete the method by name
    }
}

// Example inputs
const arg1 = "bulb";       // Name of the product
const arg2 = "1000";       // Price as a string, will be converted to number
const arg3 = "philips";    // Manufacturer
const arg4 = "5";          // Tax as a string, will be converted to number

// Create a new Product instance
const myProduct = new Product(arg1, parseInt(arg2), arg3);

// Log product details
console.log(myProduct.getDetails()); // Logs: name:bulb, price:1000, manufacturer:philips

// Set the tax value for the product
myProduct.setTax(parseInt(arg4));

// Attempt to log the private tax variable directly (this will be undefined)
console.log(myProduct.tax); // Logs: undefined (tax is private)

// Get the total price of the product, including tax
console.log(myProduct.getTotalPrice()); // Logs: 1005 (calculated as 1000 + 1000 * (5/1000))

// Delete the 'getDetails' method from the instance
console.log(myProduct.deleteMethod('getDetails')); // Logs: undefined (method is deleted)

// Attempt to call the 'getDetails' method after deletion
try {
    console.log(myProduct.getDetails()); // Throws an error because getDetails is deleted
} catch (e) {
    console.error(e.message); // Logs the error message
}

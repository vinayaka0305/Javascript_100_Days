// Define the addAndSubstract object with basic arithmetic methods
const addAndSubstract = {
    num1: 6, // Initial value for num1
    num2: 3, // Initial value for num2
    // Method to add num1 and num2
    add() {
        return this.num1 + this.num2;
    },
    // Method to subtract num2 from num1
    subtract() {
        return this.num1 - this.num2;
    }
};

// Define the calculator object, inheriting from addAndSubstract
const calculator = {
    __proto__: addAndSubstract, // Set addAndSubstract as the prototype
    // Method to multiply num1 and num2
    product() {
        return this.num1 * this.num2;
    },
    // Method to divide num1 by num2 with a check for division by zero
    divide() {
        if (this.num2 !== 0) { // Ensure num2 is not zero to avoid error
            return this.num1 / this.num2;
        } else {
            return `division by zero is not allowed`;
        }
    },
    // Method to update the values of num1 and num2
    setNum(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },
    // Method to reset num1 and num2 to zero
    resetNum() {
        this.num1 = 0;
        this.num2 = 0;
    }
};

// Demonstration of calculator functionality
console.log('add', calculator.add()); // 6 + 3 = 9
console.log('subtraction', calculator.subtract()); // 6 - 3 = 3
console.log('multiplication', calculator.product()); // 6 * 3 = 18
console.log('division', calculator.divide()); // 6 / 3 = 2

// Update num1 and num2 using setNum method
calculator.setNum(10, 2);
console.log('divide', calculator.divide()); // 10 / 2 = 5

// Reset num1 and num2 using resetNum method
calculator.resetNum(); // num1 = 0, num2 = 0

// Set new values again and perform addition
calculator.setNum(2, 2);
console.log(calculator.add()); // 2 + 2 = 4

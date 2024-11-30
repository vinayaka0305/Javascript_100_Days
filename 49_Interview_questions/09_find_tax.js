class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
//To avoid the ReferenceError, you can define ValidationError like this:

function findTax(salary) {
    // Initialize tax to 0
    let tax = 0;
    
    try {
        // Check if the salary is negative
        if (salary < 0) {
            // If salary is negative, throw a custom error
            throw new ValidationError("Salary not valid");
        } 
        // No tax if salary is less than or equal to 500,000
        else if (salary <= 500000) {
            tax += 0; // Tax remains 0
        } 
        // 10% tax for salary between 500,001 and 1,000,000
        else if (salary <= 1000000) {
            tax += salary * 0.1; // Calculate 10% tax
        } 
        // 20% tax for salary between 1,000,001 and 1,500,000
        else if (salary <= 1500000) {
            tax += salary * 0.2; // Calculate 20% tax
        } 
        // 30% tax for salary above 1,500,000
        else {
            tax += salary * 0.3; // Calculate 30% tax
        }
    } 
    // Handle any thrown errors
    catch (error) {   
        // Return the error message if an exception occurs
        return error.message;
    }

    // Return the calculated tax amount
    return tax;
}

// Test the function with a salary of 1,500,000 and print the result
console.log(findTax(-1)); // Expected output: 300000

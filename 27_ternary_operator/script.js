// const number = 3;
// Declare a variable 'number' and assign it the value 3.

// let message;
// Declare a variable 'message' which will store whether the number is even or odd.

// if(number % 2 === 0){
//     message = "is even"
// }
// Check if the 'number' is divisible by 2 (i.e., an even number).
// If true, set the 'message' to "is even".

// }else{
//     message = "is odd"
// }
// If the 'number' is not divisible by 2 (i.e., an odd number), set 'message' to "is odd".

// console.log(`The number ${number} - ${message}`)
// Log the number and the message (whether it's even or odd) to the console.


// const message = number % 2 === 0 ? "is even" : "is odd";
// Simplified version using a ternary operator.
// If 'number' is divisible by 2, 'message' is set to "is even", otherwise it's set to "is odd".

// console.log(`The number ${number} - ${message}`);
// Log the number and the message (whether it's even or odd) to the console.


const number = 0;  
// Declare a variable 'number' and assign it the value 0.

const message = number > 0 ? "positive" : number < 0 ? "negative" : "zero";  
// Use a nested ternary operator to check the value of 'number' and assign an appropriate message:
// If 'number' is greater than 0, 'message' will be "positive".
// If 'number' is less than 0, 'message' will be "negative".
// If 'number' is neither (i.e., it is 0), 'message' will be "zero".

console.log(message);  
// Log the value of 'message' to the console.
// In this case, it will log: "zero".

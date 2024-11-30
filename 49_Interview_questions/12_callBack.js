// Function 'callThisBack' takes two parameters:
// - 'num': a number to be used in the callback function
// - 'callback': a function that performs some operation on 'num'
function callThisBack(num, callback) {
    // Call the 'callback' function, passing 'num' as an argument, and return the result
    return callback(num);
}

// Example usage:
// Pass the number '5' and a callback function that doubles the input number
console.log(callThisBack(5, (num) => {
    // The callback function takes 'num' and returns 'num + num'
    return num + num; // In this case, it returns 5 + 5 = 10
}));

// Output: 10

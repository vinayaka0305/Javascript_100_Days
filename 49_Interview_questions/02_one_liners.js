console.log("4" + 6 * 5);

// Multiplication first (6 * 5):

// Since multiplication (*) has a higher precedence than addition (+), JavaScript will first evaluate 6 * 5, which results in 30.

// String concatenation ('4' + 30):
// After calculating 6 * 5 = 30, JavaScript then processes '4' + 30. The + operator is used for both addition and string concatenation. Since one of the operands ('4') is a string, JavaScript converts 30 into a string and concatenates them.

// '4' is a string.
// 30 is a number, but when concatenated with a string, it becomes '30'.
// Therefore, '4' + 30 becomes '430'.

// Final output:
// The result of this concatenation is the string '430', which is then printed by console.log.

////////////////////////////////////////////////////////////////////////////////////

console.log("4" * 6 + 5); // This will output 29

// Step-by-step breakdown:
// Multiplication first ("4" * 6):

// JavaScript sees "4" as a string, but when used with the * (multiplication) operator, it tries to convert the string "4" into a number.

// "4" is successfully converted to 4 (a number), so the expression becomes 4 * 6, which equals 24.
// Addition (24 + 5):

// After calculating 4 * 6 = 24, the next operation is addition.
// The result 24 is added to 5, giving 24 + 5 = 29.
// Final output:

// The final result of the expression is 29, which is printed by console.log.

// The multiplication ("4" * 6) converts the string "4" to the number 4, then multiplies it by 6. After that, the result (24) is added to 5, resulting in 29.

//////////////////////////////////////////////////////////////////////////////////////

console.log(typeof NaN); // number

// NaN (Not-a-Number):
// NaN stands for "Not-a-Number" and is a special value in JavaScript that represents an invalid number or the result of an undefined mathematical operation (like dividing 0 by 0 or trying to multiply a string that can't be converted to a number).
// typeof operator:

// The typeof operator is used to check the data type of a value in JavaScript.
// Why NaN is of type "number":

// Even though NaN represents an invalid number, it is still considered a member of the "number" data type in JavaScript. This is because NaN is technically a numeric value (it’s just a special case of numbers that signifies an error in a numeric operation).

/////////////////////////////////////////////////////////////////////////////////////

console.log("5" - "3" + 6); //8

// Step-by-step breakdown:
// Subtraction ('5' - '3'):

// Both '5' and '3' are strings, but when using the - (subtraction) operator, JavaScript automatically converts strings that represent numbers into actual numbers.
// '5' is converted to 5 and '3' is converted to 3.
// The subtraction operation 5 - 3 is performed, resulting in 2.
// Addition (2 + 6):

// After the subtraction, we are left with the result 2.
// Next, the addition operation is performed: 2 + 6, which results in 8.
// Final output:

// The final result of the expression is 8, which is printed by console.log.
// Summary:
// JavaScript converts the string '5' and '3' to numbers during the subtraction operation, resulting in 5 - 3 = 2. Then, it adds 6 to 2, giving the final result of 8.

// In JavaScript, when you perform arithmetic with a string and a number, JavaScript attempts to convert the string to a number.
// However, "A" is not a valid number, so it results in NaN (Not-a-Number).
console.log("A" - 1); // Output: NaN

// In this case, the `+` operator is used with a string ("Vinayaka") and a number ("100").
// Since one operand is a string, JavaScript treats this as string concatenation, not addition.
console.log("Vinayaka" + "100"); // Output: "Vinayaka100"

// The `+` operator is used here, and JavaScript processes the expression from left to right.
// 1. "2" + 2: The number 2 is converted to a string, so the result is "22".
// 2. "22" + "2": String concatenation again, resulting in "222".
console.log("2" + 2 + "2"); // Output: "222"

// In this case, the `+` operator is first applied, then the `-` operator.
// 1. "2" + 2: The number 2 is converted to a string, resulting in "22".
// 2. "22" - "2": The subtraction operator (`-`) converts both strings to numbers. 
//    "22" becomes 22, and "2" becomes 2. The result is 22 - 2 = 20.
console.log("2" + 2 - "2"); // Output: 20


const x = 0;
const y = false;

// The `==` operator checks for equality but performs type coercion.
// - `x` is 0 (a number), and `y` is false (a boolean).
// - In JavaScript, `false` is coerced to 0 when using `==`.
// - Since 0 == 0, the result is true.
console.log(x == y); // Output: true

// The `===` operator checks for strict equality (no type coercion).
// - `x` is 0 (a number), and `y` is false (a boolean).
// - Since the types are different (number vs. boolean), the result is false.
console.log(x === y); // Output: false
// Key Differences Between == and ===:
// == (Abstract Equality):

// Compares values after type coercion.
// Example: 0 == false is true because false is coerced to 0.
// === (Strict Equality):

// Compares values without type coercion.
// Example: 0 === false is false because their types are different (number vs. boolean).

console.log(0/0)  // NaN (Division of zero by zero is undefined)
console.log(Number("abc"))//NaN (Cannot convert "abc" to a number)
console.log('text'-2);// NaN (String "text" cannot be converted to a number)


// The `==` operator checks for equality with type coercion.
// However, `NaN` is unique in JavaScript because it is **not equal to itself**.
// This is a fundamental property of `NaN` as per the IEEE 754 standard.
// Therefore, NaN == NaN evaluates to false.
console.log(NaN == NaN); // Output: false

// The `===` operator checks for strict equality (no type coercion).
// Similarly to `==`, `NaN` is **not strictly equal to itself**.
// Hence, NaN === NaN also evaluates to false.
console.log(NaN === NaN); // Output: false



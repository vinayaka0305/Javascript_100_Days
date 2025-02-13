// Declare variables using var, let, and const
var a = "Original var";
let b = "Original let";
const c = "Original const";

// Reassign the var and let variables
a = "Reassigned var";
b = "Reassigned let";

// Attempt to reassign the const variable (this will cause an error)
// c = "Reassigned const"; // Uncommenting this line will throw an error: "Assignment to constant variable."

// Print values after reassignment attempts
console.log("a:", a); // Output: a: Reassigned var
console.log("b:", b); // Output: b: Reassigned let
console.log("c:", c); // Output: c: Original const (since reassignment is not allowed)

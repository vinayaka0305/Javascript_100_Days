// Define an object `a` with a single property
const a = { name: "vinayaka" };

// Create a shallow copy of object `a` using the spread operator
// `z` gets its own copy of the top-level properties from `a`
const z = { ...a };

// Modify the `name` property in the `z` object
// Since `z` is a shallow copy, this change does NOT affect the original object `a`
z.name = "veerachari";

// Log the `name` property of the original object `a`
// Output will be "vinayaka" because the original object remains unchanged
console.log(a.name); // Output: "vinayaka"

// Key Points:
// Spread Operator (...): Creates a shallow copy of an object. This means top-level properties are copied, but nested objects (if any) would still share references.
// Independent Copy: In this example, since name is a top-level property and not a nested object, changing z.name does not affect a.name.
// If a had nested objects, those would still share references between a and z in a shallow copy.

/////////////////////////////////////////////////////////////////////////////////////
/// shallow copy

const original = { a: 1, b: { c: 2 } };

const shallowCopy = {...original};// Shallow copy using spread operator

// console.log(original,"orignal");
// console.log(shallowCopy,"shallow");

// shallowCopy.b.c = 42// Modifying nested property

// console.log(original,"orignal");// Output: 42 (changes are reflected in the original)
// console.log(shallowCopy,"shallow");// Output: 42 (changes are reflected in the shallow)

// deep copy

const deepCopy = JSON.parse(JSON.stringify(original));

console.log(original,"orignal");
console.log(deepCopy,"deepcopy");// Deep copy using JSON

deepCopy.b.c = 444;// Modifying nested property

console.log(original,"orignal");// Output: 2 (no changes in the original)
console.log(deepCopy,"deepcopy");//444


// Use shallow copy for simple objects or arrays with no nested data.

// Use deep copy when working with nested structures to avoid unintentional side effects.

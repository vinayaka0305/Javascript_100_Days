// Create an object `firstObject` with a single key-value pair.
const firstObject = {
    version: "v2" // The object has one property, `version` with the value `"v2"`.
}

// // Shallow copy example (commented out)
// const secondObject = firstObject; // This creates a shallow copy. Both `secondObject` and `firstObject` will point to the same object in memory.
// secondObject.version = "v3"; // Changing the `version` of `secondObject` will also change `firstObject` because they are referencing the same object in memory.
// console.log(firstObject, "first"); // Would print: { version: "v3" } since both objects are the same.
// console.log(secondObject, "second"); // Would print: { version: "v3" } since both objects are the same.



// Create a new object `secondObject` by using the spread operator `...` (deep copy).
// Spread operator copies all properties from `firstObject` into `secondObject`,
// but now `secondObject` is a completely independent object with its own copy of the properties.
const secondObject = { ...firstObject };

// Change the `version` of the new `secondObject`.
secondObject.version = "v3"; // This only modifies `secondObject`, not `firstObject`, because they are separate objects now.

// Print `firstObject` to see if it has changed.
// Output: { version: "v2" } - The `firstObject` remains unchanged.
console.log(firstObject, "first");

// Print `secondObject` to see its updated version.
// Output: { version: "v3" } - The `secondObject` has a new version, independent of `firstObject`.
console.log(secondObject, "second");


// Key points to understand:
// Shallow Copy: If you uncomment the shallow copy part, both firstObject and secondObject will reference the same object in memory. Modifying one will modify the other.

// Spread Operator ({...firstObject}): This creates a shallow copy but since firstObject is a simple object (no nested objects), it's enough to break the reference and create two independent objects. Therefore, changing secondObject doesn't affect firstObject.

// In more complex objects with nested properties, the spread operator only performs a shallow copy, meaning nested objects would still reference the same memory location.
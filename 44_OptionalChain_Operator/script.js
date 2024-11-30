const gadget = {
  name: "smartphone", // The gadget has a name property with the value "smartphone"
  specs: {
    // The specs property is an object with details about the gadget
    brand: "Samsung", // specs has a brand property
    model: "s7", // specs has a model property
    feature: {
      // specs also has a nested object 'feature'
      camera: "50mp", // The feature object has properties like camera
      battery: "4000mAh", // battery
      RAM: "128GB", // and RAM
    },
  },
};

// Attempt to access a non-existing property 'noExsistingProperty' within the specs object
//   console.log(gadget.specs.noExsistingProperty.brand);
// This will cause an error: "Cannot read properties of undefined"
// Explanation:
// - 'noExsistingProperty' does not exist inside 'gadget.specs'
// - When we try to access 'brand' on 'undefined', it throws the error
// - JavaScript sees 'gadget.specs.noExsistingProperty' as undefined
//   and since we are trying to read '.brand' on undefined, it results in an error.

// Safely access a property that may not exist using optional chaining (?.)
console.log(gadget.specs.noExsistingProperty?.brand);
// Outputs: undefined
// Explanation:
// - The optional chaining operator (?.) checks if 'noExsistingProperty' exists.
// - If 'noExsistingProperty' is undefined or null, JavaScript stops and returns 'undefined' instead of throwing an error.
// - This prevents the error "Cannot read properties of undefined".
// - In this case, since 'noExsistingProperty' does not exist, the result is 'undefined' instead of causing an error.

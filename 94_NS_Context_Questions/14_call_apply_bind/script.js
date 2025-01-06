// Using call
function greet(greeting, name) {
  // This function uses the `this` keyword to refer to a context object and logs a greeting.
  console.log(`${greeting}, ${name}! My name is ${this.name}`);
}

const person = { name: "Vinayaka" };

// `call` is used to invoke the `greet` function immediately.
// The first argument to `call` is the object to use as `this` (here, `person`).
// The subsequent arguments ("Hello", "bob") are passed as individual arguments to the function.
greet.call(person, "Hello", "Bob"); // Output: Hello, Bob! My name is Vinayaka.

// Using apply
function greet1(greeting, name) {
  // Similar to the `greet` function, this one logs a greeting.
  console.log(`${greeting} ${name}!, My name is ${this.name}`);
}

const person1 = { name: "Vinayaka" };

// `apply` is used to invoke the `greet1` function immediately.
// The first argument is the object to use as `this` (here, `person1`).
// The second argument is an array of arguments ("Hi", "Bob") to pass to the function.
greet1.apply(person1, ["Hi", "Bob"]); // Output: Hi Bob!, My name is Vinayaka.

// Using bind
function greet2(greeting, name) {
  // Similar to the other functions, this one logs a greeting.
  console.log(`${greeting} ${name},! My name is ${this.name}`);
}

const person2 = { name: "Marco" };

// `bind` is used to create a new function with `this` set to the specified object (here, `person2`).
// It does not call the function immediately but returns a new function.
const boundGreet = greet2.bind(person2);

// The returned function `boundGreet` can be called later with arguments.
boundGreet('Hi', "Yuvraj"); // Output: Hi Yuvraj,! My name is Marco.


// Summary of Comments:
// call: Invokes the function immediately with this set to the specified object and arguments provided one by one.

// apply: Invokes the function immediately with this set to the specified object, but arguments are passed as an array.

// bind: Does not invoke the function immediately. Instead, it creates a new function with this permanently bound to the specified object, and the function can be called later.

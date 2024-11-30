function hello(name) {
  // Define a function 'hello' that takes 'name' as a parameter.

  console.log("hello from " + name);
  // Log a message to the console, concatenating the string "hello from " with the 'name' parameter.
}

hello("vinayaka");
// Call the 'hello' function, passing "vinayaka" as an argument.
// It will log: "hello from vinayaka".

function hi(name) {
  // Define another function 'hi' that also takes 'name' as a parameter.

  console.log(`hi from ${name}`);
  // Log a message to the console, using template literals to insert the 'name' parameter in the string.
}

hi("steve");
// Call the 'hi' function, passing "steve" as an argument.
// It will log: "hi from steve".

//   Explanation:

// The hello function uses string concatenation (+) to combine the message with the name.

// The hi function uses template literals (backticks `) for the same purpose, which is often more convenient when inserting variables into strings.

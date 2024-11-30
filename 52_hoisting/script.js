console.log(personName); // This tries to log the value of 'personName' before it is intialized.
getName(); // This calls the function 'getName' before the actual function declaration.

var personName = "vinayaka"; // Here, the variable 'personName' is declared and initialized with the value "vinayaka".

function getName() { // This declares a function named 'getName'.
  console.log("this is get name function"); // This logs a message when 'getName' is called.
}

// Hoisting is a JavaScript mechanism where declarations (like variable and function declarations) are moved to the top of their scope (before code execution). This means JavaScript knows about variables and functions before actually executing the code.

// variables declared with var are hoisted but initialized as undefined.
// Functions declared using function are fully hoisted and can be called even before their declaration.
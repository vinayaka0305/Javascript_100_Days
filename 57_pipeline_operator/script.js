// Function to add exclamation marks to the end of a string
const exclaim = (string) => {
    return string + "!!!"; // Return the modified string with exclamations
    // console.log(string + "!!!"); // This line is commented out, as we are returning the string instead of logging it
  };
  
  // Function to create a greeting message by prefixing the input string
  const greet = (string) => {
    return "Hi there! " + string; // Return the greeting message
    // console.log("Hi there !" + string); /
  };
  
  // Function to convert a string to uppercase
  const uppercase = (string) => {
    return string.toUpperCase(); // Return the uppercase version of the string
    // console.log(string.toUpperCase());
  };
  
  // Original text to be processed
  const text = "my name is vinayaka";
  
  // Using function composition (pipelining) to apply functions in sequence
  // Step 1: Pass 'text' to 'greet', which returns a greeting string
  // Step 2: Pass the result to 'exclaim', which adds exclamation marks
  // Step 3: Pass the result to 'uppercase', which converts it to uppercase
  console.log(uppercase(exclaim(greet(text)))); // Output the final result to the console
  
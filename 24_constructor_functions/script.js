function Person(name, age) {  
    // Define a constructor function 'Person' which takes 'name' and 'age' as parameters.
    
    this.name = name;  
    // Assign the 'name' parameter to the 'name' property of the object being created.
    
    this.age = age;  
    // Assign the 'age' parameter to the 'age' property of the object being created.
  }
  
  const rcbPlayer = new Person("virat", 38);  
  // Create a new instance of 'Person' with the name "virat" and age 38.
  // The 'new' keyword creates a new object and assigns 'name' and 'age' to it.
  
  console.log(rcbPlayer);  
  // Log the created 'rcbPlayer' object to the console. 
  // It will display the properties: Person {name: 'virat', age: 38}.
  
  console.log(rcbPlayer.name);  
  // Access and log the 'name' property of the 'rcbPlayer' object, which will display "virat".
  
  console.log(rcbPlayer.age);  
  // Access and log the 'age' property of the 'rcbPlayer' object, which will display 38.

//   The Person function serves as a constructor, creating objects with name and age properties.
//   The new keyword creates a new instance of Person, and properties are assigned based on the arguments passed.  



// A constructor function in JavaScript is a special type of function used to create and initialize objects. It acts like a blueprint for creating multiple objects with similar properties and methods.

// Here's a simple explanation:

// A constructor function uses the function keyword and usually starts with a capital letter (e.g., Person).
// When you create an object using the new keyword, the constructor function creates a new object and sets the values of its properties based on the function's parameters.
function Person(name, age) {  
    // Define a constructor function 'Person' which takes 'name' and 'age' as parameters.
    
    this.name = name;  
    // Assign the 'name' parameter to the 'name' property of the object being created.
    
    this.age = age;  
    // Assign the 'age' parameter to the 'age' property of the object being created.
  }
  
  Person.prototype.sayHello = function () {  
    // Add a method 'sayHello' to the prototype of the 'Person' constructor.
    // This means all instances of 'Person' can use this method.
  
    return `Hello from ${this.name} and my age is ${this.age}`;  
    // The method returns a greeting message that includes the 'name' and 'age' properties of the object.
  };
  
  const miPlayer = new Person("rohit", 38);  
  // Create a new instance of 'Person' with the name "rohit" and age 38.
  
  console.log(miPlayer.sayHello());  
  // Call the 'sayHello' method on the 'miPlayer' object and log the output to the console.
  // It will display: "Hello from rohit and my age is 38".
  
//   The sayHello method is added to the prototype of Person, so all objects created with Person share this method.

// When you call miPlayer.sayHello(), it returns a message with the object's name and age.
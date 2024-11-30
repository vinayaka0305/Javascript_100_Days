// Define the Employee constructor function
// It creates employee objects with properties and methods
function Employee(name, yearOfJoin, location) {
    // Initialize the name property with the given value
    this.name = name;
  
    // Initialize the yearOfJoin property with the given value
    this.yearOfJoin = yearOfJoin;
  
    // Initialize the location property with the given value
    this.location = location;
  
    // Define a method to get employee details
    // Returns a formatted string with the employee's name, year of joining, and location
    this.getEmpolyeeDetails = function () {
      return `name: ${name}, year of joining: ${yearOfJoin}, location: ${location}`;
    };
  
    // Define a private variable `salary` that is not directly accessible outside the function
    let salary;
  
    // Define a setter method to set the value of the private `salary` variable
    this.setSalary = function (amount) {
      salary = amount; // Assign the given amount to the private variable salary
    };
  
    // Define a getter method to retrieve the value of the private `salary` variable
    this.getSalary = function () {
      return salary; // Return the current value of salary
    };
  }
  
  // Create a new Employee object `emp1` with specified values
  const emp1 = new Employee("vinayaka", 2024, "ka");
  
  // Log the entire Employee object `emp1` to the console
  console.log(emp1); // Displays the object with its properties and methods
  
  // Call and log the `getEmpolyeeDetails` method to display employee details
  console.log(emp1.getEmpolyeeDetails()); // Expected output: "name: vinayaka, year of joining: 2024, location: ka"
  
  // Use the `setSalary` method to set the salary for `emp1`
  emp1.setSalary(40000);
  
  // Use the `getSalary` method to retrieve and log the salary of `emp1`
  console.log(emp1.getSalary()); // Expected output: 40000
  
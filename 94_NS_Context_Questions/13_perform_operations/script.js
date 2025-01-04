const employees = [
    { name: "John", age: 30, department: "HR", salary: 50000 },
    { name: "Jane", age: 28, department: "IT", salary: 60000 },
    { name: "Mark", age: 35, department: "HR", salary: 55000 },
    { name: "Alice", age: 32, department: "Finance", salary: 65000 },
    { name: "Charlie", age: 40, department: "IT", salary: 70000 },
  ];
  
  const performEmployeeOperations = (employees) => {
    // Function to find the employee with the highest salary
    const highestSalaryEmployee = () =>
      employees.reduce((maxEmployee, currentEmployee) =>
        currentEmployee.salary > maxEmployee.salary
          ? currentEmployee
          : maxEmployee
      );
  
    // Function to group employees by their department
    const employeesByDepartment = () => {
      return employees.reduce((departmentMap, employee) => {
        // If the department key doesn't exist, initialize it as an empty array
        if (!departmentMap[employee.department]) {
          departmentMap[employee.department] = [];
        }
        // Add the employee to the respective department array
        departmentMap[employee.department].push(employee);
        return departmentMap;
      }, {}); // Start with an empty object
    };
  
    // Function to calculate the average age of employees in each department
    const averageAgeByDepartment = () => {
      // Get the grouped employees by department
      const groupedEmpolyees = employeesByDepartment();
  
      const averageAgeMap = {}; // Object to store average ages by department
  
      for (const [department, departmentEmployees] of Object.entries(
        groupedEmpolyees
      )) {
        // Calculate the total age of all employees in the department
        const totalAge = departmentEmployees.reduce(
          (sum, employee) => sum + employee.age,
          0
        );
        // Calculate the average age
        averageAgeMap[department] = totalAge / departmentEmployees.length;
      }
      return averageAgeMap;
    };
  
    // Function to find the employee(s) with the longest name
    const employeeWithLongestName = () => {
      // Find the length of the longest name
      const longestNameLength = employees.reduce(
        (maxLength, employee) => Math.max(maxLength, employee.name.length),
        0
      );
  
      // Filter and return employees whose name length matches the longest length
      return employees.filter(
        (employee) => employee.name.length === longestNameLength
      );
    };
  
    // Return all the operations as an object
    return {
      highestSalaryEmployee,
      employeesByDepartment,
      averageAgeByDepartment,
      employeeWithLongestName,
    };
  };
  
  const operations = performEmployeeOperations(employees);
  
  // Find and log the employee with the highest salary
  console.log(operations.highestSalaryEmployee());
  
  // Log employees grouped by department
  console.log(operations.employeesByDepartment());
  
  // Log average age of employees in each department
  console.log(operations.averageAgeByDepartment());
  
  // Log the employee(s) with the longest name
  console.log(operations.employeeWithLongestName());
  
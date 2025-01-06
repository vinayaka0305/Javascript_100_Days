const employees = [
  { name: "John", age: 30, department: "HR", salary: 50000 },
  { name: "Jane", age: 28, department: "IT", salary: 60000 },
  { name: "Mark", age: 35, department: "HR", salary: 55000 },
  { name: "Alice", age: 32, department: "Finance", salary: 65000 },
  { name: "Charlie", age: 40, department: "IT", salary: 70000 },
  { name: "Vinayaka", age: 40, department: "IT", salary: 75000 },
];


const employeeOperations = (employees)=>{
    const employeWithHighestSalary = ()=>{
        return employees.reduce((maxEmSal,currEmSal)=>{
           return currEmSal.salary>maxEmSal.salary?currEmSal:maxEmSal
        })
    }
    const employeesByGroup=()=>{
      return employees.reduce((detailsOFDeparatement,employee)=>{
            if(!detailsOFDeparatement[employee.department]){
                detailsOFDeparatement[employee.department] = []
            }
            detailsOFDeparatement[employee.department].push(employee);
            return detailsOFDeparatement
        },{}) 
    }

    const employeeAvgSalary = ()=>{
        const average = {};
        const groupOfEmployee = employeesByGroup();

        for(let [departmentDetais,employee] of Object.entries(groupOfEmployee)){
            const total = employee.reduce((sum,employee)=>sum + employee.age,0);
            console.log(total)
           average[departmentDetais] = total/employee.length
        }
        return average;
    }

    const employeeWithLongestName =()=>{
        const totalLength = employees.reduce((sum,emp)=>Math.max(sum,emp.name.length),0);
        // console.log(totalLength);
        const empDetails = employees.filter((emp)=>emp.name.length === totalLength);
        return empDetails
    }
    return{
        employeWithHighestSalary,
        employeesByGroup,
        employeeAvgSalary,
        employeeWithLongestName
    }
}


const operations = employeeOperations(employees);
console.log(operations.employeWithHighestSalary());
console.log(operations.employeesByGroup());
console.log(operations.employeeAvgSalary());
console.log(operations.employeeWithLongestName());
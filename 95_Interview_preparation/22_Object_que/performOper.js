const employees = [
  { name: "John", age: 30, department: "HR", salary: 50000 },
  { name: "Jane", age: 28, department: "IT", salary: 60000 },
  { name: "Mark", age: 35, department: "HR", salary: 55000 },
  { name: "Alice", age: 32, department: "Finance", salary: 65000 },
  { name: "Charlie", age: 40, department: "IT", salary: 70000 },
];

const empOperations = (employees) => {
  const highestSalary = () => {
    return employees.reduce((max, curr) => {
      return curr.salary > max.salary ? curr : max;
    });
  };

  const groupByDeaparament = ()=>{
    return employees.reduce((deparamentMap,emp)=>{
        if(!deparamentMap[emp.department]){
            deparamentMap[emp.department] = [];
        }
        deparamentMap[emp.department].push(emp);
        return deparamentMap;
    },{})
  }

  const groupByAges =()=>{
    const group = groupByDeaparament();
    const average = {};

    for(const[deparamentMap,emp] of Object.entries(group)){
       const total = emp.reduce((a,b)=>a+b.age,0);
       average[deparamentMap] = total/emp.length;
    }
    return average;
  }

  const longestName = ()=>{
    const tLength = employees.reduce((a,b)=>Math.max(a,b.name.length),0);
    return employees.filter((emp)=>emp.name.length === tLength);
  }
  return {
    highestSalary,
    groupByDeaparament,
    groupByAges,
    longestName
  };
};

const operations = empOperations(employees);
console.log(operations.highestSalary());
console.log(operations.groupByDeaparament());
console.log(operations.groupByAges());
console.log(operations.longestName());

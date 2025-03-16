const employees = [
  { name: "Alice", department: "IT", salary: 70000 },
  { name: "Bob", department: "HR", salary: 65000 },
  { name: "Charlie", department: "Finance", salary: 72000 },
  { name: "David", department: "IT", salary: 75000 },
  { name: "Emma", department: "Marketing", salary: 68000 },
  { name: "Frank", department: "Sales", salary: 71000 },
];

function findHighestSalar(employees) {
  return employees.reduce((max, curr) => {
    return curr.salary > max.salary ? curr : max;
  });
}

function employeesByDepartMent(employees){
    return employees.reduce((empMap,emp)=>{
        if(!empMap[emp.department]){
            empMap[emp.department] = [];
        }
        empMap[emp.department].push(emp);
        return empMap;
    },{})
}

console.log(findHighestSalar(employees));
const groups = employeesByDepartMent(employees);

for(let [key,val] of Object.entries(groups)){
    console.log(`${key} empoles are-->`)
    val.forEach((obj)=>{
        console.log(`${obj.name} salary is ${obj.salary}`)
    })
}

const employees = [
  { name: "John", age: 30, department: "HR", salary: 50000 },
  { name: "Jane", age: 28, department: "IT", salary: 60000 },
  { name: "Mark", age: 35, department: "HR", salary: 55000 },
  { name: "Alice", age: 32, department: "Finance", salary: 65000 },
  { name: "Charlie", age: 40, department: "IT", salary: 70000 },
];


const performOperations = (employees)=>{
    const highestSalary = ()=>{
        return employees.reduce((max,curr)=>{
            return curr.salary>max.salary?curr:max
        })
    }

    const employeesGroups =()=>{
        return employees.reduce((deparemtMap,emp)=>{
            if(!deparemtMap[emp.department]){
                deparemtMap[emp.department] = [];
            }
            deparemtMap[emp.department].push(emp);
            return deparemtMap;
        },{})
    }

    const avereageAge =()=>{
        const group = employeesGroups();
        const average = {};

        for(const [deparemtMap,emp] of Object.entries(group)){
            const total = emp.reduce((a,b)=>a+b.age,0);
            average[deparemtMap] = total/emp.length
        }
        return average;
    }

    const longestName = ()=>{
        const maxLength = employees.reduce((a,b)=>Math.max(a,b.name.length),0);
        return employees.filter((emp)=>emp.name.length === maxLength)
    }
    return {
        highestSalary,
        employeesGroups,
        avereageAge,
        longestName
    }
}


const operations = performOperations(employees);
console.log(operations.highestSalary());
console.log(operations.employeesGroups());
console.log(operations.avereageAge());
console.log(operations.longestName());
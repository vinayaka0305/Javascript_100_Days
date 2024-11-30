const obj = { name: "John", age: "32", location: "New York" };

function solve(obj) {
  for (let value of Object.values(obj)) {
    console.log(value);
  }

  for(let key in obj){
    console.log(`${key}:${obj[key]}`)
  }
}

solve(obj);
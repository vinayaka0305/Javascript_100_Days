//shallow copy will copy one referece 

const obj = { a: 2, b: { c: 2 } };

const newObj = {...obj};

newObj.b.c = 3;
console.log(obj,"original");

//deep copy copies values

const age = {a:20,b:{c:30}}

const newAge = JSON.parse(JSON.stringify(age))

newAge.b.c = 100;

console.log(age,"original deep");
console.log(newAge,"copy deep");





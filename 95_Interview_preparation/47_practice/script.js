const obj1 = {
  a: 2,
  b: { c: 2 },
};


// const objshallow = {...obj1};

// objshallow.a = 3;

// console.log(obj1,"obj1");
// console.log(objshallow,"shallow");
obj1.b.c = 2000
const deepcopy = JSON.parse(JSON.stringify(obj1));
deepcopy.b.c = 300;

console.log(obj1,"original");
console.log(deepcopy,"deepcopy");

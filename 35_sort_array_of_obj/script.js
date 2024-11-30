const players = [
  { name: "virat", age: 37 },
  { name: "dhoni", age: 45 },
  { name: "rohit", age: 38 },
];

const sortedArr = players.sort((a, b) => b.age - a.age);
const anotherArr = players.sort();
console.log(sortedArr);
console.log(anotherArr);

const students = [
  { name: "Ram", scores: [80, 95, 60] },
  { name: "Mohan", scores: [85, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [95, 90, 94] },
];

const highestAverage = (students) => {
  const result = students
    .map((stud) => ({ name: stud.name, average: avg(stud.scores) }))
    .filter((obj) => {
      return obj.average > 90;
    });
  return result;
};

const avg = (arr) => {
  const total = arr.reduce((a, b) => a + b);
  return total / arr.length;
};

console.log(highestAverage(students));

const obj = highestAverage(students);

console.log(obj);

obj.forEach((std)=>{
    console.log(std.name,std.average)
})

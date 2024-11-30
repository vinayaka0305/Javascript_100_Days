const students = [
  { name: "Ram", scores: [80, 95, 60] },
  { name: "Mohan", scores: [85, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [95, 90, 94] },
];


function highestPerform(students){
  const res = students.map((obj)=>{
    // console.log(obj);
    return {name:obj.name,average:avg(obj.scores)};
  }).filter((obj)=>{
    return obj.average > 90
  })
  return res;
}

function avg(scores){
  console.log(scores);
  let sum = scores.reduce((a,b)=>a+b)
  return sum/scores.length;
}

console.log(highestPerform(students));
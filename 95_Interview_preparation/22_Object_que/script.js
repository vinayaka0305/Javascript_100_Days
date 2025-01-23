const students = [
    { name: "Ram", scores: [80, 95, 60] },
    { name: "Mohan", scores: [85, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [95, 90, 94] },
  ];

const highestScorer = (students)=>{
    // console.log(students
    const result = students.map((student)=>{
        return {name:student.name,average:avg(student.scores)}
    }).filter((student)=>{
        return student.average > 90
    })
    return result;
}


const avg=(scores)=>{
    const totalScore = scores.reduce((a,b)=>a+b,0);
    return totalScore/scores.length;
}
console.log(highestScorer(students));
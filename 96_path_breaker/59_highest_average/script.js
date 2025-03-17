const students = [
  { name: "Ram", scores: [80, 95, 60], age: 22 },
  { name: "Mohan", scores: [85, 70, 90], age: 23 },
  { name: "Sai", scores: [60, 70, 80], age: 22 },
  { name: "Hemang", scores: [95, 90, 94], age: 23 },
];

function findhighestAvargaeObj(students) {
  return students.reduce((highest, student) => {
    const averageScore =
      student.scores.reduce((a, b) => a + b, 0) / student.scores.length;

    if (!highest || averageScore > highest.avg) {
      return { ...student, avg: averageScore };
    }
    return highest;
  }, null);
}

console.log(findhighestAvargaeObj(students));

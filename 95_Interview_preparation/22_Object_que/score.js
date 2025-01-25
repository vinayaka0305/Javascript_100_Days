// Array of student objects containing their name, subject, and score
const students = [
    { student: "Alice", subject: "Math", score: 80 },
    { student: "Bob", subject: "Math", score: 85 },
    { student: "Alice", subject: "Science", score: 80 },
    { student: "Bob", subject: "Science", score: 80 },
  ];
  
  // Function to calculate the total score for each student
  const getTotalScoreOfEach = (students) => {
    const result = {}; // Initialize an empty object to store the result
  
    // Iterate over each student object in the input array
    students.forEach((stud) => {
      const { student, score } = stud; // Destructure `student` and `score` properties from the object
  
      // If the student doesn't already exist in the result object, initialize their entry
      if (!result[student]) {
        result[student] = { totalScore: 0 }; // Set their initial totalScore to 0
      }
  
      // Add the current score to the student's totalScore
      result[student].totalScore += score;
    });
  
    return result; // Return the result object containing total scores of each student
  };
  
  // Call the function and log the output
  const obj = getTotalScoreOfEach(students);

for (let student in obj) {
  console.log(`${student}: Total Score = ${obj[student].totalScore}`);
}

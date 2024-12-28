// Input array of objects containing students' scores in different subjects
const scoresArr = [
    { student: "Alice", subject: "Math", score: 80 },
    { student: "Bob", subject: "Math", score: 85 },
    { student: "Alice", subject: "Science", score: 80 },
    { student: "Bob", subject: "Science", score: 80 },
  ];
  
  function calculateScore(arr) {
    // Initialize an empty object to store the results
    const result = {};
  
    // Iterate over each object in the input array
    arr.forEach((obj) => {
      // Check if the student is already present in the result object
      if (!result[obj.student]) {
        // If not, initialize an entry for the student with a totalScore of 0
        result[obj.student] = { totalScore: 0 };
      }
      // Add the current score to the student's totalScore
      result[obj.student].totalScore += obj.score;
    });
  
    // Return the final result object containing total scores for all students
    return result;
  }
  
  // Call the function and log the result to the console
  console.log(calculateScore(scoresArr));
  
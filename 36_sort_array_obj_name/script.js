// Array of player objects, each containing a name and age
const players = [
    { name: "Virat", age: 37 },
    { name: "Dhoni", age: 45 },
    { name: "Rohit", age: 38 },
  ];
  
  // Sort the players array alphabetically based on the name property
  const newArr = players.sort((a, b) => {
    // Convert the name of the current player to lowercase for case-insensitive comparison
    const currName = a.name.toLowerCase();
    
    // Convert the name of the next player to lowercase for case-insensitive comparison
    const nextName = b.name.toLowerCase();
  
    // If the current player's name comes before the next player's name alphabetically, return -1
    if (currName < nextName) return -1;
  
    // If the current player's name comes after the next player's name alphabetically, return 1
    if (currName > nextName) return 1;
  
    // If both names are the same, return 0 (no sorting needed for these two)
    return 0;
  });
  
  // Log the sorted array of players to the console
  console.log(newArr);
  
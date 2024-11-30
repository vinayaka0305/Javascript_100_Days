const teamData = {
    team: "India",
    coach: "Goutham Ghambir",
    field: "Eden Gardens",
    players: [
      {
        name: "Rohit",
        jercyNumber: 45,
      },
      { name: "Virat", jercyNumber: 18 },
      {
        name: "Surya Kumar",
        jercyNumber: 63,
      },
    ],
    physio: "Kamlesh Jain",
    Analyst: "Gaurav Gangwal",
  };
  
  // Destructuring 'teamData' to extract 'team', 'coach', and individual players
  const {
    team, // Extracting the 'team' property
    coach, // Extracting the 'coach' property
    players: [shana, chiku, sky], // Destructuring 'players' array into 'shana', 'chiku', and 'sky' objects
  } = teamData;
  
  console.log(shana); // Logs the first player (Rohit) object from the 'players' array
  console.log(chiku); // Logs the second player (Virat) object from the 'players' array
  console.log(sky);   // Logs the third player (Surya Kumar) object from the 'players' array
  
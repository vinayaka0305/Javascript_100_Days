const cricketers = [
    { name: "sachin", runs: 12223, wickets: 300, country: "India" },
    { name: "virat", runs: 100333, wickets: 140, country: "India" },
    { name: "ricky ponting", runs: 13704, wickets: 8, country: "Australia" },
    { name: "brian lara", runs: 11953, wickets: 4, country: "West Indies" },
    { name: "jacques kallis", runs: 13289, wickets: 292, country: "South Africa" },
    { name: "kumar sangakkara", runs: 12400, wickets: 0, country: "Sri Lanka" },
    { name: "ab de villiers", runs: 9577, wickets: 2, country: "South Africa" },
    { name: "glenn mcgrath", runs: 641, wickets: 563, country: "Australia" },
    { name: "james anderson", runs: 1238, wickets: 690, country: "England" }
];

// Use Object.groupBy to group cricketers by the 'country' property
// This function takes the cricketers array and groups them by country
const groupedPlayers = Object.groupBy(cricketers, ({ country }) => country);

// Log the grouped players object to see cricketers organized by country
console.log(groupedPlayers);

// Object.groupBy() is a method (available in newer JavaScript versions) that groups items in an array into an object based on a specified criterion.

// The function takes two arguments:
// Array to group (cricketers).
// Callback function that determines how the items will be grouped. In this case, it's grouping by the country property of each cricketer.
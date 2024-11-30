// Define an array of items, each with an id, name, and category
const items = [
    { id: 1, name: "apple", category: "Fruit" },
    { id: 2, name: "banana", category: "Fruit" },
    { id: 3, name: "carrot", category: "Vegetable" },
    { id: 4, name: "broccoli", category: "Vegetable" },
    { id: 5, name: "chicken", category: "Meat" },
  ];
  
  // Use reduce to count the number of items in each category
  const countOfCategory = items.reduce((count, item) => {
      // Check if the current item's category already exists in 'count'
      // If it does, use that existing count; otherwise, start with 0
      count[item.category] = (count[item.category] || 0) + 1;
  
      // Return the updated 'count' object for the next iteration
      return count;
  }, {}); // Start with an empty object as the initial value of 'count'
  
  // Print the final object that shows the count of each category
  console.log(countOfCategory);
  
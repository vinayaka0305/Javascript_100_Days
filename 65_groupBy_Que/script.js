// Define a function named 'groupBy' that takes in an array of items and a key to group by
const groupBy = (items, key) => {
    // Use reduce to go through each item in 'items' and build up a 'result' object
    return items.reduce((result, item) => {
      // Check if the 'result' object already has a key for the item's category (or other key value)
      if (!result[item[key]]) {
        // If not, create an empty array for this category (or key) in 'result'
        result[item[key]] = [];
      }
      // Add the current item to the array for this category (or key)
      result[item[key]].push(item);
      
      // Return the updated 'result' object for the next item in the array
      return result;
    }, {}); // Start with an empty object as the initial 'result'
  };
  
  // Define an array of items, each with an id, name, and category
  const items = [
    { id: 1, name: "apple", category: "Fruit" },
    { id: 2, name: "banana", category: "Fruit" },
    { id: 3, name: "carrot", category: "Vegetable" },
    { id: 4, name: "broccoli", category: "Vegetable" },
    { id: 5, name: "chicken", category: "Meat" },
    { id: 6, name: "salmon", category: "Fish" },
    { id: 7, name: "milk", category: "Dairy" },
    { id: 8, name: "bread", category: "Grain" },
    { id: 9, name: "orange", category: "Fruit" },
    { id: 10, name: "potato", category: "Vegetable" },
  ];
  
  // Call the 'groupBy' function to group items by their 'category' property
  const groupByItems = groupBy(items, "category");
  
  // Print the grouped items to the console
  console.log(groupByItems);
  
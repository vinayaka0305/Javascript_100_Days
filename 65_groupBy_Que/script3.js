// Array of product objects with each object containing id, name, and price
const products = [
    {
      id: 1,
      name: "mouse",
      price: 1110,
    },
    {
      id: 2,
      name: "laptop",
      price: 40000,
    },
    {
      id: 1,
      name: "keyboard",
      price: 3000,
    },
  ];
  
  // Using reduce to find the most expensive item in the array
  const expensiveItem = products.reduce((max, product) => {
    console.log(max,"max");
    console.log(product,"product");
    // Compare the current product's price with the max price found so far
    // If the current product's price is higher, update max to the current product
    return product.price > max.price ? product : max;
  }, products[0]); // Start with the first product as the initial "max" value
  
  // Log the most expensive item found in the array
  console.log(expensiveItem);
  
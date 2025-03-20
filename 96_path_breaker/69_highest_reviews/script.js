const reviews = [
    {
      product: "Laptop",
      reviewer: "Alice",
      review: "Amazing performance and great battery life",
    },
    {
      product: "Phone",
      reviewer: "Bob",
      review: "Sleek design and fast charging, but the camera could be better",
    },
    {
      product: "Headphones",
      reviewer: "Charlie",
      review: "Great sound quality and comfortable to wear for long hours",
    },
    {
      product: "Smartwatch",
      reviewer: "David",
      review: "Very useful for tracking fitness and notifications",
    },
    {
      product: "Laptop",
      reviewer: "Emma",
      review: "Perfect for reading and watching movies, but a bit pricey",
    },
  ];
  
  function findMostReviewedProduc(reviews) {
    // Create an object to count the occurrences of each product
    const mostReviewedProduct = reviews
      .map((r) => r.product) // Extract product names
      .reduce(
        (count, product) => ((count[product] = (count[product] || 0) + 1), count), // Count occurrences
        {}
      );
  
    // Find the product with the maximum count
    const topProduct = Object.keys(mostReviewedProduct).reduce((a, b) =>
      mostReviewedProduct[a] > mostReviewedProduct[b] ? a : b
    );
    
    return topProduct;
  }
  
  function findLongestWord(review) {
    const longestWord = review
      .flatMap((r) => r.review.split(/\s+/)) // Split all reviews into words
      .reduce((max, curr) => (curr.length > max.length ? curr : max), ""); // Find the longest word
  
    return longestWord;
  }
  
  // Output the most reviewed product
  console.log("Most Reviewed Product:", findMostReviewedProduc(reviews)); 
  
  // Output the longest word in the reviews
  console.log("Longest Word:", findLongestWord(reviews));  
  
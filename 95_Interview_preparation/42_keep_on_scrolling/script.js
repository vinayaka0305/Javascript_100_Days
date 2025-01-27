// URL of the API that provides product data
const url = "https://fakestoreapi.com/products";

// Selecting the container element from the DOM where the images will be displayed
const container = document.querySelector(".container");

// Asynchronous function to fetch data from the API
const fetchData = async () => {
  try {
    // Sending a fetch request to the API and awaiting the response
    const response = await fetch(url);
    // Parsing the JSON response into a JavaScript object
    const data = await response.json();
    console.log(data); // Logging the fetched data to the console for debugging

    // Looping through each object in the fetched data array
    data.forEach((obj) => {
      // Creating a new <img> element for each product
      let img = document.createElement("img");
      img.className = "images"; // Assigning a class name to the image for styling
      img.src = obj.image; // Setting the source of the image to the product image URL
      container.appendChild(img); // Appending the image to the container
    });
  } catch (error) {
    // Logging any errors that occur during the fetch process
    console.log(error);
  }
};

// Calling the fetchData function to load the initial data
fetchData();

// Variable to track whether data is currently being fetched to prevent duplicate requests
let isFetching = false;

// Adding an event listener to detect when the user scrolls the page
window.addEventListener("scroll", async () => {
  // Checking if the user has scrolled to the bottom of the page
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    // Setting the fetching flag to true
    isFetching = true;
    // Fetching additional data and awaiting its completion
    await fetchData();
    // Fetching data again (potential bug or redundant call here)
    fetchData();
    // Resetting the fetching flag to false
    isFetching = false;
  }
});

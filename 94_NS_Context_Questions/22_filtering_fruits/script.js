// Select the dropdown element that contains fruit type options
const fruitType = document.querySelector('.fruit-type'); 

// Select the button that will trigger the filtering process
const filterBtn = document.querySelector('#filterBtn'); 

// Select the unordered list where filtered fruit names will be displayed
const list = document.querySelector('#fruitList'); 

// Array of fruit objects with their respective types
const fruits = [
    { name: "Lemon", type: "citrus" },
    { name: "Orange", type: "citrus" },
    { name: "Strawberry", type: "berry" },
    { name: "Blueberry", type: "berry" },
    { name: "Peach", type: "stone" },
    { name: "Cherry", type: "stone" },
];

// Add event listener to the filter button
filterBtn.addEventListener('click', () => {
    
    // Filter fruits based on the selected type
    const filtering = fruits.filter((item) => {
        return fruitType.value === "all" || item.type === fruitType.value;
    });

    // Clear the previous list before adding new items
    list.textContent = '';

    // Loop through the filtered results and display them in the list
    filtering.forEach((item) => {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = item.name; // Set the text content to the fruit name
        list.appendChild(li); // Append the list item to the unordered list
    });
});

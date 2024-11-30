// URL of the JSON data to fetch
const url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

// Asynchronous function to fetch and process data
const fetchData = async () => {
    // Fetching data from the given URL
    const response = await fetch(url);
    // Parsing the response into a JSON object
    const data = await response.json();
    
    // Sorting the data based on the 'NRR' (Net Run Rate) property in ascending order
    const netRunRateData = data.sort((a, b) => {
        return a.NRR - b.NRR; // Compare NRR values for sorting
    });

    // Select the table body where the data will be inserted
    let tableBody = document.querySelector('tbody');

    // Iterating over each object in the sorted data array
    for (let key of netRunRateData) {
        // Create a new table row for each object
        let tr = document.createElement('tr');
        
        // Iterate over each key of the object
        Object.keys(key).forEach((data) => {
            // Create a new table cell for each property
            let td = document.createElement('td');
            // Set the content of the cell to the value of the current property
            td.innerHTML = key[data];
            // Append the cell to the current row
            tr.appendChild(td);
        });

        // Append the complete row to the table body
        tableBody.appendChild(tr);
    }
}

// Call the fetchData function to fetch and display the data
fetchData();

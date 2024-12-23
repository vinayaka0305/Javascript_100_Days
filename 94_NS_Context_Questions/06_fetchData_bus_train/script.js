// Select the div where the data will be displayed
const display = document.querySelector("#data-display");

// API URLs for fetching bus and train data
const BUSES_API =
  "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";
const TRAIN_API =
  "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains";

// Function to fetch and display data
async function fetchAndDisplayData() {
  try {
    // Fetch data from the bus API
    const response = await fetch(BUSES_API);
    const busData = await response.json(); // Parse the JSON response
    // console.log(busData);

    // Check if there is any bus data
    if (busData.length > 0) {
      const bus = busData[0]; // Get the first bus entry

      // Display the bus information in the #data-display div
      display.innerHTML = `
        <h3>Bus Information</h3>
        <p>Date : ${bus.date}</p>
        <p>Destination : ${bus.destination}</p>
        <p>Source : ${bus.source}</p>
        <p>DepartureTime : ${bus.departureTime}</p>
        <p>ArrivalTime : ${bus.arrivalTime}</p>
        <p>TicketPrice : ${bus.ticketPrice}</p>
        <p>BusName : ${bus.busName}</p>
      `;
    } else {
      // Display message if no bus data is available
      display.innerHTML = `No bus available`;
    }

    // Wait for 5 seconds before fetching train data
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Fetch data from the train API
    try {
      const trainResponse = await fetch(TRAIN_API);
      const trainData = await trainResponse.json(); // Parse the JSON response
      // console.log(trainData);

      // Check if there is any train data
      if (trainData.length > 0) {
        const train = trainData[0]; // Get the first train entry

        // Display the train information in the #data-display div
        display.innerHTML = `
          <h3>Train Information</h3>
          <p>Price : ${train.price}</p>
          <p>Train_number : ${train.train_number}</p>
          <p>Kilometers : ${train.kilometers}</p>
          <p>Duration : ${train.duration}</p>
          <p>DepartureDate : ${train.departure.departureDate}</p>
          <p>DepartureTime : ${train.departure.departureTime}</p>
          <p>To : ${train.to}</p>
          <p>From : ${train.from}</p>
        `;
      } else {
        // Display message if no train data is available
        display.innerHTML = `No train available`;
      }
    } catch (error) {
      // Log any error that occurs during train data fetching
      console.log(error);
    }
  } catch (error) {
    // Catch and log errors that occur during bus data fetching
    console.log(error);
  }
}

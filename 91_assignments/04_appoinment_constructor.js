// Appointment constructor function
function Appointment(appDate) {
    // Initialize a public property `date` using the provided date
    this.date = new Date(appDate);

    // Private variable `location` (not directly accessible outside the constructor)
    let location;

    // Public method to set the value of `location`
    this.setLocation = function (input) {
        location = input; // Assign the provided input to the private variable `location`
    }

    // Public method to get the value of `location`
    this.getLocation = function () {
        return location; // Return the value of the private variable `location`
    }

    // Public method to return a string representation of the appointment
    this.toString = function () {
        // Format the date and include the location
        return `Appoint on ${this.date.toDateString()} at ${location}`;
    }
}

// Create the first Appointment instance with a specific date
const app1 = new Appointment('2024-11-27'); // Sets date to November 27, 2024
app1.setLocation('ka');                    // Set location of app1 to 'ka'

// Create the second Appointment instance with a specific date
const app2 = new Appointment('2024-11-28'); // Sets date to November 28, 2024
app2.setLocation('TN');                    // Set location of app2 to 'TN'

// Log the location of the first appointment
console.log(app1.getLocation()); // Logs: 'ka'

// Log the string representation of the first appointment
console.log(app1.toString());    // Logs: 'Appoint on Wed Nov 27 2024 at ka'

// Log the location of the second appointment
console.log(app2.getLocation()); // Logs: 'TN'

// Log the string representation of the second appointment
console.log(app2.toString());    // Logs: 'Appoint on Thu Nov 28 2024 at TN'

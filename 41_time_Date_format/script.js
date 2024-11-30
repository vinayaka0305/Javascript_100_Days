//Date time formatting with inbuilt objects
//Intl - Internationalization constructor is used for localization
// It provides features like:
// - Language-sensitive string comparisons
// - Currency formatting
// - Date and time formatting based on the region provided

const currentDate = new Date(); // Create a new Date object representing the current date and time

// Using Intl.DateTimeFormat to format date and time according to the specified locale (here 'en-IN' for India)
// {dateStyle: "long", timeStyle: "long"} specifies the format for both date and time in a long, detailed format
const formattedDateTime = new Intl.DateTimeFormat('en-IN', { dateStyle: "long", timeStyle: 'long' }).format(currentDate);

console.log(formattedDateTime); // Logs the formatted date and time in Indian format, e.g., "20 October 2024 at 5:20:30 PM IST"


// Intl.DateTimeFormat is used to format dates and times based on the specified locale (en-IN for India).

// The options {dateStyle: "long", timeStyle: "long"} ensure that both the date and time are shown in a detailed, human-readable format.

// This is locale-sensitive, meaning the format will change based on the region you pass (en-IN for Indian format).

////////////////////////////////////////////////////////////////////////////////////

// Relative time formatting using Intl objects

// Intl.RelativeTimeFormat allows us to format time relative to the current time (like "3 days ago" or "in 5 days")

const relativeTimeFormatter = new Intl.RelativeTimeFormat('en-IN'); // Creating a relative time formatter for the 'en-IN' locale (English - India)

console.log(relativeTimeFormatter.format(-3, "day")); // Logs "3 days ago" because -3 means 3 days in the past (negative for past, positive for future)

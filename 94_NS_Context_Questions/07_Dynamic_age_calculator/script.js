const calculateAge = () => {
  // Get the input values for date of birth (dob) and time of birth (tob)
  const date = dob.value;
  const time = tob.value;
  const now = new Date(); // Get the current date and time

  // Validate input: Check if both date and time are missing
  if (!date && !time) {
    error.textContent = "Please provide date or time"; // Display error message
    return; // Exit the function
  }

  // Combine date and time into a single string for parsing
  const dateTimeString = time ? `${date}T${time}` : date;
  // For example, if date = "1998-02-02" and time = "11:01", dateTimeString = "1998-02-02T11:01"
  
  const dobDate = new Date(dateTimeString); // Convert the string into a Date object

  // Validate the parsed date: Check if the input is invalid
  if (isNaN(dobDate.getTime())) {
    error.textContent = "Invalid date or time format."; // Display error message
    return; // Exit the function
  }

  // Calculate the difference between the current date and the date of birth
  const diff = now - dobDate;

  // Validate the difference: Ensure the date is not in the future
  if (diff < 0) {
    error.textContent = "Date and time of birth cannot be in the future."; // Display error message
    return; // Exit the function
  }

  // Create a new Date object using the difference to calculate the age
  const ageDate = new Date(diff); 
  // The difference is in milliseconds since the epoch (1970-01-01T00:00:00Z)

  // Calculate the years of age
  const ageYears = ageDate.getFullYear() - 1970; 
  // Subtract 1970 because the difference is counted from 1970-01-01

  // Calculate the months of age
  const ageMonth = ageDate.getUTCMonth(); 
  // The UTC month starts at 0, so it gives the exact months since the birthday

  // Calculate the days of age
  const ageDays = ageDate.getUTCDate() - 1; 
  // Subtract 1 because the day starts counting at 1

  // Display the calculated age in the `display` element
  display.textContent = `Age: ${ageYears}, Month: ${ageMonth}, and ${ageDays} days`;
};

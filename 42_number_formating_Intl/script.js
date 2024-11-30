// Create a new number formatter for Indian numbering system (en-IN) with currency style
// The currency is set to INR (Indian Rupee)
const numberFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency", // Specifies the formatting style as currency
    currency: "INR",   // Specifies the currency as Indian Rupee (INR)
  });
  
  // Format the number 1200 using the number formatter and log it to the console
  console.log(numberFormatter.format(1200)); // Outputs: ₹1,200.00
  
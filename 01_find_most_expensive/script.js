const products = [
  //declare an arr of products
  { id: 2, name: "iphone", price: "49999" }, //first product
  { id: 1, name: "nothing", price: "29999" }, //second product
  { id: 3, name: "g-pixel", price: "59999" }, //third product
];

//reduce method is used to find the most expensive product
const mostExpensive = products.reduce((max, product) => {
  //max is the accumulator,initialized with products[0]
  //product is the current item in each iteration
  return product.price > max.price ? product : max;
  // if the current product's price is greater than max price so for
  //return the current product as the new max, otheriwist keep the existing max
}, products[0]); //intialized the max value with first product in an array(products[0])

console.log(mostExpensive);
//log the most expensive value to the console;

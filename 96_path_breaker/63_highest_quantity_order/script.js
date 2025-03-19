const orders = [
  {
    orderId: 1,
    customerName: "Alice",
    items: [
      { name: "laptop", quantity: 1 },
      { name: "mouse", quantity: 2 },
    ],
    status: "completed",
  },
  {
    orderId: 2,
    customerName: "Bob",
    items: [
      { name: "keyboard", quantity: 1 },
      { name: "monitor", quantity: 1 },
    ],
    status: "pending",
  },
  {
    orderId: 3,
    customerName: "Charlie",
    items: [
      { name: "headphones", quantity: 1 },
      { name: "webcam", quantity: 1 },
    ],
    status: "shipped",
  },
  {
    orderId: 4,
    customerName: "David",
    items: [
      { name: "printer", quantity: 1 },
      { name: "scanner", quantity: 1 },
    ],
    status: "completed",
  },
  {
    orderId: 5,
    customerName: "Emma",
    items: [
      { name: "tablet", quantity: 1 },
      { name: "stylus", quantity: 1 },
    ],
    status: "processing",
  },
  {
    orderId: 6,
    customerName: "Alice",
    items: [
      { name: "smartphone", quantity: 2 },
      { name: "charger", quantity: 4 },
    ],
    status: "shipped",
  },
];

const coustomerQuantities =(orders)=>{
    const totalQunatity = orders.reduce((acc,order)=>{
        const total = order.items.reduce((a,b)=>a+b.quantity,0);
        acc[order.customerName] = (acc[order.customerName] || 0) + total;
        return acc
    },{});

    console.log(totalQunatity);
    const highestCustomer = Object.entries(totalQunatity)
    .reduce((max,curr)=>(curr[1]>max[1]?curr:max))

    console.log(highestCustomer);

    return{name:highestCustomer[0],totalQuantity:highestCustomer[1]}
}

console.log(coustomerQuantities(orders));

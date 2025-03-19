const orders = [
  {
    orderId: 1,
    customerName: "Alice",
    items: [
      { name: "laptop", price: 10000 },
      { name: "mouse", price: 1000 },
    ],
    status: "completed",
  },
  {
    orderId: 2,
    customerName: "Bob",
    items: [
      { name: "keyboard", price: 2000 },
      { name: "monitor", price: 8000 },
    ],
    status: "pending",
  },
  {
    orderId: 3,
    customerName: "Charlie",
    items: [
      { name: "headphones", price: 3000 },
      { name: "webcam", price: 2500 },
    ],
    status: "shipped",
  },
  {
    orderId: 4,
    customerName: "David",
    items: [
      { name: "printer", price: 7000 },
      { name: "scanner", price: 5000 },
    ],
    status: "completed",
  },
  {
    orderId: 5,
    customerName: "Emma",
    items: [
      { name: "tablet", price: 12000 },
      { name: "stylus", price: 1500 },
    ],
    status: "processing",
  },
  {
    orderId: 6,
    customerName: "Frank",
    items: [
      { name: "smartphone", price: 15000 },
      { name: "charger", price: 2000 },
    ],
    status: "shipped",
  },
];

const totalCompletedAmount = (orders) => {
  const completedOrderSummary = orders
    .filter((order) => order.status === "completed")
    .map((order) => ({
      name: order.customerName,
      amountSpent: order.items.reduce((a, b) => a + b.price, 0),
    }));
  return completedOrderSummary;
};

console.log(totalCompletedAmount(orders));

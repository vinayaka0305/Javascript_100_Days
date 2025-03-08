// Array of orders with customers and their order statuses
const orders = [
    { id: 1, customer: "Alice", status: "completed" },
    { id: 2, customer: "Bob", status: "pending" },
    { id: 3, customer: "Charlie", status: "completed" },
    { id: 4, customer: "David", status: "pending" },
    { id: 5, customer: "Eve", status: "completed" },
    { id: 6, customer: "Frank", status: "pending" }
];


const groupTheOrderStatus = (orders) => {
    return orders.reduce((groupMap, order) => {
        // If the status key does not exist in the groupMap, initialize it with an empty array
        groupMap[order.status] = groupMap[order.status] || [];

        // Push the current order into the corresponding status group
        groupMap[order.status].push(order);

        // Return the updated grouping object for the next iteration
        return groupMap;
    }, {}); // Start with an empty object as the initial value
};

// Call the function and log the result
const groupOrder = groupTheOrderStatus(orders);


for(const[status,orderlist] of Object.entries(groupOrder)){
    console.log(`status : ${status}`);
    orderlist.forEach((ord)=>{
        console.log(`ID-${ord.id}, customer-${ord.customer}`)
    })
}

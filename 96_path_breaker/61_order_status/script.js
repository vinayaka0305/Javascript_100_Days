const orders = [
  { id: 1, customer: "Alice", status: "completed" },
  { id: 2, customer: "Bob", status: "pending" },
  { id: 3, customer: "Charlie", status: "shipped" },
  { id: 4, customer: "David", status: "processing" },
  { id: 5, customer: "Eve", status: "completed" },
  { id: 6, customer: "Frank", status: "canceled" },
];


function findOrederStatus(orders){
    return orders.reduce((orderMap,orderObj)=>{
        if(!orderMap[orderObj.status]){
            orderMap[orderObj.status] = [];
        }
        orderMap[orderObj.status].push(orderObj)
        return orderMap;
    },{})
}

const obj = findOrederStatus(orders);

for(let [status,orderList] of Object.entries(obj)){
    console.log(`Status: ${status}`);

    orderList.forEach((order)=>{
        console.log(`id:${order.id} and name: ${order.customer}`)
    })

}
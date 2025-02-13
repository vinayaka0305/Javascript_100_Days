const searchBar = document.querySelector("#search-bar");
const table = document.querySelector("table");

const billItems = [
  {
    id: 1,
    itemName: "Bread",
    price: 20,
  },
  {
    id: 2,
    itemName: "Butter",
    price: 50,
  },
  {
    id: 3,
    itemName: "Tomatoes",
    price: 30,
  },
  {
    id: 4,
    itemName: "Onion",
    price: 40,
  },
  {
    id: 5,
    itemName: "Pomegranate",
    price: 60,
  },
  {
    id: 6,
    itemName: "Apple",
    price: 40,
  },
  {
    id: 7,
    itemName: "Grapes",
    price: 30,
  },
  {
    id: 8,
    itemName: "Mango",
    price: 100,
  },
];

function renderTable(items) {
  if (items.length === 0) {
    table.innerHTML = `<tr><td colspan="2">No items found</td></tr>`;
  }

  let tableContent = `<tr>
            <th>Item</th>
            <th>Price</th>
        </tr>`;

  items.forEach((item) => {
    tableContent += `<tr>
            <td>${item.itemName}</td>
            <td>${item.price}</td>
        </tr>`;
  });
  table.innerHTML = tableContent;
}

function update() {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredItems = billItems.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm)
  );
  renderTable(filteredItems);
}

renderTable(billItems);

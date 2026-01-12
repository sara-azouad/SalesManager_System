// Sample initial orders
// Sample initial orders
let orders = [
  {
    id: 1,
    client: "Alice Johnson",
    product: "Laptop Pro",
    quantity: 1,
    status: "Pending",
  },
  {
    id: 2,
    client: "Bob Smith",
    product: "Phone Max",
    quantity: 2,
    status: "Shipped",
  },
  {
    id: 3,
    client: "Charlie Brown",
    product: "Headphones",
    quantity: 3,
    status: "Delivered",
  },
  {
    id: 4,
    client: "Diana Prince",
    product: "Monitor 4K",
    quantity: 1,
    status: "Processing",
  },
  {
    id: 5,
    client: "Ethan Hunt",
    product: "Keyboard",
    quantity: 5,
    status: "Pending",
  },
  {
    id: 6,
    client: "Fiona Gallagher",
    product: "Smartphone",
    quantity: 1,
    status: "Shipped",
  },
  {
    id: 7,
    client: "George Miller",
    product: "Coffee Maker",
    quantity: 2,
    status: "Delivered",
  },
  {
    id: 8,
    client: "Helen Parker",
    product: "Gaming Chair",
    quantity: 1,
    status: "Cancelled",
  },
  {
    id: 9,
    client: "Ian Curtis",
    product: "Desk Lamp",
    quantity: 3,
    status: "Processing",
  },
  {
    id: 10,
    client: "Julia Roberts",
    product: "Laptop Pro",
    quantity: 1,
    status: "Shipped",
  },
  {
    id: 11,
    client: "Kevin Hart",
    product: "Phone Max",
    quantity: 2,
    status: "Delivered",
  },
];

const ordersTable = document.getElementById("ordersTable");
const addOrderBtn = document.getElementById("addOrderBtn");

function renderOrders() {
  ordersTable.innerHTML = "";
  orders.forEach((order) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${order.client}</td>
      <td>${order.product}</td>
      <td>${order.quantity}</td>
      <td>${order.status}</td>
      <td>
        <button onclick="editOrder(${order.id})">✏️ Edit</button>
        <button onclick="deleteOrder(${order.id})">🗑️ Delete</button>
      </td>
    `;
    ordersTable.appendChild(tr);
  });
}

// CREATE
addOrderBtn.addEventListener("click", () => {
  const client = document.getElementById("orderClient").value;
  const product = document.getElementById("orderProduct").value;
  const quantity = Number(document.getElementById("orderQuantity").value);
  const status = document.getElementById("orderStatus").value;

  if (client && product && quantity > 0) {
    const newOrder = {
      id: orders.length ? orders[orders.length - 1].id + 1 : 1,
      client,
      product,
      quantity,
      status,
    };
    orders.push(newOrder);
    renderOrders();

    // Clear inputs
    document.getElementById("orderClient").value = "";
    document.getElementById("orderProduct").value = "";
    document.getElementById("orderQuantity").value = "";
    document.getElementById("orderStatus").value = "Pending";
  }
});

// DELETE
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
  renderOrders();
}

// UPDATE
function editOrder(id) {
  const order = orders.find((o) => o.id === id);
  if (order) {
    const newClient = prompt("Client Name:", order.client);
    const newProduct = prompt("Product:", order.product);
    const newQuantity = prompt("Quantity:", order.quantity);
    const newStatus = prompt(
      "Status (Pending/Shipped/Delivered):",
      order.status
    );

    if (newClient && newProduct && newQuantity && newStatus) {
      order.client = newClient;
      order.product = newProduct;
      order.quantity = Number(newQuantity);
      order.status = newStatus;
      renderOrders();
    }
  }
}

// Initial render
renderOrders();

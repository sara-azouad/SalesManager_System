// Sample initial invoices
let invoices = [
  {
    id: 1,
    client: "Alice Johnson",
    amount: 1299,
    date: "2024-01-15",
    status: "Pending",
  },
  {
    id: 2,
    client: "Bob Smith",
    amount: 1798,
    date: "2024-01-14",
    status: "Paid",
  },
  {
    id: 3,
    client: "Charlie Brown",
    amount: 597,
    date: "2024-01-13",
    status: "Paid",
  },
  {
    id: 4,
    client: "Diana Prince",
    amount: 499,
    date: "2024-01-12",
    status: "Overdue",
  },
  {
    id: 5,
    client: "Ethan Hunt",
    amount: 395,
    date: "2024-01-11",
    status: "Pending",
  },
  {
    id: 6,
    client: "Fiona Gallagher",
    amount: 800,
    date: "2024-01-10",
    status: "Paid",
  },
  {
    id: 7,
    client: "George Miller",
    amount: 180,
    date: "2024-01-09",
    status: "Cancelled",
  },
  {
    id: 8,
    client: "Helen Parker",
    amount: 250,
    date: "2024-01-08",
    status: "Paid",
  },
  {
    id: 9,
    client: "Ian Curtis",
    amount: 120,
    date: "2024-01-07",
    status: "Pending",
  },
  {
    id: 10,
    client: "Julia Roberts",
    amount: 1299,
    date: "2024-01-06",
    status: "Paid",
  },
];

const invoicesTable = document.getElementById("invoicesTable");
const addInvoiceBtn = document.getElementById("addInvoiceBtn");

function renderInvoices() {
  invoicesTable.innerHTML = "";
  invoices.forEach((invoice) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${invoice.id}</td>
      <td>${invoice.client}</td>
      <td>${invoice.amount}</td>
      <td>${invoice.date}</td>
      <td>${invoice.status}</td>
      <td>
        <button onclick="editInvoice(${invoice.id})">✏️ Edit</button>
        <button onclick="deleteInvoice(${invoice.id})">🗑️ Delete</button>
      </td>
    `;
    invoicesTable.appendChild(tr);
  });
}

// CREATE
addInvoiceBtn.addEventListener("click", () => {
  const client = document.getElementById("invoiceClient").value;
  const amount = Number(document.getElementById("invoiceAmount").value);
  const date = document.getElementById("invoiceDate").value;
  const status = document.getElementById("invoiceStatus").value;

  if (client && amount >= 0 && date) {
    const newInvoice = {
      id: invoices.length ? invoices[invoices.length - 1].id + 1 : 1,
      client,
      amount,
      date,
      status,
    };
    invoices.push(newInvoice);
    renderInvoices();

    // Clear inputs
    document.getElementById("invoiceClient").value = "";
    document.getElementById("invoiceAmount").value = "";
    document.getElementById("invoiceDate").value = "";
    document.getElementById("invoiceStatus").value = "Pending";
  }
});

// DELETE
function deleteInvoice(id) {
  invoices = invoices.filter((inv) => inv.id !== id);
  renderInvoices();
}

// UPDATE
function editInvoice(id) {
  const invoice = invoices.find((i) => i.id === id);
  if (invoice) {
    const newClient = prompt("Client Name:", invoice.client);
    const newAmount = prompt("Amount:", invoice.amount);
    const newDate = prompt("Date (YYYY-MM-DD):", invoice.date);
    const newStatus = prompt("Status (Pending/Paid/Overdue):", invoice.status);

    if (newClient && newAmount && newDate && newStatus) {
      invoice.client = newClient;
      invoice.amount = Number(newAmount);
      invoice.date = newDate;
      invoice.status = newStatus;
      renderInvoices();
    }
  }
}

// Initial render
renderInvoices();

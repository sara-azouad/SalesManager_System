// Sample initial clients
let clients = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@techcorp.com",
    company: "TechCorp Inc",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@innovate.com",
    company: "Innovate Solutions",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@digital.com",
    company: "Digital Dynamics",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana.prince@wonder.com",
    company: "Wonder Enterprises",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan.hunt@imf.gov",
    company: "IMF Agency",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    email: "fiona.gallagher@family.biz",
    company: "Gallagher Family Business",
  },
  {
    id: 7,
    name: "George Miller",
    email: "george.miller@farmfresh.com",
    company: "Farm Fresh Co.",
  },
  {
    id: 8,
    name: "Helen Parker",
    email: "helen.parker@officeplus.com",
    company: "Office Plus Ltd",
  },
  {
    id: 9,
    name: "Ian Curtis",
    email: "ian.curtis@musiclabel.com",
    company: "Music Label Records",
  },
  {
    id: 10,
    name: "Julia Roberts",
    email: "julia.roberts@movies.com",
    company: "Hollywood Studios",
  },
];

const clientsTable = document.getElementById("clientsTable");
const addClientBtn = document.getElementById("addClientBtn");

function renderClients() {
  clientsTable.innerHTML = "";
  clients.forEach((client) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${client.id}</td>
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.company}</td>
      <td>
        <button onclick="editClient(${client.id})">✏️ Edit</button>
        <button onclick="deleteClient(${client.id})">🗑️ Delete</button>
      </td>
    `;
    clientsTable.appendChild(tr);
  });
}

// CREATE
addClientBtn.addEventListener("click", () => {
  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const company = document.getElementById("clientCompany").value;

  if (name && email) {
    const newClient = {
      id: clients.length ? clients[clients.length - 1].id + 1 : 1,
      name,
      email,
      company,
    };
    clients.push(newClient);
    renderClients();

    // Clear inputs
    document.getElementById("clientName").value = "";
    document.getElementById("clientEmail").value = "";
    document.getElementById("clientCompany").value = "";
  }
});

// DELETE
function deleteClient(id) {
  clients = clients.filter((c) => c.id !== id);
  renderClients();
}

// UPDATE
function editClient(id) {
  const client = clients.find((c) => c.id === id);
  if (client) {
    const newName = prompt("Name:", client.name);
    const newEmail = prompt("Email:", client.email);
    const newCompany = prompt("Company:", client.company);

    if (newName && newEmail) {
      client.name = newName;
      client.email = newEmail;
      client.company = newCompany;
      renderClients();
    }
  }
}

// Initial render
renderClients();

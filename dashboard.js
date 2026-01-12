// ============ FETCH DATA WITH FALLBACK ============
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.warn(`Using fallback for ${endpoint}:`, error.message);

    if (endpoint.includes("/users")) {
      return [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          company: { name: "Acme Inc" },
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          company: { name: "Globex Corp" },
        },
      ];
    }
    if (endpoint.includes("/products")) {
      return [
        { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
        { id: 2, name: "Phone", price: 800, category: "Electronics" },
        { id: 3, name: "Desk Lamp", price: 40, category: "Furniture" },
      ];
    }
    if (endpoint.includes("/posts")) {
      return [
        { id: 1, title: "Fallback Post", body: "This is fallback content." },
      ];
    }
    if (endpoint.includes("/stats/products")) {
      return { Electronics: 2, Furniture: 1 };
    }

    return [];
  }
}

// ============ RENDER FUNCTIONS ============
function renderUsers(users) {
  const tbody = document.getElementById("usersTable");
  tbody.innerHTML = "";
  if (!users.length) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No users</td></tr>`;
    return;
  }
  users.forEach((u) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${u.id}</td><td>${u.name}</td><td>${u.email}</td><td>${
      u.company?.name || "N/A"
    }</td>`;
    tbody.appendChild(tr);
  });
}

function renderPosts(posts) {
  const container = document.getElementById("posts");
  container.innerHTML = "";
  posts.slice(0, 5).forEach((p) => {
    const div = document.createElement("div");
    div.innerHTML = `<h4>${p.title}</h4><p>${p.body}</p><hr>`;
    container.appendChild(div);
  });
}

function renderProducts(products) {
  const list = document.getElementById("products");
  list.innerHTML = "";
  products.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${p.name}</b> <span style="float:right;">$${p.price}</span>`;
    list.appendChild(li);
  });
}

// ============ RENDER STATS ============
async function renderStats() {
  try {
    const products = await fetchData("/api/products");

    // Count products per category
    const stats = {};
    products.forEach((p) => {
      stats[p.category] = (stats[p.category] || 0) + 1;
    });

    const ctx = document.getElementById("statsChart").getContext("2d");
    if (window.statsChartInstance) window.statsChartInstance.destroy();

    window.statsChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(stats),
        datasets: [
          {
            label: "# of Products",
            data: Object.values(stats),
            backgroundColor: [
              "#3498db",
              "#2ecc71",
              "#e74c3c",
              "#f1c40f",
              "#9b59b6",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: "Products per Category" },
        },
        scales: { y: { beginAtZero: true } },
      },
    });
  } catch (err) {
    console.error("Stats error:", err);
  }
}

// ============ LOAD ALL DATA ============
async function loadAllData() {
  const [users, posts, products] = await Promise.all([
    fetchData("/api/users"),
    fetchData("/api/posts"),
    fetchData("/api/products"),
  ]);

  renderUsers(users);
  renderPosts(posts);
  renderProducts(products);
  renderStats(); // <--- render chart here
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  loadAllData();

  const refreshBtn = document.createElement("button");
  refreshBtn.textContent = "🔄 Refresh Data";
  refreshBtn.style =
    "position:fixed; bottom:20px; right:20px; padding:10px 15px; background:#3498db;color:white;border:none;border-radius:5px;cursor:pointer;";
  refreshBtn.onclick = loadAllData;
  document.body.appendChild(refreshBtn);
});

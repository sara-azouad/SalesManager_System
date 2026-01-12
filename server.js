// server.js - Complete Version with CRUD & Stats
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(".")); // Serve all HTML/CSS/JS files

// ===================== USERS DATA =====================
let users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@mycompany.com",
    company: { name: "MyCompany Inc" },
  },
  {
    id: 2,
    name: "Manager",
    email: "manager@mycompany.com",
    company: { name: "MyCompany Inc" },
  },
  {
    id: 3,
    name: "Client A",
    email: "client@client.com",
    company: { name: "Client Corp" },
  },
  {
    id: 4,
    name: "Client B",
    email: "client2@client.com",
    company: { name: "Another Corp" },
  },
  {
    id: 5,
    name: "Supplier X",
    email: "supplier@test.com",
    company: { name: "Supplier Ltd" },
  },
  {
    id: 6,
    name: "Employee 1",
    email: "emp1@mycompany.com",
    company: { name: "MyCompany Inc" },
  },
  {
    id: 7,
    name: "Employee 2",
    email: "emp2@mycompany.com",
    company: { name: "MyCompany Inc" },
  },
];

// ===================== PRODUCTS DATA =====================
let products = [
  { id: 1, name: "Laptop Pro", price: 1299, category: "Electronics" },
  { id: 2, name: "Phone Max", price: 899, category: "Electronics" },
  { id: 3, name: "Headphones", price: 199, category: "Electronics" },
  { id: 4, name: "Monitor 4K", price: 499, category: "Electronics" },
  { id: 5, name: "Keyboard", price: 79, category: "Electronics" },
  { id: 6, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 7, name: "Smartphone", price: 800, category: "Electronics" },
  { id: 8, name: "Coffee Maker", price: 90, category: "Home Appliances" },
  { id: 9, name: "Gaming Chair", price: 250, category: "Furniture" },
  { id: 10, name: "Desk Lamp", price: 40, category: "Furniture" },
];

// ===================== POSTS DATA =====================
let posts = [
  {
    id: 1,
    title: "Dashboard Launched",
    body: "New admin dashboard is now live!",
  },
  {
    id: 2,
    title: "Maintenance Complete",
    body: "Weekly maintenance completed successfully",
  },
];

// ===================== API ENDPOINTS =====================

// --- USERS ---
app.get("/api/users", (req, res) => res.json(users));

// --- CRUD USERS ---
app.post("/api/users", (req, res) => {
  const { name, email, company } = req.body;
  if (!name || !email || !company)
    return res.status(400).json({ message: "Missing fields" });
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    company: { name: company },
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  const { name, email, company } = req.body;
  if (!name || !email || !company)
    return res.status(400).json({ message: "Missing fields" });
  user.name = name;
  user.email = email;
  user.company = { name: company };
  res.json(user);
});

app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

// --- PRODUCTS ---
app.get("/api/products", (req, res) => res.json(products));

// --- CRUD PRODUCTS ---
app.post("/api/products", (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category)
    return res.status(400).json({ message: "Missing fields" });
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price,
    category,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  const { name, price, category } = req.body;
  if (!name || !price || !category)
    return res.status(400).json({ message: "Missing fields" });
  product.name = name;
  product.price = price;
  product.category = category;
  res.json(product);
});

app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1)
    return res.status(404).json({ message: "Product not found" });
  products.splice(index, 1);
  res.json({ message: "Product deleted" });
});

// --- POSTS ---
app.get("/api/posts", (req, res) => res.json(posts));

// --- STATS ---
app.get("/api/stats/products", (req, res) => {
  const stats = {};
  products.forEach(
    (p) => (stats[p.category] = stats[p.category] ? stats[p.category] + 1 : 1)
  );
  res.json(stats);
});

// ===================== START SERVER =====================
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Login page: http://localhost:${port}/login.html`);
});

// users.js
const users = [
  { username: "admin", password: "1234" },
  { username: "superadmin", password: "5678" },
];
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "phpclass_yourname",
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

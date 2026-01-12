const apiUrl = "http://localhost:3000/api/users";

const form = document.getElementById("userForm");
const tbody = document.getElementById("usersTable");

const userId = document.getElementById("userId");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const companyInput = document.getElementById("company");

let editMode = false;

// READ
function loadUsers() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((users) => {
      tbody.innerHTML = "";
      users.forEach((u) => {
        tbody.innerHTML += `
        <tr>
          <td>${u.id}</td>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.company?.name || u.company}</td>
          <td class="actions">
            <button class="edit" onclick="editUser(${u.id}, '${u.name}', '${
          u.email
        }', '${u.company?.name || u.company}')">Edit</button>
            <button class="delete" onclick="deleteUser(${u.id})">Delete</button>
          </td>
        </tr>`;
      });
    });
}

// CREATE & UPDATE
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    company: companyInput.value,
  };

  if (editMode) {
    fetch(`${apiUrl}/${userId.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      editMode = false;
      form.reset();
      loadUsers();
    });
  } else {
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      form.reset();
      loadUsers();
    });
  }
});

// EDIT
function editUser(id, name, email, company) {
  userId.value = id;
  nameInput.value = name;
  emailInput.value = email;
  companyInput.value = company;
  editMode = true;
}

// DELETE
function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${apiUrl}/${id}`, { method: "DELETE" }).then(() => loadUsers());
  }
}

loadUsers();

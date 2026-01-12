// auth.js
// Redirect to login.html if not logged in
if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

// Optional: show username if you want
const usernameDisplay = document.getElementById("usernameDisplay");
if (usernameDisplay) {
  usernameDisplay.textContent = localStorage.getItem("username") || "Admin";
}

// Logout function
const logoutBtn = document.querySelector(".logout");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    window.location.href = "login.html";
  });
}

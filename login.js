// login.js
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");
const errorMessage = document.getElementById("error-message");

// Show/hide password
togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.innerHTML = `
      <path d="M17.94 17.94a10 10 0 0 1-11.88 0"/>
      <path d="M1 1l22 22"/>
    `;
  } else {
    passwordInput.type = "password";
    eyeIcon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    `;
  }
});

// Login logic
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = passwordInput.value;

  const admin = users.find(
    (u) => u.username === username && u.password === password
  );

  if (admin) {
    // ✅ Save login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";

    setTimeout(() => {
      window.location.replace("index.html");
    }, 500);
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Invalid username or password";
  }
});

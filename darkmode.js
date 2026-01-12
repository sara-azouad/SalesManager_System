const darkModeBtn = document.getElementById("darkModeBtn");

function updateDarkIcon() {
  if (!darkModeBtn) return;
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
}

// Apply dark mode on page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}
updateDarkIcon();

// Toggle dark mode
if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
    updateDarkIcon();
  });
}

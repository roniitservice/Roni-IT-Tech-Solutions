function showLogin() {
  document.getElementById("login-modal").style.display = "flex";
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (user === "admin" && pass === "password123") {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    document.getElementById("login-modal").style.display = "none";
  } else {
    error.textContent = "Invalid credentials!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  alert("You have been logged out.");
}

window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    alert("Welcome back, admin!");
  }
};

// Optional: Close modal on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("login-modal");
  if (e.target === modal) modal.style.display = "none";
});

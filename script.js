function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("login-error");

  if (username === "admin" && password === "password123") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    error.textContent = "Incorrect username or password.";
  }
}

function logout() {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login-error").textContent = "";
}

document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your consultation request has been submitted.");
  this.reset();
});

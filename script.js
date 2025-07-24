
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "password123") {
    document.getElementById("loginMessage").innerText = "Login successful!";
    document.getElementById("logoutBtn").style.display = "inline";
    document.getElementById("loginBtn").style.display = "none";
    document.querySelector(".login-section").style.display = "none";
  } else {
    document.getElementById("loginMessage").innerText = "Invalid credentials.";
  }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  document.getElementById("loginMessage").innerText = "";
  document.getElementById("loginBtn").style.display = "inline";
  document.getElementById("logoutBtn").style.display = "none";
  document.querySelector(".login-section").style.display = "block";
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking submitted. We'll contact you soon!");
  this.reset();
});

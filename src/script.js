// SIGNUP FUNCTION
function signupUser(event) {
  event.preventDefault();

  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  // Create user object
  let user = {
    name: name,
    email: email,
    password: password
  };

  // Store user in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup Successful! Please login.");
  window.location.href = "login.html";
}



// LOGIN FUNCTION
function loginUser(event) {
  event.preventDefault();

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  // Get user data from localStorage
  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found! Please signup first.");
    return;
  }

  // Verify email & password
  if (email === storedUser.email && password === storedUser.password) {
    alert("Login Successful!");

    // Store session
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password!");
  }
}



// CHECK LOGIN STATUS ON DASHBOARD
function checkLogin() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    // Redirect to login if not logged in
    window.location.href = "login.html";
  }
}



// LOGOUT FUNCTION
function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out!");
  window.location.href = "login.html";
}

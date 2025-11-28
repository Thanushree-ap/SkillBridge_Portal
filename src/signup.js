document.getElementById("signupForm").addEventListener("submit", signupUser);

function signupUser(e) {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("sb_user", JSON.stringify(user));

  alert("Signup successful — please login.");
  location.href = "login.html";
}

// If already logged in → go to input page
if (localStorage.getItem("sb_isLoggedIn") === "true") {
  location.href = "input.html";
}
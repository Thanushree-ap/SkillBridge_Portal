document.getElementById("loginForm").addEventListener("submit", loginUser);

function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("sb_user"));

  if (!user) {
    document.getElementById("newUserMsg").style.display = "block";
    return;
  }

  if (email !== user.email) {
    document.getElementById("newUserMsg").style.display = "block";
    return;
  }

  if (password !== user.password) {
    alert("Incorrect password.");
    return;
  }

  localStorage.setItem("sb_isLoggedIn", "true");
  localStorage.setItem("username", user.name);  
  localStorage.setItem("email", user.email);     

  location.href = "main-dashboard.html";
}

if (localStorage.getItem("sb_isLoggedIn") === "true") {
  location.href = "main-dashboard.html";
}
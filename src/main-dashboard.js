// Toggle dropdown
function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hidden");
}

// Hide dropdown/profile when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.querySelector(".user-menu");
    const dropdown = document.getElementById("dropdown");
    const card = document.getElementById("profileCard");

    // Hide dropdown if clicked outside
    if (!menu.contains(event.target)) {
        dropdown.classList.add("hidden");
    }

    // Hide profile card if clicked outside
    if (!card.contains(event.target) && !menu.contains(event.target)) {
        card.classList.add("hidden");
    }
});

// ⭐ OPEN PROFILE CARD
function openProfile() {
    const card = document.getElementById("profileCard");

    // Get stored user
    const name = localStorage.getItem("username") || "Unknown User";
    const email = localStorage.getItem("email") || "No Email Found";

    // Fill card data
    document.getElementById("pName").innerText = "Name: " + name;
    document.getElementById("pEmail").innerText = "Email: " + email;

    // SHOW the card
    card.classList.remove("hidden");

    // Close dropdown
    document.getElementById("dropdown").classList.add("hidden");
}

// Close card manually
function closeProfile() {
    document.getElementById("profileCard").classList.add("hidden");
}

// Redirect to input.html when clicking Recommendations
function loadPage(page) {
    if (page === "recommend") {
        location.href = "input.html";
    }
}

// Logout
function logout() {
    localStorage.removeItem("sb_isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    location.href = "homepage.html";
}
document.getElementById("forgotForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("forgotEmail").value.trim();
    const user = JSON.parse(localStorage.getItem("sb_user"));

    if (!user || user.email !== email) {
        alert("Email not found!");
        return;
    }

    // Save email temporarily
    localStorage.setItem("resetEmail", email);

    // Go to reset page
    location.href = "reset.html";
});
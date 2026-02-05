document.getElementById("resetForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const newPass = document.getElementById("newPass").value.trim();
    const confirmPass = document.getElementById("confirmPass").value.trim();

    if (newPass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    const email = localStorage.getItem("resetEmail");
    const user = JSON.parse(localStorage.getItem("sb_user"));

    if (!email || !user || user.email !== email) {
        alert("Something went wrong!");
        return;
    }

    user.password = newPass;
    localStorage.setItem("sb_user", JSON.stringify(user));
    localStorage.removeItem("resetEmail");

    alert("Password reset successful!");
    location.href = "login.html";
});
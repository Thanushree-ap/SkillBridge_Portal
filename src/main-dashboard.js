function toggleMenu() {
    document.getElementById("dropdown").classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
    const menu = document.querySelector(".user-menu");
    const dropdown = document.getElementById("dropdown");
    const card = document.getElementById("profileCard");

    if (!menu.contains(event.target)) dropdown.classList.add("hidden");
    if (!card.contains(event.target) && !menu.contains(event.target)) card.classList.add("hidden");
});

function openProfile() {
    const card = document.getElementById("profileCard");
    const name = localStorage.getItem("username") || "Unknown User";
    const email = localStorage.getItem("email") || "No Email Found";

    document.getElementById("pName").innerText = "Name: " + name;
    document.getElementById("pEmail").innerText = "Email: " + email;

    card.classList.remove("hidden");
    document.getElementById("dropdown").classList.add("hidden");
}

function closeProfile() {
    document.getElementById("profileCard").classList.add("hidden");
}

function loadPage(page) {
    if (page === "quiz-dashboard") {
        location.href = "quiz-dashboard.html";
        return;
    }
    if (page === "recommend") {
        location.href = "input.html";
        return;
    }
}

function logout() {
    localStorage.removeItem("sb_isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    location.href = "homepage.html";
}

function loadQuizHistory() {
    const box = document.getElementById("quizHistoryBox");
    const history = JSON.parse(localStorage.getItem("sb_quiz_history") || "{}");

    if (Object.keys(history).length === 0) {
        box.innerHTML = "<p>No quiz attempts yet.</p>";
        return;
    }

    let html = "";

    Object.keys(history).forEach(sub => {
        if (sub === "html") return;  // skip HTML history card

        const h = history[sub];
        html += `
            <div class="history-card">
                <h3>${sub.toUpperCase()}</h3>
                <p>Score: ${h.score} / ${h.total}</p>
                <p>Date: ${h.date}</p>
            </div>
        `;
    });

    box.innerHTML = html || "<p>No quiz attempts yet.</p>";
}

loadQuizHistory();
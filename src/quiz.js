const SOURCE_MAP = {
    html: "../data/html.json",
    css: "../data/css.json",
    javascript: "../data/javascript.json",
    python: "../data/python.json",
    c: "../data/c.json",
    dsa: "../data/dsa.json",
    ada: "../data/ada.json",
    os: "../data/os.json"
};

let answersGiven = [];
let questions = [];
let currentIndex = 0;
let currentSubject = "";

function escapeHTML(str) {
    if (typeof str !== "string") return str;
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
}

function loadQuiz(subject) {
    currentSubject = subject;
    currentIndex = 0;
    answersGiven = [];

    const area = document.getElementById("quizArea");
    document.getElementById("quizMenu").classList.add("hidden");
    area.classList.remove("hidden");
    area.innerHTML = "Loading questions...";

    fetch(SOURCE_MAP[subject])
        .then(r => r.json())
        .then(data => {
            questions = shuffle(data).slice(0, 10);
            showQuestion();
        })
        .catch(() => area.innerHTML = "Failed to load questions.");
}

function showQuestion() {
    if (currentIndex >= questions.length) {
        finishQuiz();
        return;
    }

    const q = questions[currentIndex];

    document.getElementById("quizArea").innerHTML = `
        <h2>Question ${currentIndex + 1} / ${questions.length}</h2>
        <p>${escapeHTML(q.question)}</p>

        ${q.options.map(opt => 
            `<button class="option-btn" data-opt="${opt}" onclick="nextQuestion(this)">
                ${escapeHTML(opt)}
            </button>`
        ).join("")}
    `;
}

function nextQuestion(btn) {
    const selected = btn.dataset.opt;
    const q = questions[currentIndex];

    answersGiven.push({
        question: q.question,
        selected: selected,
        correct: q.answer,
        explanation: q.explanation
    });

    currentIndex++;
    showQuestion();
}

function finishQuiz() {
    let score = 0;
    answersGiven.forEach(a => {
        if (a.selected === a.correct) score++;
    });

    document.getElementById("quizArea").classList.add("hidden");
    const result = document.getElementById("resultScreen");
    result.classList.remove("hidden");

    let html = `
        <div class="score-box">You scored ${score} / ${answersGiven.length}</div>
    `;

    answersGiven.forEach((a, i) => {
        html += `
            <div class="result-card">
                <h3>Question ${i + 1}</h3>
                <p>${escapeHTML(a.question)}</p>

                <p>Your Answer: 
                    <span class="${a.selected === a.correct ? "correct" : "wrong"}">
                        ${escapeHTML(a.selected)}
                    </span>
                </p>

                <p>Correct Answer: <span class="correct">${escapeHTML(a.correct)}</span></p>

                <p><b>Explanation:</b> ${escapeHTML(a.explanation)}</p>
            </div>
        `;
    });

    html += `
        <button class="result-btn" onclick="restartQuiz()">Try New Questions</button>
        <button class="result-btn" onclick="backToMenu()">Back</button>
    `;

    result.innerHTML = html;

    let history = JSON.parse(localStorage.getItem("sb_quiz_history") || "{}");

    history[currentSubject] = {
        score: score,
        total: answersGiven.length,
        date: new Date().toLocaleString()
    };

    localStorage.setItem("sb_quiz_history", JSON.stringify(history));
}

function restartQuiz() {
    answersGiven = [];
    currentIndex = 0;
    questions = shuffle(questions).slice(0, 10);

    document.getElementById("resultScreen").classList.add("hidden");
    document.getElementById("quizArea").classList.remove("hidden");

    showQuestion();
}

function backToMenu() {
    answersGiven = [];
    document.getElementById("quizMenu").classList.remove("hidden");
    document.getElementById("resultScreen").classList.add("hidden");
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
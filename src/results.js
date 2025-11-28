function loadResultsPage() {
  const profile = JSON.parse(localStorage.getItem("sb_profile"));
  const results = JSON.parse(localStorage.getItem("sb_results"));

  if (!profile || !results) {
    document.getElementById("resultsContainer").innerHTML =
      "<p>No data found. Please fill the form again.</p>";
    return;
  }

  // Display small summary
  document.getElementById("profileSummary").innerText =
    `${profile.education} • ${profile.interest} • ${profile.traits.join(", ")}`;

  // Load recommendations
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  results.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2 class="text-lg font-semibold">${item.title}</h2>
      <p class="text-sm mt-1">${item.description}</p>
      <div class="meta mt-2 text-sm">
        <a href="${item.link}" target="_blank">Learn more</a>
      </div>
    `;

    container.appendChild(card);
  });
}

function goBackToForm() {
  location.href = "input.html";
}

function logoutUser() {
  localStorage.removeItem("sb_isLoggedIn");
  location.href = "homepage.html";
}

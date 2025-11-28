const TRAITS = [
  'Analytical','Creative','Leadership','Detail-Oriented','Empathetic',
  'Curious','Problem-Solver','Team Player','Innovative','Adaptable',
  'Strategic Thinker','Organized','Resilient'
];

const FIELDS = [
  'Computer Science','Data Science','Electronics Engineering','Mechanical Engineering',
  'Business','Design','Healthcare','AI & ML','Cybersecurity',
  'Civil Engineering','Finance','Marketing','Law'
];

/* ---------- Career-Level Required Skills ---------- */
const CAREER_SKILLS = {
  "Software Engineer": ["Programming", "Debugging", "Algorithms"],
  "Web Developer": ["HTML", "CSS", "JavaScript", "Responsive Design"],
  "Data Scientist": ["Machine Learning", "Python", "Statistics", "Modeling"],
  "Data Analyst": ["SQL", "Excel", "Visualization"],
  "AI Researcher": ["Neural Networks", "Deep Learning", "Python"],
  "ML Engineer": ["Deployment", "Optimization", "ML Pipelines"],
  "Ethical Hacker": ["Penetration Testing", "Networking", "Security Audits"],
  "Security Analyst": ["Threat Detection", "Monitoring", "Risk Assessment"],
  "Embedded Systems Engineer": ["Embedded C", "Microcontrollers", "PCB Designing"],
  "VLSI Engineer": ["HDL", "Chip Design", "Verification"],
  "Automotive Engineer": ["CAD", "Manufacturing", "Mechanics"],
  "Business Analyst": ["BI Tools", "Strategy", "Communication"],
  "UI/UX Designer": ["Figma", "User Research", "Prototyping"],
  "Healthcare Data Analyst": ["Health Data", "Visualization", "Reporting"],
  "Structural Engineer": ["Structural Analysis", "AutoCAD"],
  "Financial Analyst": ["Excel", "Finance Modelling"],
  "Digital Marketing Specialist": ["SEO", "Content Creation"],
  "Corporate Lawyer": ["Contracts", "Legal Research"]
};

/* ---------- Career Library ---------- */
const CAREER_LIBRARY = {
  "Computer Science": [
    {
      title: "Software Engineer",
      coreSkill: "Data Structures & Algorithms",
      youtube: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
      book: "https://www.programiz.com/dsa",
      freeBook: "https://opendsa-server.cs.vt.edu/OpenDSA/Books/Everything/html/"
    },
    {
      title: "Web Developer",
      coreSkill: "Frontend & Backend Development",
      youtube: "https://www.youtube.com/watch?v=gQojMIhELvM",
      book: "https://developer.mozilla.org/en-US/docs/Learn",
      freeBook: "https://eloquentjavascript.net/"
    }
  ],

  "Data Science": [
    {
      title: "Data Scientist",
      coreSkill: "Machine Learning & Statistics",
      youtube: "https://www.youtube.com/watch?v=LHBE6Q9XlzI",
      book: "https://www.statlearning.com/",
      freeBook: "https://www.inferentialthinking.com/chapters/intro.html"
    },
    {
      title: "Data Analyst",
      coreSkill: "SQL & Visualization",
      youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
      book: "https://mode.com/sql-tutorial/",
      freeBook: "https://www.data-to-viz.com/"
    }
  ],

  "AI & ML": [
    {
      title: "AI Researcher",
      coreSkill: "Deep Learning & Neural Networks",
      youtube: "https://www.youtube.com/watch?v=aircAruvnKk",
      book: "https://www.deeplearningbook.org/",
      freeBook: "https://d2l.ai/"
    },
    {
      title: "ML Engineer",
      coreSkill: "Model Deployment",
      youtube: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
      book: "https://developers.google.com/machine-learning/crash-course",
      freeBook: "https://en.d2l.ai/d2l-en.pdf"
    }
  ],

  "Cybersecurity": [
    {
      title: "Ethical Hacker",
      coreSkill: "Penetration Testing",
      youtube: "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnklGh3FNRLECx_2D_vK3mu",
      book: "https://uou.ac.in/sites/default/files/slm/Introduction-cyber-security.pdf",
      freeBook: "https://www.cybok.org/media/downloads/CyBOK_v1.1.0.pdf"
    }
  ],

  "Electronics Engineering": [
    {
      title: "Embedded Systems Engineer",
      coreSkill: "Microcontrollers & IoT",
      youtube: "https://www.youtube.com/watch?v=o_VMVDimuks",
      book: "https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf",
      freeBook: "https://content.e-bookshelf.de/media/reading/L-11221378-93f9ac5ddf.pdf"
    }
  ],

  "Mechanical Engineering": [
    {
      title: "Automotive Engineer",
      coreSkill: "CAD & Manufacturing",
      youtube: "https://www.youtube.com/watch?v=ZGktgJMCoKM",
      book: "https://ftp.idu.ac.id/wp-content/uploads/ebook/tdg/TEKNOLOGI%20REKAYASA%20MATERIAL%20PERTAHANAN/Materials%20for%20Automobile%20Bodies%2C%20Second%20Edition%20by%20Geoffrey%20Davies%20Fellow%20Institute%20of%20Materials%20MSc%20University%20of%20Oxford%20%28z-lib.org%29.pdf",
      freeBook: "https://tjtlibrary.com/Automobile/Automotive%20Engineering%20Fundamentals.pdf"
    }
  ],

  "Business": [
    {
      title: "Business Analyst",
      coreSkill: "Business Intelligence",
      youtube: "https://www.youtube.com/watch?v=OBnfumvUh80",
      book: "https://www.investopedia.com/business-analysis-4689734",
      freeBook: "https://open.lib.umn.edu/principlesmanagement/"
    }
  ],

  "Design": [
    {
      title: "UI/UX Designer",
      coreSkill: "Figma & UX Research",
      youtube: "https://www.youtube.com/watch?v=1SNZRCVNizg",
      book: "https://bpb-eu-w2.wpmucdn.com/sites.aub.edu.lb/dist/c/13/files/2019/06/the-basics-of-ux-design.pdf?utm_source=chatgpt.com",
      freeBook: "https://smart-interface-design-patterns.com/articles/interface-design-books"
    }
  ],

  "Healthcare": [
    {
      title: "Healthcare Data Analyst",
      coreSkill: "Healthcare Informatics",
      youtube: "https://www.youtube.com/watch?v=fpekSZdJHKQ",
      book: "https://shadygrove.pressbooks.pub/informatics/open/download?type=pdf",
      freeBook: "https://library.oapen.org/bitstream/id/5f31db6d-5945-49ad-ac3a-78cb2037af5b/978-3-031-12310-8.pdf"
    }
  ],

  "Civil Engineering": [
    {
      title: "Structural Engineer",
      coreSkill: "Structural Design",
      youtube: "https://www.youtube.com/watch?v=D7U6i01ZlfI",
      book: "https://www.structuralguide.com/",
      freeBook: "https://open.umn.edu/opentextbooks/textbooks/introduction-to-structural-mechanics"
    }
  ],

  "Finance": [
    {
      title: "Financial Analyst",
      coreSkill: "Financial Modelling",
      youtube: "https://www.youtube.com/watch?v=eWPdr2Wqh2o&utm_source=chatgpt.com",
      book: "https://open.umn.edu/opentextbooks/textbooks/introduction-to-financial-analysis",
      freeBook: "https://corporatefinanceinstitute.com/assets/Financial-Modeling-Guidelines.pdf"
    }
  ],

  "Marketing": [
    {
      title: "Digital Marketing Specialist",
      coreSkill: "SEO & Online Branding",
      youtube: "https://www.youtube.com/watch?v=OYRkIGaP80M&t=2s",
      book: "https://digitalmarketer.com/digital-marketing/assets/pdf/ultimate-guide-to-digital-marketing.pdf?srsltid=AfmBOooZv4gXOVvAGrUA5ZFFBT6BToGRKanCSiok_scIx1VX-jokTF1cRAN",
      freeBook: "https://www.ch4b.co.uk/wp-content/uploads/2023/10/The-Fundamentals-of-Digital-Marketing-CH4B-ebook.pdf"
    }
  ],

  "Law": [
    {
      title: "Corporate Lawyer",
      coreSkill: "Contracts & Compliance",
      youtube: "https://www.youtube.com/playlist?list=PLlPA7pUe9GIj_TCmQYNkglRbVD9ftU7eF",
      book: "https://www.caaa.in/Image/30%20.pdf",
      freeBook: "https://www.icsi.edu/Webmodules/Publications/FULL%20BOOK-PP-DD%26CCM-PDF%20FILE.pdf"
    }
  ]
};

/* ---------- Render Chips ---------- */
function renderChips(container, items, name, type="checkbox"){
  if(!container) return;
  container.innerHTML = items.map(item => `
    <label class="chip inline-flex items-center gap-2 p-2 rounded-lg border bg-white cursor-pointer" style="margin:4px;">
      <input type="${type}" name="${name}" value="${item}" />
      <span>${item}</span>
    </label>
  `).join('');
}

const traitsContainer = document.getElementById('traits');
const interestsContainer = document.getElementById('interests');

function checkLoginAndInit(){
  if(localStorage.getItem('sb_isLoggedIn') !== 'true'){
    location.href='login.html';
    return;
  }
  renderChips(traitsContainer, TRAITS, 'trait', 'checkbox');
  renderChips(interestsContainer, FIELDS, 'interest', 'checkbox'); // multiple selectable
}

/* ---------- Combine recommendations for multiple interests ---------- */
function generateCareerDetailsForInterests(interests){
  const results = [];
  const seen = new Set();

  for(const field of interests){
    const careers = CAREER_LIBRARY[field] || [];
    careers.forEach(c => {
      const key = `${field}::${c.title}`;
      if(seen.has(key)) return;
      seen.add(key);
      results.push({
        ...c,
        field,
        salary: `₹${(4 + Math.random()*8).toFixed(1)}–${(12 + Math.random()*15).toFixed(1)} LPA`,
      });
    });
  }

  return results;
}

/* ---------- Submit ---------- */
function submitForm(e){
  e.preventDefault();

  const education = document.getElementById('education').value;
  const traits = [...document.querySelectorAll('input[name="trait"]:checked')].map(i=>i.value);
  const interests = [...document.querySelectorAll('input[name="interest"]:checked')].map(i=>i.value);
  const hobbies = document.getElementById('hobbies').value.trim();
  const cgpa = document.getElementById('cgpa').value;
  const percentage = document.getElementById('percentage').value;

  if(interests.length === 0){
    alert("Please select at least ONE field interest.");
    return;
  }

  sessionStorage.setItem("sb_input", JSON.stringify({
    education, traits, interests, hobbies, cgpa, percentage
  }));

  location.href="results.html";
}

/* ---------- Load results ---------- */
function loadResultsPage(){
  if(localStorage.getItem('sb_isLoggedIn') !== 'true'){
    location.href='login.html'; return;
  }

  const input = JSON.parse(sessionStorage.getItem("sb_input"));
  const results = generateCareerDetailsForInterests(input.interests);

  document.getElementById("profileSummary").innerText =
    `${input.education} • Interests: ${input.interests.join(", ")} • Traits: ${input.traits.join(", ")}`;

  document.getElementById("resultsContainer").innerHTML =
    results.map(renderResultCard).join("");
}

function resetForm() {
  const edu = document.getElementById("education");
  if (edu) edu.selectedIndex = 0;

  document.getElementById("cgpa").value = "";
  document.getElementById("percentage").value = "";

  document.getElementById("hobbies").value = "";

  const traitChecks = document.querySelectorAll("#traits input[type='checkbox']");
  traitChecks.forEach(cb => cb.checked = false);

  const interestChecks = document.querySelectorAll("#interests input[type='checkbox']");
  interestChecks.forEach(cb => cb.checked = false);

  console.log("Form reset successful!");
}


/* ---------- Render Card ---------- */
function renderResultCard(c){
  const requiredSkills = CAREER_SKILLS[c.title] || [];

  return `
  <div class="card" style="background:#fff;padding:16px;margin-bottom:16px;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,0.08);">
    
    <h2 style="font-size:20px;margin:0 0 6px 0;">${c.title}</h2>
    <p style="margin:0;color:#666">${c.field}</p>

    <p style="margin-top:8px;"><strong>Core Skill:</strong> ${c.coreSkill}</p>
    <p><strong>Estimated Salary:</strong> ${c.salary}</p>

    <h3 style="margin-top:10px;font-weight:600;">Required Skills</h3>
    <p style="color:#333">${requiredSkills.length ? requiredSkills.join(", ") : "Not Available"}</p>

    <div style="margin-top:14px;">
      <p>🎥 <a href="${c.youtube}" target="_blank" class="text-blue-600 underline">YouTube Video</a></p>
      <p>📘 <a href="${c.book}" target="_blank" class="text-blue-600 underline">Recommended Textbook</a></p>
      <p>📚 <a href="${c.freeBook}" target="_blank" class="text-blue-600 underline">Free Textbook</a></p>
    </div>
  </div>
  `;
}

/* ---------- Navigation ---------- */
function logoutUser(){
  localStorage.removeItem("sb_isLoggedIn");
  location.href="homepage.html";
}

function goBackToForm(){
  location.href="input.html";
}

/* Expose */
window.sb = { checkLoginAndInit, submitForm, loadResultsPage, logoutUser, goBackToForm };
const state = {
  screen: "intro",
  prevScreen: "intro",
  qIndex: 0,
  scores: {},
  answers: []
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(name) {
  state.prevScreen = state.screen;
  state.screen = name;
  $$(".screen").forEach((el) => {
    el.classList.toggle("screen--active", el.dataset.screen === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetState() {
  state.qIndex = 0;
  state.scores = {};
  state.answers = [];
  Object.keys(ARCHETYPES).forEach((k) => (state.scores[k] = 0));
}

function startQuiz() {
  resetState();
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[state.qIndex];
  $("#qCurrent").textContent = state.qIndex + 1;
  $("#qTotal").textContent = QUESTIONS.length;
  $("#progressBar").style.width =
    (state.qIndex / QUESTIONS.length) * 100 + "%";
  $("#questionText").textContent = q.text;

  const qImgWrap = document.querySelector(".question-image");
  const qImg = $("#questionImage");
  if (q.image) {
    qImg.src = q.image;
    qImg.alt = q.text;
    qImgWrap.style.display = "block";
  } else {
    qImgWrap.style.display = "none";
  }

  const box = $("#answers");
  box.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.type = "button";
    btn.textContent = a.text;
    btn.addEventListener("click", () => pickAnswer(i));
    box.appendChild(btn);
  });

  $("#backBtn").hidden = state.qIndex === 0;
}

function pickAnswer(i) {
  const q = QUESTIONS[state.qIndex];
  const answer = q.answers[i];
  state.answers[state.qIndex] = i;

  for (const [key, val] of Object.entries(answer.scores)) {
    state.scores[key] = (state.scores[key] || 0) + val;
  }

  state.qIndex++;

  if (state.qIndex >= QUESTIONS.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function goBack() {
  if (state.qIndex === 0) return;
  state.qIndex--;
  const prev = state.answers[state.qIndex];
  if (prev != null) {
    const q = QUESTIONS[state.qIndex];
    const ans = q.answers[prev];
    for (const [key, val] of Object.entries(ans.scores)) {
      state.scores[key] = (state.scores[key] || 0) - val;
    }
    state.answers[state.qIndex] = null;
  }
  renderQuestion();
}

function finishQuiz() {
  const winnerKey = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  const winner = ARCHETYPES[winnerKey];
  renderResult(winner);
  showScreen("result");
}

function renderResult(a) {
  $("#resultTitle").textContent = a.title;
  $("#resultTagline").textContent = a.tagline;
  $("#resultDescription").textContent = a.description;
  $("#resultBike").textContent = a.bike;

  const rImgWrap = document.querySelector(".result__image");
  const rImg = $("#resultImage");
  if (a.image) {
    rImg.src = a.image;
    rImg.alt = a.title;
    rImgWrap.style.display = "block";
  } else {
    rImgWrap.style.display = "none";
  }

  const ul = $("#resultStrengths");
  ul.innerHTML = "";
  a.strengths.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    ul.appendChild(li);
  });
}

function shareResult() {
  const title = $("#resultTitle").textContent;
  const text = `Я — ${title}. А ты какой мотоциклист?`;
  const url = location.href;

  if (navigator.share) {
    navigator.share({ title: "Какой ты мотоциклист?", text, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${text} ${url}`).then(() => {
      alert("Скопировано в буфер. Вставь в TikTok или сторис!");
    });
  }
}

// оплата
function checkPayReady() {
  const ok = $("#agreeTerms")?.checked;
  const btn = $("#payStartBtn");
  if (btn) btn.disabled = !ok;
}

// EVENTS
document.addEventListener("click", (e) => {
  const action = e.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "start") { e.preventDefault(); showScreen("pay"); }
  if (action === "backToIntro") { e.preventDefault(); showScreen("intro"); }
  if (action === "back") goBack();
  if (action === "restart") { e.preventDefault(); showScreen("pay"); }
  if (action === "share") shareResult();
  if (action === "openTerms") { e.preventDefault(); showScreen("terms"); }
  if (action === "closeTerms") { e.preventDefault(); showScreen(state.prevScreen || "intro"); }
  if (action === "openProfile") { e.preventDefault(); showScreen("profile"); }
  if (action === "closeProfile") { e.preventDefault(); showScreen(state.prevScreen || "intro"); }
});

$("#agreeTerms")?.addEventListener("change", checkPayReady);

$("#payStartBtn")?.addEventListener("click", () => {
  // тут потом будет реальная оплата.
  // сейчас — просто запускаем тест.
  startQuiz();
});

$("#cancelSubBtn")?.addEventListener("click", () => {
  alert("У вас нет активной подписки.");
});

$("#year").textContent = new Date().getFullYear();

resetState();

const HIRAGANA = [
  {
    row: "vowels",
    chars: [
      ["a", "あ"],
      ["i", "い"],
      ["u", "う"],
      ["e", "え"],
      ["o", "お"],
    ],
  },
  {
    row: "k",
    chars: [
      ["ka", "か"],
      ["ki", "き"],
      ["ku", "く"],
      ["ke", "け"],
      ["ko", "こ"],
    ],
  },
  {
    row: "g",
    tags: ["dakuten"],
    chars: [
      ["ga", "が"],
      ["gi", "ぎ"],
      ["gu", "ぐ"],
      ["ge", "げ"],
      ["go", "ご"],
    ],
  },
  {
    row: "s",
    chars: [
      ["sa", "さ"],
      ["shi", "し"],
      ["su", "す"],
      ["se", "せ"],
      ["so", "そ"],
    ],
  },
  {
    row: "z",
    tags: ["dakuten"],
    chars: [
      ["za", "ざ"],
      ["ji", "じ"],
      ["zu", "ず"],
      ["ze", "ぜ"],
      ["zo", "ぞ"],
    ],
  },
  {
    row: "t",
    chars: [
      ["ta", "た"],
      ["chi", "ち"],
      ["tsu", "つ"],
      ["te", "て"],
      ["to", "と"],
    ],
  },
  {
    row: "d",
    tags: ["dakuten"],
    chars: [
      ["da", "だ"],
      ["di", "ぢ"],
      ["du", "づ"],
      ["de", "で"],
      ["do", "ど"],
    ],
  },
  {
    row: "n",
    chars: [
      ["na", "な"],
      ["ni", "に"],
      ["nu", "ぬ"],
      ["ne", "ね"],
      ["no", "の"],
    ],
  },
  {
    row: "h",
    chars: [
      ["ha", "は"],
      ["hi", "ひ"],
      ["fu", "ふ"],
      ["he", "へ"],
      ["ho", "ほ"],
    ],
  },
  {
    row: "b",
    tags: ["dakuten"],
    chars: [
      ["ba", "ば"],
      ["bi", "び"],
      ["bu", "ぶ"],
      ["be", "べ"],
      ["bo", "ぼ"],
    ],
  },
  {
    row: "p",
    tags: ["handakuten"],
    chars: [
      ["pa", "ぱ"],
      ["pi", "ぴ"],
      ["pu", "ぷ"],
      ["pe", "ぺ"],
      ["po", "ぽ"],
    ],
  },
  {
    row: "m",
    chars: [
      ["ma", "ま"],
      ["mi", "み"],
      ["mu", "む"],
      ["me", "め"],
      ["mo", "も"],
    ],
  },
  {
    row: "y",
    chars: [
      ["ya", "や"],
      ["yu", "ゆ"],
      ["yo", "よ"],
    ],
  },
  {
    row: "r",
    chars: [
      ["ra", "ら"],
      ["ri", "り"],
      ["ru", "る"],
      ["re", "れ"],
      ["ro", "ろ"],
    ],
  },
  {
    row: "w",
    chars: [
      ["wa", "わ"],
      ["wo", "を"],
    ],
  },
  { row: "n (solo)", chars: [["n", "ん"]] },
  {
    row: "combo k",
    tags: ["combo"],
    chars: [
      ["kya", "きゃ"],
      ["kyu", "きゅ"],
      ["kyo", "きょ"],
    ],
  },
  {
    row: "combo sh",
    tags: ["combo"],
    chars: [
      ["sha", "しゃ"],
      ["shu", "しゅ"],
      ["sho", "しょ"],
    ],
  },
  {
    row: "combo ch",
    tags: ["combo"],
    chars: [
      ["cha", "ちゃ"],
      ["chu", "ちゅ"],
      ["cho", "ちょ"],
    ],
  },
  {
    row: "combo ny",
    tags: ["combo"],
    chars: [
      ["nya", "にゃ"],
      ["nyu", "にゅ"],
      ["nyo", "にょ"],
    ],
  },
  {
    row: "combo hy",
    tags: ["combo"],
    chars: [
      ["hya", "ひゃ"],
      ["hyu", "ひゅ"],
      ["hyo", "ひょ"],
    ],
  },
  {
    row: "combo my",
    tags: ["combo"],
    chars: [
      ["mya", "みゃ"],
      ["myu", "みゅ"],
      ["myo", "みょ"],
    ],
  },
  {
    row: "combo ry",
    tags: ["combo"],
    chars: [
      ["rya", "りゃ"],
      ["ryu", "りゅ"],
      ["ryo", "りょ"],
    ],
  },
  {
    row: "combo gy",
    tags: ["combo", "dakuten"],
    chars: [
      ["gya", "ぎゃ"],
      ["gyu", "ぎゅ"],
      ["gyo", "ぎょ"],
    ],
  },
  {
    row: "combo j",
    tags: ["combo", "dakuten"],
    chars: [
      ["ja", "じゃ"],
      ["ju", "じゅ"],
      ["jo", "じょ"],
    ],
  },
  {
    row: "combo by",
    tags: ["combo", "dakuten"],
    chars: [
      ["bya", "びゃ"],
      ["byu", "びゅ"],
      ["byo", "びょ"],
    ],
  },
  {
    row: "combo py",
    tags: ["combo", "handakuten"],
    chars: [
      ["pya", "ぴゃ"],
      ["pyu", "ぴゅ"],
      ["pyo", "ぴょ"],
    ],
  },
];

const KATAKANA = [
  {
    row: "vowels",
    chars: [
      ["a", "ア"],
      ["i", "イ"],
      ["u", "ウ"],
      ["e", "エ"],
      ["o", "オ"],
    ],
  },
  {
    row: "k",
    chars: [
      ["ka", "カ"],
      ["ki", "キ"],
      ["ku", "ク"],
      ["ke", "ケ"],
      ["ko", "コ"],
    ],
  },
  {
    row: "g",
    tags: ["dakuten"],
    chars: [
      ["ga", "ガ"],
      ["gi", "ギ"],
      ["gu", "グ"],
      ["ge", "ゲ"],
      ["go", "ゴ"],
    ],
  },
  {
    row: "s",
    chars: [
      ["sa", "サ"],
      ["shi", "シ"],
      ["su", "ス"],
      ["se", "セ"],
      ["so", "ソ"],
    ],
  },
  {
    row: "z",
    tags: ["dakuten"],
    chars: [
      ["za", "ザ"],
      ["ji", "ジ"],
      ["zu", "ズ"],
      ["ze", "ゼ"],
      ["zo", "ゾ"],
    ],
  },
  {
    row: "t",
    chars: [
      ["ta", "タ"],
      ["chi", "チ"],
      ["tsu", "ツ"],
      ["te", "テ"],
      ["to", "ト"],
    ],
  },
  {
    row: "d",
    tags: ["dakuten"],
    chars: [
      ["da", "ダ"],
      ["di", "ヂ"],
      ["du", "ヅ"],
      ["de", "デ"],
      ["do", "ド"],
    ],
  },
  {
    row: "n",
    chars: [
      ["na", "ナ"],
      ["ni", "ニ"],
      ["nu", "ヌ"],
      ["ne", "ネ"],
      ["no", "ノ"],
    ],
  },
  {
    row: "h",
    chars: [
      ["ha", "ハ"],
      ["hi", "ヒ"],
      ["fu", "フ"],
      ["he", "ヘ"],
      ["ho", "ホ"],
    ],
  },
  {
    row: "b",
    tags: ["dakuten"],
    chars: [
      ["ba", "バ"],
      ["bi", "ビ"],
      ["bu", "ブ"],
      ["be", "ベ"],
      ["bo", "ボ"],
    ],
  },
  {
    row: "p",
    tags: ["handakuten"],
    chars: [
      ["pa", "パ"],
      ["pi", "ピ"],
      ["pu", "プ"],
      ["pe", "ペ"],
      ["po", "ポ"],
    ],
  },
  {
    row: "m",
    chars: [
      ["ma", "マ"],
      ["mi", "ミ"],
      ["mu", "ム"],
      ["me", "メ"],
      ["mo", "モ"],
    ],
  },
  {
    row: "y",
    chars: [
      ["ya", "ヤ"],
      ["yu", "ユ"],
      ["yo", "ヨ"],
    ],
  },
  {
    row: "r",
    chars: [
      ["ra", "ラ"],
      ["ri", "リ"],
      ["ru", "ル"],
      ["re", "レ"],
      ["ro", "ロ"],
    ],
  },
  {
    row: "w",
    chars: [
      ["wa", "ワ"],
      ["wo", "ヲ"],
    ],
  },
  { row: "n (solo)", chars: [["n", "ン"]] },
  {
    row: "combo k",
    tags: ["combo"],
    chars: [
      ["kya", "キャ"],
      ["kyu", "キュ"],
      ["kyo", "キョ"],
    ],
  },
  {
    row: "combo sh",
    tags: ["combo"],
    chars: [
      ["sha", "シャ"],
      ["shu", "シュ"],
      ["sho", "ショ"],
    ],
  },
  {
    row: "combo ch",
    tags: ["combo"],
    chars: [
      ["cha", "チャ"],
      ["chu", "チュ"],
      ["cho", "チョ"],
    ],
  },
  {
    row: "combo ny",
    tags: ["combo"],
    chars: [
      ["nya", "ニャ"],
      ["nyu", "ニュ"],
      ["nyo", "ニョ"],
    ],
  },
  {
    row: "combo hy",
    tags: ["combo"],
    chars: [
      ["hya", "ヒャ"],
      ["hyu", "ヒュ"],
      ["hyo", "ヒョ"],
    ],
  },
  {
    row: "combo my",
    tags: ["combo"],
    chars: [
      ["mya", "ミャ"],
      ["myu", "ミュ"],
      ["myo", "ミョ"],
    ],
  },
  {
    row: "combo ry",
    tags: ["combo"],
    chars: [
      ["rya", "リャ"],
      ["ryu", "リュ"],
      ["ryo", "リョ"],
    ],
  },
  {
    row: "combo gy",
    tags: ["combo", "dakuten"],
    chars: [
      ["gya", "ギャ"],
      ["gyu", "ギュ"],
      ["gyo", "ギョ"],
    ],
  },
  {
    row: "combo j",
    tags: ["combo", "dakuten"],
    chars: [
      ["ja", "ジャ"],
      ["ju", "ジュ"],
      ["jo", "ジョ"],
    ],
  },
  {
    row: "combo by",
    tags: ["combo", "dakuten"],
    chars: [
      ["bya", "ビャ"],
      ["byu", "ビュ"],
      ["byo", "ビョ"],
    ],
  },
  {
    row: "combo py",
    tags: ["combo", "handakuten"],
    chars: [
      ["pya", "ピャ"],
      ["pyu", "ピュ"],
      ["pyo", "ピョ"],
    ],
  },
];

// ---- State -------------------------------------------------------------------

const jsConfetti = window.confetti;
let selected = new Set();
let difficult = loadDifficult();
let deck = [];
let cardIndex = 0;
let revealed = false;
let busy = false;
let direction = "jp2en";
let cardDirection = "jp2en"; // resolved per card when direction is "mixed"
let history = []; // snapshots for undo
let sessionMissed = new Set();
let sessionWrong = 0;
let sessionSeen = 0;
let sessionTotal = 0;

const isTouch = window.matchMedia("(pointer: coarse)").matches;

function charKey(type, romaji, kana) {
  return `${type}:${romaji}:${kana}`;
}

// ---- Persist ------------------------------------------------------------------

function loadDifficult() {
  try {
    return new Map(JSON.parse(localStorage.getItem("kana-difficult") || "[]"));
  } catch {
    return new Map();
  }
}
function saveDifficult() {
  localStorage.setItem(
    "kana-difficult",
    JSON.stringify([...difficult.entries()]),
  );
}

const SETTINGS_CHECKBOXES = [
  "cb-hiragana",
  "cb-katakana",
  "cb-combo",
  "cb-dakuten",
  "difficult-only",
  "show-type",
];

function saveSettings() {
  const checks = {};
  SETTINGS_CHECKBOXES.forEach((id) => {
    checks[id] = document.getElementById(id).checked;
  });
  localStorage.setItem(
    "kana-settings",
    JSON.stringify({
      selected: [...selected],
      direction: document.querySelector('input[name="dir"]:checked').value,
      checks,
    }),
  );
}

// Returns true if saved settings were found and applied
function loadSettings() {
  let settings;
  try {
    settings = JSON.parse(localStorage.getItem("kana-settings"));
  } catch {
    return false;
  }
  if (!settings) return false;

  Object.entries(settings.checks || {}).forEach(([id, checked]) => {
    const el = document.getElementById(id);
    if (el) el.checked = checked;
  });
  const dirInput = document.querySelector(
    `input[name="dir"][value="${settings.direction}"]`,
  );
  if (dirInput) dirInput.checked = true;

  const saved = new Set(settings.selected || []);
  selected.clear();
  document.querySelectorAll(".char-btn").forEach((btn) => {
    const on = saved.has(btn.dataset.key);
    if (on) selected.add(btn.dataset.key);
    btn.classList.toggle("selected", on);
  });
  updateCounts();
  return true;
}

// ---- Build UI -----------------------------------------------------------------

function buildGroups() {
  buildSection("hiragana-groups", HIRAGANA, "h", false);
  buildSection("katakana-groups", KATAKANA, "k", false);
  buildSection("hiragana-combo-groups", HIRAGANA, "h", true);
  buildSection("katakana-combo-groups", KATAKANA, "k", true);
}

function buildSection(containerId, groups, type, comboOnly) {
  const container = document.getElementById(containerId);
  groups
    .filter((group) => {
      const isCombo = (group.tags || []).includes("combo");
      return comboOnly ? isCombo : !isCombo;
    })
    .forEach((group) => {
      const div = document.createElement("div");
      div.className = "row-group";
      const lbl = document.createElement("button");
      lbl.type = "button";
      lbl.className = "row-group-label";
      lbl.title = "Select / deselect row";
      lbl.textContent = group.row;
      lbl.onclick = () => toggleRow(div);
      div.appendChild(lbl);
      const grid = document.createElement("div");
      grid.className = "char-grid";
      const rowTags = (group.tags || []).join(" ");
      group.chars.forEach(([romaji, kana]) => {
        const key = charKey(type, romaji, kana);
        const btn = document.createElement("button");
        btn.className = "char-btn";
        btn.dataset.key = key;
        btn.dataset.type = type;
        btn.dataset.tags = rowTags;
        btn.title = romaji;
        btn.textContent = kana;
        btn.onclick = () => toggleChar(key, btn);
        grid.appendChild(btn);
      });
      div.appendChild(grid);
      container.appendChild(div);
    });
}

function toggleChar(key, btn) {
  if (selected.has(key)) {
    selected.delete(key);
    btn.classList.remove("selected");
  } else {
    selected.add(key);
    btn.classList.add("selected");
  }
  updateCounts();
  saveSettings();
}

function toggleRow(rowEl) {
  const btns = [...rowEl.querySelectorAll(".char-btn")];
  const allSelected = btns.every((btn) => selected.has(btn.dataset.key));
  btns.forEach((btn) => {
    if (allSelected) selected.delete(btn.dataset.key);
    else selected.add(btn.dataset.key);
    btn.classList.toggle("selected", !allSelected);
  });
  updateCounts();
  saveSettings();
}

function updateCounts() {
  const difficultOnly = document.getElementById("difficult-only").checked;
  const poolSize = difficultOnly ? difficult.size : selected.size;
  document.getElementById("selected-count").textContent =
    `(${selected.size} selected)`;
  document.getElementById("sessionStartButton").textContent =
    `Start Session (${poolSize})`;
}

function applyCheckboxes() {
  const wantH = document.getElementById("cb-hiragana").checked;
  const wantK = document.getElementById("cb-katakana").checked;
  const includeCombo = document.getElementById("cb-combo").checked;
  const includeDakuten = document.getElementById("cb-dakuten").checked;

  selected.clear();
  document.querySelectorAll(".char-btn").forEach((btn) => {
    const type = btn.dataset.type;
    if (type === "h" && !wantH) {
      btn.classList.remove("selected");
      return;
    }
    if (type === "k" && !wantK) {
      btn.classList.remove("selected");
      return;
    }
    const tags = btn.dataset.tags
      ? btn.dataset.tags.split(" ").filter(Boolean)
      : [];
    if (!includeCombo && tags.includes("combo")) {
      btn.classList.remove("selected");
      return;
    }
    if (
      !includeDakuten &&
      (tags.includes("dakuten") || tags.includes("handakuten"))
    ) {
      btn.classList.remove("selected");
      return;
    }
    selected.add(btn.dataset.key);
    btn.classList.add("selected");
  });
  updateCounts();
  saveSettings();
}

let statusTimer = null;
function showStatus(msg) {
  const el = document.getElementById("status-msg");
  el.textContent = msg;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    el.textContent = "";
  }, 3000);
}

// ---- Session ------------------------------------------------------------------

function showSessionModal(completed) {
  const originalTotal = sessionTotal;
  const seen = sessionSeen;
  const correct = seen - sessionWrong;
  const accuracy = seen > 0 ? Math.round((correct / seen) * 100) : 0;

  document.getElementById("modalTitle").textContent = completed
    ? "Session complete! 🎉"
    : "Session ended";
  document.getElementById("modalStats").innerHTML =
    `<dt>Cards in deck</dt><dd>${originalTotal}</dd>` +
    `<dt>Cards seen</dt><dd>${seen}</dd>` +
    `<dt>Marked wrong</dt><dd>${sessionWrong}</dd>` +
    `<dt>Accuracy</dt><dd>${accuracy}%</dd>`;
  const retryBtn = document.getElementById("modalRetry");
  retryBtn.hidden = sessionMissed.size === 0;
  retryBtn.textContent = `Retry missed (${sessionMissed.size})`;
  document.getElementById("sessionModal").classList.add("active");
  document.getElementById("modalDone").focus();
}

function closeModal() {
  document.getElementById("sessionModal").classList.remove("active");
}

function startSession() {
  direction = document.querySelector('input[name="dir"]:checked').value;
  const difficultOnly = document.getElementById("difficult-only").checked;

  let pool;
  if (difficultOnly) {
    pool = [...difficult.keys()];
  } else {
    pool = [...selected];
  }

  if (pool.length === 0) {
    showStatus(
      difficultOnly
        ? "No difficult characters recorded yet."
        : "Select at least one character.",
    );
    return;
  }

  beginDeck(pool);
}

function retryMissed() {
  const pool = [...sessionMissed];
  closeModal();
  if (pool.length > 0) beginDeck(pool);
}

function beginDeck(pool) {
  deck = shuffle(pool);
  cardIndex = 0;
  revealed = false;
  history = [];
  sessionMissed = new Set();
  sessionWrong = 0;
  sessionSeen = 0;
  sessionTotal = deck.length;
  document.getElementById("flashcard-area").classList.add("active");
  showCard();
  if (!isTouch) document.getElementById("card").focus();
}

function endSession() {
  document.getElementById("flashcard-area").classList.remove("active");
  showSessionModal(false);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function parseKey(key) {
  const parts = key.split(":");
  const type = parts[0];
  const romaji = parts[1];
  const kana = parts.slice(2).join(":");
  return { type, romaji, kana };
}

function showCard(dirOverride) {
  if (cardIndex >= deck.length) {
    sessionSeen = cardIndex;
    document.getElementById("flashcard-area").classList.remove("active");
    jsConfetti({
      count: 400,
      spread: 80,
      origin: { y: 0.6 },
      size: 2,
      velocity: 300,
    });
    showSessionModal(true);
    return;
  }
  sessionSeen = cardIndex;
  revealed = false;
  cardDirection =
    dirOverride ||
    (direction === "mixed"
      ? Math.random() < 0.5 ? "jp2en" : "en2jp"
      : direction);
  const key = deck[cardIndex];
  const { type, romaji, kana } = parseKey(key);
  const promptEl = document.getElementById("card-prompt");
  const answerEl = document.getElementById("card-answer");
  promptEl.textContent = cardDirection === "jp2en" ? kana : romaji;
  promptEl.lang = cardDirection === "jp2en" ? "ja" : "en";
  answerEl.textContent = "";
  answerEl.lang = cardDirection === "jp2en" ? "en" : "ja";

  // In EN -> JP the romaji alone doesn't say which script to answer in,
  // so the label is always shown there; for JP -> EN it's optional
  const typeEl = document.getElementById("card-type");
  typeEl.hidden =
    cardDirection !== "en2jp" && !document.getElementById("show-type").checked;
  typeEl.dataset.type = type;
  typeEl.textContent = type === "h" ? "ひらがな · hiragana" : "カタカナ · katakana";

  document.getElementById("card-hint").textContent = isTouch
    ? "tap to reveal · swipe → correct, ← wrong"
    : "click to reveal";
  document.getElementById("progress").textContent =
    `Card ${cardIndex + 1} / ${deck.length}` +
    (difficult.has(key) ? `  ⚑ difficult (×${difficult.get(key).count})` : "");
  document.getElementById("progress-fill").style.width =
    `${(cardIndex / deck.length) * 100}%`;
  document.getElementById("undoButton").disabled = history.length === 0;
}

function handleCardClick() {
  if (busy) return;
  if (!revealed) {
    const key = deck[cardIndex];
    const { romaji, kana } = parseKey(key);
    const answer = cardDirection === "jp2en" ? romaji : kana;
    document.getElementById("card-answer").textContent = answer;
    document.getElementById("card-hint").textContent = isTouch
      ? "tap or swipe → if correct, ← if wrong"
      : "click again to mark correct & next";
    revealed = true;
  } else {
    markCorrect();
  }
}

function pushHistory(key) {
  history.push({
    key,
    cardIndex,
    deckLength: deck.length,
    cardDirection,
    sessionWrong,
    wasMissed: sessionMissed.has(key),
    difficultPrev: difficult.has(key) ? { ...difficult.get(key) } : null,
  });
}

function undo() {
  if (busy || history.length === 0) return;
  const snap = history.pop();
  deck.length = snap.deckLength; // drops the re-queued copy after a "wrong"
  cardIndex = snap.cardIndex;
  sessionWrong = snap.sessionWrong;
  if (!snap.wasMissed) sessionMissed.delete(snap.key);
  if (snap.difficultPrev) difficult.set(snap.key, snap.difficultPrev);
  else difficult.delete(snap.key);
  saveDifficult();
  renderDifficult();
  updateCounts();
  showCard(snap.cardDirection);
}

function markCorrect() {
  if (busy) return;
  const cardEl = document.getElementById("card");
  cardEl.classList.remove("correct");
  void cardEl.offsetWidth;
  cardEl.classList.add("correct");
  cardEl.addEventListener("animationend", () => cardEl.classList.remove("correct"), { once: true });

  const key = deck[cardIndex];
  pushHistory(key);
  // Getting a difficult card right first time in a session works it off the list
  if (difficult.has(key) && !sessionMissed.has(key)) {
    const entry = difficult.get(key);
    entry.count--;
    if (entry.count <= 0) difficult.delete(key);
    saveDifficult();
    renderDifficult();
    updateCounts();
  }
  cardIndex++;
  showCard();
}

function markWrong() {
  if (busy) return;
  const cardEl = document.getElementById("card");
  cardEl.classList.remove("wrong");
  void cardEl.offsetWidth; // force reflow so re-triggering replays the animation
  cardEl.classList.add("wrong");
  cardEl.addEventListener("animationend", () => cardEl.classList.remove("wrong"), { once: true });

  const key = deck[cardIndex];
  const { romaji, kana } = parseKey(key);
  pushHistory(key);
  const entry = difficult.get(key) || { romaji, kana, count: 0 };
  entry.count++;
  difficult.set(key, entry);
  sessionMissed.add(key);
  sessionWrong++;
  saveDifficult();
  renderDifficult();
  updateCounts();
  deck.push(key);
  cardIndex++;

  if (!revealed) {
    // Show the answer briefly before advancing to the next card
    const answer = cardDirection === "jp2en" ? romaji : kana;
    document.getElementById("card-answer").textContent = answer;
    document.getElementById("card-hint").textContent = "";
    busy = true;
    setTimeout(() => {
      busy = false;
      revealed = false;
      showCard();
    }, 500);
  } else {
    revealed = false;
    showCard();
  }
}

// ---- Difficult list -----------------------------------------------------------

function renderDifficult() {
  const el = document.getElementById("difficult-list");
  if (difficult.size === 0) {
    el.innerHTML = "<em>None yet.</em>";
    return;
  }
  let html =
    "<table><tr><th>Kana</th><th>Romaji</th><th>Wrong</th><th></th></tr>";
  [...difficult.entries()]
    .sort((a, b) => b[1].count - a[1].count)
    .forEach(([key, { romaji, kana, count }]) => {
      html += `<tr>
        <td style="font-size:18px">${kana}</td>
        <td>${romaji}</td>
        <td>${count}</td>
        <td><button data-remove-key="${key}">×</button></td>
      </tr>`;
    });
  html += "</table>";
  el.innerHTML = html;
}

function removeDifficult(key) {
  difficult.delete(key);
  saveDifficult();
  renderDifficult();
  updateCounts();
}

function clearDifficult() {
  difficult.clear();
  saveDifficult();
  renderDifficult();
  updateCounts();
}

// ---- Swipe -------------------------------------------------------------------
// Swipe right = correct, swipe left = wrong. Dragging is handled by interact.js,
// the spring-back / fly-out / enter animations by Motion. Taps still go through
// handleCardClick.

const SWIPE_THRESHOLD = 0.25; // fraction of card width
let swipeX = 0;
let swipeAnim = null;
let lastSwipeAt = 0;

function setSwipeVisual(dx, opacity = 1) {
  const cardEl = document.getElementById("card");
  const threshold = cardEl.offsetWidth * SWIPE_THRESHOLD;
  const p = Math.min(Math.abs(dx) / threshold, 1);
  cardEl.style.transform = `translateX(${dx}px) rotate(${dx / 25}deg)`;
  cardEl.style.opacity = opacity;
  cardEl.style.setProperty("--swipe-right", dx > 0 ? p : 0);
  cardEl.style.setProperty("--swipe-left", dx < 0 ? p : 0);
  cardEl.classList.toggle("swipe-ready-right", dx > 0 && p === 1);
  cardEl.classList.toggle("swipe-ready-left", dx < 0 && p === 1);
}

function clearSwipeVisual() {
  const cardEl = document.getElementById("card");
  swipeX = 0;
  cardEl.style.transform = "";
  cardEl.style.opacity = "";
  cardEl.style.removeProperty("--swipe-right");
  cardEl.style.removeProperty("--swipe-left");
  cardEl.classList.remove("swipe-ready-right", "swipe-ready-left");
}

function releaseSwipe() {
  lastSwipeAt = Date.now();
  const cardEl = document.getElementById("card");
  const width = cardEl.offsetWidth;

  if (Math.abs(swipeX) < width * SWIPE_THRESHOLD) {
    // Not far enough: spring back to the centre
    swipeAnim = Motion.animate(swipeX, 0, {
      type: "spring",
      stiffness: 500,
      damping: 28,
      onUpdate: (v) => setSwipeVisual((swipeX = v)),
      onComplete: clearSwipeVisual,
    });
    return;
  }

  const dir = Math.sign(swipeX);
  const target = dir * width * 1.3;
  busy = true;
  swipeAnim = Motion.animate(swipeX, target, {
    duration: 0.22,
    ease: "easeIn",
    onUpdate: (v) => setSwipeVisual((swipeX = v), 1 - Math.abs(v / target)),
  });
  swipeAnim.then(() => {
    clearSwipeVisual();
    busy = false;
    if (!document.getElementById("flashcard-area").classList.contains("active")) return;
    if (dir > 0) markCorrect();
    else markWrong();
    // Bring the next card in
    swipeAnim = Motion.animate(0, 1, {
      type: "spring",
      stiffness: 400,
      damping: 26,
      onUpdate: (v) => {
        cardEl.style.opacity = Math.min(v, 1);
        cardEl.style.transform = `scale(${0.9 + 0.1 * v})`;
      },
      onComplete: clearSwipeVisual,
    });
  });
}

function setupSwipe() {
  interact("#card").draggable({
    startAxis: "x",
    lockAxis: "x",
    cursorChecker: () => null,
    listeners: {
      start(e) {
        if (busy) return e.interaction.stop();
        swipeAnim?.stop();
      },
      move(e) {
        if (busy) return;
        setSwipeVisual((swipeX += e.dx));
      },
      end() {
        if (!busy) releaseSwipe();
      },
    },
  });
}

function onCardClick() {
  // A swipe's pointerup can be followed by a synthetic click; ignore it
  if (Date.now() - lastSwipeAt < 400) return;
  handleCardClick();
}

// ---- Theme --------------------------------------------------------------------

const ICON_SUN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return document.documentElement.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function renderThemeToggle() {
  const dark = currentTheme() === "dark";
  const btn = document.getElementById("themeToggle");
  // Show what clicking will switch to
  btn.innerHTML = dark ? ICON_SUN : ICON_MOON;
  btn.title = btn.ariaLabel = dark ? "Switch to light theme" : "Switch to dark theme";
}

function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("kana-theme", next);
  } catch {}
  renderThemeToggle();
}

// ---- Events -------------------------------------------------------------------

function handleKeydown(e) {
  if (document.getElementById("sessionModal").classList.contains("active")) {
    if (e.key === "Escape") closeModal();
    return;
  }
  const flashcardArea = document.getElementById("flashcard-area");
  if (!flashcardArea.classList.contains("active")) return;

  if ([" ", "ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Escape", "Backspace"].includes(e.key)) {
    e.preventDefault();
  }

  if (e.key === "Backspace" || e.key === "z" || e.key === "Z") {
    undo();
    return;
  }

  if (e.key === " " || e.key === "ArrowDown" || e.key === "ArrowRight") {
    handleCardClick();
  } else if (e.key === "Escape" || e.key === "ArrowUp" || e.key === "ArrowLeft") {
    markWrong();
  }
}

function registerEvents() {
  document
    .querySelectorAll(".cb-kanaselect")
    .forEach((n) => n.addEventListener("change", applyCheckboxes));
  document.getElementById("difficult-only").addEventListener("change", () => {
    updateCounts();
    saveSettings();
  });
  document.getElementById("show-type").addEventListener("change", saveSettings);
  document
    .querySelectorAll('input[name="dir"]')
    .forEach((n) => n.addEventListener("change", saveSettings));

  const buttonClickActionMap = {
    sessionStartButton: startSession,
    clearDifficultButton: clearDifficult,
    card: onCardClick,
    markWrongButton: markWrong,
    markCorrectButton: markCorrect,
    endSessionButton: endSession,
    modalClose: closeModal,
    modalDone: closeModal,
    modalRetry: retryMissed,
    undoButton: undo,
    themeToggle: toggleTheme,
  };

  for (const [buttonId, action] of Object.entries(buttonClickActionMap)) {
    document.getElementById(buttonId)?.addEventListener("click", action);
  }

  document.getElementById("difficult-list").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-remove-key]");
    if (btn) removeDifficult(btn.dataset.removeKey);
  });

  setupSwipe();
  systemDark.addEventListener("change", renderThemeToggle);

  // Clicking the dimmed backdrop closes the modal
  document.getElementById("sessionModal").addEventListener("click", (e) => {
    if (e.target.id === "sessionModal") closeModal();
  });

  document.addEventListener("keydown", handleKeydown);
}

// ---- Init ---------------------------------------------------------------------

buildGroups();
renderDifficult();
if (!loadSettings()) applyCheckboxes();
renderThemeToggle();
registerEvents();

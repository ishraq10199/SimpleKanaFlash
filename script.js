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
let sessionWrong = 0;
let sessionSeen = 0;
let sessionTotal = 0;

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
      const lbl = document.createElement("div");
      lbl.className = "row-group-label";
      lbl.textContent = group.row;
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
}

function selectNone() {
  selected.clear();
  document
    .querySelectorAll(".char-btn")
    .forEach((btn) => btn.classList.remove("selected"));
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
    `Cards in deck: ${originalTotal}<br>` +
    `Cards seen: ${seen}<br>` +
    `Marked wrong: ${sessionWrong}<br>` +
    `Accuracy: ${accuracy}%`;
  document.getElementById("sessionModal").classList.add("active");
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

  deck = shuffle(pool);
  cardIndex = 0;
  revealed = false;
  sessionWrong = 0;
  sessionSeen = 0;
  sessionTotal = deck.length;
  document.getElementById("flashcard-area").classList.add("active");
  showCard();
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

function showCard() {
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
  const key = deck[cardIndex];
  const { romaji, kana } = parseKey(key);
  const prompt = direction === "jp2en" ? kana : romaji;

  document.getElementById("card-prompt").textContent = prompt;
  document.getElementById("card-answer").textContent = "";
  document.getElementById("card-hint").textContent = "tap to reveal";
  document.getElementById("progress").textContent =
    `Card ${cardIndex + 1} / ${deck.length}` +
    (difficult.has(key) ? `  ⚑ difficult (×${difficult.get(key).count})` : "");
}

function handleCardClick() {
  if (busy) return;
  if (!revealed) {
    const key = deck[cardIndex];
    const { romaji, kana } = parseKey(key);
    const answer = direction === "jp2en" ? romaji : kana;
    document.getElementById("card-answer").textContent = answer;
    document.getElementById("card-hint").textContent =
      "tap again to mark correct & next";
    revealed = true;
  } else {
    cardIndex++;
    showCard();
  }
}

function markWrong() {
  if (busy) return;
  const key = deck[cardIndex];
  const { romaji, kana } = parseKey(key);
  const entry = difficult.get(key) || { romaji, kana, count: 0 };
  entry.count++;
  difficult.set(key, entry);
  sessionWrong++;
  saveDifficult();
  renderDifficult();
  deck.push(key);
  cardIndex++;

  if (!revealed) {
    // Show the answer briefly before advancing to the next card
    const answer = direction === "jp2en" ? romaji : kana;
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
}

function clearDifficult() {
  difficult.clear();
  saveDifficult();
  renderDifficult();
}

// ---- Events -------------------------------------------------------------------

function handleKeydown(e) {
  const flashcardArea = document.getElementById("flashcard-area");
  if (!flashcardArea.classList.contains("active")) return;
  if (document.getElementById("sessionModal").classList.contains("active")) return;

  if ([" ", "ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Escape"].includes(e.key)) {
    e.preventDefault();
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

  const buttonClickActionMap = {
    sessionStartButton: startSession,
    clearDifficultButton: clearDifficult,
    card: handleCardClick,
    markWrongButton: markWrong,
    endSessionButton: endSession,
    modalClose: closeModal,
  };

  for (const [buttonId, action] of Object.entries(buttonClickActionMap)) {
    document.getElementById(buttonId)?.addEventListener("click", action);
  }

  document.getElementById("difficult-list").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-remove-key]");
    if (btn) removeDifficult(btn.dataset.removeKey);
  });

  document.addEventListener("keydown", handleKeydown);
}

// ---- Init ---------------------------------------------------------------------

buildGroups();
renderDifficult();
applyCheckboxes();
registerEvents();

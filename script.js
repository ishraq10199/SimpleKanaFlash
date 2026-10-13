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

// Other accepted spellings, shown on reveal and accepted in typing mode
const ROMAJI_ALTERNATES = {
  shi: ["si"],
  chi: ["ti"],
  tsu: ["tu"],
  fu: ["hu"],
  ji: ["zi"],
  di: ["ji", "dzi"],
  du: ["zu", "dzu"],
  wo: ["o"],
  n: ["nn"],
  sha: ["sya"],
  shu: ["syu"],
  sho: ["syo"],
  cha: ["tya", "cya"],
  chu: ["tyu", "cyu"],
  cho: ["tyo", "cyo"],
  ja: ["jya", "zya"],
  ju: ["jyu", "zyu"],
  jo: ["jyo", "zyo"],
};

// Sets of characters that are easy to mix up
const LOOKALIKES = [
  { name: "Hiragana", sets: ["あお", "いり", "さきち", "ぬめ", "われね", "るろ", "はほま", "こに"] },
  { name: "Katakana", sets: ["シツソン", "クケタ", "ナメ", "スヌ", "ウワフ", "コユ", "チテ", "アマ"] },
  { name: "Hiragana vs katakana", sets: ["へヘ", "りリ", "かカ", "きキ", "やヤ", "もモ", "せセ"] },
];

// Leitner boxes: a correct answer moves a character up a box, a wrong one
// sends it back to box 0. Each box waits longer before it's due again.
const SRS_INTERVAL_DAYS = [0, 1, 3, 7, 14, 30];
const SRS_MAX_BOX = SRS_INTERVAL_DAYS.length - 1;
const DAY_MS = 24 * 60 * 60 * 1000;

const VOWELS = ["a", "i", "u", "e", "o"];
const CHART_BLOCKS = [
  {
    label: "Basic",
    cols: VOWELS,
    match: (tags) => tags.length === 0,
  },
  {
    label: "Dakuten · handakuten",
    cols: VOWELS,
    match: (tags) => !tags.includes("combo"),
  },
  {
    label: "Combo",
    cols: ["a", "u", "o"],
    match: (tags) => tags.includes("combo"),
  },
];

// ---- State -------------------------------------------------------------------

let selected = new Set();
let srs = loadSrs();
let deck = [];
let cardIndex = 0;
let revealed = false;
let busy = false;
let direction = "jp2en";
let answerMode = "flip";
let cardDirection = "jp2en"; // resolved per card when direction is "mixed"
let history = []; // snapshots for undo
let sessionMissed = new Set();
let sessionWrong = 0;
let sessionSeen = 0;
let sessionTotal = 0;

const isTouch = window.matchMedia("(pointer: coarse)").matches;
const kanaToKey = new Map();

function charKey(type, romaji, kana) {
  return `${type}:${romaji}:${kana}`;
}

function $(id) {
  return document.getElementById(id);
}

function radioValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function buzz(pattern) {
  try {
    navigator.vibrate?.(pattern);
  } catch {}
}

// ---- Persist ------------------------------------------------------------------
// Storage can be unavailable (private mode, blocked site data); the app keeps
// working for the session without it.

function storageGet(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function loadSrs() {
  const saved = storageGet("kana-srs");
  if (saved) return new Map(saved);

  // Migrate the old "difficult" list: every entry starts as weak and due now
  const migrated = new Map();
  (storageGet("kana-difficult") || []).forEach(([key, { count }]) => {
    migrated.set(key, { box: 0, due: 0, wrong: count });
  });
  return migrated;
}

function saveSrs() {
  storageSet("kana-srs", [...srs.entries()]);
}

function saveSettings() {
  storageSet("kana-settings", {
    selected: [...selected],
    direction: radioValue("dir"),
    mode: radioValue("mode"),
    limit: radioValue("limit"),
    pool: radioValue("pool"),
    showType: $("show-type").checked,
    tab: document.querySelector('[role="tab"][aria-selected="true"]')?.dataset.tab,
  });
}

function setRadio(name, value) {
  const input = document.querySelector(`input[name="${name}"][value="${value}"]`);
  if (input) input.checked = true;
}

function loadSettings() {
  const settings = storageGet("kana-settings");
  if (!settings) {
    // First visit: start with basic hiragana
    selectKeys(chartKeys("#panel-h .chart-block:first-child"), true);
    return;
  }
  setRadio("dir", settings.direction);
  setRadio("mode", settings.mode);
  setRadio("limit", settings.limit);
  // Older versions had a "practice difficult only" checkbox
  setRadio("pool", settings.pool || (settings.checks?.["difficult-only"] ? "weak" : "selected"));
  $("show-type").checked = settings.showType ?? settings.checks?.["show-type"] ?? false;
  if (settings.tab) selectTab(settings.tab);
  selectKeys(settings.selected || [], true);
}

// ---- SRS ----------------------------------------------------------------------

function isWeak(entry) {
  return entry.wrong > 0 && entry.box <= 1;
}

function isDue(entry, now = Date.now()) {
  return entry.due <= now;
}

// Lower = practise sooner: weak, then due reviews, then new, then not yet due
function priority(key, now) {
  const entry = srs.get(key);
  if (!entry) return 2;
  if (isWeak(entry)) return 0;
  if (isDue(entry, now)) return 1;
  return 3 + entry.due / 1e15;
}

function recordCorrect(key) {
  const entry = srs.get(key) || { box: 0, due: 0, wrong: 0 };
  // Only promote when due, so cramming doesn't push a card weeks out
  if (isDue(entry)) {
    entry.box = Math.min(entry.box + 1, SRS_MAX_BOX);
    entry.due = Date.now() + SRS_INTERVAL_DAYS[entry.box] * DAY_MS;
  }
  srs.set(key, entry);
}

function recordWrong(key) {
  const entry = srs.get(key) || { box: 0, due: 0, wrong: 0 };
  entry.box = 0;
  entry.due = Date.now();
  entry.wrong++;
  srs.set(key, entry);
}

function srsChanged() {
  saveSrs();
  renderReview();
  updateCounts();
}

// ---- Build UI -----------------------------------------------------------------

function buildCharts() {
  buildChart($("panel-h"), HIRAGANA, "h");
  buildChart($("panel-k"), KATAKANA, "k");
  buildLookalikes();
}

function vowelOf(romaji) {
  const last = romaji.at(-1);
  return VOWELS.includes(last) ? last : "a"; // ん sits in the first column
}

function rowLabel(group) {
  if ((group.tags || []).includes("combo")) return group.chars[0][0].slice(0, -1);
  return group.row.replace("vowels", "–").replace(" (solo)", "");
}

function buildChart(panel, groups, type) {
  const used = new Set();
  CHART_BLOCKS.forEach((block) => {
    const rows = groups.filter((g) => !used.has(g) && block.match(g.tags || []));
    rows.forEach((g) => used.add(g));

    const blockEl = document.createElement("div");
    blockEl.className = "chart-block";
    blockEl.innerHTML = `
      <div class="block-head">
        <label><input type="checkbox" class="block-cb" /> ${block.label}</label>
        <span class="block-count"></span>
      </div>`;

    const chart = document.createElement("div");
    chart.className = "kana-chart";
    chart.style.setProperty("--cols", block.cols.length);
    chart.appendChild(document.createElement("span"));
    block.cols.forEach((col) => {
      const colBtn = document.createElement("button");
      colBtn.type = "button";
      colBtn.className = "chart-col";
      colBtn.title = "Select / deselect column";
      colBtn.textContent = col;
      colBtn.onclick = () => toggleKeys(chartKeys(`[data-col="${col}"]`, blockEl));
      chart.appendChild(colBtn);
    });

    rows.forEach((group) => {
      const rowId = `${type}-${group.row}`;
      const rowBtn = document.createElement("button");
      rowBtn.type = "button";
      rowBtn.className = "row-group-label";
      rowBtn.title = "Select / deselect row";
      rowBtn.textContent = rowLabel(group);
      rowBtn.onclick = () => toggleKeys(chartKeys(`[data-row="${CSS.escape(rowId)}"]`, blockEl));
      chart.appendChild(rowBtn);

      const byVowel = new Map(group.chars.map((c) => [vowelOf(c[0]), c]));
      block.cols.forEach((col) => {
        const char = byVowel.get(col);
        if (!char) {
          chart.appendChild(document.createElement("span"));
          return;
        }
        const [romaji, kana] = char;
        const key = charKey(type, romaji, kana);
        kanaToKey.set(kana, key);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "kana-cell";
        btn.dataset.key = key;
        btn.dataset.row = rowId;
        btn.dataset.col = col;
        btn.innerHTML = `<span class="cell-kana" lang="ja">${kana}</span><span class="cell-romaji">${romaji}</span>`;
        btn.onclick = () => toggleKeys([key]);
        chart.appendChild(btn);
      });
    });

    blockEl.appendChild(chart);
    blockEl.querySelector(".block-cb").onchange = (e) =>
      selectKeys(chartKeys(".kana-cell", blockEl), e.target.checked);
    panel.appendChild(blockEl);
  });
}

function buildLookalikes() {
  const list = $("lookalike-list");
  LOOKALIKES.forEach(({ name, sets }) => {
    const group = document.createElement("div");
    group.className = "lookalike-group";
    group.innerHTML = `<div class="lookalike-title">${name}</div>`;
    const chips = document.createElement("div");
    chips.className = "lookalike-chips";
    sets.forEach((set) => {
      const keys = [...set].map((kana) => kanaToKey.get(kana));
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "lookalike-chip";
      chip.dataset.keys = keys.join("|");
      chip.innerHTML =
        `<span class="chip-kana" lang="ja">${[...set].join(" ")}</span>` +
        `<span class="chip-romaji">${keys.map((k) => parseKey(k).romaji).join(" / ")}</span>`;
      chip.onclick = () => toggleKeys(keys);
      chips.appendChild(chip);
    });
    group.appendChild(chips);
    list.appendChild(group);
  });
}

// ---- Selection ----------------------------------------------------------------

function chartKeys(selector, root = document) {
  const els = root.matches?.(selector) ? [root] : [];
  return [...els, ...root.querySelectorAll(selector)]
    .flatMap((el) => (el.classList.contains("kana-cell") ? [el] : [...el.querySelectorAll(".kana-cell")]))
    .map((el) => el.dataset.key);
}

function selectKeys(keys, on) {
  keys.forEach((key) => (on ? selected.add(key) : selected.delete(key)));
  refreshSelection();
}

// Select all of them, or deselect them if they're all selected already
function toggleKeys(keys) {
  selectKeys(keys, !keys.every((key) => selected.has(key)));
}

function refreshSelection() {
  document.querySelectorAll(".kana-cell").forEach((cell) => {
    cell.classList.toggle("selected", selected.has(cell.dataset.key));
  });
  document.querySelectorAll(".chart-block").forEach((block) => {
    const keys = chartKeys(".kana-cell", block);
    const n = keys.filter((key) => selected.has(key)).length;
    const cb = block.querySelector(".block-cb");
    cb.checked = n === keys.length;
    cb.indeterminate = n > 0 && n < keys.length;
    block.querySelector(".block-count").textContent = `${n}/${keys.length}`;
  });
  document.querySelectorAll(".lookalike-chip").forEach((chip) => {
    const keys = chip.dataset.keys.split("|");
    chip.classList.toggle("selected", keys.every((key) => selected.has(key)));
  });
  ["h", "k"].forEach((type) => {
    const n = [...selected].filter((key) => key.startsWith(`${type}:`)).length;
    document.querySelector(`[data-tab="${type}"] .tab-count`).textContent = n ? n : "";
  });
  updateCounts();
  saveSettings();
}

function selectTab(tab) {
  document.querySelectorAll('[role="tab"]').forEach((btn) => {
    const active = btn.dataset.tab === tab;
    btn.setAttribute("aria-selected", active);
    btn.tabIndex = active ? 0 : -1;
    $(`panel-${btn.dataset.tab}`).hidden = !active;
  });
}

function sessionPool() {
  const pool = radioValue("pool");
  const now = Date.now();
  if (pool === "due") return [...srs.keys()].filter((key) => isDue(srs.get(key), now));
  if (pool === "weak") return [...srs.keys()].filter((key) => isWeak(srs.get(key)));
  return [...selected];
}

function updateCounts() {
  const limit = radioValue("limit");
  const size = sessionPool().length;
  const cards = limit === "all" ? size : Math.min(size, Number(limit));
  $("selected-count").textContent = `(${selected.size} selected)`;
  $("sessionStartButton").textContent = `Start Session (${cards})`;
}

let statusTimer = null;
function showStatus(msg) {
  const el = $("status-msg");
  el.textContent = msg;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    el.textContent = "";
  }, 3000);
}

// ---- Session ------------------------------------------------------------------

function celebrate(accuracy) {
  if (!window.confetti) return;
  // Bigger party for a better score
  const scale = accuracy >= 100 ? 1 : accuracy >= 80 ? 0.6 : 0.3;
  const count = (n) => Math.round(n * scale);
  const base = { zIndex: 400, disableForReducedMotion: true, ticks: 250 };
  confetti({ ...base, particleCount: count(220), spread: 80, startVelocity: 45, origin: { y: 0.6 } });
  confetti({ ...base, particleCount: count(90), angle: 60, spread: 55, origin: { x: 0, y: 0.85 } });
  confetti({ ...base, particleCount: count(90), angle: 120, spread: 55, origin: { x: 1, y: 0.85 } });
}

function showSessionModal(completed) {
  const seen = sessionSeen;
  const correct = seen - sessionWrong;
  const accuracy = seen > 0 ? Math.round((correct / seen) * 100) : 0;

  $("modalTitle").textContent = completed ? "Session complete! 🎉" : "Session ended";
  $("modalStats").innerHTML =
    `<dt>Cards in deck</dt><dd>${sessionTotal}</dd>` +
    `<dt>Cards seen</dt><dd>${seen}</dd>` +
    `<dt>Marked wrong</dt><dd>${sessionWrong}</dd>` +
    `<dt>Accuracy</dt><dd>${accuracy}%</dd>`;
  const retryBtn = $("modalRetry");
  retryBtn.hidden = sessionMissed.size === 0;
  retryBtn.textContent = `Retry missed (${sessionMissed.size})`;
  $("sessionModal").classList.add("active");
  $("modalDone").focus();
  if (completed) celebrate(accuracy);
}

function closeModal() {
  $("sessionModal").classList.remove("active");
}

function startSession() {
  const pool = sessionPool();
  if (pool.length === 0) {
    const poolName = radioValue("pool");
    showStatus(
      poolName === "due"
        ? "Nothing is due for review."
        : poolName === "weak"
          ? "No weak characters right now."
          : "Select at least one character.",
    );
    return;
  }

  const limit = radioValue("limit");
  let picked = pool;
  if (limit !== "all") {
    const now = Date.now();
    // Shuffle first so ties within a priority level are random
    picked = shuffle(pool)
      .sort((a, b) => priority(a, now) - priority(b, now))
      .slice(0, Number(limit));
  }
  beginDeck(picked);
}

function retryMissed() {
  const pool = [...sessionMissed];
  closeModal();
  if (pool.length > 0) beginDeck(pool);
}

function beginDeck(pool) {
  direction = radioValue("dir");
  answerMode = radioValue("mode");
  deck = shuffle(pool);
  cardIndex = 0;
  revealed = false;
  history = [];
  sessionMissed = new Set();
  sessionWrong = 0;
  sessionSeen = 0;
  sessionTotal = deck.length;
  $("flashcard-area").classList.add("active");
  showCard();
  if (!isTouch && !isTyping()) $("card").focus();
}

function endSession() {
  $("flashcard-area").classList.remove("active");
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

function isTyping() {
  return answerMode === "type" && cardDirection === "jp2en";
}

function cardStatus(key) {
  const entry = srs.get(key);
  if (!entry) return "new";
  if (isWeak(entry)) return `⚑ weak · missed ${entry.wrong}×`;
  return `level ${entry.box}/${SRS_MAX_BOX}`;
}

function showCard(dirOverride) {
  if (cardIndex >= deck.length) {
    sessionSeen = cardIndex;
    $("flashcard-area").classList.remove("active");
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
  const promptEl = $("card-prompt");
  const answerEl = $("card-answer");
  promptEl.textContent = cardDirection === "jp2en" ? kana : romaji;
  promptEl.lang = cardDirection === "jp2en" ? "ja" : "en";
  answerEl.textContent = "";
  answerEl.lang = cardDirection === "jp2en" ? "en" : "ja";
  answerEl.className = "";
  $("card-alt").textContent = "";

  // In EN -> JP the romaji alone doesn't say which script to answer in,
  // so the label is always shown there; for JP -> EN it's optional
  const typeEl = $("card-type");
  typeEl.hidden = cardDirection !== "en2jp" && !$("show-type").checked;
  typeEl.dataset.type = type;
  typeEl.textContent = type === "h" ? "ひらがな · hiragana" : "カタカナ · katakana";

  const typing = isTyping();
  $("type-form").hidden = !typing;
  $("card-actions").hidden = typing;
  $("kbd-hint").hidden = typing;
  if (typing) {
    $("type-input").value = "";
    $("type-input").focus();
  }
  $("card-hint").textContent = typing
    ? "type the romaji, then Enter"
    : isTouch
      ? "tap to reveal · swipe → correct, ← wrong"
      : "click to reveal";
  $("progress").textContent = `Card ${cardIndex + 1} / ${deck.length} · ${cardStatus(key)}`;
  $("progress-fill").style.width = `${(cardIndex / deck.length) * 100}%`;
  $("undoButton").disabled = history.length === 0;
}

function showAnswer() {
  const { romaji, kana } = parseKey(deck[cardIndex]);
  $("card-answer").textContent = cardDirection === "jp2en" ? romaji : kana;
  const alts = cardDirection === "jp2en" ? ROMAJI_ALTERNATES[romaji] : null;
  $("card-alt").textContent = alts ? `also: ${alts.join(", ")}` : "";
}

function handleCardClick() {
  if (busy) return;
  if (isTyping()) {
    $("type-input").focus();
    return;
  }
  if (!revealed) {
    showAnswer();
    $("card-hint").textContent = isTouch
      ? "tap or swipe → if correct, ← if wrong"
      : "click again to mark correct & next";
    revealed = true;
  } else {
    markCorrect();
  }
}

function normalizeRomaji(text) {
  return text.trim().toLowerCase().replace(/[\s'’-]/g, "");
}

function checkTyped(e) {
  e.preventDefault();
  if (busy) return;
  const typed = normalizeRomaji($("type-input").value);
  if (!typed) return;

  const { romaji } = parseKey(deck[cardIndex]);
  const accepted = [romaji, ...(ROMAJI_ALTERNATES[romaji] || [])];
  if (accepted.includes(typed)) {
    showAnswer();
    $("card-answer").className = "answer-right";
    $("card-hint").textContent = "";
    busy = true;
    setTimeout(() => {
      busy = false;
      markCorrect();
    }, 450);
  } else {
    markWrong(1500);
    $("card-answer").className = "answer-wrong";
    $("card-hint").textContent = `you typed “${typed}”`;
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
    srsPrev: srs.has(key) ? { ...srs.get(key) } : null,
  });
}

function undo() {
  if (busy || history.length === 0) return;
  const snap = history.pop();
  deck.length = snap.deckLength; // drops the re-queued copy after a "wrong"
  cardIndex = snap.cardIndex;
  sessionWrong = snap.sessionWrong;
  if (!snap.wasMissed) sessionMissed.delete(snap.key);
  if (snap.srsPrev) srs.set(snap.key, snap.srsPrev);
  else srs.delete(snap.key);
  srsChanged();
  showCard(snap.cardDirection);
}

function flashCard(cls) {
  const cardEl = $("card");
  cardEl.classList.remove(cls);
  void cardEl.offsetWidth; // force reflow so re-triggering replays the animation
  cardEl.classList.add(cls);
  cardEl.addEventListener("animationend", () => cardEl.classList.remove(cls), { once: true });
}

function markCorrect() {
  if (busy) return;
  flashCard("correct");
  const key = deck[cardIndex];
  pushHistory(key);
  // A card missed earlier this session only counts as a miss
  if (!sessionMissed.has(key)) {
    recordCorrect(key);
    srsChanged();
  }
  cardIndex++;
  showCard();
}

// holdMs: how long the answer stays up before the next card
function markWrong(holdMs = 500) {
  if (busy) return;
  flashCard("wrong");
  const key = deck[cardIndex];
  pushHistory(key);
  recordWrong(key);
  sessionMissed.add(key);
  sessionWrong++;
  srsChanged();
  deck.push(key);
  cardIndex++;

  if (!revealed) {
    // Show the answer briefly before advancing to the next card
    showAnswer();
    $("card-hint").textContent = "";
    busy = true;
    setTimeout(() => {
      busy = false;
      showCard();
    }, holdMs);
  } else {
    showCard();
  }
}

// ---- Review -------------------------------------------------------------------

function renderReview() {
  const now = Date.now();
  const entries = [...srs.entries()];
  const weak = entries.filter(([, e]) => isWeak(e)).sort((a, b) => b[1].wrong - a[1].wrong);
  const due = entries.filter(([, e]) => isDue(e, now)).length;
  const learned = entries.filter(([, e]) => e.box >= 1).length;
  $("review-summary").textContent = `(${learned} learned · ${due} due · ${weak.length} weak)`;
  $("resetProgressButton").hidden = srs.size === 0;

  const el = $("weak-list");
  if (weak.length === 0) {
    el.innerHTML = `<p class="panel-note">${
      srs.size ? "No weak characters. Nice." : "Practise a few cards to start tracking progress."
    }</p>`;
    return;
  }
  let html =
    '<table><tr><th>Kana</th><th>Romaji</th><th>Missed</th><th><span class="visually-hidden">Remove</span></th></tr>';
  weak.forEach(([key, { wrong }]) => {
    const { romaji, kana } = parseKey(key);
    html += `<tr>
        <td class="weak-kana" lang="ja">${kana}</td>
        <td>${romaji}</td>
        <td>${wrong}</td>
        <td><button data-remove-key="${key}" title="Reset this character">×</button></td>
      </tr>`;
  });
  html += "</table>";
  el.innerHTML = html;
}

function removeSrs(key) {
  srs.delete(key);
  srsChanged();
}

function resetProgress() {
  if (!confirm("Reset all review progress? This can't be undone.")) return;
  srs.clear();
  srsChanged();
}

// ---- Swipe -------------------------------------------------------------------
// Swipe right = correct, swipe left = wrong. Dragging is handled by interact.js,
// the spring-back / fly-out / enter animations by Motion. Taps still go through
// handleCardClick.

const SWIPE_THRESHOLD = 0.25; // fraction of card width
let swipeX = 0;
let swipeAnim = null;
let swipeReady = false;
let lastSwipeAt = 0;

function setSwipeVisual(dx, opacity = 1) {
  const cardEl = $("card");
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
  const cardEl = $("card");
  swipeX = 0;
  cardEl.style.transform = "";
  cardEl.style.opacity = "";
  cardEl.style.removeProperty("--swipe-right");
  cardEl.style.removeProperty("--swipe-left");
  cardEl.classList.remove("swipe-ready-right", "swipe-ready-left");
}

function releaseSwipe() {
  lastSwipeAt = Date.now();
  const cardEl = $("card");
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
  buzz(dir > 0 ? 15 : [20, 40, 20]);
  busy = true;
  swipeAnim = Motion.animate(swipeX, target, {
    duration: 0.22,
    ease: "easeIn",
    onUpdate: (v) => setSwipeVisual((swipeX = v), 1 - Math.abs(v / target)),
  });
  swipeAnim.then(() => {
    clearSwipeVisual();
    busy = false;
    if (!$("flashcard-area").classList.contains("active")) return;
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
  // Swiping is an extra; buttons and taps work without these libraries
  if (!window.interact || !window.Motion) return;
  interact("#card").draggable({
    startAxis: "x",
    lockAxis: "x",
    cursorChecker: () => null,
    listeners: {
      start(e) {
        if (busy) return e.interaction.stop();
        swipeAnim?.stop();
        swipeReady = false;
      },
      move(e) {
        if (busy) return;
        setSwipeVisual((swipeX += e.dx));
        // A small tick when the swipe would commit
        const ready = Math.abs(swipeX) >= $("card").offsetWidth * SWIPE_THRESHOLD;
        if (ready && !swipeReady) buzz(8);
        swipeReady = ready;
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
  const btn = $("themeToggle");
  // Show what clicking will switch to
  btn.innerHTML = dark ? ICON_SUN : ICON_MOON;
  btn.title = btn.ariaLabel = dark ? "Switch to light theme" : "Switch to dark theme";
  // Keep the browser / installed-app chrome in step with the page
  const bg = getComputedStyle(document.body).backgroundColor;
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => (m.content = bg));
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
  if ($("sessionModal").classList.contains("active")) {
    if (e.key === "Escape") closeModal();
    return;
  }
  if (!$("flashcard-area").classList.contains("active")) return;

  if (e.key === "Escape") {
    e.preventDefault();
    endSession();
    return;
  }
  // While typing an answer, keys belong to the input
  if (e.target instanceof HTMLInputElement) return;

  if ([" ", "ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Backspace"].includes(e.key)) {
    e.preventDefault();
  }

  if (e.key === "Backspace" || e.key === "z" || e.key === "Z") {
    undo();
  } else if (e.key === " " || e.key === "ArrowDown" || e.key === "ArrowRight") {
    handleCardClick();
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    markWrong();
  }
}

function registerEvents() {
  document.querySelectorAll('input[name="dir"], input[name="mode"]').forEach((n) =>
    n.addEventListener("change", saveSettings),
  );
  document.querySelectorAll('input[name="limit"], input[name="pool"]').forEach((n) =>
    n.addEventListener("change", () => {
      updateCounts();
      saveSettings();
    }),
  );
  $("show-type").addEventListener("change", saveSettings);

  document.querySelectorAll('[role="tab"]').forEach((tab) =>
    tab.addEventListener("click", () => {
      selectTab(tab.dataset.tab);
      saveSettings();
    }),
  );

  const buttonClickActionMap = {
    sessionStartButton: startSession,
    selectAllButton: () => selectKeys(chartKeys(".kana-cell"), true),
    clearSelectionButton: () => selectKeys([...selected], false),
    resetProgressButton: resetProgress,
    card: onCardClick,
    markWrongButton: () => markWrong(),
    markCorrectButton: () => markCorrect(),
    dontKnowButton: () => markWrong(1500),
    endSessionButton: endSession,
    modalClose: closeModal,
    modalDone: closeModal,
    modalRetry: retryMissed,
    undoButton: undo,
    themeToggle: toggleTheme,
  };

  for (const [buttonId, action] of Object.entries(buttonClickActionMap)) {
    $(buttonId)?.addEventListener("click", action);
  }

  $("type-form").addEventListener("submit", checkTyped);

  $("weak-list").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-remove-key]");
    if (btn) removeSrs(btn.dataset.removeKey);
  });

  // Clicking the dimmed backdrop closes the modal
  $("sessionModal").addEventListener("click", (e) => {
    if (e.target.id === "sessionModal") closeModal();
  });

  systemDark.addEventListener("change", renderThemeToggle);
  document.addEventListener("keydown", handleKeydown);
  setupSwipe();
}

// ---- Init ---------------------------------------------------------------------

buildCharts();
selectTab("h");
loadSettings();
renderReview();
renderThemeToggle();
registerEvents();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

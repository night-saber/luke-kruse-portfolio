/* Luke Kruse — portfolio. Vanilla JS, no dependencies.
 *
 * The story this site tells: a kid who started writing code in elementary
 * school, years before AI could write it for him. Self-taught, project by
 * project, on Khan Academy and Scratch and then real engines.
 *
 * NOTE: Khan Academy / Scratch project entries are marked `needsDetail: true`
 * until the specifics are pulled from the source (email archive / profile).
 * They deliberately claim no invented names, dates or view counts.
 */

const TIMELINE = [
  {
    era: "Elementary school — it starts",
    period: "Before AI",
    kind: "before",
    body: "I started writing code in elementary school — years before AI could write it for me. No autocomplete, no chatbot, no \"just ask the model.\" Just Khan Academy's JavaScript and Processing lessons: loops, variables, conditionals, functions, and the slow thrill of making the computer do exactly what I pictured.",
    tags: ["Khan Academy", "JavaScript", "Processing"],
  },
  {
    era: "Building games on Scratch",
    period: "Before AI",
    kind: "before",
    body: "Scratch was where the lessons turned into games. Sprites, variables, broadcasts, clones, custom blocks — I learned how real systems fit together by building them: score counters, enemies, levels, game loops. Every bug was mine to find. That debugging instinct is still the most useful thing I own.",
    tags: ["Scratch", "Game design", "Debugging"],
  },
  {
    era: "Real engines, real code",
    period: "2025 – mid 2026",
    kind: "before",
    body: "I moved off block editors into typed languages and actual engines. EchoRouge in Unity with C# and the Universal Render Pipeline, then three Godot projects — a full platformer, a tile-based game, and a browser shooter. Documentation, error messages and stubbornness. Still no AI writing it for me.",
    tags: ["Unity", "C#", "Godot", "GDScript"],
  },
  {
    era: "Systems other people play on",
    period: "mid 2026",
    kind: "middle",
    body: "Minecraft modding taught me to ship. A full Skript enchantment and upgrade suite, a Fabric backpack mod, custom item sets and resource packs — systems that had to stay stable under real players, not just run once on my screen.",
    tags: ["Skript", "Fabric", "Resource Packs"],
  },
  {
    era: "Building with AI — on purpose",
    period: "late 2026",
    kind: "after",
    body: "By the time AI tools could write boilerplate, I already knew what good code looked like because I'd written it by hand for years. Now I use AI the way I'd use any power tool: I architect, direct and verify. Plugins with custom GUIs and 3D models, multi-agent AI living in a Minecraft world, a local AI music studio. The bottleneck is the idea, not the typing.",
    tags: ["Java", "Paper", "AI/ML", "Multi-agent"],
  },
];

const PROJECTS = [
  /* -------------------------------------------------- the pre-AI foundation */
  {
    name: "Khan Academy — JavaScript & Processing",
    icon: "∑", category: "Where I started", year: "Elementary school", featured: true,
    era: "before", needsDetail: true,
    blurb: "My first real programming: JavaScript and Processing sketches on Khan Academy, in elementary school — years before AI could write code for me. Loops, variables, conditionals, functions, animation and interaction, built line by line.",
    body: "This is where I learned to program. Khan Academy's JavaScript and Processing environment taught me the fundamentals the hard way — by typing them, breaking them, and fixing them myself. No autocomplete, no chatbot, no \"just ask the model.\" Every concept landed because I had to build with it. The projects ranged from drawing and animation to small interactive sketches, and the habit that stuck was this: when it doesn't work, you read it until you find out why.",
    highlights: [
      "Started programming in elementary school — before AI tooling existed for students",
      "Learned core JavaScript fundamentals by writing them, not generating them",
      "Built animated and interactive sketches in Processing",
      "Developed the debugging habit that everything since has relied on",
    ],
    tags: ["JavaScript", "Processing", "Fundamentals"],
  },
  {
    name: "Scratch — games, from scratch",
    icon: "🐱", category: "Where I started", year: "Elementary school", featured: true,
    era: "before", needsDetail: true,
    blurb: "Games built block by block on Scratch: sprites, variables, broadcasts, clones and custom blocks. Score counters, enemies, levels and game loops — real systems, assembled by hand.",
    body: "Scratch is where code became games. I learned how separate parts of a system talk to each other — broadcasts firing, clones multiplying, variables tracking state — by building scores, enemies, levels and loops and then watching them break in interesting ways. Block-based or not, the thinking is the same as any language: decompose the problem, build the smallest thing that works, then make it better. Every bug was mine to find, and finding them is still the skill I use most.",
    highlights: [
      "Built playable games with real game loops, scoring and levels",
      "Learned event-driven thinking with broadcasts and clones",
      "Made custom blocks — abstraction, before I knew the word for it",
      "Debugged everything myself, by hand, with no AI assistance",
    ],
    tags: ["Scratch", "Game design", "Logic"],
  },

  /* -------------------------------------------------------- engines, pre-AI */
  {
    name: "EchoRouge", icon: "🎮", category: "Games", year: "2025–26", featured: true,
    era: "before",
    blurb: "A 2D game in Unity using the Universal Render Pipeline — input system, tilemaps, sprite animation and scene setup built from the ground up, written by hand in C#.",
    body: "My first serious engine project, and my first typed language. I set up URP, wired the new Input System, built tilemap and sprite-animation pipelines, and assembled scenes by hand — learning C# and the engine together, the slow way. No AI wrote this; it's documentation, forum posts and a lot of red error text.",
    highlights: ["Unity 6 with the Universal Render Pipeline", "New Input System and 2D animation pipelines", "Tilemap and sprite systems built by hand", "Written in C# — my first compiled language"],
    tags: ["Unity", "C#", "URP", "2D"],
  },
  {
    name: "First Game", icon: "👾", category: "Games", year: "2026", era: "before",
    blurb: "A complete Godot platformer: player controller, slimes, coins, kill zones, a game manager and music — exported to a standalone Windows build.",
    body: "A finished, exported game, not a prototype. Movement, enemies, collectibles, death and respawn, a game manager tying it together, and music — all shipped as a standalone .exe. Finishing is a skill, and this is where I practised it.",
    highlights: ["Full player controller and enemy AI", "Coins, kill zones and respawn logic", "Game manager and music system", "Exported standalone Windows build"],
    tags: ["Godot", "GDScript", "Platformer"],
  },
  {
    name: "Sproutails", icon: "🌱", category: "Games", year: "2026", era: "before",
    blurb: "A Godot game with custom tilesets, a player scene and input handling — a cosy, sprite-driven project.",
    body: "A gentler project built around custom tilesets and a clean player scene — exploring tile-based world building, terrain rules and input architecture in Godot.",
    highlights: ["Custom tileset with terrain rules", "Reusable player scene", "Input event architecture"],
    tags: ["Godot", "GDScript", "Tilesets"],
  },
  {
    name: "NeonShooter", icon: "🔫", category: "Games", year: "2026", era: "before",
    blurb: "A browser game built with plain HTML, CSS and JavaScript — no engine, no framework.",
    body: "Sometimes the fastest way to understand something is to build it with nothing but the browser. NeonShooter is a canvas game written directly in JavaScript — the same language I started with on Khan Academy, years earlier.",
    highlights: ["Pure HTML, CSS and JavaScript", "Canvas rendering and a hand-written game loop", "No engine, no dependencies"],
    tags: ["JavaScript", "HTML5", "Canvas"],
  },

  /* ------------------------------------------------------------------- web */
  {
    name: "Voice Song Studio", icon: "🎙️", category: "Web & Apps", year: "2026",
    blurb: "A self-hosted web app that renders an original song with your own voice on the lead — local MusicGen backing, singing synthesis and zero-shot voice cloning. No paid APIs.",
    body: "Record or upload your voice, write lyrics, pick a style, and get a finished track with your timbre on the lead. A Next.js front end talks to a FastAPI backend that generates a backing track with MusicGen, synthesises a vocal melody, transfers your voice's spectral envelope onto it, then ducks, reverbs and limits the mix. The maths here is the fun part — it's signal processing end to end.",
    highlights: ["Local MusicGen backing-track generation", "Formant singing synthesis from lyrics", "Zero-shot voice cloning from a recording", "Mastering chain: duck, reverb, limit, export"],
    tags: ["Next.js", "FastAPI", "Python", "AI/ML"],
  },
  {
    name: "Page2Sheet", icon: "📄", category: "Web & Apps", year: "2026",
    blurb: "A Chrome extension (Manifest V3) that extracts text from any page, structures it with Gemini and downloads a clean CSV.",
    body: "Grab any webpage, hand the text to Gemini with a structuring prompt, and get back a tidy CSV. Built on Manifest V3 with the scripting and storage APIs.",
    highlights: ["Manifest V3 extension", "Gemini API for structuring", "One-click CSV export"],
    tags: ["Chrome Extension", "JavaScript", "Gemini API"],
  },

  /* ------------------------------------------- minecraft (deliberately brief) */
  {
    name: "Minecraft plugin work", icon: "⛏️", category: "Also", year: "2026",
    blurb: "A smaller slice of my work: Java plugins for Paper (mech suits with abilities and 3D models, a 315-recipe item-fusion table, relic weapons), a Fabric backpack mod, and a 40+ enchantment Skript suite.",
    body: "I keep this brief on purpose — it's newer than the rest and I'd rather be judged on the decade of hand-written code that came first. Still, it's real shipped work: Paper plugins with custom GUIs, data components and hand-built 3D models; a Fabric mod; and a large Skript enchantment and upgrade suite that ran on live servers.",
    highlights: ["Java plugins for Paper with custom GUIs and 3D models", "Fabric modding and custom resource packs", "A 40+ enchant suite that ran under real players"],
    tags: ["Java", "Paper", "Fabric", "Skript"],
  },
];

const INTERESTS = [
  { glyph: "🥋", title: "Jiu jitsu", body: "Time on the mat taught me the same lesson code did: fundamentals beat flash, and the person who drills the basics patiently usually wins. Position before submission — structure before cleverness." },
  { glyph: "∑", title: "Math", body: "Math is the through-line in everything I build. Attack-speed curves, drop-rate balancing, procedural generation, signal processing for voice cloning — the interesting part is almost always the model underneath." },
  { glyph: "⌨️", title: "Coding", body: "From Khan Academy sketches in elementary school to multi-agent worlds. I like systems deep enough to be interesting and polished enough that people actually want to use them." },
  { glyph: "🎮", title: "Video games", body: "Playing and building. Games are where all of it meets — the maths, the art, the systems design, and the moment a player discovers something you made." },
];

const STACK = [
  { group: "Languages", items: ["JavaScript", "Java", "C#", "Python", "GDScript", "Skript", "HTML/CSS"] },
  { group: "Where I started", items: ["Khan Academy", "Processing", "Scratch", "p5-style sketches"] },
  { group: "Game engines", items: ["Unity", "Godot", "HTML5 Canvas"] },
  { group: "Web & backend", items: ["Next.js", "React", "FastAPI", "Node.js", "Tailwind"] },
  { group: "Minecraft", items: ["Paper API", "Fabric", "Data Components", "Resource Packs", "Blockbench"] },
  { group: "Build & tooling", items: ["Maven", "Gradle", "Git", "IntelliJ", "VS Code"] },
];

/* ------------------------------------------------------------------ utils */
const $ = (s) => document.querySelector(s);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};
const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------- hero */
function renderStats() {
  const stats = [
    { n: "10+", l: "Years coding" },
    { n: "3", l: "Pre-AI platforms" },
    { n: "5", l: "Game engines" },
    { n: PROJECTS.length + "", l: "Projects here" },
  ];
  const wrap = $("#heroStats");
  stats.forEach((s) => {
    const li = el("li");
    const num = el("span", "n", "0");
    num.dataset.target = s.n;
    li.appendChild(num);
    li.appendChild(el("span", "l", s.l));
    wrap.appendChild(li);
  });
  const facts = [
    ["Started coding", "Elementary school"],
    ["First platforms", "Khan Academy · Scratch"],
    ["Coding before AI", "Yes — by years"],
    ["Primary languages", "JavaScript · Java · C#"],
    ["Off the clock", "Jiu jitsu · Math"],
  ];
  const fw = $("#facts");
  facts.forEach(([k, v]) => {
    const li = el("li");
    li.appendChild(el("span", "k", k));
    li.appendChild(el("span", "v", v));
    fw.appendChild(li);
  });
}

function countUp() {
  document.querySelectorAll(".hero-stats .n").forEach((node) => {
    const raw = node.dataset.target || "0";
    const suffix = raw.replace(/[0-9]/g, "");
    const target = parseInt(raw, 10) || 0;
    if (prefersReduced || target === 0) { node.textContent = raw; return; }
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 26));
    const tick = () => {
      cur += step;
      if (cur >= target) { node.textContent = target + suffix; return; }
      node.textContent = cur + suffix;
      requestAnimationFrame(tick);
    };
    tick();
  });
}

/* ------------------------------------------------------------- work grid */
let activeFilter = "All";
let query = "";

function categories() {
  const set = ["All"];
  PROJECTS.forEach((p) => { if (!set.includes(p.category)) set.push(p.category); });
  return set;
}

function renderFilters() {
  const wrap = $("#filters");
  wrap.innerHTML = "";
  categories().forEach((cat) => {
    const b = el("button", "chip", cat);
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(cat === activeFilter));
    b.addEventListener("click", () => { activeFilter = cat; renderFilters(); renderGrid(); });
    wrap.appendChild(b);
  });
}

function matches(p) {
  if (activeFilter !== "All" && p.category !== activeFilter) return false;
  if (!query) return true;
  const hay = (p.name + " " + p.blurb + " " + p.body + " " + p.tags.join(" ") + " " + p.category).toLowerCase();
  return hay.includes(query);
}

function renderGrid() {
  const grid = $("#grid");
  grid.innerHTML = "";
  const list = PROJECTS.filter(matches);
  $("#empty").hidden = list.length > 0;
  list.forEach((p, i) => {
    const card = el("button", "card");
    card.type = "button";
    if (p.era === "before") card.classList.add("card-before");
    card.style.animation = prefersReduced ? "none" : `fade .4s ease ${i * 0.03}s both`;
    if (p.featured) card.appendChild(el("span", "badge-featured", "Pre-AI"));
    const top = el("div", "card-top");
    top.appendChild(el("div", "card-icon", p.icon));
    top.appendChild(el("span", "tag", p.year));
    card.appendChild(top);
    card.appendChild(el("h3", null, p.name));
    card.appendChild(el("p", null, p.blurb));
    const chips = el("div", "chips");
    p.tags.forEach((t) => chips.appendChild(el("span", null, t)));
    card.appendChild(chips);
    card.appendChild(el("span", "card-cta", "View details →"));
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------------- modal */
let lastFocus = null;
function openModal(p) {
  lastFocus = document.activeElement;
  $("#modalIcon").textContent = p.icon;
  $("#modalTitle").textContent = p.name;
  $("#modalMeta").textContent = `${p.category} · ${p.year}`;
  $("#modalBody").textContent = p.body;
  const hl = $("#modalHighlights");
  hl.innerHTML = "";
  (p.highlights || []).forEach((h) => hl.appendChild(el("div", null, h)));
  const tags = $("#modalTags");
  tags.innerHTML = "";
  p.tags.forEach((t) => tags.appendChild(el("span", null, t)));
  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
  $(".modal-close").focus();
}
function closeModal() {
  $("#modal").hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

/* ------------------------------------------------------------- timeline */
function renderTimeline() {
  const wrap = $("#timeline");
  wrap.innerHTML = "";
  TIMELINE.forEach((t) => {
    const row = el("div", `tl-item tl-${t.kind} reveal`);
    row.appendChild(el("div", "tl-dot"));
    const body = el("div", "tl-body");
    const head = el("div", "tl-head");
    head.appendChild(el("h3", null, t.era));
    head.appendChild(el("span", "tl-period", t.period));
    body.appendChild(head);
    body.appendChild(el("p", null, t.body));
    const chips = el("div", "chips");
    t.tags.forEach((x) => chips.appendChild(el("span", null, x)));
    body.appendChild(chips);
    row.appendChild(body);
    wrap.appendChild(row);
  });
}

function renderInterests() {
  const wrap = $("#interests");
  INTERESTS.forEach((it) => {
    const card = el("article", "interest reveal");
    card.appendChild(el("span", "glyph", it.glyph));
    card.appendChild(el("h3", null, it.title));
    card.appendChild(el("p", null, it.body));
    card.appendChild(el("div", "rings"));
    wrap.appendChild(card);
  });
}

function renderStack() {
  const wrap = $("#stackGrid");
  wrap.innerHTML = "";
  STACK.forEach((s) => {
    const card = el("div", "stack-card reveal");
    card.appendChild(el("h3", null, s.group));
    const ul = el("ul");
    s.items.forEach((i) => ul.appendChild(el("li", null, i)));
    card.appendChild(ul);
    wrap.appendChild(card);
  });
}

/* -------------------------------------------------------------- particles */
function initParticles() {
  const canvas = $("#particles");
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext("2d");
  let w, h, dots, raf;
  const DPR = Math.min(2, devicePixelRatio || 1);
  function size() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * DPR; canvas.height = h * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    const count = Math.min(70, Math.round((w * h) / 24000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.7 + .6,
    }));
  }
  function accent() {
    return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#6ee7ff";
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const col = accent();
    dots.forEach((d) => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
    });
    ctx.strokeStyle = col; ctx.lineWidth = 1;
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
        if (dist < 118) {
          ctx.globalAlpha = (1 - dist / 118) * .2;
          ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = .6; ctx.fillStyle = col;
    dots.forEach((d) => { ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill(); });
    raf = requestAnimationFrame(draw);
  }
  size(); draw();
  addEventListener("resize", () => { cancelAnimationFrame(raf); size(); draw(); });
}

/* ------------------------------------------------------------------ init */
function init() {
  $("#year").textContent = new Date().getFullYear();
  renderStats();
  renderFilters();
  renderGrid();
  renderTimeline();
  renderInterests();
  renderStack();
  initParticles();

  const stats = $("#heroStats");
  if (stats) new IntersectionObserver((es, o) => {
    if (es[0].isIntersecting) { countUp(); o.disconnect(); }
  }, { threshold: .3 }).observe(stats);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

  const nav = $("#nav"), toTop = $("#toTop");
  const sections = [...document.querySelectorAll("section[id]")];
  const links = [...document.querySelectorAll("[data-nav]")];
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 8);
    toTop.classList.toggle("show", scrollY > 700);
    let cur = "";
    sections.forEach((s) => { if (scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" }));

  let t;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(t);
    t = setTimeout(() => { query = e.target.value.trim().toLowerCase(); renderGrid(); }, 120);
  });

  document.querySelectorAll("[data-close]").forEach((n) => n.addEventListener("click", closeModal));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#modal").hidden) closeModal(); });

  $("#copyEmail")?.addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    try { await navigator.clipboard.writeText(email); }
    catch { const ta = el("textarea"); ta.value = email; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
    const note = $("#copied"); if (note) { note.hidden = false; setTimeout(() => { note.hidden = true; }, 1800); }
  });

  const root = document.documentElement;
  const saved = localStorage.getItem("lk-theme");
  if (saved) root.dataset.theme = saved;
  $("#themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("lk-theme", next);
  });

  addEventListener("pointermove", (e) => {
    root.style.setProperty("--glow-x", e.clientX + "px");
    root.style.setProperty("--glow-y", e.clientY + "px");
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", init);

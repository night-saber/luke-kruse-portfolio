/* Luke Kruse — portfolio. Vanilla JS, no dependencies. */

const PROJECTS = [
  {
    name: "HermesCraft", icon: "🤖", category: "Minecraft Plugins", year: "2026", featured: true,
    blurb: "Embodied AI agents that join a Minecraft world as real players — they chat, follow, gather, build, fight and remember across sessions. Built for the Nous Hermes hackathon.",
    body: "HermesCraft turns Hermes agents into in-world Minecraft players. Each character gets its own home directory, memory, session history, prompt and bot body, so one agent feels like a companion and a whole cast makes the world feel inhabited. It deliberately avoids privileged information — the bots perceive the world the way a fair player would.",
    highlights: ["Multi-agent: separate memory and identity per character", "Companion, Civilization and Landfolk play modes", "Mineflayer bot body behind a clean HTTP interface", "Built for the Nous Hermes hackathon"],
    tags: ["Java", "Node.js", "Mineflayer", "Multi-agent"],
  },
  {
    name: "Mech Armory", icon: "🦾", category: "Minecraft Plugins", year: "2026", featured: true,
    blurb: "Eight craftable mech suits, each with its own stats, one passive and two active abilities, plus three energy guns that fire bullet projectiles with particle trails.",
    body: "A full combat overhaul: eight suits with distinct armour, toughness and durability curves, a full-set passive each and two active abilities per suit (sixteen in total). Titan is the flight suit; Scout, Assault and Phantom are the fast movers. Guns fire real projectiles with per-weapon particle trails, and every piece has a hand-built 3D model.",
    highlights: ["8 suits · 16 active abilities · 1 passive each", "Titan Flight plus dash, blink, shockwave and more", "3 guns with projectile bullets and particle trails", "3D models for all 32 armour pieces and guns"],
    tags: ["Java", "Paper 1.21", "Data Components", "Resource Pack"],
  },
  {
    name: "Combiner", icon: "⚙️", category: "Minecraft Plugins", year: "2026", featured: true,
    blurb: "A redstone-charged table that fuses items together — 315 recipes. Two axes make a Battle Axe that swings at double attack speed.",
    body: "Place the Combiner, drop two items into its GUI, and take the fused result. Tools fuse with tools (axe + axe → Battle Axe, sword + axe → Cleaver), armour fuses with armour, and thirty hand-made specials sit on top — the Arbalest, Executioner, Starfall and more. Stats scale with the materials you put in.",
    highlights: ["315 recipes across tools, armour and specials", "Battle Axe swings at double attack speed", "Stats scale with the input materials", "Custom GUI, startup self-test, hand-drawn textures"],
    tags: ["Java", "Paper 1.21", "Custom GUI", "315 recipes"],
  },
  {
    name: "The Abyssal Fault", icon: "🔱", category: "Minecraft Plugins", year: "2026",
    blurb: "Symbiotic relic weapons with orbiting relics, an equip GUI, evolution stages and timed abilities. Comes with its own relic resource pack.",
    body: "Relic weapons that grow with you: equip them into relic slots, evolve them through stages, and fire timed abilities. Orbits and swings are driven by the relic you're carrying, and a companion resource pack gives each relic its own look.",
    highlights: ["Relic slots with a dedicated equip GUI", "Evolution stages and timed abilities", "Left-click launches orbiting relics", "Ships with the Abyssal Fault relic pack"],
    tags: ["Java", "Paper 1.21", "Abilities", "Resource Pack"],
  },
  {
    name: "DualWieldAnything", icon: "🗡️", category: "Minecraft Plugins", year: "2026",
    blurb: "Makes the offhand a genuinely usable second hand — a main-hand swing mirrors to the offhand, and sneak-right-click triggers its active use.",
    body: "Vanilla Minecraft only ever attacks with the main hand. This plugin temporarily moves the offhand item into the real main-hand slot so the server calculates damage from that item's own attributes and enchantments, then mirrors the attack. Sneak-right-click triggers the offhand's active use — food, bows, shields, potions — while normal interaction stays intact.",
    highlights: ["Offhand attacks use the item's real attributes", "Sneak-right-click triggers offhand active use", "Doesn't cancel vanilla interaction", "Built against Paper 26.2 with paperweight"],
    tags: ["Java", "Paper 26.2", "Gradle", "paperweight"],
  },
  {
    name: "UniversalFusion", icon: "🔗", category: "Minecraft Plugins", year: "2026",
    blurb: "An item-fusion plugin for Paper — combine items into upgraded variants through a custom system.",
    body: "An earlier take on item fusion, built with a clean Maven setup against the Paper API. A stepping stone that led to the Combiner's 315-recipe system.",
    highlights: ["Maven build against Paper 1.20.4", "Custom fusion logic", "Clean plugin.yml configuration"],
    tags: ["Java", "Paper 1.20.4", "Maven"],
  },
  {
    name: "Enchantment System", icon: "✨", category: "Skript", year: "2026", featured: true,
    blurb: "A full custom enchantment framework — 40+ enchants including Lifesteal, Grapple, Blink, Beheading, Explosive, Frost, Quake and Paralyze.",
    body: "Each enchant is its own script with its own trigger and effect logic, so they compose cleanly and stay easy to tune. It's the foundation the rest of the suite plugs into — combat, movement, mining and utility enchants all live here.",
    highlights: ["40+ individually scripted enchants", "Combat, movement, mining and utility families", "Modular — one file per enchant", "Includes a master registry script"],
    tags: ["Skript", "40+ enchants", "Combat", "RPG"],
  },
  {
    name: "Upgrade Systems", icon: "⬆️", category: "Skript", year: "2026",
    blurb: "A set of progression systems: Upgradeable Armor, Upgrade Mace, Upgrade Trident, Upgrade Yourself, God Items, God Trades, Buy Anything, Boss Rush and Mining Hunters.",
    body: "Progression is the hook that keeps players coming back. These scripts let gear and players themselves level up, add a boss-rush loop, and give a shop that will buy or sell almost anything.",
    highlights: ["Gear that levels up with use", "Player upgrades and god-tier items", "Boss Rush and Mining Hunters game loops", "Buy Anything economy hook"],
    tags: ["Skript", "Progression", "Economy", "Bosses"],
  },
  {
    name: "QoL & Stacking", icon: "🧰", category: "Skript", year: "2026",
    blurb: "Quality-of-life scripts and an infinite-stacking system used across the rest of the suite.",
    body: "The unglamorous plumbing that makes a server feel good: small conveniences plus an infinite-stacking system the other scripts rely on.",
    highlights: ["Infinite item stacking", "Quality-of-life conveniences", "Shared by the rest of the suite"],
    tags: ["Skript", "Utility"],
  },
  {
    name: "Backpacks Mod", icon: "🎒", category: "Mods & Packs", year: "2026",
    blurb: "A Fabric backpack mod built in MCreator — wearable storage with its own armour-layer textures and a custom build pipeline.",
    body: "Wearable storage that renders on the player, built on Fabric with a custom Gradle pipeline to place armour-layer textures where the game expects them.",
    highlights: ["Fabric mod for Minecraft 26.1.2", "Custom armour-layer textures", "Gradle build with a resource-copy step"],
    tags: ["Fabric", "Java 25", "MCreator", "Mod"],
  },
  {
    name: "Custom Item Sets", icon: "🖼️", category: "Mods & Packs", year: "2026",
    blurb: "Bespoke item sets defined from scratch — models, textures and set behaviour.",
    body: "Hand-built item sets with their own models and textures, iterated against the game's validation logs until they loaded clean.",
    highlights: ["Custom models and textures", "Iterated against in-game validation", "Reusable item-set template"],
    tags: ["Resource Pack", "Models", "Pixel Art"],
  },
  {
    name: "Resource Packs", icon: "📦", category: "Mods & Packs", year: "2026",
    blurb: "Several hand-built resource packs (HWFWM, the Template pack and the Abyssal Fault relic pack) with custom textures and pack metadata.",
    body: "Resource packs built from scratch — asset layouts, pack metadata and custom textures, including the relic pack that ships with the Abyssal Fault plugin.",
    highlights: ["Multiple packs including HWFWM and Template", "Correct pack formats and metadata", "Custom textures and icons"],
    tags: ["Resource Pack", "Textures"],
  },
  {
    name: "EchoRouge", icon: "🎮", category: "Games", year: "2025–26",
    blurb: "A 2D game in Unity using the Universal Render Pipeline — input system, tilemaps, sprite animation and scene setup built from the ground up.",
    body: "My first serious engine project. I set up URP, wired the new Input System, built tilemap and sprite-animation pipelines, and assembled scenes by hand — learning C# and the engine together.",
    highlights: ["Unity 6 with the Universal Render Pipeline", "New Input System and 2D animation", "Tilemap and sprite pipelines", "Built scene by scene in C#"],
    tags: ["Unity", "C#", "URP", "2D"],
  },
  {
    name: "First Game", icon: "👾", category: "Games", year: "2026",
    blurb: "A complete Godot platformer: player controller, slimes, coins, kill zones, a game manager and music, exported to a standalone Windows build.",
    body: "A finished, exported game — not a prototype. Movement, enemies, collectibles, death and respawn, a game manager tying it together, and music, all shipped as a standalone .exe.",
    highlights: ["Full player controller and enemy AI", "Coins, kill zones and respawn logic", "Game manager and music system", "Exported standalone Windows build"],
    tags: ["Godot", "GDScript", "Platformer"],
  },
  {
    name: "Sproutails", icon: "🌱", category: "Games", year: "2026",
    blurb: "A Godot game with custom tilesets, a player scene and input handling — a cosy, sprite-driven project.",
    body: "A gentler project built around custom tilesets and a clean player scene, exploring tile-based world building and input handling in Godot.",
    highlights: ["Custom tileset with terrain rules", "Reusable player scene", "Input event architecture"],
    tags: ["Godot", "GDScript", "Tilesets"],
  },
  {
    name: "NeonShooter", icon: "🔫", category: "Games", year: "2026",
    blurb: "A browser game built with plain HTML, CSS and JavaScript — no engine, no framework.",
    body: "Sometimes the fastest way to understand something is to build it with nothing but the browser. NeonShooter is a canvas game written directly in JavaScript.",
    highlights: ["Pure HTML, CSS and JavaScript", "Canvas rendering and game loop", "No engine, no dependencies"],
    tags: ["JavaScript", "HTML5", "Canvas"],
  },
  {
    name: "Voice Song Studio", icon: "🎙️", category: "Web & Apps", year: "2026",
    blurb: "A self-hosted web app that renders an original song with your own voice on the lead — local MusicGen backing, singing synthesis and zero-shot voice cloning. No paid APIs.",
    body: "Record or upload your voice, write lyrics, pick a style, and get a finished track with your timbre on the lead. A Next.js front end talks to a FastAPI backend that generates a backing track with MusicGen, synthesises a vocal melody, transfers your voice's spectral envelope onto it, then ducks, reverbs and limits the mix. A procedural fallback keeps the whole pipeline runnable even before model weights are downloaded.",
    highlights: ["Local MusicGen backing track generation", "Formant singing synthesis from lyrics", "Zero-shot voice cloning from a recording", "Mastering chain: duck, reverb, limit, export"],
    tags: ["Next.js", "FastAPI", "Python", "AI/ML"],
  },
  {
    name: "Page2Sheet", icon: "📄", category: "Web & Apps", year: "2026",
    blurb: "A Chrome extension (Manifest V3) that extracts text from any page, structures it with Gemini and downloads a clean CSV.",
    body: "Grab any webpage, hand the text to Gemini with a structuring prompt, and get back a tidy CSV. Built on Manifest V3 with the scripting and storage APIs.",
    highlights: ["Manifest V3 extension", "Gemini API for structuring", "One-click CSV export"],
    tags: ["Chrome Extension", "JavaScript", "Gemini API"],
  },
];

const TIMELINE = [
  {
    era: "The first lines", period: "Khan Academy", kind: "before",
    body: "Where it started — JavaScript and Processing sketches on Khan Academy: loops, shapes, variables, and the first taste of making a computer do exactly what I pictured. Learning to debug when there's no one to ask but yourself.",
    tags: ["JavaScript", "Processing"],
  },
  {
    era: "Learning to build games", period: "2025 – mid 2026", kind: "before",
    body: "Hand-written game code, line by line. EchoRouge in Unity with C# and the Universal Render Pipeline, then three Godot projects — a full platformer, a tile-based game, and a browser shooter. No AI assistance: documentation, error messages, and stubbornness.",
    tags: ["Unity", "C#", "Godot", "GDScript"],
  },
  {
    era: "Into the Minecraft ecosystem", period: "mid 2026", kind: "middle",
    body: "Moved into modding: a full Skript enchantment and upgrade suite, a Fabric backpack mod, custom item sets and resource packs. This is where I learned to ship systems other people actually play on — and to keep them stable.",
    tags: ["Skript", "Fabric", "Resource Packs"],
  },
  {
    era: "Building with AI", period: "late 2026", kind: "after",
    body: "The pace changed. Paper plugins with custom GUIs, data components and 3D models; multi-agent AI living inside a Minecraft world; a local AI music studio. The bottleneck is now the idea, not the boilerplate — I architect, direct and verify.",
    tags: ["Java", "Paper", "AI/ML", "Multi-agent"],
  },
];

const INTERESTS = [
  { glyph: "🥋", title: "Jiu jitsu", body: "Time on the mat taught me the same lesson code did: fundamentals beat flash, and the person who drills the basics patiently usually wins. Position before submission — structure before cleverness." },
  { glyph: "∑", title: "Math", body: "Math is the through-line in everything I build. Attack-speed curves, drop-rate balancing, procedural generation, signal processing for voice cloning — the interesting part is almost always the model underneath." },
  { glyph: "⌨️", title: "Coding", body: "From Khan Academy sketches to multi-agent worlds. I like systems deep enough to be interesting and polished enough that people actually want to use them." },
  { glyph: "🎮", title: "Video games", body: "Playing and building. Games are where all of it meets — the maths, the art, the systems design, and the moment a player discovers something you made." },
];

const STACK = [
  { group: "Languages", items: ["Java", "C#", "JavaScript", "Python", "GDScript", "Skript", "HTML/CSS"] },
  { group: "Minecraft", items: ["Paper API", "Bukkit", "Fabric", "Data Components", "Resource Packs", "Blockbench", "MCreator"] },
  { group: "Game engines", items: ["Unity", "Godot", "HTML5 Canvas"] },
  { group: "Web & backend", items: ["Next.js", "React", "FastAPI", "Node.js", "Tailwind"] },
  { group: "Build & tooling", items: ["Maven", "Gradle", "Git", "IntelliJ", "VS Code", "libresprite"] },
  { group: "AI / ML", items: ["MusicGen", "Voice cloning", "Gemini API", "Mineflayer"] },
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
    { n: PROJECTS.length + "", l: "Projects" },
    { n: "315", l: "Fusion recipes" },
    { n: "40+", l: "Custom enchants" },
    { n: "4", l: "Engines used" },
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
    ["Projects shipped", PROJECTS.length + "+"],
    ["Primary stack", "Java · Paper"],
    ["Also writes", "C# · Python · JS"],
    ["Off the clock", "Jiu jitsu · Math"],
    ["Based in", "Oklahoma, USA"],
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
    if (prefersReduced) { node.textContent = raw; return; }
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
    card.style.animation = prefersReduced ? "none" : `fade .4s ease ${i * 0.03}s both`;
    if (p.featured) card.appendChild(el("span", "badge-featured", "Featured"));
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
    const s = getComputedStyle(document.documentElement);
    return s.getPropertyValue("--accent").trim() || "#6ee7ff";
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const col = accent();
    dots.forEach((d) => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
    });
    ctx.strokeStyle = col; ctx.globalAlpha = .16; ctx.lineWidth = 1;
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        const dist = Math.hypot(dx, dy);
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

  // count-up when hero is visible
  const stats = $("#heroStats");
  if (stats) new IntersectionObserver((es, o) => {
    if (es[0].isIntersecting) { countUp(); o.disconnect(); }
  }, { threshold: .3 }).observe(stats);

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

  // nav shadow + active link + to-top
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

  // search
  let t;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(t);
    t = setTimeout(() => { query = e.target.value.trim().toLowerCase(); renderGrid(); }, 120);
  });

  // modal
  document.querySelectorAll("[data-close]").forEach((n) => n.addEventListener("click", closeModal));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#modal").hidden) closeModal(); });

  // copy email
  $("#copyEmail").addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    try { await navigator.clipboard.writeText(email); }
    catch { const ta = el("textarea"); ta.value = email; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }
    const note = $("#copied"); note.hidden = false;
    setTimeout(() => { note.hidden = true; }, 1800);
  });

  // theme
  const root = document.documentElement;
  const saved = localStorage.getItem("lk-theme");
  if (saved) root.dataset.theme = saved;
  $("#themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("lk-theme", next);
  });

  // cursor glow
  addEventListener("pointermove", (e) => {
    root.style.setProperty("--glow-x", e.clientX + "px");
    root.style.setProperty("--glow-y", e.clientY + "px");
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", init);

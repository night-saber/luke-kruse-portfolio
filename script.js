/* Luke Kruse — portfolio. No dependencies. */

const PROJECTS = [
  /* ---------------------------------------------------------- Minecraft plugins */
  {
    name: "HermesCraft",
    icon: "🤖",
    category: "Minecraft Plugins",
    year: "2026",
    featured: true,
    blurb: "Embodied AI agents that join a Minecraft world as real players — they chat, follow, gather, build, fight and remember across sessions. Built for the Nous Hermes hackathon.",
    tags: ["Java", "Node.js", "Mineflayer", "Multi-agent"],
  },
  {
    name: "Mech Armory",
    icon: "🦾",
    category: "Minecraft Plugins",
    year: "2026",
    featured: true,
    blurb: "Eight craftable mech suits, each with its own stats, one passive and two active abilities, plus three energy guns that fire bullet projectiles with particle trails. Ships with 3D models for every piece.",
    tags: ["Java", "Paper 1.21", "Data Components", "Resource Pack"],
  },
  {
    name: "Combiner",
    icon: "⚙️",
    category: "Minecraft Plugins",
    year: "2026",
    featured: true,
    blurb: "A redstone-charged table that fuses items together — 315 recipes. Two axes make a Battle Axe that swings at double attack speed; combine any two tools, weapons or armour pieces.",
    tags: ["Java", "Paper 1.21", "Custom GUI", "315 recipes"],
  },
  {
    name: "The Abyssal Fault",
    icon: "🔱",
    category: "Minecraft Plugins",
    year: "2026",
    blurb: "Symbiotic relic weapons with orbiting relics, an equip GUI, evolution stages and timed abilities. Comes with its own relic resource pack.",
    tags: ["Java", "Paper 1.21", "Abilities", "Resource Pack"],
  },
  {
    name: "DualWieldAnything",
    icon: "🗡️",
    category: "Minecraft Plugins",
    year: "2026",
    blurb: "Makes the offhand a genuinely usable second hand — a main-hand swing mirrors to the offhand, and sneak-right-click triggers the offhand's active use for food, bows, shields and potions.",
    tags: ["Java", "Paper 26.2", "Gradle", "paperweight"],
  },
  {
    name: "UniversalFusion",
    icon: "🔗",
    category: "Minecraft Plugins",
    year: "2026",
    blurb: "An item-fusion plugin for Paper — combine items into upgraded variants through a custom system.",
    tags: ["Java", "Paper 1.20.4", "Maven"],
  },

  /* --------------------------------------------------------------- Skript suite */
  {
    name: "Enchantment System",
    icon: "✨",
    category: "Skript",
    year: "2026",
    featured: true,
    blurb: "A full custom enchantment framework — 40+ enchants including Lifesteal, Grapple, Blink, Beheading, Explosive, Frost, Quake and Paralyze, each with its own trigger and effect logic.",
    tags: ["Skript", "40+ enchants", "Combat", "RPG"],
  },
  {
    name: "Upgrade Systems",
    icon: "⬆️",
    category: "Skript",
    year: "2026",
    blurb: "A set of progression systems: Upgradeable Armor, Upgrade Mace, Upgrade Trident, Upgrade Yourself, God Items, God Trades, Buy Anything, Boss Rush and Mining Hunters.",
    tags: ["Skript", "Progression", "Economy", "Bosses"],
  },
  {
    name: "QoL & Stacking",
    icon: "🧰",
    category: "Skript",
    year: "2026",
    blurb: "Quality-of-life scripts and an infinite-stacking system used across the rest of the suite.",
    tags: ["Skript", "Utility"],
  },

  /* ------------------------------------------------------------ Mods & packs */
  {
    name: "Backpacks Mod",
    icon: "🎒",
    category: "Mods & Packs",
    year: "2026",
    blurb: "A Fabric backpack mod built in MCreator — wearable storage with its own armour-layer textures and a custom build pipeline.",
    tags: ["Fabric", "Java 25", "MCreator", "Mod"],
  },
  {
    name: "Custom Item Sets",
    icon: "🖼️",
    category: "Mods & Packs",
    year: "2026",
    blurb: "Bespoke item sets defined from scratch — models, textures and set behaviour.",
    tags: ["Resource Pack", "Models", "Pixel Art"],
  },
  {
    name: "Resource Packs",
    icon: "📦",
    category: "Mods & Packs",
    year: "2026",
    blurb: "Several hand-built resource packs (HWFWM, the Template pack and the Abyssal Fault relic pack) with custom textures and pack metadata.",
    tags: ["Resource Pack", "Textures"],
  },

  /* ------------------------------------------------------------------ Games */
  {
    name: "EchoRouge",
    icon: "🎮",
    category: "Games",
    year: "2025–26",
    blurb: "A 2D game in Unity using the Universal Render Pipeline — input system, tilemaps, sprite animation and scene setup built from the ground up.",
    tags: ["Unity", "C#", "URP", "2D"],
  },
  {
    name: "First Game",
    icon: "👾",
    category: "Games",
    year: "2026",
    blurb: "A complete Godot platformer: player controller, slimes, coins, kill zones, a game manager and music, exported to a standalone Windows build.",
    tags: ["Godot", "GDScript", "Platformer"],
  },
  {
    name: "Sproutails",
    icon: "🌱",
    category: "Games",
    year: "2026",
    blurb: "A Godot game with custom tilesets, a player scene and input handling — a cosy, sprite-driven project.",
    tags: ["Godot", "GDScript", "Tilesets"],
  },
  {
    name: "NeonShooter",
    icon: "🔫",
    category: "Games",
    year: "2026",
    blurb: "A browser game built with plain HTML, CSS and JavaScript — no engine, no framework.",
    tags: ["JavaScript", "HTML5", "Canvas"],
  },

  /* ------------------------------------------------------------- Web & apps */
  {
    name: "Voice Song Studio",
    icon: "🎙️",
    category: "Web & Apps",
    year: "2026",
    blurb: "A self-hosted web app that records your voice and renders an original song with your timbre on the lead — local MusicGen backing, formant singing synthesis and zero-shot voice cloning. No paid APIs.",
    tags: ["Next.js", "FastAPI", "Python", "AI/ML"],
  },
  {
    name: "Page2Sheet",
    icon: "📄",
    category: "Web & Apps",
    year: "2026",
    blurb: "A Chrome extension (Manifest V3) that extracts text from any page, structures it with Gemini and downloads a clean CSV.",
    tags: ["Chrome Extension", "JavaScript", "Gemini API"],
  },
];

const TIMELINE = [
  {
    era: "The first lines",
    period: "Khan Academy",
    kind: "before",
    body: "Where it started — JavaScript and Processing sketches on Khan Academy: loops, shapes, variables and the first taste of making a computer do what I pictured. (Being pulled from my Gmail to complete this chapter.)",
    tags: ["JavaScript", "Processing"],
  },
  {
    era: "Learning to build games",
    period: "2025 – mid 2026",
    kind: "before",
    body: "Hand-written game code, line by line. EchoRouge in Unity with C# and the URP, then three Godot projects — a full platformer, a tile-based game and a browser shooter. No AI assistance: just documentation, error messages and stubbornness.",
    tags: ["Unity", "C#", "Godot", "GDScript"],
  },
  {
    era: "Into the Minecraft ecosystem",
    period: "mid 2026",
    kind: "middle",
    body: "Moved into modding: a full Skript enchantment and upgrade suite, a Fabric backpack mod, custom item sets and resource packs. This is where I learned to ship systems other people actually play on.",
    tags: ["Skript", "Fabric", "Resource Packs"],
  },
  {
    era: "Building with AI",
    period: "late 2026",
    kind: "after",
    body: "The pace changed. Paper plugins with custom GUIs, data components and 3D models; multi-agent AI in a Minecraft world; a local AI music studio. Now the bottleneck is the idea, not the boilerplate — I architect, direct and verify.",
    tags: ["Java", "Paper", "AI/ML", "Multi-agent"],
  },
];

const STACK = [
  { group: "Languages", items: ["Java", "C#", "JavaScript", "Python", "GDScript", "Skript", "HTML/CSS"] },
  { group: "Minecraft", items: ["Paper API", "Bukkit", "Fabric", "Data Components", "Resource Packs", "Blockbench", "MCreator"] },
  { group: "Game engines", items: ["Unity", "Godot", "HTML5 Canvas"] },
  { group: "Web & backend", items: ["Next.js", "React", "FastAPI", "Node.js", "Tailwind"] },
  { group: "Build & tooling", items: ["Maven", "Gradle", "Git", "IntelliJ", "VS Code", "libresprite"] },
  { group: "AI / ML", items: ["MusicGen", "Voice cloning", "Gemini API", "Mineflayer"] },
];

/* ------------------------------------------------------------------- render */

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

function categories() {
  const set = ["All"];
  PROJECTS.forEach((p) => { if (!set.includes(p.category)) set.push(p.category); });
  return set;
}

let activeFilter = "All";

function renderFilters() {
  const wrap = document.getElementById("filters");
  wrap.innerHTML = "";
  categories().forEach((cat) => {
    const b = el("button", "chip", cat);
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(cat === activeFilter));
    b.addEventListener("click", () => { activeFilter = cat; renderFilters(); renderGrid(); });
    wrap.appendChild(b);
  });
}

function renderGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const list = PROJECTS.filter((p) => activeFilter === "All" || p.category === activeFilter);
  list.forEach((p, i) => {
    const card = el("article", "card");
    card.style.animation = `fade .4s ease ${i * 0.03}s both`;
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
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = "";
  TIMELINE.forEach((t, i) => {
    const row = el("div", `tl-item tl-${t.kind}`);
    const dot = el("div", "tl-dot");
    row.appendChild(dot);
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

function renderStack() {
  const wrap = document.getElementById("stackGrid");
  wrap.innerHTML = "";
  STACK.forEach((s) => {
    const card = el("div", "stack-card");
    card.appendChild(el("h3", null, s.group));
    const ul = el("ul");
    s.items.forEach((i) => ul.appendChild(el("li", null, i)));
    card.appendChild(ul);
    wrap.appendChild(card);
  });
}

function renderStats() {
  const stats = [
    { n: PROJECTS.length + "+", l: "Projects" },
    { n: "315", l: "Fusion recipes" },
    { n: "40+", l: "Custom enchants" },
    { n: "4", l: "Engines used" },
  ];
  const wrap = document.getElementById("heroStats");
  stats.forEach((s) => {
    const li = el("li");
    li.appendChild(el("span", "n", s.n));
    li.appendChild(el("span", "l", s.l));
    wrap.appendChild(li);
  });
  const facts = [
    ["Projects shipped", PROJECTS.length + "+"],
    ["Primary stack", "Java · Paper"],
    ["Also writes", "C# · Python · JS"],
    ["Based in", "Oklahoma, USA"],
  ];
  const fw = document.getElementById("facts");
  facts.forEach(([k, v]) => {
    const li = el("li");
    li.appendChild(el("span", "k", k));
    li.appendChild(el("span", "v", v));
    fw.appendChild(li);
  });
}

/* -------------------------------------------------------------------- init */
document.getElementById("year").textContent = new Date().getFullYear();
renderStats();
renderFilters();
renderGrid();
renderTimeline();
renderStack();

const nav = document.getElementById("nav");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 8);
}, { passive: true });

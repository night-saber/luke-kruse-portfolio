/* Shop data + rendering for the portfolio storefront. */

const PRODUCTS = [
  {
    id: "mech-armory", name: "Mech Armory", price: 12, tag: "Paper Plugin",
    blurb: "8 craftable mech suits — each with unique stats, a passive and two active abilities (16 total) — plus 3 energy guns with projectile combat and particle trails. Every piece has a hand-built 3D model.",
    highlights: ["8 suits · 16 abilities", "3 guns, real projectiles", "32 custom 3D models", "Startup self-test"],
    tags: ["Java", "Paper 1.21.11", "3D models"],
    badge: "Flagship",
  },
  {
    id: "combiner", name: "Combiner", price: 10, tag: "Paper Plugin",
    blurb: "A craftable table that fuses items together — 315 recipes with custom textures. Two axes make a Battle Axe that swings at double attack speed. Custom GUI, live result preview.",
    highlights: ["315 recipes", "165 tool + 120 armour + 30 specials", "Custom fusion GUI", "Every item textured"],
    tags: ["Java", "Paper 1.21.11", "Custom GUI"],
  },
  {
    id: "skript-suite", name: "Enchant & Upgrade Suite", price: 18, tag: "Skript",
    blurb: "67 hand-written scripts: 40+ custom enchants (Lifesteal, Grapple, Blink, Beheading, Explosive…), gear and player progression, boss rush, god items and economy hooks.",
    highlights: ["40+ custom enchants", "Upgradeable gear + player", "Boss Rush & Mining Hunters", "67 scripts"],
    tags: ["Skript", "RPG", "Progression"],
  },
  {
    id: "abyssal-fault", name: "The Abyssal Fault", price: 8, tag: "Paper Plugin",
    blurb: "Symbiotic relic weapons: dedicated relic slots, orbiting relics you launch with left-click, evolution stages and timed abilities. Ships with its own relic resource pack.",
    highlights: ["Relic slots + GUI", "Orbiting weapons", "Evolution stages", "Resource pack included"],
    tags: ["Java", "Paper 1.21.11", "Abilities"],
  },
  {
    id: "dual-wield-anything", name: "DualWieldAnything", price: 6, tag: "Paper Plugin",
    blurb: "Makes the offhand a genuinely usable second hand. Main-hand swings mirror to the offhand using its real attributes; sneak-right-click triggers its active use.",
    highlights: ["Correct offhand damage", "Sneak-right-click active use", "Vanilla interaction intact"],
    tags: ["Java", "Paper 26.2"],
  },
  {
    id: "universal-fusion", name: "UniversalFusion", price: 5, tag: "Paper Plugin",
    blurb: "An item-fusion plugin: combine items into upgraded variants through a custom system. Lightweight, no dependencies.",
    highlights: ["Custom fusion logic", "Configurable", "Maven project"],
    tags: ["Java", "Paper"],
  },
];

const SERVICES = [
  { icon: "🧩", name: "Custom plugins", desc: "A mechanic, item system or GUI that doesn't exist yet — built for your server.", from: 60 },
  { icon: "🎨", name: "Resource packs & 3D models", desc: "Custom item models, textures and full pack work.", from: 40 },
  { icon: "⚙️", name: "Systems & configuration", desc: "Enchantment, progression or economy systems, set up and tuned.", from: 50 },
  { icon: "🐛", name: "Fixes & upgrades", desc: "Something broken, or a plugin that needs a feature added.", from: 30 },
];

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

function renderShop() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;
  grid.innerHTML = "";
  PRODUCTS.forEach((p) => {
    const card = el("article", "shop-card");
    const top = el("div", "shop-top");
    top.appendChild(el("span", "shop-tag", p.tag));
    if (p.badge) top.appendChild(el("span", "shop-badge", p.badge));
    card.appendChild(top);
    card.appendChild(el("h3", null, p.name));
    card.appendChild(el("p", null, p.blurb));
    const ul = el("ul", "shop-list");
    p.highlights.forEach((h) => ul.appendChild(el("li", null, h)));
    card.appendChild(ul);
    const foot = el("div", "shop-foot");
    foot.appendChild(el("span", "shop-price", "$" + p.price));
    const btn = el("button", "btn shop-btn", "Get it");
    btn.onclick = () => alert(
      p.name + " — $" + p.price + "\n\n" +
      "Available on BuiltByBit and SpigotMC.\n" +
      "Message me on GitHub for a direct copy while the stores go live.\n\n" +
      "https://github.com/night-saber"
    );
    foot.appendChild(btn);
    card.appendChild(foot);
    grid.appendChild(card);
  });
}

function renderServices() {
  const wrap = document.getElementById("services");
  if (!wrap) return;
  wrap.innerHTML = "";
  SERVICES.forEach((s) => {
    const c = el("article", "svc");
    c.appendChild(el("span", "svc-icon", s.icon));
    c.appendChild(el("h3", null, s.name));
    c.appendChild(el("p", null, s.desc));
    c.appendChild(el("span", "svc-from", "from $" + s.from));
    wrap.appendChild(c);
  });
}

document.addEventListener("DOMContentLoaded", () => { renderShop(); renderServices(); });

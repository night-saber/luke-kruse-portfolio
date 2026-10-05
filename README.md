# Luke Kruse — Portfolio

A dependency-free static portfolio site (HTML + CSS + JS). No build step, no framework.

## Files

```
index.html      markup
styles.css      design system + layout
script.js       project data, timeline data, rendering
assets/         favicon
```

## Edit the content

Everything you'd want to change lives at the top of `script.js`:

- `PROJECTS` — the work grid (name, icon, category, year, blurb, tags, `featured`)
- `TIMELINE` — the "How I got here" arc
- `STACK` — the tools grid
- `renderStats()` — the hero numbers and the "at a glance" facts

Add a project by appending an object to `PROJECTS`; the filter chips update automatically.

## Run locally

Just open `index.html` in a browser. Or serve it:

```bash
python -m http.server 8080
```

## Deploy free

**GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy from branch
(root). The site goes live at `https://<user>.github.io/<repo>/`.

**Custom domain:** add a `CNAME` file containing your domain, and point DNS at GitHub Pages
(`A` records to 185.199.108.153 / .109 / .110 / .111, or a `CNAME` for `www`).

**Netlify / Vercel / Cloudflare Pages:** drag the folder in, or connect the repo. No build
command, publish directory = this folder.

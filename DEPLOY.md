# Deploying The Horology Compendium to GitHub Pages

Paste this file into a Claude Code session (running in VS Code's integrated
terminal, in this project folder) if you want help finishing the deploy or
making further edits. It gives that session everything it needs to pick up
where this one left off.

## What this site is (as of the React rewrite)

The site was rebuilt from a single hand-written HTML file into a small
React application, written as plain ES modules with no JSX and no build
step: `React.createElement` is used directly everywhere (aliased `h`),
and React itself is loaded from `esm.sh` via an import map in
`index.html`. This was a deliberate choice because this machine has no
Node.js installed, so there is no bundler in the loop, nothing to `npm
install`, and nothing that can go out of sync between "what's on disk"
and "what's live." GitHub Pages serves the files exactly as they sit in
the repo.

```
index.html              — the entry point: import map, fonts, #root, one script tag
styles/global.css        — all CSS (ported from the original single-file site)
src/lib.js               — re-exports React.createElement as h(), plus hooks
src/main.js               — mounts <App/> into #root
src/App.js                — hash router (reads/writes location.hash, no deps)
src/data/watches.js       — the 8 watches, the chronology, and the country routes,
                             as plain data (edit this file to add a 9th watch)
src/components/           — Nav, WatchDial, WatchCard, TickingWatch, BarTimeline, Lightbox
src/pages/                — Home, Collection, Taste, Secundus, Collector, Contact
images/                   — the 8 collection photos
images/secundus/          — photos and newspaper-ad scans used on the Secundus page
                             (extracted from what used to be inline base64 data)
```

There is no `package.json` and nothing to install. Opening `index.html`
through any static file server (or GitHub Pages) is the whole deployment.

**Local testing note:** Python's built-in `python -m http.server` serves
`.js` files with the wrong MIME type (`text/plain`), which browsers
reject for `<script type="module">`. `devserver.py` in the project root
is a five-line fix for that (adds a `.js → text/javascript` mapping) —
use `python devserver.py 8000` instead of `http.server` when testing
locally. GitHub Pages does not have this problem; it's a local-only
quirk of Python's default MIME table.

## Repo status

Remote is already configured:

```
origin  https://github.com/ac-energy/the-horology-compendium.git
```

on branch `master`.

## 1. Commit and push

```bash
git add index.html styles/ src/ images/ devserver.py
git commit -m "Rewrite as a plain-ES-modules React app (no build step)"
git push origin master
```

## 2. GitHub Pages

Already just needs **Settings → Pages → Deploy from a branch → `master` /
`/(root)`** if it isn't already on. Nothing about Pages configuration
changes with this rewrite — it's still static files, still no Actions
workflow needed. Live at:

`https://ac-energy.github.io/the-horology-compendium/`

Reload that URL and click through all six nav items (Home, The
collection, On taste, The Secundus, The collector, Contact) to confirm
they render and the URL hash updates for each.

## Notes for whoever picks this up in Claude Code

- **Adding a 9th watch**: add an entry to the `watches` array in
  `src/data/watches.js` (id, year, image path, plate note, specs, story)
  and drop the photo in `images/`. `Collection.js` derives its "watches /
  countries / mechanical" stat tiles from that array and from `routes`,
  so they update on their own.
- **Routing**: `src/App.js` is the whole router — it reads `location.hash`
  on load, listens for `hashchange`, and exposes a `navigate(view)`
  function passed down as a prop. No react-router dependency; it's about
  30 lines.
- **Contact page**: the "Send a message" button in `src/pages/Contact.js`
  assembles the `mailto:` address at click time from two joined arrays,
  specifically so it never appears as plain text in the page's source.
- **The Secundus tick dial** (`src/components/TickingWatch.js`, now shown
  on the Contact page) deliberately ignores `prefers-reduced-motion` —
  every other animation on the site respects it, but a frozen second
  hand undercuts the one thing that component exists to show.
- **Verbatim quote**: the West End Watch Co. reply letter on the Secundus
  page (`src/pages/Secundus.js`) is reproduced as received and is exempt
  from the site's general "no comma before *and*" style rule — it's
  someone else's actual words, not house copy.
- **Case sensitivity**: GitHub Pages serves files from Linux, which is
  case-sensitive. All paths in this project are already lowercase with
  hyphens; keep new ones that way too.
- **Images**: `images/secundus/` was generated once from a now-removed
  base64-embedded version of the page via a small extraction script
  (no longer in the repo, since it was a one-time migration step). If a
  10th evidence photo needs adding to the Secundus page later, just drop
  a normal image file in there and reference it from `Secundus.js` — no
  special process required.

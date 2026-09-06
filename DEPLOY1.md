# Deploying The Horology Compendium to GitHub Pages

Paste this file into a Claude Code session (running in VS Code's integrated
terminal, in this project folder) if you want help finishing the deploy or
making further edits. It gives that session everything it needs to pick up
where this one left off.

## What this site is

A single static file, `index.html`, containing five views (Home, The
Collection, On Taste, The Secundus, The Collector) plus a Contact page, all
switched client-side with a small hash router — no build step, no backend,
no dependencies beyond two Google Fonts loaded over HTTPS. It runs on
GitHub Pages exactly as-is.

Supporting files:

- `images/` — eight cropped watch photographs (`timex-weekender.jpg`,
  `seiko-snk793.jpg`, `hamilton-khaki.jpg`, `orient-bambino.jpg`,
  `seiko-snk803.jpg`, `casio-a168.jpg`, `seiko-alpinist.jpg`,
  `west-end-secundus.jpg`), each cropped from one of the four paired source
  photos in the project root.
- The four paired source photos (`Blue Seiko and Timex.png`,
  `cream dial seiko and casio.png`, `hamilton and bambino.png`,
  `Secundus and Alpinist.png`) are no longer referenced by the page — the
  site uses the cropped copies in `images/`. Safe to delete if you want a
  smaller repo, or keep them as originals.
- `watch-collection.html` is an untracked, byte-identical duplicate of the
  old `index.html`. GitHub Pages serves `index.html` as the site's entry
  point regardless, so this file is inert. Delete it unless you have a
  reason to keep it.

## Repo status

Remote is already configured:

```
origin  https://github.com/ac-energy/the-horology-compendium.git
```

on branch `master`. So deployment is just: commit, push, and flip on Pages
in the repo settings (one-time).

## 1. Commit and push

```bash
git add index.html images/ .claude/ "Blue Seiko and Timex.png" "cream dial seiko and casio.png" "hamilton and bambino.png" "Secundus and Alpinist.png"
git commit -m "Redesign as The Horology Compendium: home page, real photos, contact page, timegraph"
git push origin master
```

(Add `watch-collection.html` to the commit, or `git rm` it first, depending
on whether you decided to keep or drop it above.)

## 2. Turn on GitHub Pages (one-time)

1. Open `https://github.com/ac-energy/the-horology-compendium/settings/pages`
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `master` and folder `/(root)`, then **Save**.
4. GitHub builds and publishes the site, usually within a minute or two, at:

   `https://ac-energy.github.io/the-horology-compendium/`

5. Reload that URL once it goes live and click through all six nav items
   (Home, The collection, On taste, The Secundus, The collector, Contact)
   to confirm they render and the URL hash updates for each.

## Notes for whoever picks this up in Claude Code

- **Routing**: the nav buttons and the four cards on the Home page call a
  `show(view, pushState)` function near the bottom of `index.html` that
  toggles `body` classes (`is-home`, `is-collection`, etc.) and updates
  `location.hash` — so links like
  `https://ac-energy.github.io/the-horology-compendium/#story` work
  directly and the browser back/forward buttons work too.
- **Contact page**: the "Send a message" button assembles a `mailto:`
  link at click time from two joined arrays, specifically so the address
  never appears as plain text in the page source. If the address ever
  needs to change, it's near the bottom of the `<script>` block, in the
  `mailBtn` click handler.
- **The Secundus tick dial** (on the On Taste page) deliberately ignores
  `prefers-reduced-motion` — every other animation on the site respects
  it, but a frozen second hand undercuts the entire point of that element,
  so it always ticks.
- **Case sensitivity**: GitHub Pages serves files from Linux, which is
  case-sensitive. All image filenames and references are lowercase with
  hyphens, so this isn't a concern, but keep it that way if you add more.

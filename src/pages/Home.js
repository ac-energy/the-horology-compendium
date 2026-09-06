import { h } from "../lib.js";

const ROWS = [
  {
    n: "I",
    view: "collection",
    title: "The Collection",
    desc: "In the order they arrived, so far.",
  },
  {
    n: "II",
    view: "taste",
    title: "On Taste",
    desc: "What it all adds up to, once you lay the watches out in order.",
  },
  {
    n: "III",
    view: "secundus",
    title: "The Secundus",
    desc: "A pocket watch with no papers. This is the paper trail that gave part of it back.",
  },
  {
    n: "IV",
    view: "collector",
    title: "The Collector",
    desc: "Who kept these and why.",
  },
];

export function Home({ navigate }) {
  return h(
    "div",
    null,
    h(
      "header",
      { className: "home-hero" },
      h(
        "div",
        { className: "wrap" },
        h("h1", null, "The Horology", h("br"), "Compendium"),
        h(
          "p",
          { className: "home-sub" },
          "A working record of a growing collection and the habit of looking closer at whatever keeps time."
        )
      )
    ),
    h(
      "div",
      { className: "home-index", "aria-label": "Compendium sections" },
      ROWS.map((row) =>
        h(
          "button",
          { key: row.view, type: "button", className: "home-row", onClick: () => navigate(row.view) },
          h("span", { className: "home-row-n" }, row.n),
          h(
            "span",
            { className: "home-row-body" },
            h("span", { className: "home-row-t" }, row.title),
            h("p", { className: "home-row-d" }, row.desc)
          ),
          h("span", { className: "home-row-arrow" }, "→")
        )
      )
    ),
    h(
      "footer",
      { className: "home-foot" },
      h("p", { className: "home-est" }, "Est. 2017 · Kathmandu"),
      h("p", { className: "copyright" }, "© Anuj")
    )
  );
}

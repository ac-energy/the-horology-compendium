import { h } from "../lib.js";
import { watches, routes } from "../data/watches.js";
import { WatchDial } from "../components/WatchDial.js";
import { WatchCard } from "../components/WatchCard.js";

const mechanicalCount = watches.filter((w) => /automatic|manual/i.test(w.specs.map((s) => s.value).join(" "))).length;
const countries = new Set(routes.map((r) => r.country)).size;

export function Collection({ navigate }) {
  return h(
    "div",
    null,
    h(
      "header",
      { className: "hero" },
      h(
        "div",
        { className: "wrap" },
        h(
          "div",
          { className: "hero-top" },
          h(
            "div",
            null,
            h("h1", null, "Eight watches, nine years"),
            h(
              "p",
              { className: "hero-lede" },
              "Nine years, one watch at a time. A few crossed oceans before they crossed my wrist. One was worn on a day I don’t discuss in specifications. The last came with no history at all, and took over anyway."
            )
          ),
          h(
            "div",
            { className: "hero-figs" },
            h("div", { className: "fig" }, h("span", { className: "n" }, String(watches.length)), h("span", { className: "l" }, "watches")),
            h("div", { className: "fig" }, h("span", { className: "n" }, String(countries)), h("span", { className: "l" }, "countries")),
            h("div", { className: "fig" }, h("span", { className: "n" }, String(mechanicalCount)), h("span", { className: "l" }, "mechanical"))
          )
        ),
        h(WatchDial, null)
      )
    ),
    h(
      "main",
      { className: "wrap timeline" },
      watches.map((w) => h(WatchCard, { key: w.id, watch: w, navigate }))
    ),
    h(
      "section",
      { className: "prov" },
      h(
        "div",
        { className: "wrap" },
        h("h2", null, "How they got here"),
        h("p", null, "Eight watches, four countries and only one thing they have in common: none of them stayed where I found them."),
        h(
          "div",
          { className: "routes" },
          routes.map((r) =>
            h(
              "div",
              { key: r.country, className: "route" },
              h("p", { className: "cty" }, r.country),
              h("p", { className: "cnt" }, r.note),
              h("ul", null, r.items.map((item) => h("li", { key: item }, item)))
            )
          )
        )
      )
    ),
    h(
      "footer",
      { className: "close" },
      h(
        "div",
        { className: "wrap" },
        h("blockquote", null, "Nine years and the watch that took over was the one that came with no story at all."),
        h("p", { className: "sig" }, "Eight mechanisms, nine years and one city that has kept time with all of them: Kathmandu, 2017 to 2026."),
        h("p", { className: "sig copyright" }, "© Anuj")
      )
    )
  );
}

import { h } from "../lib.js";

export function Collector() {
  return h(
    "article",
    { className: "ab" },
    h(
      "header",
      { className: "ab-hero" },
      h("p", { className: "ab-kicker" }, "Who kept these"),
      h("h1", null, "The one behind", h("br"), "the glass"),
      h("p", { className: "ab-sub" }, "An engineer in Kathmandu with a habit of taking small machines apart to find out why they matter.")
    ),
    h(
      "section",
      { className: "ab-body" },
      h("p", { className: "lede" }, "My name is Anuj and none of this began as a plan."),
      h(
        "p",
        null,
        "I am an engineer by profession, which is either the reason I ended up caring this much about small mechanisms, or the explanation I reach for afterward. Either way, the instinct is the same at work and on my wrist: open the thing up, find out how it actually functions and only then decide whether it deserves the attention it is getting."
      ),
      h(
        "p",
        { className: "final" },
        "The collection on this site started in 2017 with no intention of becoming one. Eight watches and nine years later, somewhere in the middle of writing all of this down, is roughly when a habit turned into a project. That is the whole of it: not a finished collection, but a continuing one."
      )
    ),
    h("footer", { className: "ab-foot" }, h("p", { className: "copyright" }, "© Anuj"))
  );
}

import { h } from "../lib.js";

// A proportional timeline: position along the bar reflects real elapsed time
// (2017 to 2019 is a wider gap than 2024 to 2025), with callouts alternating
// above and below the line so eight points never crowd each other.
export function BarTimeline({ entries }) {
  const first = entries[0].year;
  const last = entries[entries.length - 1].year;
  const span = last - first;

  const nodes = entries.map((entry, i) => {
    const pct = span === 0 ? 0 : ((entry.year - first) / span) * 100;
    const side = i % 2 === 0 ? "above" : "below";
    return h(
      "div",
      { key: entry.year, className: "bar-node", style: { left: pct + "%" } },
      h(
        "div",
        { className: "bar-callout " + side },
        h("span", { className: "bar-year" }, String(entry.year)),
        h("p", { className: "bar-text" }, entry.text)
      ),
      h("span", { className: "bar-dot" })
    );
  });

  const vertical = entries.map((entry) =>
    h(
      "li",
      { key: entry.year, className: "bar-vnode" },
      h("span", { className: "bar-vdot" }),
      h("span", { className: "bar-year" }, String(entry.year)),
      h("p", { className: "bar-text" }, entry.text)
    )
  );

  return h(
    "div",
    { className: "bar-timeline", role: "img", "aria-label": "Timeline from " + first + " to " + last },
    h("div", { className: "bar-rail" }, h("div", { className: "bar-track" }), nodes),
    h("ul", { className: "bar-vertical" }, vertical)
  );
}

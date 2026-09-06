import { h } from "../lib.js";
import { watches } from "../data/watches.js";

const YEARS = watches.map((w) => w.year);

function polar(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

export function WatchDial() {
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const outer = 182;
    const inner = i % 5 === 0 ? 172 : 177;
    const [x1, y1] = polar(200, 200, outer, i * 6);
    const [x2, y2] = polar(200, 200, inner, i * 6);
    ticks.push(
      h("line", {
        key: i,
        x1,
        y1,
        x2,
        y2,
        className: i % 5 === 0 ? "tick-5" : "tick",
      })
    );
  }

  const marks = YEARS.map((year, i) => {
    const [x, y] = polar(200, 200, 150, i * 45);
    const go = () => {
      const el = document.getElementById("y" + year);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return h(
      "g",
      {
        key: year,
        className: "mark",
        tabIndex: 0,
        role: "link",
        "aria-label": "Go to " + year,
        onClick: go,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            go();
          }
        },
      },
      h("circle", { cx: x, cy: y, r: 22 }),
      h("text", { x, y }, String(year))
    );
  });

  return h(
    "div",
    { className: "dial-stage" },
    h(
      "svg",
      {
        className: "dial",
        viewBox: "0 0 400 400",
        role: "img",
        "aria-label":
          "Circular timeline. Years from " + YEARS[0] + " at the top, running clockwise to " + YEARS[YEARS.length - 1] + ".",
      },
      h("circle", { className: "dial-face", cx: 200, cy: 200, r: 192 }),
      h("circle", { className: "dial-ring", cx: 200, cy: 200, r: 182 }),
      h("circle", { className: "dial-ring", cx: 200, cy: 200, r: 120 }),
      h("g", null, ticks),
      h("line", { className: "hand hand-h", x1: 200, y1: 200, x2: 200, y2: 118 }),
      h("line", { className: "hand hand-m", x1: 200, y1: 200, x2: 272, y2: 164 }),
      h("line", { className: "hand hand-s", x1: 200, y1: 212, x2: 146, y2: 252 }),
      h("circle", { className: "pivot", cx: 200, cy: 200, r: 4.5 }),
      h("g", null, marks)
    )
  );
}

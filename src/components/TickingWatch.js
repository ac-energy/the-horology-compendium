import { h, useEffect, useRef } from "../lib.js";

// The small seconds hand is the whole point of this dial, so it keeps ticking
// even under prefers-reduced-motion — every other animation on the site
// honours that setting, but a frozen second hand undercuts this one entirely.
export function TickingWatch() {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secRef = useRef(null);
  const minuteTicksRef = useRef(null);
  const subTicksRef = useRef(null);

  useEffect(() => {
    const mt = minuteTicksRef.current;
    const st = subTicksRef.current;
    const NS = "http://www.w3.org/2000/svg";

    for (let i = 0; i < 60; i++) {
      const a = ((i * 6 - 90) * Math.PI) / 180;
      const o = 130;
      const n = i % 5 === 0 ? 120 : 125;
      const l = document.createElementNS(NS, "line");
      l.setAttribute("x1", 170 + o * Math.cos(a));
      l.setAttribute("y1", 170 + o * Math.sin(a));
      l.setAttribute("x2", 170 + n * Math.cos(a));
      l.setAttribute("y2", 170 + n * Math.sin(a));
      l.setAttribute("stroke", "#3A362C");
      l.setAttribute("stroke-width", i % 5 === 0 ? 1.4 : 0.6);
      mt.appendChild(l);
    }
    for (let j = 0; j < 60; j += 5) {
      const b = ((j * 6 - 90) * Math.PI) / 180;
      const k = document.createElementNS(NS, "line");
      k.setAttribute("x1", 170 + 40 * Math.cos(b));
      k.setAttribute("y1", 228 + 40 * Math.sin(b));
      k.setAttribute("x2", 170 + 34 * Math.cos(b));
      k.setAttribute("y2", 228 + 34 * Math.sin(b));
      k.setAttribute("stroke", "#6E6A5C");
      k.setAttribute("stroke-width", 0.9);
      st.appendChild(k);
    }

    let raf;
    function paint() {
      const d = new Date();
      const S = d.getSeconds();
      const M = d.getMinutes();
      const H = d.getHours() % 12;
      hourRef.current.setAttribute("transform", "rotate(" + (H + M / 60) * 30 + " 170 170)");
      minuteRef.current.setAttribute("transform", "rotate(" + (M + S / 60) * 6 + " 170 170)");
      const frac = S + d.getMilliseconds() / 1000;
      secRef.current.setAttribute("transform", "rotate(" + (Math.floor(frac * 8) / 8) * 6 + " 170 228)");
      raf = requestAnimationFrame(paint);
    }
    paint();
    return () => cancelAnimationFrame(raf);
  }, []);

  return h(
    "div",
    { className: "tick-stage" },
    h(
      "svg",
      {
        className: "tickdial",
        viewBox: "0 0 340 340",
        role: "img",
        "aria-label": "A pocket watch dial keeping the current time, its small seconds hand ticking once every eighth of a second.",
      },
      h("circle", { cx: 170, cy: 170, r: 168, fill: "#C9AE72" }),
      h("circle", { cx: 170, cy: 170, r: 159, fill: "#EFE3C2" }),
      h("circle", { cx: 170, cy: 170, r: 150, fill: "#B49A5F" }),
      h("circle", { cx: 170, cy: 170, r: 144, fill: "#FAF7EE" }),
      h("circle", { cx: 170, cy: 170, r: 130, fill: "none", stroke: "#3A362C", strokeWidth: 1 }),
      h("g", { ref: minuteTicksRef }),
      h(
        "g",
        { fontFamily: "Fraunces,Georgia,serif", fontSize: 24, fill: "#231F19", textAnchor: "middle" },
        h("text", { x: 170, y: 63 }, "12"),
        h("text", { x: 281, y: 179 }, "3"),
        h("text", { x: 170, y: 292 }, "6"),
        h("text", { x: 59, y: 179 }, "9"),
        h("text", { x: 226, y: 79 }, "1"),
        h("text", { x: 268, y: 122 }, "2"),
        h("text", { x: 268, y: 238 }, "4"),
        h("text", { x: 226, y: 281 }, "5"),
        h("text", { x: 114, y: 281 }, "7"),
        h("text", { x: 72, y: 238 }, "8"),
        h("text", { x: 72, y: 122 }, "10"),
        h("text", { x: 114, y: 79 }, "11")
      ),
      h(
        "text",
        { x: 170, y: 118, textAnchor: "middle", fontFamily: "Fraunces,Georgia,serif", fontSize: 13, fill: "#2A2620", letterSpacing: 0.4 },
        "WEST END"
      ),
      h(
        "text",
        { x: 170, y: 134, textAnchor: "middle", fontFamily: "Fraunces,Georgia,serif", fontSize: 10, fill: "#5C594E", letterSpacing: 1.6 },
        "SECUNDUS"
      ),
      h("circle", { cx: 170, cy: 228, r: 40, fill: "none", stroke: "#6E6A5C", strokeWidth: 1 }),
      h("g", { ref: subTicksRef }),
      h(
        "g",
        { fontFamily: "Archivo,sans-serif", fontSize: 9, fill: "#5C594E", textAnchor: "middle" },
        h("text", { x: 170, y: 196 }, "60"),
        h("text", { x: 204, y: 232 }, "15"),
        h("text", { x: 170, y: 268 }, "30"),
        h("text", { x: 136, y: 232 }, "45")
      ),
      h(
        "text",
        { x: 170, y: 308, textAnchor: "middle", fontFamily: "Archivo,sans-serif", fontSize: 8, fill: "#7A7566", letterSpacing: 1.4 },
        "SWISS MADE"
      ),
      h("path", { ref: hourRef, d: "M170 170 L162 118 Q170 100 178 118 Z", fill: "#2E4A78" }),
      h("path", { ref: minuteRef, d: "M170 170 L163 82 Q170 62 177 82 Z", fill: "#2E4A78" }),
      h("circle", { cx: 170, cy: 170, r: 6, fill: "#2E4A78" }),
      h("line", { ref: secRef, x1: 170, y1: 238, x2: 170, y2: 196, stroke: "#2E4A78", strokeWidth: 1.6, strokeLinecap: "round" }),
      h("circle", { cx: 170, cy: 228, r: 2.6, fill: "#2E4A78" })
    )
  );
}

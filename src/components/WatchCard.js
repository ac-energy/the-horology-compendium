import { h } from "../lib.js";

export function WatchCard({ watch, navigate }) {
  return h(
    "article",
    { className: "entry", id: watch.id },
    h(
      "div",
      { className: "plate" },
      h(
        "div",
        { className: "watch-frame" },
        h("img", { src: watch.image, alt: watch.alt, loading: "lazy" })
      ),
      h("p", { className: "plate-note" }, watch.plateNote)
    ),
    h("div", { className: "spine" }),
    h(
      "div",
      { className: "body" },
      h("span", { className: "yr" }, String(watch.year)),
      h("h2", null, watch.name),
      h("p", { className: "ref" }, watch.ref),
      h("p", { className: "role" }, watch.role),
      h(
        "dl",
        { className: "specs" },
        watch.specs.map((s) =>
          h("div", { key: s.label }, h("dt", null, s.label), h("dd", null, s.value))
        )
      ),
      h("p", { className: "story" }, watch.story),
      watch.readMore &&
        h(
          "p",
          { style: { marginTop: "20px" } },
          h(
            "button",
            { type: "button", className: "to-story", onClick: () => navigate("secundus") },
            "Read the full research on this watch"
          )
        )
    )
  );
}

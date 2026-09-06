import { h } from "../lib.js";

const ITEMS = [
  { view: "home", label: "Home" },
  { view: "collection", label: "The collection" },
  { view: "taste", label: "On taste" },
  { view: "secundus", label: "The Secundus" },
  { view: "collector", label: "The collector" },
  { view: "contact", label: "Contact" },
];

export function Nav({ view, navigate }) {
  return h(
    "nav",
    { className: "nav", "aria-label": "Sections" },
    ITEMS.map((item) =>
      h(
        "button",
        {
          key: item.view,
          type: "button",
          "aria-current": String(item.view === view),
          onClick: () => navigate(item.view),
        },
        item.label
      )
    )
  );
}

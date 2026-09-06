import { h, useEffect, useRef } from "../lib.js";

export function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return h(
    "div",
    {
      className: "lb" + (item ? " open" : ""),
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Full page scan",
      onClick: (e) => {
        if (e.target.currentTarget === e.target) onClose();
      },
    },
    h("button", { className: "lb-x", type: "button", ref: closeRef, onClick: onClose }, "Close"),
    item && h("img", { src: item.full, alt: item.title + ", full page" }),
    item && h("p", { className: "lb-cap" }, item.cap)
  );
}

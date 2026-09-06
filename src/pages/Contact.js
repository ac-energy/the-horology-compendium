import { h } from "../lib.js";
import { TickingWatch } from "../components/TickingWatch.js";

function sendMail() {
  const user = ["anujchaulagain", "horology"].join(".");
  const host = ["gmail", "com"].join(".");
  const addr = user + "@" + host;
  window.location.href = "mailto:" + addr + "?subject=" + encodeURIComponent("The Horology Compendium");
}

export function Contact() {
  return h(
    "article",
    { className: "ab" },
    h(
      "header",
      { className: "ab-hero" },
      h("p", { className: "ab-kicker" }, "Get in touch"),
      h("h1", null, "Say hello"),
      h("p", { className: "ab-sub" }, "Corrections, provenance leads, or a watch you think I should know about: all welcome.")
    ),
    h(
      "section",
      { className: "ab-body" },
      h("p", { className: "lede" }, "This site is a working document, not a finished one. It improves whenever someone who knows more than I do gets in touch."),
      h(
        "p",
        null,
        "If you have something to add, whether about the Secundus, the wider collection, or keeping time in general, the button below opens a message addressed to me directly."
      ),
      h("button", { type: "button", className: "mail-btn", onClick: sendMail }, "Send a message"),
      h(TickingWatch, null)
    ),
    h("footer", { className: "ab-foot" }, h("p", { className: "copyright" }, "© Anuj"))
  );
}

import { h, useState, useEffect, Fragment } from "./lib.js";
import { Nav } from "./components/Nav.js";
import { Home } from "./pages/Home.js";
import { Collection } from "./pages/Collection.js";
import { Taste } from "./pages/Taste.js";
import { Secundus } from "./pages/Secundus.js";
import { Collector } from "./pages/Collector.js";
import { Contact } from "./pages/Contact.js";

const PAGES = {
  home: Home,
  collection: Collection,
  taste: Taste,
  secundus: Secundus,
  collector: Collector,
  contact: Contact,
};

const TITLES = {
  home: "The Horology Compendium",
  collection: "The Collection — The Horology Compendium",
  taste: "On Taste — The Horology Compendium",
  secundus: "The Secundus — The Horology Compendium",
  collector: "The Collector — The Horology Compendium",
  contact: "Contact — The Horology Compendium",
};

function readHash() {
  const v = location.hash.replace("#", "");
  return PAGES[v] ? v : "home";
}

export function App() {
  const [view, setView] = useState(readHash());

  useEffect(() => {
    document.title = TITLES[view];
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [view]);

  useEffect(() => {
    function onHashChange() {
      setView(readHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(next) {
    if (next === view) return;
    location.hash = next === "home" ? "" : next;
    setView(next);
  }

  const Page = PAGES[view];
  return h(Fragment, null, h(Nav, { view, navigate }), h(Page, { navigate }));
}

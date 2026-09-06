import { h } from "../lib.js";
import { chronology } from "../data/watches.js";
import { BarTimeline } from "../components/BarTimeline.js";

export function Taste() {
  return h(
    "article",
    { className: "ab" },
    h(
      "header",
      { className: "ab-hero" },
      h("p", { className: "ab-kicker" }, "A note on the collection"),
      h("h1", null, "What my watches", h("br"), "add up to"),
      h("p", { className: "ab-sub" }, "Nine years of buying slowly and what became visible only when I laid them out in order.")
    ),
    h(
      "section",
      { className: "ab-body" },
      h("p", { className: "lede" }, "Set them on a table in the order they arrived and a shape appears that I never planned."),
      h(
        "p",
        null,
        "A simple quartz watch. Then a mechanical one, discovered almost by accident. Then a serious Swiss field watch, a dress watch, a return to something plain, a digital watch bought by nobody’s logic but affection, an enthusiast’s Seiko chosen deliberately and finally an object from the 1930s or 1940s whose worth to me has nothing whatever to do with what it would fetch."
      ),
      h("p", null, "It does not look like a list worked through. It looks like somebody finding out what he likes."),

      h("h2", null, "Character before prestige"),
      h(
        "p",
        null,
        "Nothing in this box announces itself. A Khaki Field is not bought to be recognised across a room. Neither is a Bambino, nor an SNK803. Even the Alpinist, which has as devoted a following as any watch Seiko makes, still reads to most people as simply a Seiko."
      ),
      h("p", null, "It is the strongest thread running through all eight. The pleasure is in knowing what is on the wrist. It does not require anyone else to know."),
      h("div", { className: "ab-pull" }, "A watch that needs to be recognised is doing a different job from a watch that needs to be read."),

      h("h2", null, "Proportion, not presence"),
      h(
        "p",
        null,
        "The 38 mm Hamilton gives it away. It was bought during a stretch when mainstream cases had grown to 42, 44, 46 millimetres and beyond, at a time when field watches had historically never been anything of the sort. They were sized to be read at a glance and forgotten the rest of the time."
      ),
      h(
        "p",
        null,
        "The two Seiko 5s say the same thing at 37 mm. The Casio is small by any modern measure. The Alpinist is distinctive without being large. Nowhere in the collection is there a skeletonised dial, a complication for its own sake or a case chosen for the space it occupies."
      ),
      h(
        "p",
        null,
        "What is left, once you take those away, is a fairly precise set of preferences: legibility, proportion, mechanical interest, history and the sense that the thing was designed to be used."
      ),

      h("h2", null, "The map I drew without meaning to"),
      h("p", null, "Eight watches is not many. These eight cover a surprising amount of ground."),
      h(
        "div",
        { className: "ab-grid" },
        [
          ["Casual quartz", "Timex Weekender"],
          ["Everyday automatic", "Seiko 5 SNK793"],
          ["Swiss field watch", "Hamilton Khaki Field"],
          ["Dress automatic", "Orient Bambino"],
          ["Japanese field automatic", "Seiko 5 SNK803"],
          ["Digital quartz", "Casio A168"],
          ["Mechanical tool watch", "Seiko Alpinist"],
          ["Vintage pocket watch", "West End Secundus"],
        ].map(([label, name]) => h("div", { key: name }, h("span", null, label), h("em", null, name)))
      ),
      h("p", null, "Not eight versions of the same sports watch. Each one exists for a reason the others cannot cover."),

      h("h2", null, "Three Seikos, which are not repetition"),
      h(
        "p",
        null,
        "On paper three Seikos looks like a lack of imagination. In the hand they occupy entirely different positions and together they trace the whole arc in miniature."
      ),
      h(
        "p",
        null,
        "The SNK793 is the classic Seiko 5, the formula that has introduced more people to mechanical watches than any advertising campaign ever managed. The SNK803 is the same movement wearing the soft military dress that made that generation beloved. The Alpinist is a deliberate step upward in finishing, identity and intent."
      ),
      h(
        "p",
        null,
        "Discovering automatic watches. Learning to love mechanical ones that asked little in return. Then choosing, knowingly, the one I actually wanted. That is the collection in three watches."
      ),

      h("h2", null, "The heirloom I made by accident"),
      h("p", null, "The Hamilton will outlast its specification. Eighty-hour power reserve, H-10 movement, 38 mm steel: all true, all beside the point."),
      h(
        "p",
        null,
        "It was on my wrist for a single morning that mattered more than any specification could. That is the mechanism by which an ordinary production watch becomes something else entirely. It cannot be bought. In forty years, nobody in my family will ask about the reference number; they will simply say it was the watch he wore that day. That alone will be the whole of its value."
      ),
      h("p", null, "The industry sells the idea of an heirloom as a specification you can order. You make one by simply wearing a watch on the right morning."),

      h("h2", null, "On hierarchy and on pleasure"),
      h(
        "p",
        null,
        "The Casio A168 sits, horologically, at the opposite end of the spectrum from a finished Swiss mechanical watch: mass-produced, quartz, digital, built to a design that has never needed updating. It is also an icon that has outlived a good deal of what was taken more seriously when it appeared. Some mornings it is simply the right watch to put on."
      ),
      h(
        "p",
        null,
        "The Seiko 7S26 is not haute horlogerie either. It was designed as a robust industrial automatic, built to run for years without attention. It does exactly that. Judged against a hand-finished movement it is nothing. Judged against what it was built to do, it is close to perfect."
      ),
      h(
        "p",
        null,
        "Both of those are horology. So are railway watches, military watches, the anchor escapement, the pocket watch and the bevelled anglage that takes a craftsman a day to cut by hand. Restricting one’s appreciation to only the most celebrated end of that range is not connoisseurship. It is just fashion."
      ),
      h(
        "p",
        null,
        "I have spent a great deal of time studying Patek, Vacheron, Audemars Piguet and Lange. A Lange movement can stop you where you stand. A Vacheron carries centuries of accumulated method in its finishing. I do not need to own one to understand why. Buying something because a hierarchy told me it was better would make this collection less mine, not more."
      ),
      h("div", { className: "ab-pull" }, "You can love a watch without needing to possess it. That may be the healthiest thing an enthusiast ever learns."),

      h("h2", null, "The thing itself"),
      h(
        "p",
        null,
        "All of the above is talk. Underneath it there is only a spring unwinding at a rate something has been built to control, which is the whole of watchmaking and the reason any of this holds my attention."
      ),

      h("h2", null, "Four things running underneath"),
      h(
        "div",
        { className: "ab-threads" },
        h("div", null, h("h3", null, "Memory"), h("p", null, "Particular years of my life, made wearable. Friends in three countries and mornings I still think about.")),
        h("div", null, h("h3", null, "Usefulness"), h("p", null, "Almost everything here was originally designed to be used rather than displayed.")),
        h("div", null, h("h3", null, "Mechanical curiosity"), h("p", null, "The exhibition caseback on an unassuming Seiko was the beginning of an interest in the machine itself.")),
        h("div", null, h("h3", null, "History"), h("p", null, "Hamilton’s field-watch lineage, the 1959 Alpinist, Casio’s digital era and now a Swiss name written for Bombay and Calcutta."))
      ),

      h("h2", null, "The chronology, in eight lines"),
      h(BarTimeline, { entries: chronology }),
      h("p", null, "That last line is where an inventory turns into something worth writing down."),

      h("h2", null, "If I had to say it in one sentence"),
      h(
        "p",
        { className: "ab-verdict" },
        "A modest, deliberate collection of practical watches, gathered through friendships, milestones and curiosity, which turned somewhere along the way from wearing watches into caring about watchmaking."
      ),
      h(
        "p",
        { className: "final" },
        "I am in no hurry to make it nine. Eight watches in, there is something here that a great many larger collections never manage: not one of them is filler. Every single one means something and I can tell you exactly what."
      )
    ),
    h("footer", { className: "ab-foot" }, h("p", { className: "copyright" }, "© Anuj"))
  );
}

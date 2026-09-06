import { h, useState } from "../lib.js";
import { Lightbox } from "../components/Lightbox.js";

const ADS = [
  {
    slug: "1936-lever-wrist",
    date: "August 7, 1936",
    title: "West End “Secundus” Lever Wrist Watches",
    blurb:
      "Four Secundus wrist models: Miniature Tonneau, Miniature Rectangular, New-Calibre Tonneau and New-Calibre Rectangular, from Rs. 32 in nickel silver to Rs. 90 in 18-ct gold. The earliest dated Secundus advertisement in this set.",
    cap: "The Indian Listener, August 7, 1936, page 789. West End Watch Co., Bombay and Calcutta.",
  },
  {
    slug: "1938-39-reliable",
    date: "c. 1938 to 1939",
    title: "“Secundus” Watches: Reliable, Elegant, Inexpensive",
    blurb:
      "The New Secundus in a nickel case with West End’s patent “Everbright” steel back, Rs. 20. No masthead date survives on this page; the facing Philco advertisement clears 1938 stock for 1939 models, which places it around then.",
    cap: "The Indian Listener, c. 1938–39, page 334. West End Watch Co., Bombay and Calcutta.",
  },
  {
    slug: "1944-engineer",
    date: "December 22, 1944",
    title: "The Engineer and his watch",
    blurb:
      "Written for men working around machinery, vibration, metallic dust and moving controls. The model shown is the Secundus Modern, nickel silver with a plain dial, Rs. 44. The testimonial is signed by a Captain of the Royal Engineers.",
    cap: "The Indian Listener, December 22, 1944, page 27. West End Watch Co., Bombay and Calcutta.",
  },
  {
    slug: "1945-colonel",
    date: "January 7, 1945",
    title: "The Colonel and his watch",
    blurb:
      "West End addresses the Army directly, citing letters from serving soldiers. The model shown is the Secundus New Calibre Curved in 18-ct gold at Rs. 185, the highest-priced Secundus in this set.",
    cap: "The Indian Listener, January 7, 1945, page 17. West End Watch Co., Bombay and Calcutta.",
  },
  {
    slug: "1945-times-changed",
    date: "February 1945",
    title: "Times have changed: 1754 to 1945",
    blurb:
      "Thomas Mudge and the anchor escapement on one side; on the other, the Secundus Pocket: 15 jewels, nickel silver, open face, with Roman or Arabic numerals. This is the advertisement that matches the watch.",
    cap: "The Indian Listener, February 1945, page 19. West End Watch Co., Bombay and Calcutta.",
  },
].map((ad) => ({
  ...ad,
  thumb: `images/secundus/ad-${ad.slug}-thumb.jpg`,
  full: `images/secundus/ad-${ad.slug}-full.jpg`,
}));

function EvidenceShot({ src, alt, caption, className = "" }) {
  return h(
    "figure",
    { className: "eshot " + className },
    h("img", { src, alt, loading: "lazy" }),
    caption && h("figcaption", null, caption)
  );
}

export function Secundus() {
  const [lightbox, setLightbox] = useState(null);

  return h(
    "div",
    { className: "page-story" },
    h(
      "article",
      { className: "sx" },
      h(
        "header",
        { className: "sx-hero" },
        h("p", { className: "sx-kicker" }, "West End Watch Co. of Bienne, Bombay and Calcutta"),
        h("h1", null, "The Secundus"),
        h(
          "p",
          { className: "sx-sub" },
          "An open-face pocket watch that arrived with no papers, no owner and no date. This is the paper trail that gave part of it back."
        ),
        h(EvidenceShot, {
          className: "eshot-hero",
          src: "images/secundus/secundus-hero.jpg",
          alt: "The West End Secundus, open-face nickel pocket watch.",
        })
      ),
      h(
        "section",
        { className: "sx-body" },
        h("p", { className: "lede" }, "I bought a watch that nobody could tell me anything about."),
        h(
          "p",
          null,
          "Nickel case, worn thin at the edges. A white enamel dial, spotted and stained by however many decades it has been exposed to, with large Arabic numerals and blued spade hands. A small seconds register sits at six o’clock; below it, in letters small enough to miss, ",
          h("em", null, "Swiss Made"),
          ". Printed across the upper half in fine black lettering are two names: ",
          h("em", null, "West End Watch Co."),
          " and ",
          h("em", null, "Secundus"),
          "."
        ),
        h(
          "p",
          null,
          "No box that belonged to it. No receipt. No previous owner I could name. No year. For nine years I had been putting together a collection where every watch came with its own story attached, each one traceable to a person, a place or a particular morning. This one came with nothing but a question. I bought it anyway."
        ),
        h("div", { className: "pull" }, "It stopped being an old watch and became a problem worth solving."),

        h("h2", null, "It was trying to run"),
        h("p", null, "Before any of the history could matter, there was a more immediate question. Would it go?"),
        h(
          "p",
          null,
          "It would, briefly. It ran for a while and then stopped. And its behaviour depended on how it was lying. Flat on a table it kept going; held upright it gave up. Anyone who has spent time around old mechanical movements knows what positional behaviour like that suggests: wear in the pivots, something wrong with the balance or the endshake, oil that dried out decades ago, a mainspring no longer delivering the torque it once did."
        ),
        h("p", null, "But the fault was not the interesting part. The interesting part was that it was not inert. Something inside it was still trying."),

        h(EvidenceShot, {
          src: "images/secundus/secundus-dial.jpg",
          alt: "The dial: West End Watch Co. above, Secundus below, blued spade hands and a small seconds register at six.",
          caption: "The dial: West End Watch Co. above, Secundus below, blued spade hands and a small seconds register at six.",
        }),

        h(
          "p",
          null,
          "That took it to a watchmaker in Kathmandu, a man with forty-four years at the bench who did not need any of it explained to him. The movement was opened, examined, cleaned. Old lubrication out, fresh lubrication in. The mainspring cleaned. One screw was damaged and no correct replacement could be found, so another was adapted and modified until it did the job."
        ),
        h(
          "p",
          null,
          "Nothing was done to make the watch look new. That was never the point. The case is still original nickel, still marked by whatever it went through in the decades I know nothing about and it will stay that way. Making an old object look untouched is a way of deleting its life. The only aim was to make the mechanism work again."
        ),

        h(EvidenceShot, {
          src: "images/secundus/secundus-movement.jpg",
          alt: "The movement after service. Two lines of stamping sit on the plate beside the balance, worn too shallow to read at this angle.",
          caption: "The movement after service. Two lines of stamping sit on the plate beside the balance, worn too shallow to read at this angle.",
        }),

        h(
          "p",
          null,
          "And it does. Not perfectly. After a full day it runs several minutes fast and regulation is a conversation for later, once a freshly serviced movement has settled. But the mainspring stores energy, the train turns, the escapement releases it, the balance swings and the small seconds hand advances."
        ),
        h("p", null, "After however many silent years, that was enough."),

        h("h2", null, "I wrote to Switzerland"),
        h(
          "p",
          null,
          "On the first of September I sent West End Watch Co. an email with photographs of the dial, the movement and both sides of the caseback, the two numbers I could find and a question I did not expect anyone to answer: was this yours, and can you tell me when it was made?"
        ),
        h("p", null, "They replied the same evening."),

        h(
          "div",
          { className: "letter" },
          h("p", { className: "letter-head" }, "West End Watch Co., Switzerland. Reply of 1 September 2026"),
          h(
            "div",
            { className: "letter-body" },
            h("p", null, "Dear Sir,"),
            h("p", null, "Thank you for the message and pictures."),
            h("p", null, "Maybe you know that in Latin language, SECUNDUS literally means:"),
            h(
              "ol",
              null,
              h("li", null, "(nautical) favorable, fair"),
              h("li", null, "(military) fortunate, lucky, victorious, successful")
            ),
            h("p", null, "This name was chosen according to the “military roots” of the brand. You’re right, West End was initially created for the Britain’s Indian market."),
            h("p", null, "The brand provided professional watches for engineers and civil service, and mostly for soldiers from WWI. They liked their sturdiness and dependability!"),
            h("p", null, "Secundus brand was launched in the 1930’s as pocket watches as well as wrist watches, more convenient for soldiers for example."),
            h("p", null, "Unfortunately, we don’t have more details about this watch since our archives are held in a museum not in our factory but we hope that this information will still be helpful."),
            h("p", null, "Congratulations for treasuring this old pocket watch and preserving its historical value."),
            h("p", null, "With best regards from Switzerland.")
          ),
          h("p", { className: "letter-note" }, "Reproduced as received. Signed WEW / Sandra, sent from the company’s office in Switzerland.")
        ),

        h(
          "p",
          null,
          "One line in that message did more work than everything else I had found. ",
          h("strong", null, "The Secundus brand was launched in the 1930s.")
        ),
        h(
          "p",
          null,
          "I had gone into this half-believing something else. My own email to them carried the words “possibly WWI era” in the subject line, because that is what the internet had told me, in modern listings describing watches like this one as First World War pieces. They cannot be. Whatever West End’s earlier military history, the ",
          h("em", null, "Secundus"),
          " name itself does not begin until the 1930s. The brand’s heritage and this watch’s date are two different subjects; collapsing them into one is how a false story starts. I had started one myself, in the subject line, before I knew better."
        ),
        h(
          "p",
          null,
          "The rest of what they told me is context rather than provenance. It does not make my watch a soldier’s watch. It does something quieter and, to me, more interesting: it explains why a Swiss watch was circulating in this part of the world at all. West End did not sell to South Asia as an afterthought. South Asia ",
          h("em", null, "was"),
          " the business."
        ),
        h("div", { className: "pull pull-alt" }, "A Swiss factory in Bienne. Two addresses that mattered: Bombay and Calcutta."),

        h("h2", null, "Nine years of newsprint"),
        h(
          "p",
          null,
          "The strongest evidence I have does not come from a dealer or a forum. It comes from ",
          h("em", null, "The Indian Listener"),
          ", the programme journal of All India Radio, where West End advertised for years, page after page, alongside cigarettes, radio valves, tyres and Benarasi sarees."
        ),
        h("p", null, "These are contemporary documents. They were printed while the watches were being sold, for people who might walk into a shop the next morning and buy one. Tap any of them to read the whole page."),

        h(
          "div",
          { className: "ad-grid" },
          ADS.map((ad) =>
            h(
              "figure",
              {
                key: ad.slug,
                className: "ad",
                tabIndex: 0,
                role: "button",
                "aria-label": "Open full page scan: " + ad.title,
                onClick: () => setLightbox(ad),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightbox(ad);
                  }
                },
              },
              h("img", { src: ad.thumb, alt: ad.title + ", " + ad.cap, loading: "lazy" }),
              h(
                "figcaption",
                null,
                h("span", { className: "ad-date" }, ad.date),
                h("span", { className: "ad-title" }, ad.title),
                h("span", { className: "ad-blurb" }, ad.blurb)
              )
            )
          )
        ),

        h("h2", null, "What the advertisements actually prove"),
        h("p", null, "More than I expected and less than I would like."),
        h(
          "p",
          null,
          "The August 1936 page settles the earliest question independently. Secundus was a named, advertised line by then, with four models, fifteen jewels and prices from Rs. 32 to Rs. 90. West End told me the 1930s; the 1936 page ",
          h("em", null, "shows"),
          " the 1930s, in dated print, without my having to take anyone’s word for it. A company remembering something and a page printed at the time are not the same kind of evidence."
        ),
        h(
          "p",
          null,
          "But notice what is in those early pages: ",
          h("strong", null, "wrist watches"),
          ". The 1936 page and the c. 1938 to 1939 page advertise Secundus for the wrist: tonneau cases, rectangular cases and Everbright steel backs. There is no pocket watch in either."
        ),
        h("p", null, "The pocket watch appears in February 1945. And when it appears, it is described with a precision that is almost unfair:"),
        h(
          "div",
          { className: "spec" },
          h("p", { className: "spec-head" }, "The Secundus Pocket"),
          h("p", { className: "spec-line" }, "15 jewels · nickel silver · open face · with Roman or Arabic numerals"),
          h("p", { className: "spec-foot" }, "The Indian Listener, February 1945, page 19")
        ),
        h("p", null, "Nickel. Open face. Arabic numerals offered as an option. That is this watch, item for item, in a wartime advertisement printed for readers in Bombay and Calcutta."),
        h(
          "p",
          null,
          "I want to be careful here, because this is exactly the point where a good story starts overtaking the evidence. A contemporary advertisement establishes that a configuration was being marketed at a given moment. It does not date an individual surviving example. Production runs span years. Components overlap. An illustration can stand for a family of watches rather than one reference."
        ),
        h("p", null, "So the defensible sentence is not “this watch was made in 1945.” It is this:"),
        h("div", { className: "pull" }, "By 1945, West End was advertising a Secundus pocket watch whose specification matches this one exactly."),
        h("p", null, "For an object with no papers, no owner and no date, that is a great deal."),

        h("h2", null, "The engineer and his watch"),
        h("p", null, "There is one page I keep going back to. I should admit up front that my reasons for it are not evidential."),
        h(
          "p",
          null,
          "December 1944. The headline reads ",
          h("em", null, "The Engineer"),
          ". The illustration is a man at a machine in a workshop. The copy is about vibration, metallic dust in the air, hands and wrists constantly in motion and watches that have to survive all of it. The testimonial beside it is signed by a Captain of the Royal Engineers, describing a watch that had kept perfect time for years through heat, dust and sweat."
        ),
        h("p", null, "I am an engineer. I read that page and felt something I have no right to feel, because it proves nothing about this watch. It does not tell me who owned it. It does not put it in a workshop or a field camp or anyone’s waistcoat pocket."),
        h("p", null, "What it does tell me is what kind of object this was meant to be. Not jewellery. An instrument, sold to people whose work depended on it, in a decade when there was no other way to know the time."),
        h(
          "p",
          null,
          "And there is something in the questions themselves. Why did it stop? Why did it run flat and fail upright? What is inside it? A mechanical movement is a small engineering system: energy stored, energy transmitted, energy released under control, oscillation regulated. Every part exists in relation to another; when one fails, the whole system tells you about it. The engineers reading that page in 1944 and the one holding this watch in Kathmandu in 2026 are not connected by provenance. We are connected by the same instinct to open the thing up and find out."
        ),

        h(EvidenceShot, {
          src: "images/secundus/secundus-case-number.jpg",
          alt: "Original nickel, thinned at the edges. The case number 876562 is struck near the band.",
          caption: "Original nickel, thinned at the edges. The case number 876562 is struck near the band.",
        }),

        h("h2", null, "The numbers I cannot read"),
        h(
          "p",
          null,
          "The outside of the caseback carries ",
          h("strong", null, "876562"),
          ". Inside, over a field of engine-turned guilloché, is ",
          h("strong", null, "V 6546"),
          ", alongside a second set of scratched figures of the kind watch repairers have always left behind to record a service."
        ),

        h(
          "div",
          { className: "eshot-pair" },
          h(EvidenceShot, { src: "images/secundus/secundus-caseback-outside.jpg", alt: "Outside the caseback: 876562.", caption: "Outside the caseback: 876562." }),
          h(EvidenceShot, {
            src: "images/secundus/secundus-caseback-inside.jpg",
            alt: "Inside, over engine-turned guilloché: V 6546, with a repairer’s scratched service figures above it.",
            caption: "Inside, over engine-turned guilloché: V 6546, with a repairer’s scratched service figures above it.",
          })
        ),

        h(
          "p",
          null,
          "Every one of those looks like it should be an answer. None of them is, yet. A case number is not automatically a maker’s serial. An internal mark is not automatically a date. A number that resembles a sequence on some other surviving example may belong to a different system entirely. Without an authoritative numbering scheme or an archive to check them against, the honest thing is to record them exactly as they appear and leave them as evidence rather than decode them into a story."
        ),
        h(
          "p",
          null,
          "One correction to my own account. When I wrote to Switzerland I said the movement carried no serial number. Looking at the photographs again, that is not quite right. There are two short lines of stamping on the plate beside the balance, too shallow and too worn to read at this angle. Whatever they say, they are the most promising thing left in the watch. They need raking light and a loupe."
        ),

        h("h2", null, "Where the research stands"),
        h(
          "div",
          { className: "cols cols-2" },
          h(
            "div",
            { className: "col" },
            h("h3", null, "Established"),
            h(
              "ul",
              null,
              h("li", null, "A genuine West End Watch Co. Secundus mechanical pocket watch, Swiss made."),
              h("li", null, "The Secundus line existed by August 1936, shown in dated print rather than only in company recollection."),
              h("li", null, "West End built its commercial identity around Britain’s Indian market, trading from Bombay and Calcutta."),
              h("li", null, "By February 1945 the company was advertising a Secundus pocket watch in nickel silver, open face, with an Arabic-numeral option."),
              h("li", null, "Wartime advertising placed West End watches with soldiers as well as with engineers and mechanics."),
              h("li", null, "The movement has been serviced and runs continuously again.")
            )
          ),
          h(
            "div",
            { className: "col" },
            h("h3", null, "Reasonable"),
            h(
              "ul",
              null,
              h("li", null, "An individual date in the late 1930s or the 1940s."),
              h("li", null, "That the February 1945 advertisement depicts this model or one extremely close to it."),
              h("li", null, "That it reached this part of the world through the same Bombay and Calcutta trade that carried West End across the subcontinent.")
            )
          )
        ),
        h(
          "p",
          { className: "after-cols" },
          "What remains open is more gracefully said in a sentence than set out as a ledger. The year of manufacture is not established. No military issue is documented; nothing ties the watch to a particular soldier or to a particular engineer. The case and internal markings have not been read against any authoritative scheme, of its life before mine, whose pocket and which city and how many decades, nothing at all is known. None of that is a deficiency in the object. It is the work that is left and it is specific rather than vague: photograph the movement stamping under raking light, identify the calibre, find the case-maker’s mark, locate more period catalogues and approach the museum holding West End’s archive, which the company has confirmed exists and is not held at the factory. Until then the question mark stays. An honest question mark is worth more than an invented date."
        ),

        h("h2", null, "Still ticking"),
        h(
          "p",
          null,
          "I do not know who wound this watch first. I do not know whose pocket it lived in, or what it was used to be on time for, or how it travelled from a counter in Bombay or Calcutta to a table in Kathmandu."
        ),
        h(
          "p",
          null,
          "I know it was made by a Swiss company that built its life around a market four thousand miles from its factory. I know its name was chosen for luck. I know that in the middle of a world war a version of it was advertised to people who needed a watch that simply worked."
        ),
        h("p", null, "And I know that at some point it stopped and that nobody came for it and that it sat somewhere for years being nothing to anyone, until it wasn’t."),

        h(EvidenceShot, {
          src: "images/secundus/secundus-running.jpg",
          alt: "Wound, running and keeping time again.",
          caption: "Wound, running and keeping time again.",
        }),

        h(
          "p",
          { className: "final" },
          "There are watches that cost more than everything I own. None of them would have made me sit down and read a radio journal from 1936. This one is not rare and it is not valuable. It is the only object I have that outlived everybody who could explain it and still keeps time."
        )
      ),
      h("footer", { className: "sx-foot" }, h("p", { className: "copyright" }, "© Anuj"))
    ),
    h(Lightbox, { item: lightbox, onClose: () => setLightbox(null) })
  );
}

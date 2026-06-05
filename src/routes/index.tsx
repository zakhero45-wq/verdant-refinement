import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroImg from "@/assets/projects/hero.webp";
import p1 from "@/assets/projects/1.jpg";
import p2 from "@/assets/projects/2.jpg";
import p3 from "@/assets/projects/3.jpg";
import p4 from "@/assets/projects/4.jpg";
import p6 from "@/assets/projects/6.jpg";
import p7 from "@/assets/projects/7.webp";
import principal from "@/assets/projects/5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TruVine Design — Biophilic Interior Architecture Studio" },
      {
        name: "description",
        content:
          "A private biophilic interior architecture studio composing calm, nature-rooted residences and boutique hospitality interiors. Principal-led, by commission.",
      },
      { property: "og:title", content: "TruVine Design — Biophilic Interior Architecture Studio" },
      {
        property: "og:description",
        content:
          "Private biophilic interior architecture. Calm, considered residences and boutique hospitality, by commission.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://verdant-refinement.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://verdant-refinement.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesignStudio",
          name: "TruVine Design",
          description:
            "Biophilic interior architecture studio for private residences and boutique hospitality.",
          url: "https://verdant-refinement.lovable.app/",
          email: "jallis@truvinedesign.com",
          sameAs: [
            "https://www.instagram.com/biophilicdesigner/",
            "https://www.facebook.com/truvinedesign/",
            "https://www.pinterest.com/truvine007/",
          ],
        }),
      },
    ],
  }),
});

const SOCIAL = {
  facebook: "https://www.facebook.com/truvinedesign/",
  instagram: "https://www.instagram.com/biophilicdesigner/?hl=en",
  pinterest: "https://www.pinterest.com/truvine007/",
  email: "jallis@truvinedesign.com",
};

const services = [
  {
    title: "Private Residences",
    body: "Full-home design rooted in stillness, texture and light — from concept through final styling.",
  },
  {
    title: "Boutique Hospitality",
    body: "Sensory environments for intimate hotels, restaurants and members' clubs.",
  },
  {
    title: "Biophilic Consulting",
    body: "Living-wall, planting and material strategies that bring nature into existing architecture.",
  },
  {
    title: "Art & Object Curation",
    body: "Sourcing of artisan furniture, ceramics and commissioned works for a curated whole.",
  },
];

// Editorial asymmetrical composition — varied spans, varied aspect ratios.
const projects: {
  src: string;
  alt: string;
  caption: string;
  span: string;
  ratio: string;
  pos?: string;
}[] = [
  {
    src: p1,
    alt: "Light-filled showroom interior with planted screens",
    caption: "Showroom · Interior",
    span: "sm:col-span-7",
    ratio: "aspect-[4/5]",
    pos: "object-center",
  },
  {
    src: p3,
    alt: "Evening terrace with rattan lighting and layered planting",
    caption: "Restaurant · Terrace",
    span: "sm:col-span-5 sm:mt-24",
    ratio: "aspect-[3/4]",
    pos: "object-right",
  },
  {
    src: p7,
    alt: "Brick courtyard framed by a vertical living wall",
    caption: "Courtyard · Living Wall",
    span: "sm:col-span-5",
    ratio: "aspect-[3/4]",
    pos: "object-left",
  },
  {
    src: p2,
    alt: "Sail-shaded garden lounge under royal palms",
    caption: "Garden · Hospitality",
    span: "sm:col-span-7 sm:mt-16",
    ratio: "aspect-[16/11]",
    pos: "object-center",
  },
  {
    src: p4,
    alt: "Plaza dining beneath palm canopy with sculptural pavilion",
    caption: "Plaza · Public Realm",
    span: "sm:col-span-7",
    ratio: "aspect-[16/11]",
    pos: "object-bottom",
  },
  {
    src: p6,
    alt: "Mediterranean atrium with hanging orchids and bougainvillea",
    caption: "Atrium · Private Residence",
    span: "sm:col-span-5 sm:mt-20",
    ratio: "aspect-[3/4]",
    pos: "object-center",
  },
];

function Icon({ name }: { name: "facebook" | "instagram" | "pinterest" | "mail" }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "facebook")
    return (
      <svg {...common}>
        <path d="M14 9h2.5V6H14c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.3l.7-3H14V9.5c0-.3.2-.5.5-.5z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    );
  if (name === "pinterest")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M11 8c2.2-.4 4 .9 4 3 0 2-1.4 3.5-3 3.5-1 0-1.7-.7-1.5-1.7l.6-2.6M10.5 10.5 9 19" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Shared transition tokens — all motion slowed by ~30%.
  const linkHover =
    "transition-[color,opacity] duration-[900ms] ease-cinema hover:text-bronze";
  const subtleLuminance =
    "transition-[background-color,filter] duration-[900ms] ease-cinema hover:bg-bronze hover:[filter:brightness(1.04)]";

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans antialiased atmosphere grain-overlay">
      <div className="relative z-[3]">
      {/* Utility / social bar — slimmer, quieter */}
      <div className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 h-9 flex items-center justify-between text-[10px] tracking-luxe uppercase text-foreground/40">
          <span className="hidden sm:inline">Biophilic Design Studio</span>
          <div className="flex items-center gap-5">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={linkHover}><Icon name="instagram" /></a>
            <a href={SOCIAL.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className={linkHover}><Icon name="pinterest" /></a>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={linkHover}><Icon name="facebook" /></a>
          </div>
          <a href={`mailto:${SOCIAL.email}`} className={`hidden sm:inline ${linkHover}`}>
            {SOCIAL.email}
          </a>
        </div>
      </div>

      {/* Primary nav — reduced presence */}
      <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg sm:text-xl tracking-tight text-foreground/90">
            TruVine
          </a>
          <ul className="hidden md:flex items-center gap-9 text-[10.5px] tracking-luxe uppercase text-foreground/55">
            <li><a href="#work" className={linkHover}>Work</a></li>
            <li><a href="#philosophy" className={linkHover}>Philosophy</a></li>
            <li><a href="#studio" className={linkHover}>Studio</a></li>
            <li><a href="#contact" className={linkHover}>Contact</a></li>
          </ul>
          <a
            href="#contact"
            className={`hidden md:inline text-[10.5px] tracking-luxe uppercase text-foreground/55 ${linkHover}`}
          >
            Enquire
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
            className="md:hidden -mr-2 p-2 text-foreground/70"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              {navOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <><path d="M4 9h16" /><path d="M4 15h16" /></>}
            </svg>
          </button>
        </nav>
        {navOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
            <ul className="px-6 py-8 space-y-6 text-[11px] tracking-luxe uppercase text-foreground/70">
              {[
                ["Work", "#work"],
                ["Philosophy", "#philosophy"],
                ["Studio", "#studio"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} onClick={() => setNavOpen(false)} className="block">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pt-20 sm:pt-24 lg:pt-28 pb-24 sm:pb-28 lg:pb-36">
          <p className="text-[10px] tracking-luxe uppercase text-accent/80 mb-8 sm:mb-10">
            Biophilic Interior Architecture
          </p>
          {/* Mobile heading reduced ~15% (2.6rem → 2.2rem). Desktop preserved. */}
          <h1 className="font-serif font-light text-[2.2rem] leading-[1.08] sm:text-6xl lg:text-[6.5rem] lg:leading-[1.02] tracking-[-0.015em] max-w-5xl text-foreground/95">
            Living spaces,
            <br />
            <span className="italic text-foreground/80">quietly</span> rooted in nature.
          </h1>
          <p className="mt-10 sm:mt-12 max-w-xl text-foreground/55 text-[14.5px] sm:text-base lg:text-lg leading-[1.85]">
            A biophilic interior architecture studio designing calm, considered environments for
            private residences and boutique hospitality — where light, texture and living matter
            shape every detail.
          </p>

          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-sm text-[10.5px] tracking-luxe uppercase font-medium ${subtleLuminance}`}
            >
              Request Private Consultation
              <span aria-hidden className="opacity-70">→</span>
            </a>
            <a
              href="#work"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-[10.5px] tracking-luxe uppercase text-foreground/70 ${linkHover}`}
            >
              View Selected Work
            </a>
          </div>

          {/* Hero image — asymmetrical, offset, generous margin */}
          <figure className="mt-20 sm:mt-24 lg:mt-28 relative">
            <div className="sm:pl-[6%] lg:pl-[10%]">
              <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] overflow-hidden rounded-sm">
                <img
                  src={heroImg}
                  alt="Pergola lounge framed by mature foliage at golden hour"
                  className="w-full h-full object-cover object-[60%_50%]"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-5 text-[10px] tracking-luxe uppercase text-foreground/40">
                Garden Pavilion · South Florida
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] tracking-luxe uppercase text-accent/80 mb-6">Philosophy</p>
            <h2 className="font-serif font-light text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl tracking-tight text-foreground/95">
              Architecture that breathes with the people inside it.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-foreground/60 text-[15px] sm:text-base leading-[1.85] space-y-6">
            <p>
              Every project begins with stillness — a study of light, of orientation, of how a
              room is actually lived in. We design slowly, edit carefully, and let the natural
              materials carry the room.
            </p>
            <p>
              Limewashed walls, hand-thrown ceramics, oxidised brass, mature olive, living vines
              — our palette is restrained so the life inside each space can be loud.
            </p>
          </div>
        </div>
      </section>

      {/* Selected work — editorial asymmetrical grid */}
      <section id="work" className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40">
          <div className="mb-16 sm:mb-24 max-w-2xl">
            <p className="text-[10px] tracking-luxe uppercase text-accent/80 mb-6">Selected Work</p>
            <h2 className="font-serif font-light text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl tracking-tight text-foreground/95">
              A quiet portfolio, made with intention.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-14 sm:gap-y-20">
            {projects.map((p, i) => (
              <figure key={i} className={`group ${p.span}`}>
                <div className={`${p.ratio} overflow-hidden rounded-sm`}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className={`w-full h-full object-cover ${p.pos ?? "object-center"} transition-transform duration-[2200ms] ease-cinema group-hover:scale-[1.025]`}
                  />
                </div>
                <figcaption className="mt-5 text-[10px] tracking-luxe uppercase text-foreground/45">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40">
          <div className="mb-16 sm:mb-20 max-w-2xl">
            <p className="text-[10px] tracking-luxe uppercase text-accent/80 mb-6">Practice</p>
            <h2 className="font-serif font-light text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl tracking-tight text-foreground/95">
              A considered practice, end to end.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-14 sm:gap-y-0 sm:gap-x-10 lg:gap-x-14">
            {services.map((s, i) => (
              <div key={s.title} className={`${i > 0 ? "sm:pl-10 lg:pl-14 sm:border-l sm:border-border/30" : ""}`}>
                <div className="h-px w-6 bg-accent/70 mb-8" />
                <h3 className="font-serif text-[1.4rem] sm:text-[1.6rem] mb-4 leading-tight text-foreground/95">{s.title}</h3>
                <p className="text-foreground/55 text-[14.5px] leading-[1.8]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <figure className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-sm lg:-ml-[8%]">
              <img
                src={principal}
                alt="Principal designer of TruVine seated within a tree-framed terrace"
                loading="lazy"
                className="w-full h-full object-cover object-[55%_40%]"
              />
            </div>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <p className="text-[10px] tracking-luxe uppercase text-accent/80 mb-6">The Studio</p>
            <h2 className="font-serif font-light text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl tracking-tight mb-8 text-foreground/95">
              A small studio, by intention.
            </h2>
            <p className="text-foreground/60 leading-[1.85] mb-6 text-[15px] sm:text-base">
              TruVine is principal-led. We take on a limited number of commissions each year so
              every space receives the attention of the designer from first sketch through final
              styling.
            </p>
            <p className="text-foreground/60 leading-[1.85] text-[15px] sm:text-base">
              Our work is rooted in biophilic principles — living walls, mature planting, natural
              light, honest materials — quietly composed for the people who live and gather inside.
            </p>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-[11px] tracking-luxe uppercase text-foreground/55">
              {[
                "Private Residential Expertise",
                "Boutique Hospitality Practice",
                "Selective International Commissions",
                "Principal-Led Collaboration",
              ].map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <span className="mt-[10px] inline-block h-px w-5 bg-accent/70 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact — bespoke, architectural */}
      <section id="contact" className="border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-40">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-[10px] tracking-luxe uppercase text-accent/80 mb-6">Correspondence</p>
            <h2 className="font-serif font-light text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl tracking-tight text-foreground/95">
              Present your project.
            </h2>
            <div className="mx-auto mt-8 h-px w-10 bg-accent/60" />
            <p className="text-foreground/55 text-[14.5px] sm:text-[15px] max-w-lg mx-auto mt-8 leading-[1.85]">
              Enquiries are read personally by the studio principal. We reply, by hand, within two
              business days.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-16">
              <p className="font-serif text-3xl text-foreground/95 mb-4">Thank you.</p>
              <div className="mx-auto h-px w-8 bg-accent/60 my-6" />
              <p className="text-foreground/55 text-[14.5px]">
                Your note is with the studio. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/?success=true"
              onSubmit={() => setTimeout(() => setSent(true), 0)}
              className="divide-y divide-border/30 border-y border-border/30"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <Row label="Name" name="name" required />
              <Row label="Email" name="email" type="email" required />
              <Row label="Location" name="location" placeholder="City, region or country" />
              <Row label="Project" name="type" placeholder="Residence, hospitality, consulting…" />
              <div className="grid grid-cols-12 gap-4 sm:gap-6 py-7 sm:py-8">
                <label className="col-span-12 sm:col-span-3 text-[10px] tracking-luxe uppercase text-foreground/45 pt-3">
                  Notes
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="col-span-12 sm:col-span-9 bg-transparent outline-none py-2 text-foreground placeholder:text-foreground/25 resize-none text-[15px] sm:text-[15.5px] leading-[1.75] font-serif italic"
                  placeholder="A few sentences on the space, the timeline, and what you hope it becomes…"
                />
              </div>

              <div className="pt-10 flex flex-col items-center gap-5 border-0">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-4 px-10 py-4 border border-foreground/30 rounded-sm text-[10.5px] tracking-luxe uppercase text-foreground/85 transition-[color,border-color] duration-[900ms] ease-cinema hover:text-bronze hover:border-bronze/60"
                >
                  Send Enquiry
                  <span aria-hidden className="opacity-60">→</span>
                </button>
                <p className="text-[10px] tracking-luxe uppercase text-foreground/35">
                  Or write directly · <a href={`mailto:${SOCIAL.email}`} className="text-foreground/55 hover:text-foreground transition-colors duration-[900ms] ease-cinema normal-case tracking-normal font-serif italic">{SOCIAL.email}</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
            <div>
              <a href="#top" className="font-serif text-lg tracking-tight text-foreground/85">
                TruVine
              </a>
              <p className="mt-3 text-[10px] tracking-luxe uppercase text-foreground/40">
                Biophilic Interior Architecture
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-5">
              <a
                href={`mailto:${SOCIAL.email}`}
                className={`font-serif italic text-foreground/75 ${linkHover}`}
              >
                {SOCIAL.email}
              </a>
              <div className="flex items-center gap-5 text-foreground/45">
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={linkHover}><Icon name="instagram" /></a>
                <a href={SOCIAL.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className={linkHover}><Icon name="pinterest" /></a>
                <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={linkHover}><Icon name="facebook" /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-luxe uppercase text-foreground/35">
            <span>© {new Date().getFullYear()} TruVine Design</span>
            <span className="font-serif normal-case tracking-normal italic text-foreground/45">
              Quietly, in nature.
            </span>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

function Row({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-7 items-baseline">
      <label className="col-span-12 sm:col-span-3 text-[10px] tracking-luxe uppercase text-foreground/45">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="col-span-12 sm:col-span-9 bg-transparent outline-none py-1 text-foreground placeholder:text-foreground/25 text-[15px] sm:text-[15.5px] font-serif italic"
      />
    </div>
  );
}

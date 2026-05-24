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
      { title: "TruVine Design — Biophilic Interior Architecture" },
      {
        name: "description",
        content:
          "TruVine Design is a biophilic interior architecture studio crafting calm, living environments for private residences and boutique hospitality.",
      },
      { property: "og:title", content: "TruVine Design — Biophilic Interior Architecture" },
      {
        property: "og:description",
        content:
          "A biophilic design studio creating calm, luxurious, nature-rooted interiors.",
      },
      { property: "og:type", content: "website" },
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

const projects = [
  { src: p1, alt: "Light-filled showroom interior with planted screens", caption: "Showroom · Interior" },
  { src: p3, alt: "Evening terrace with rattan lighting and layered planting", caption: "Restaurant · Terrace" },
  { src: p7, alt: "Brick courtyard framed by a vertical living wall", caption: "Courtyard · Living Wall" },
  { src: p2, alt: "Sail-shaded garden lounge under royal palms", caption: "Garden · Hospitality" },
  { src: p4, alt: "Plaza dining beneath palm canopy with sculptural pavilion", caption: "Plaza · Public Realm" },
  { src: p6, alt: "Mediterranean atrium with hanging orchids and bougainvillea", caption: "Atrium · Private Residence" },
];

function Icon({ name }: { name: "facebook" | "instagram" | "pinterest" | "mail" }) {
  const common = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
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

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Utility / social bar */}
      <div className="border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 h-10 flex items-center justify-between text-[10.5px] tracking-luxe uppercase text-foreground/55">
          <span className="hidden sm:inline">Biophilic Design Studio</span>
          <div className="flex items-center gap-5">
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors duration-500"><Icon name="instagram" /></a>
            <a href={SOCIAL.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="hover:text-accent transition-colors duration-500"><Icon name="pinterest" /></a>
            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors duration-500"><Icon name="facebook" /></a>
          </div>
          <a href={`mailto:${SOCIAL.email}`} className="hidden sm:inline hover:text-accent transition-colors duration-500">
            {SOCIAL.email}
          </a>
        </div>
      </div>

      {/* Primary nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl sm:text-2xl tracking-tight">
            TruVine<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-[11.5px] tracking-luxe uppercase text-foreground/75">
            <li><a href="#work" className="hover:text-accent transition-colors duration-500">Work</a></li>
            <li><a href="#philosophy" className="hover:text-accent transition-colors duration-500">Philosophy</a></li>
            <li><a href="#studio" className="hover:text-accent transition-colors duration-500">Studio</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors duration-500">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-[10.5px] tracking-luxe uppercase px-4 py-2.5 border border-foreground/25 rounded-sm hover:border-accent hover:text-accent transition-colors duration-500"
          >
            Request Consultation
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
            className="md:hidden -mr-2 p-2 text-foreground/80"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              {navOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <><path d="M4 8h16" /><path d="M4 16h16" /></>}
            </svg>
          </button>
        </nav>
        {navOpen && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <ul className="px-5 py-6 space-y-5 text-[12px] tracking-luxe uppercase text-foreground/80">
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
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32">
          <p className="text-[10.5px] tracking-luxe uppercase text-accent/90 mb-6 sm:mb-8">
            Biophilic Interior Architecture
          </p>
          <h1 className="font-serif font-light text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[6.5rem] lg:leading-[1.02] tracking-[-0.015em] max-w-5xl">
            Living spaces,
            <br />
            <span className="italic text-foreground/85">quietly</span> rooted in nature.
          </h1>
          <p className="mt-7 sm:mt-10 max-w-xl text-foreground/65 text-[15px] sm:text-base lg:text-lg leading-relaxed">
            A biophilic interior architecture studio designing calm, considered environments for
            private residences and boutique hospitality — where light, texture and living matter
            shape every detail.
          </p>

          <div className="mt-9 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-accent text-accent-foreground rounded-sm text-[11px] tracking-luxe uppercase font-medium hover:bg-accent/90 transition-colors duration-500"
            >
              Request Private Consultation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-foreground/25 rounded-sm text-[11px] tracking-luxe uppercase hover:border-accent hover:text-accent transition-colors duration-500"
            >
              View Selected Work
            </a>
          </div>

          {/* Hero image */}
          <figure className="mt-14 sm:mt-20 lg:mt-24 relative">
            <div className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/10] overflow-hidden rounded-sm border border-border/40">
              <img
                src={heroImg}
                alt="Pergola lounge framed by mature foliage at golden hour"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <figcaption className="mt-4 text-[10.5px] tracking-luxe uppercase text-foreground/45">
              Garden Pavilion · South Florida
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36 grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[10.5px] tracking-luxe uppercase text-accent/90 mb-5 sm:mb-6">Philosophy</p>
            <h2 className="font-serif font-light text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl tracking-tight">
              Architecture that breathes with the people inside it.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-foreground/70 text-[15.5px] sm:text-base leading-[1.75] space-y-5">
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

      {/* Selected work */}
      <section id="work" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-[10.5px] tracking-luxe uppercase text-accent/90 mb-5 sm:mb-6">Selected Work</p>
            <h2 className="font-serif font-light text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl tracking-tight">
              A quiet portfolio, made with intention.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((p, i) => (
              <figure key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border/40 bg-background">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 text-[10.5px] tracking-luxe uppercase text-foreground/55">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-[10.5px] tracking-luxe uppercase text-accent/90 mb-5 sm:mb-6">Practice</p>
            <h2 className="font-serif font-light text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl tracking-tight">
              A considered practice, end to end.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 border border-border/50">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-7 sm:p-8 lg:p-10">
                <div className="h-px w-8 bg-accent mb-7" />
                <h3 className="font-serif text-[1.4rem] sm:text-2xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-foreground/65 text-[14.5px] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <figure className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border/40">
              <img
                src={principal}
                alt="Principal designer of TruVine seated within a tree-framed terrace"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <p className="text-[10.5px] tracking-luxe uppercase text-accent/90 mb-5 sm:mb-6">The Studio</p>
            <h2 className="font-serif font-light text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl tracking-tight mb-7">
              A small studio, by intention.
            </h2>
            <p className="text-foreground/70 leading-[1.75] mb-5 text-[15.5px] sm:text-base">
              TruVine is principal-led. We take on a limited number of commissions each year so
              every space receives the attention of the designer from first sketch through final
              styling.
            </p>
            <p className="text-foreground/70 leading-[1.75] text-[15.5px] sm:text-base">
              Our work is rooted in biophilic principles — living walls, mature planting, natural
              light, honest materials — quietly composed for the people who live and gather inside.
            </p>

            <ul className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[12px] tracking-luxe uppercase text-foreground/65">
              {[
                "Private Residential Expertise",
                "Boutique Hospitality Practice",
                "Selective International Commissions",
                "Principal-Led Collaboration",
              ].map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-px w-5 bg-accent shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10 py-20 sm:py-28 lg:py-36">
          <p className="text-[10.5px] tracking-luxe uppercase text-accent/90 mb-5 sm:mb-6 text-center">Begin</p>
          <h2 className="font-serif font-light text-[2.1rem] leading-[1.08] sm:text-4xl lg:text-6xl tracking-tight text-center mb-6">
            Present your project.
          </h2>
          <p className="text-foreground/65 text-center text-[15px] sm:text-base max-w-xl mx-auto mb-12 sm:mb-14 leading-relaxed">
            Enquiries are read personally by the studio principal. We reply within two business
            days.
          </p>

          {sent ? (
            <div className="border border-accent/40 bg-accent/5 p-10 text-center rounded-sm">
              <p className="font-serif text-2xl mb-2">Thank you.</p>
              <p className="text-foreground/65 text-sm">
                Your note is with the studio. We'll be in touch shortly.
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
              className="space-y-7 sm:space-y-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-7 sm:gap-8">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Project Location" name="location" placeholder="City, region or country" />
              <Field label="Project Type" name="type" placeholder="Residence, hospitality, consulting…" />
              <div>
                <label className="block text-[10.5px] tracking-luxe uppercase text-foreground/55 mb-3">
                  About the Project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-foreground/25 focus:border-accent outline-none py-3 text-foreground placeholder:text-foreground/30 transition-colors resize-none text-[15.5px] sm:text-base"
                  placeholder="A few sentences on the space, timeline and what you hope it becomes…"
                />
              </div>
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-accent text-accent-foreground rounded-sm text-[11px] tracking-luxe uppercase font-medium hover:bg-accent/90 transition-colors duration-500"
                >
                  Send Enquiry
                  <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-12 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div>
              <a href="#top" className="font-serif text-xl tracking-tight">
                TruVine<span className="text-accent">.</span>
              </a>
              <p className="mt-3 text-[12px] tracking-luxe uppercase text-foreground/50">
                Biophilic Interior Architecture
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-4">
              <a
                href={`mailto:${SOCIAL.email}`}
                className="font-serif italic text-foreground/85 hover:text-accent transition-colors duration-500"
              >
                {SOCIAL.email}
              </a>
              <div className="flex items-center gap-5 text-foreground/55">
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors duration-500"><Icon name="instagram" /></a>
                <a href={SOCIAL.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="hover:text-accent transition-colors duration-500"><Icon name="pinterest" /></a>
                <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors duration-500"><Icon name="facebook" /></a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10.5px] tracking-luxe uppercase text-foreground/45">
            <span>© {new Date().getFullYear()} TruVine Design</span>
            <span className="font-serif normal-case tracking-normal italic text-foreground/45">
              Quietly, in nature.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
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
    <div>
      <label className="block text-[10.5px] tracking-luxe uppercase text-foreground/55 mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-foreground/25 focus:border-accent outline-none py-3 text-foreground placeholder:text-foreground/30 transition-colors text-[15.5px] sm:text-base"
      />
    </div>
  );
}

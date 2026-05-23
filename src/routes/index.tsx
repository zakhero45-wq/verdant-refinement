import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TruVine Design — Biophilic Interior Architecture" },
      {
        name: "description",
        content:
          "TruVine Design crafts calm, architectural interiors rooted in nature. Biophilic design studio for residential and hospitality spaces.",
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

const services = [
  {
    title: "Residential Interiors",
    body: "Full-home design rooted in stillness, texture, and light — from concept through styling.",
  },
  {
    title: "Hospitality & Retail",
    body: "Sensory environments for boutique hotels, restaurants, and flagship spaces.",
  },
  {
    title: "Biophilic Consulting",
    body: "Material, light, and planting strategies that bring living architecture into existing builds.",
  },
  {
    title: "Art & Object Curation",
    body: "Sourcing of artisan furniture, ceramics, and commissioned works for a curated whole.",
  },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="text-foreground/55 hover:text-accent transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Top utility / social bar */}
      <div className="border-b border-border/60 backdrop-blur-md bg-background/70 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-11 flex items-center justify-between text-[11px] tracking-luxe uppercase text-foreground/60">
          <span className="hidden sm:inline">Studio · est. 2018</span>
          <div className="flex items-center gap-5">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://pinterest.com" label="Pinterest">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M11 8c2.2-.4 4 .9 4 3 0 2-1.4 3.5-3 3.5-1 0-1.7-.7-1.5-1.7l.6-2.6M10.5 10.5 9 19" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 10v7M7 7.5v.01M11 17v-4.5a2 2 0 0 1 4 0V17M11 10v7" />
              </svg>
            </SocialIcon>
          </div>
          <span className="hidden sm:inline">hello@truvine.design</span>
        </div>
      </div>

      {/* Primary nav */}
      <header className="border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="font-serif text-2xl tracking-tight">
            TruVine<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-[12px] tracking-luxe uppercase text-foreground/75">
            <li><a href="#work" className="hover:text-accent transition-colors">Work</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#studio" className="hover:text-accent transition-colors">Studio</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase px-4 py-2.5 border border-foreground/25 rounded-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
          >
            Begin a Project
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-32 lg:pt-36 lg:pb-44">
          <p className="text-[11px] tracking-luxe uppercase text-accent/90 mb-8">
            ◦ Biophilic Interior Architecture
          </p>
          <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-[7.5rem] leading-[1.02] tracking-[-0.015em] max-w-5xl">
            Living spaces,<br />
            <span className="italic text-foreground/85">quietly</span> rooted in nature.
          </h1>
          <p className="mt-10 max-w-xl text-foreground/65 text-base lg:text-lg leading-relaxed">
            TruVine is a design studio crafting calm, architectural interiors for homes and
            hospitality — where light, texture, and living matter are the language.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 bg-accent text-accent-foreground rounded-sm text-[12px] tracking-luxe uppercase font-medium hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_oklch(0.84_0.06_130/0.55)] transition-all duration-300"
            >
              Start a Conversation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/20 rounded-sm text-[12px] tracking-luxe uppercase hover:border-accent hover:text-accent transition-all duration-300"
            >
              View Selected Work
            </a>
          </div>
        </div>
      </section>

      {/* Work / philosophy */}
      <section id="work" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-luxe uppercase text-accent/90 mb-6">◦ Philosophy</p>
            <h2 className="font-serif font-light text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Architecture that breathes with the people inside it.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-foreground/70 text-base leading-relaxed space-y-5">
            <p>
              Every project begins with stillness — a study of light, of orientation, of how a
              room is actually lived in. We design slowly, edit ruthlessly, and let the natural
              materials speak.
            </p>
            <p>
              Limewashed walls, hand-thrown ceramics, oxidised brass, mature olive — our palette
              is restrained so the life inside the room can be loud.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[11px] tracking-luxe uppercase text-accent/90 mb-6">◦ Services</p>
              <h2 className="font-serif font-light text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-2xl">
                A considered practice, end to end.
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500"
              >
                <div className="h-px w-8 bg-accent mb-8 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-serif text-2xl mb-4 leading-tight">{s.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-luxe uppercase text-accent/90 mb-6">◦ The Studio</p>
            <h2 className="font-serif font-light text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8">
              A small studio, by intention.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-5">
              We take on a limited number of projects each year so every space receives the
              attention of the principal designer from sketch to final styling.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Based between coast and country, working internationally.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <dl className="grid grid-cols-2 gap-px bg-border/60 border border-border/60">
              {[
                ["48", "Projects realised"],
                ["12", "Countries served"],
                ["7yr", "Average client tenure"],
                ["1", "Studio at a time"],
              ].map(([n, l]) => (
                <div key={l} className="bg-background p-8">
                  <div className="font-serif text-4xl text-accent mb-2">{n}</div>
                  <div className="text-[11px] tracking-luxe uppercase text-foreground/55">{l}</div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact — Netlify form */}
      <section id="contact" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-[11px] tracking-luxe uppercase text-accent/90 mb-6 text-center">
            ◦ Begin
          </p>
          <h2 className="font-serif font-light text-4xl lg:text-6xl leading-[1.05] tracking-tight text-center mb-6">
            Tell us about your space.
          </h2>
          <p className="text-foreground/65 text-center max-w-xl mx-auto mb-14">
            We respond personally within two business days. All enquiries are reviewed by the
            studio principal.
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
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Project location" name="location" />
              <div>
                <label className="block text-[11px] tracking-luxe uppercase text-foreground/55 mb-3">
                  About the project
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-foreground/25 focus:border-accent outline-none py-3 text-foreground placeholder:text-foreground/30 transition-colors resize-none"
                  placeholder="A few sentences on the space, timeline, and what you hope it becomes…"
                />
              </div>
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground rounded-sm text-[12px] tracking-luxe uppercase font-medium hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_oklch(0.84_0.06_130/0.55)] transition-all duration-300"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-luxe uppercase text-foreground/50">
          <span>© {new Date().getFullYear()} TruVine Design</span>
          <span className="font-serif normal-case tracking-normal text-foreground/40 italic">
            Quietly, in nature.
          </span>
          <span>hello@truvine.design</span>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-luxe uppercase text-foreground/55 mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-foreground/25 focus:border-accent outline-none py-3 text-foreground placeholder:text-foreground/30 transition-colors"
      />
    </div>
  );
}

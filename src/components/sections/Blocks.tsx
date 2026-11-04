import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function PageHero({ eyebrow, title, highlight, text, image }: { eyebrow: string; title: string; highlight: string; text: string; image: string }) {
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" width={1600} height={912} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36 reveal">
        <p className="eyebrow">— {eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-4xl md:text-6xl font-extrabold leading-tight">
          {title} <span className="text-gold">{highlight}</span>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground md:text-lg">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton>Agendar pelo WhatsApp</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function CtaButton({ children, message }: { children: ReactNode; message?: string }) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-gold hover:opacity-90">
      {children} →
    </a>
  );
}

export function SectionTitle({ eyebrow, title, highlight, text }: { eyebrow: string; title: string; highlight?: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">— {eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">{title} {highlight && <span className="text-gold">{highlight}</span>}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export type Item = { icon: LucideIcon; title: string; text: string };

export function CardGrid({ items, numbered }: { items: Item[]; numbered?: boolean }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={it.title} className="rounded-xl border bg-card p-6 hover:border-primary/40 transition-colors">
          <div className="flex justify-between">
            <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"><it.icon className="size-5" /></span>
            {numbered && <span className="font-display text-2xl font-bold text-muted-foreground/30">{String(i + 1).padStart(2, "0")}</span>}
          </div>
          <h3 className="mt-5 font-semibold text-lg">{it.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Section({ children, alt }: { children: ReactNode; alt?: boolean }) {
  return <section className={alt ? "bg-surface" : ""}><div className="mx-auto max-w-6xl px-6 py-20">{children}</div></section>;
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <Section>
      <div className="rounded-2xl border border-primary/30 bg-card p-8 md:p-12 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-muted-foreground">{text}</p>
        </div>
        <CtaButton>Falar com um motorista</CtaButton>
      </div>
    </Section>
  );
}

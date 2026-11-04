import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { site, whatsappLink, instagramLink } from "@/config/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/frota", label: "Frota" },
  { to: "/corporativo", label: "Corporativo" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hidden md:block border-b bg-surface text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-6 py-2 flex justify-between">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Phone className="size-3.5 text-primary" />{site.whatsappDisplay}</span>
            <span className="flex items-center gap-1.5"><Instagram className="size-3.5 text-primary" />@{site.instagram}</span>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-primary" />Atendimento 24 horas · todo o Brasil</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Meu Motorista — início">
            <img src={logo.url} alt="Meu Motorista" className="h-9 w-auto" />
          </Link>
          <nav className="hidden lg:flex gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="text-muted-foreground hover:text-foreground transition-colors">{n.label}</Link>
            ))}
          </nav>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
            className="hidden lg:inline-flex rounded-md bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-gold">
            Agendar viagem →
          </a>
          <button className="lg:hidden p-2" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden border-t px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">{n.label}</Link>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-gold px-4 py-3 text-center text-sm font-bold text-primary-foreground">Agendar pelo WhatsApp</a>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 text-sm">
          <div>
            <img src={logo.url} alt="Meu Motorista" className="h-10 w-auto" loading="lazy" />
            <p className="mt-4 text-muted-foreground">Motoristas particulares com carros próprios da empresa, para pessoas e empresas. Vamos para qualquer lugar do Brasil.</p>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Navegação</h3>
            <ul className="grid gap-2">{nav.map((n) => <li key={n.to}><Link to={n.to} className="text-muted-foreground hover:text-foreground">{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4">Contato</h3>
            <ul className="grid gap-3 text-muted-foreground">
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex gap-2"><MessageCircle className="size-4 text-primary" />{site.whatsappDisplay}</a></li>
              <li><a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex gap-2"><Instagram className="size-4 text-primary" />@{site.instagram}</a></li>
              <li className="flex gap-2"><MapPin className="size-4 text-primary" />Atendimento 24h em todo o Brasil</li>
            </ul>
          </div>
        </div>
        <p className="border-t py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
      </footer>

      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-105 transition-transform">
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}

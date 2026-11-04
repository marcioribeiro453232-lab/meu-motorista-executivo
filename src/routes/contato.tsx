import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Instagram, Clock } from "lucide-react";
import { Section, SectionTitle } from "@/components/sections/Blocks";
import { site, whatsappLink, instagramLink } from "@/config/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Meu Motorista" },
      { name: "description", content: "Agende sua viagem com a Meu Motorista pelo WhatsApp +55 17 98105-7647. Atendimento 24 horas." },
      { property: "og:title", content: "Contato — Meu Motorista" },
      { property: "og:description", content: "Agende sua viagem pelo WhatsApp. Atendimento 24 horas." },
    ],
  }),
  component: Page,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  origem: z.string().trim().min(2, "Informe a origem").max(120),
  destino: z.string().trim().min(2, "Informe o destino").max(120),
  data: z.string().trim().min(1, "Informe a data"),
  passageiros: z.string().trim().max(3),
  detalhes: z.string().trim().max(800),
});
type Form = z.infer<typeof schema>;
const empty: Form = { nome: "", origem: "", destino: "", data: "", passageiros: "1", detalhes: "" };

function Page() {
  const [f, setF] = useState<Form>(empty);
  const [err, setErr] = useState<Partial<Record<keyof Form, string>>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) {
      const e2: typeof err = {};
      r.error.issues.forEach((i) => (e2[i.path[0] as keyof Form] = i.message));
      return setErr(e2);
    }
    setErr({});
    const d = r.data;
    const msg = `${site.whatsappMessage}\n\nNome: ${d.nome}\nOrigem: ${d.origem}\nDestino: ${d.destino}\nData: ${d.data}\nPassageiros: ${d.passageiros}${d.detalhes ? `\nDetalhes: ${d.detalhes}` : ""}`;
    const w = window.open(whatsappLink(msg), "_blank");
    if (!w) window.location.href = whatsappLink(msg);
  };

  const field = (k: keyof Form, label: string, type = "text") => (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}</span>
      <input type={type} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}
        className="rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring" />
      {err[k] && <span className="text-xs text-destructive">{err[k]}</span>}
    </label>
  );

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="sr-only">Contato</h1>
          <SectionTitle eyebrow="Contato" title="Vamos planejar a sua" highlight="próxima viagem?"
            text="Preencha os dados e enviaremos tudo pronto para o nosso WhatsApp. Respondemos rápido." />
          <ul className="mt-8 grid gap-4">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary/40"><MessageCircle className="text-whatsapp" /><span><span className="eyebrow block">WhatsApp</span>{site.whatsappDisplay}</span></a></li>
            <li><a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary/40"><Instagram className="text-primary" /><span><span className="eyebrow block">Instagram</span>@{site.instagram}</span></a></li>
            <li className="flex items-center gap-3 rounded-xl border bg-card p-4"><Clock className="text-primary" /><span><span className="eyebrow block">Disponibilidade</span>24 horas, todos os dias — todo o Brasil</span></li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="rounded-2xl border bg-card p-6 md:p-8 grid gap-4 h-fit">
          <p className="eyebrow">Solicitação rápida</p>
          {field("nome", "Seu nome *")}
          <div className="grid gap-4 sm:grid-cols-2">{field("origem", "Origem *")}{field("destino", "Destino *")}</div>
          <div className="grid gap-4 sm:grid-cols-2">{field("data", "Data *", "date")}{field("passageiros", "Passageiros", "number")}</div>
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Detalhes</span>
            <textarea rows={4} value={f.detalhes} onChange={(e) => setF({ ...f, detalhes: e.target.value })}
              className="rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring" placeholder="Horário, bagagens, paradas..." />
          </label>
          <button type="submit" className="rounded-md bg-whatsapp px-6 py-3 text-sm font-bold uppercase tracking-wider text-whatsapp-foreground hover:opacity-90">
            Enviar pelo WhatsApp →
          </button>
        </form>
      </div>
    </Section>
  );
}

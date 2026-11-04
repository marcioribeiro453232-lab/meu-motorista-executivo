import { createFileRoute } from "@tanstack/react-router";
import { Car } from "lucide-react";
import hero from "@/assets/hero-car.jpg";
import { PageHero, Section, SectionTitle, CtaBand } from "@/components/sections/Blocks";
import { frota } from "@/data/content";

export const Route = createFileRoute("/frota")({
  head: () => ({
    meta: [
      { title: "Frota — Meu Motorista" },
      { name: "description", content: "Frota própria de carros executivos, revisados e higienizados, para viagens com conforto e segurança." },
      { property: "og:title", content: "Frota — Meu Motorista" },
      { property: "og:description", content: "Carros próprios, revisados e confortáveis." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Frota própria" title="Carros da empresa," highlight="prontos para a estrada"
        text="Você não precisa ter carro. Nossos veículos são revisados, higienizados e preparados para viagens curtas ou longas." image={hero} />
      <Section>
        <SectionTitle eyebrow="Nossos veículos" title="Escolha o ideal para" highlight="sua viagem" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {frota.map((v) => (
            <div key={v.name} className="rounded-xl border bg-card p-6">
              <Car className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{v.name}</h3>
              <p className="eyebrow mt-1">{v.seats}</p>
              <p className="mt-3 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand title="Precisa de um veículo específico?" text="Consulte a disponibilidade pelo WhatsApp." />
    </>
  );
}

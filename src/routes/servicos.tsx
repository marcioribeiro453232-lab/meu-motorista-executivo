import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-car.jpg";
import { PageHero, Section, SectionTitle, CardGrid, CtaBand } from "@/components/sections/Blocks";
import { servicos } from "@/data/content";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Meu Motorista" },
      { name: "description", content: "Viagens interestaduais, traslados para aeroportos, motorista executivo, eventos e contratos para empresas." },
      { property: "og:title", content: "Serviços — Meu Motorista" },
      { property: "og:description", content: "Motorista particular para viagens, aeroportos, executivos e eventos." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Serviços" title="Motorista particular para" highlight="cada necessidade"
        text="Da ida ao aeroporto a uma viagem para outro estado: você escolhe o destino, nós cuidamos do resto." image={hero} />
      <Section>
        <SectionTitle eyebrow="O que fazemos" title="Nossos" highlight="serviços" />
        <CardGrid items={servicos} numbered />
      </Section>
      <CtaBand title="Não encontrou o que precisa?" text="Fale com a gente e montamos a viagem sob medida." />
    </>
  );
}

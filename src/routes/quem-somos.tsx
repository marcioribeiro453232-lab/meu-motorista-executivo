import { createFileRoute } from "@tanstack/react-router";
import chauffeur from "@/assets/chauffeur.jpg";
import { PageHero, Section, SectionTitle, CardGrid, CtaBand } from "@/components/sections/Blocks";
import { diferenciais } from "@/data/content";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem somos — Meu Motorista" },
      { name: "description", content: "Conheça a Meu Motorista: motoristas particulares com frota própria, atendendo pessoas e empresas em todo o Brasil." },
      { property: "og:title", content: "Quem somos — Meu Motorista" },
      { property: "og:description", content: "Motoristas particulares com frota própria em todo o Brasil." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Quem somos" title="Confiança construída" highlight="em cada trajeto"
        text="Somos uma empresa de motoristas particulares com carros próprios, dedicada a levar pessoas e empresas com segurança, conforto e discrição." image={chauffeur} />
      <Section>
        <SectionTitle eyebrow="Nossa história" title="Um jeito mais tranquilo de" highlight="viajar"
          text="Nascemos para resolver um problema simples: quem precisa viajar nem sempre quer dirigir. Por isso oferecemos o carro e o motorista, prontos para qualquer destino, a qualquer hora." />
        <CardGrid items={diferenciais.slice(0, 3)} numbered />
      </Section>
      <CtaBand title="Conte com a gente na sua próxima viagem." text="Atendimento 24 horas pelo WhatsApp." />
    </>
  );
}

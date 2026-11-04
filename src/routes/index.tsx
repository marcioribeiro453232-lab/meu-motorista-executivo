import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-car.jpg";
import chauffeur from "@/assets/chauffeur.jpg";
import { PageHero, Section, SectionTitle, CardGrid, CtaBand, CtaButton } from "@/components/sections/Blocks";
import { diferenciais, servicos } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Motorista — Motorista particular para todo o Brasil" },
      { name: "description", content: "Motorista particular com carro da empresa para pessoas e empresas. Viagens para outros estados, aeroportos e executivos. Agende pelo WhatsApp." },
      { property: "og:title", content: "Meu Motorista — Motorista particular para todo o Brasil" },
      { property: "og:description", content: "Motorista particular com carro da empresa. Vamos para todo lugar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageHero eyebrow="Exclusivo e privado" title="Seu motorista particular" highlight="para qualquer destino"
        text="Motoristas profissionais com carros da própria empresa, para pessoas e empresas. Vamos para todo lugar — inclusive outros estados." image={hero} />
      <Section>
        <SectionTitle eyebrow="Por que escolher" title="Conforto, segurança e" highlight="pontualidade" />
        <CardGrid items={diferenciais} />
      </Section>
      <Section alt>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <img src={chauffeur} alt="Motorista particular ao lado do carro na estrada" className="rounded-2xl w-full max-h-[520px] object-cover" loading="lazy" width={912} height={1104} />
          <div>
            <SectionTitle eyebrow="Quem somos" title="Você só precisa dizer" highlight="para onde vai"
              text="O carro, o motorista e o planejamento são por nossa conta. Atendemos viagens curtas, longas e interestaduais com o mesmo cuidado." />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton>Agendar viagem</CtaButton>
              <Link to="/quem-somos" className="rounded-md border px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-muted">Conheça a empresa</Link>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle eyebrow="Serviços" title="Soluções para" highlight="cada viagem" />
        <CardGrid items={servicos} numbered />
      </Section>
      <CtaBand title="Vamos para todo lugar." text="Diga o destino e a data — respondemos rápido pelo WhatsApp." />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Clock, ShieldCheck, FileText, Users, Plane } from "lucide-react";
import hero from "@/assets/hero-car.jpg";
import { PageHero, Section, SectionTitle, CardGrid, CtaBand } from "@/components/sections/Blocks";

const items = [
  { icon: Briefcase, title: "Diretoria e executivos", text: "Motorista dedicado para agendas, reuniões e visitas." },
  { icon: Users, title: "Recepção de clientes", text: "Uma chegada segura e cuidadosa que fortalece a imagem da sua empresa." },
  { icon: Plane, title: "Aeroportos e viagens", text: "Traslados e viagens corporativas para qualquer estado." },
  { icon: FileText, title: "Contratos recorrentes", text: "Motorista por dia, semana ou mês, com previsibilidade." },
  { icon: Clock, title: "Disponível 24 horas", text: "Atendimento a qualquer hora, inclusive feriados." },
  { icon: ShieldCheck, title: "Discrição total", text: "Profissionais treinados para sigilo e confidencialidade." },
];

export const Route = createFileRoute("/corporativo")({
  head: () => ({
    meta: [
      { title: "Corporativo — Meu Motorista" },
      { name: "description", content: "Motorista particular para empresas: executivos, clientes, aeroportos e contratos recorrentes em todo o Brasil." },
      { property: "og:title", content: "Corporativo — Meu Motorista" },
      { property: "og:description", content: "Transporte executivo para empresas em todo o Brasil." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Para empresas" title="Transporte executivo" highlight="para sua empresa"
        text="Soluções planejadas para executivos, colaboradores, clientes e convidados, com carro da empresa e motorista profissional." image={hero} />
      <Section>
        <SectionTitle eyebrow="Soluções corporativas" title="Mais controle, segurança e" highlight="eficiência" />
        <CardGrid items={items} numbered />
      </Section>
      <CtaBand title="Vamos planejar o transporte da sua empresa?" text="Fale com um consultor pelo WhatsApp." />
    </>
  );
}

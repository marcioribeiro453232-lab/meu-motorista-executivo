import { ShieldCheck, Clock, Car, MapPinned, Briefcase, Plane, Users, CalendarCheck, Route as RouteIcon, Sparkles, HeartHandshake, Building2 } from "lucide-react";
import type { Item } from "@/components/sections/Blocks";

export const diferenciais: Item[] = [
  { icon: Car, title: "Carros da própria empresa", text: "Você não precisa ter carro: nossa frota é própria, revisada e higienizada." },
  { icon: ShieldCheck, title: "Segurança e discrição", text: "Motoristas experientes, profissionais e com total sigilo durante o trajeto." },
  { icon: Clock, title: "Pontualidade", text: "Planejamento de horários e rotas para você nunca se atrasar." },
  { icon: MapPinned, title: "Vamos para todo lugar", text: "Viagens intermunicipais e interestaduais para qualquer cidade do Brasil." },
  { icon: CalendarCheck, title: "Atendimento 24 horas", text: "Agende quando quiser, inclusive madrugadas, feriados e fins de semana." },
  { icon: HeartHandshake, title: "Atendimento personalizado", text: "Cada viagem é planejada de acordo com sua necessidade." },
];

export const servicos: Item[] = [
  { icon: RouteIcon, title: "Viagens para outros estados", text: "Levamos você com conforto para qualquer estado do país, com paradas sob medida." },
  { icon: Plane, title: "Aeroportos", text: "Traslados para embarques e desembarques, com acompanhamento do horário do voo." },
  { icon: Briefcase, title: "Executivos e empresas", text: "Motorista particular para reuniões, visitas a clientes e agendas corporativas." },
  { icon: Users, title: "Família e passeios", text: "Viagens de lazer, eventos, consultas médicas e compromissos pessoais." },
  { icon: Sparkles, title: "Eventos especiais", text: "Casamentos, formaturas e ocasiões que pedem chegada com estilo." },
  { icon: Building2, title: "Contratos recorrentes", text: "Motorista à disposição por dia, semana ou mês para sua empresa." },
];

export const frota = [
  { name: "Sedan executivo", seats: "Até 4 passageiros", text: "Conforto e elegância para viagens executivas e traslados." },
  { name: "SUV premium", seats: "Até 4 passageiros + bagagens", text: "Espaço extra e segurança para viagens longas e estradas." },
  { name: "Minivan", seats: "Até 6 passageiros", text: "Ideal para famílias e pequenos grupos viajarem juntos." },
];

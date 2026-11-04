// Edite aqui os dados principais do site.
export const site = {
  name: "Meu Motorista",
  slogan: "Exclusivo e privado",
  whatsapp: "5517981057647",
  whatsappDisplay: "+55 17 98105-7647",
  whatsappMessage: "Olá meu motorista, gostaria de agendar uma viagem.",
  instagram: "meumotoristaprivado",
  coverage: "Atendemos todo o Brasil — viagens para qualquer estado",
};

export function whatsappLink(text: string = site.whatsappMessage) {
  return `https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${encodeURIComponent(text)}`;
}

export const instagramLink = `https://instagram.com/${site.instagram}`;

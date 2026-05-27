export interface WhatsAppLinkParams {
  phone: string;
  service?: string;
  utmSource?: string | null;
  utmCampaign?: string | null;
}

/**
 * Mapeia os parâmetros técnicos de serviço para nomes amigáveis em português
 */
const serviceNames: Record<string, string> = {
  'vedacao': 'Vedações Térmicas (Troca de Gaxetas)',
  'mecanica': 'Mecânica de Portas (Molas e Dobradiças)',
  'balcao': 'Revitalização de Balcões (LED e Cabeceiras)',
  'gaxeta-encaixe': 'Troca de Gaxetas de Encaixe',
};

/**
 * Gera um link formatado do WhatsApp com rastreamento UTM e detalhes do serviço selecionado
 */
export function generateWhatsAppLink({
  phone,
  service,
  utmSource,
  utmCampaign,
}: WhatsAppLinkParams): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const baseUrl = `https://wa.me/${cleanPhone}`;

  // Identifica o serviço selecionado ou define um padrão amplo
  const serviceName = service && serviceNames[service]
    ? serviceNames[service]
    : 'Manutenção Especializada em Câmaras Frigoríficas';

  // Identifica a origem do tráfego para inteligência de negócios
  const sourceName = utmSource ? utmSource.trim() : 'Tráfego Direto (Site)';
  const campaignInfo = utmCampaign ? ` (Campanha: ${utmCampaign})` : '';

  // Mensagem comercial personalizada
  const message = `Olá Lopes! Vi a página de Lopes Manutenção pelo [${sourceName}${campaignInfo}] e gostaria de solicitar um orçamento para o serviço de [${serviceName}].`;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

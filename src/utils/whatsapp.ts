export const WHATSAPP_NUMBER = '5551982892257'; // WhatsApp Oficial da agência Venda Mais Online
export const WHATSAPP_FORMATTED = '(51) 98289-2257';
export const OFFICIAL_EMAIL = 'contato@vendanainternet.online';

export function createWhatsAppUrl(message: string, phoneNumber = WHATSAPP_NUMBER): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function openWhatsApp(message: string, phoneNumber = WHATSAPP_NUMBER): void {
  const url = createWhatsAppUrl(message, phoneNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}

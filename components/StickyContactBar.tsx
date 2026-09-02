import {
  TELEFONE_E164,
  WHATSAPP_URL
} from '@/content/clinica'
import { IconePhone, IconeWhatsapp } from './Icones'

/**
 * Barra fixa inferior no celular, com Ligar e WhatsApp.
 *
 * Não cobre o conteúdo: o `body` recebe padding-bottom equivalente no
 * globals.css (requisito explícito do cliente). Some no desktop, onde o
 * telefone já está fixo no header.
 */
export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-black/10 bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href={`tel:${TELEFONE_E164}`}
        data-evento="click_ligar"
        data-origem="barra_fixa"
        className="flex min-h-14 items-center justify-center gap-2 bg-sos-primary text-base font-bold text-white"
      >
        <IconePhone className="h-5 w-5" />
        Ligar
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-evento="click_whatsapp"
        data-origem="barra_fixa"
        className="flex min-h-14 items-center justify-center gap-2 bg-sos-whats text-base font-bold text-sos-whats-ink"
      >
        <IconeWhatsapp className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  )
}

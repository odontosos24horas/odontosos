import {
  HERO,
  TELEFONE_E164,
  TELEFONE_EXIBICAO,
  WHATSAPP_URL
} from '@/content/clinica'
import { IconePhone, IconeWhatsapp } from './Icones'

/**
 * Primeira tela.
 *
 * Todo o conteúdo é texto real em HTML — nada de imagem única com texto
 * dentro —, para que Google e ferramentas de IA consigam ler. Este é o único
 * H1 da página.
 */
export default function Hero() {
  return (
    <section className="bg-sos-light/40">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-sos-primary/10 px-3 py-1 text-sm font-semibold text-sos-primary">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-sos-primary"
          />
          Atendimento agora — 24 horas, todos os dias
        </p>

        <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-sos-primary sm:text-4xl lg:text-5xl">
          {HERO.h1}
        </h1>

        <p className="mt-4 max-w-2xl text-lg font-semibold text-sos-dark sm:text-xl">
          {HERO.subtitulo}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-sos-gray sm:text-lg">
          {HERO.texto}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`tel:${TELEFONE_E164}`}
            data-evento="click_ligar"
            data-origem="hero"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-sos-primary px-7 text-lg font-bold text-white shadow-sm hover:bg-sos-primary-dark"
          >
            <IconePhone className="h-6 w-6" />
            <span>
              Ligue agora
              <span className="ml-2 font-extrabold">{TELEFONE_EXIBICAO}</span>
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-evento="click_whatsapp"
            data-origem="hero"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-sos-primary px-7 text-lg font-bold text-sos-primary hover:bg-sos-primary hover:text-white"
          >
            <IconeWhatsapp className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

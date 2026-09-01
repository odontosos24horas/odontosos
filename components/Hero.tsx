import Image from 'next/image'
import {
  FOTOS,
  HERO,
  TELEFONE_E164,
  TELEFONE_EXIBICAO,
  WHATSAPP_URL
} from '@/content/clinica'
import { IconePhone, IconeWhatsapp } from './Icones'

/**
 * Primeira tela, seguindo a arte enviada pelo cliente.
 *
 * Todo o conteúdo é texto real em HTML — nada de imagem única com texto
 * dentro —, para que Google e ferramentas de IA consigam ler. Este é o
 * único H1 da página.
 *
 * Detalhes que vêm da arte, não de preferência: subtítulo em peso normal
 * (não negrito), régua fina separando subtítulo e parágrafo, botões de
 * largura total com cantos arredondados (não pílula), "LIGUE AGORA" acima
 * do telefone em duas linhas, e a foto do consultório fechando a seção.
 */
export default function Hero() {
  return (
    <section className="bg-sos-light/40">
      <div className="mx-auto max-w-6xl px-4 pt-8 md:pt-12">
        <div className="lg:max-w-3xl">
          <h1 className="text-[2rem] font-extrabold uppercase leading-[1.05] tracking-tight text-sos-primary sm:text-5xl">
            {HERO.h1}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-snug text-sos-dark sm:text-xl">
            {HERO.subtitulo}
          </p>

          <hr className="mt-6 max-w-md border-0 border-t border-sos-primary/25" />

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-sos-gray sm:text-lg">
            {HERO.texto}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:max-w-lg">
            <a
              href={`tel:${TELEFONE_E164}`}
              data-evento="click_ligar"
              data-origem="hero"
              className="flex min-h-16 items-center justify-center gap-3 rounded-xl bg-sos-primary px-6 text-white shadow-sm hover:bg-sos-primary-dark"
            >
              <IconePhone className="h-7 w-7 shrink-0" />
              <span className="text-center leading-tight">
                <span className="block text-lg font-extrabold uppercase tracking-wide">
                  Ligue agora
                </span>
                <span className="block text-lg font-bold">
                  {TELEFONE_EXIBICAO}
                </span>
              </span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-evento="click_whatsapp"
              data-origem="hero"
              className="flex min-h-14 items-center justify-center gap-3 rounded-xl border-2 border-sos-primary px-6 text-lg font-extrabold uppercase tracking-wide text-sos-primary hover:bg-sos-primary hover:text-white"
            >
              <IconeWhatsapp className="h-6 w-6 shrink-0" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Foto fechando a primeira tela, como na arte. `priority` porque é a
          maior imagem acima da dobra — é ela que define o LCP. */}
      <div className="mt-10">
        <Image
          src={FOTOS.consultorio.src}
          alt={FOTOS.consultorio.alt}
          width={FOTOS.consultorio.width}
          height={FOTOS.consultorio.height}
          priority
          sizes="100vw"
          className="h-56 w-full object-cover sm:h-72 lg:h-96"
        />
      </div>
    </section>
  )
}

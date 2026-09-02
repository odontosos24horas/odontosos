import Image from 'next/image'
import {
  CONVENIOS,
  CONVENIOS_OBSERVACAO,
  FOTOS,
  SITUACOES,
  SITUACOES_OBSERVACAO,
  SOBRE,
  TELEFONE_E164,
  TELEFONE_EXIBICAO,
  URGENCIAS
} from '@/content/clinica'
import { IconePhone } from './Icones'

/** Título de seção — todos H2, abaixo do H1 único do hero. */
function TituloSecao({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-extrabold uppercase tracking-tight text-sos-primary sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  )
}

/**
 * Bloco de duas colunas — texto de um lado, foto do outro, alternando o lado
 * a cada seção. É o formato do site anterior, que o cliente quis manter.
 * No celular vira uma coluna, com a foto sempre depois do texto.
 */
function BlocoComFoto({
  id,
  inverso = false,
  foto,
  children
}: {
  id: string
  inverso?: boolean
  foto: { src: string; alt: string; width: number; height: number }
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-sos-light">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:py-16 lg:grid-cols-2 lg:gap-12">
        <div className={inverso ? 'lg:order-2' : undefined}>{children}</div>
        <div className={inverso ? 'lg:order-1' : undefined}>
          <Image
            src={foto.src}
            alt={foto.alt}
            width={foto.width}
            height={foto.height}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export function Urgencias() {
  return (
    <section id="urgencias" className="scroll-mt-20 border-t border-sos-light">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <TituloSecao>{URGENCIAS.titulo}</TituloSecao>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-sos-gray sm:text-lg">
          {URGENCIAS.texto}
        </p>
        {/* A foto do consultório subiu para o hero, seguindo a arte do cliente. */}
        <a
          href={`tel:${TELEFONE_E164}`}
          data-evento="click_ligar"
          data-origem="urgencias"
          className="mt-6 inline-flex min-h-13 items-center gap-2 rounded-full bg-sos-primary px-6 py-3 text-base font-bold text-white hover:bg-sos-primary-dark"
        >
          <IconePhone className="h-5 w-5" />
          {TELEFONE_EXIBICAO}
        </a>
      </div>
    </section>
  )
}

export function Sobre() {
  return (
    <BlocoComFoto id="quem-somos" inverso foto={FOTOS.recepcao}>
      <TituloSecao>{SOBRE.titulo}</TituloSecao>
      <div className="mt-5 space-y-4">
        {SOBRE.paragrafos.map((paragrafo) => (
          <p
            key={paragrafo}
            className="text-base leading-relaxed text-sos-gray sm:text-lg"
          >
            {paragrafo}
          </p>
        ))}
      </div>
    </BlocoComFoto>
  )
}

export function Situacoes() {
  return (
    <section
      id="situacoes"
      className="scroll-mt-20 border-t border-sos-light bg-sos-light/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <TituloSecao>Situações que atendemos</TituloSecao>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SITUACOES.map((situacao) => (
            <li
              key={situacao}
              className="flex items-start gap-3 rounded-lg border border-sos-light bg-white p-4"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sos-primary"
              />
              <span className="text-base font-medium text-sos-dark">
                {situacao}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sos-gray">
          {SITUACOES_OBSERVACAO}
        </p>
      </div>
    </section>
  )
}

export function Convenios() {
  return (
    <section
      id="convenios"
      className="scroll-mt-20 border-t border-sos-light bg-sos-light/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <TituloSecao>Convênios</TituloSecao>

        {/* Grade solta, sem cartão, como no site anterior. A altura fixa da
            caixa da logo normaliza proporções muito diferentes entre si —
            é o que evitava o vão branco enorme do layout antigo. */}
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {CONVENIOS.map((convenio) => (
            <li
              key={convenio.nome}
              className="flex flex-col items-center gap-3"
            >
              {/* Caixa de altura fixa normaliza logos de proporções muito
                  diferentes; a altura acompanha a tela para não deixar as
                  marcas pequenas demais no desktop, como ficaram na
                  primeira versão. */}
              <div className="flex h-20 w-full items-center justify-center sm:h-24">
                <Image
                  src={convenio.logo}
                  alt={`Logo do convênio ${convenio.nome}`}
                  width={200}
                  height={96}
                  loading="lazy"
                  className="max-h-20 w-auto max-w-full object-contain sm:max-h-24"
                />
              </div>
              {/* O nome também como texto: o Google não lê logo em imagem. */}
              <span className="text-center text-sm font-medium text-sos-dark">
                {convenio.nome}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-sos-gray">
          {CONVENIOS_OBSERVACAO}
        </p>
      </div>
    </section>
  )
}

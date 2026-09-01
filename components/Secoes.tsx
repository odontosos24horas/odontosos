import Image from 'next/image'
import {
  CONVENIOS,
  CONVENIOS_OBSERVACAO,
  SITUACOES,
  SITUACOES_OBSERVACAO,
  SOBRE,
  URGENCIAS
} from '@/content/clinica'

/** Título de seção padrão — todos são H2, abaixo do H1 único do hero. */
function TituloSecao({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-extrabold uppercase tracking-tight text-sos-primary sm:text-3xl lg:text-4xl">
      {children}
    </h2>
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
      </div>
    </section>
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

export function Sobre() {
  return (
    <section id="quem-somos" className="scroll-mt-20 border-t border-sos-light">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <TituloSecao>{SOBRE.titulo}</TituloSecao>
        <div className="mt-5 max-w-3xl space-y-4">
          {SOBRE.paragrafos.map((paragrafo) => (
            <p
              key={paragrafo}
              className="text-base leading-relaxed text-sos-gray sm:text-lg"
            >
              {paragrafo}
            </p>
          ))}
        </div>
        {/* PENDENTE DANILO: substituir por fotos reais da fachada, recepção e
            consultórios. Sem banco de imagens — foi pedido explicitamente. */}
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

        <ul className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CONVENIOS.map((convenio) => (
            <li
              key={convenio.nome}
              className="flex flex-col items-center justify-between gap-3 rounded-lg border border-sos-light bg-white p-4"
            >
              {/* Altura fixa normaliza logos de proporções muito diferentes —
                  é o que evitava o buraco branco gigante no layout antigo. */}
              <div className="flex h-16 w-full items-center justify-center">
                <Image
                  src={convenio.logo}
                  alt={`Logo do convênio ${convenio.nome}`}
                  width={160}
                  height={64}
                  loading="lazy"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              {/* O nome também como texto: o Google não lê logo em imagem. */}
              <span className="text-center text-sm font-medium text-sos-dark">
                {convenio.nome}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sos-gray">
          {CONVENIOS_OBSERVACAO}
        </p>
      </div>
    </section>
  )
}

import {
  ENDERECO,
  MAPA_EMBED_URL,
  ROTA_URL,
  TELEFONE_E164,
  TELEFONE_EXIBICAO
} from '@/content/clinica'
import { IconeMapa, IconePhone } from './Icones'

export default function ComoChegar() {
  return (
    <section id="como-chegar" className="scroll-mt-20 border-t border-sos-light">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-sos-primary sm:text-3xl lg:text-4xl">
          Como chegar
        </h2>

        <div className="mt-7 grid gap-8 lg:grid-cols-2">
          <div>
            {/* Endereço em microformato: precisa bater exatamente com o
                cadastrado no Perfil da Empresa no Google. */}
            <address className="not-italic">
              <p className="text-lg font-semibold text-sos-dark">
                {ENDERECO.logradouro}
              </p>
              <p className="mt-1 text-base text-sos-gray">
                Bairro {ENDERECO.bairro}
                <br />
                {ENDERECO.cidade} - {ENDERECO.estado}
                <br />
                CEP {ENDERECO.cep}
              </p>
            </address>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={ROTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-evento="click_como_chegar"
                data-origem="como_chegar"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-sos-primary px-6 py-3 text-base font-bold text-white hover:bg-sos-primary-dark"
              >
                <IconeMapa className="h-5 w-5" />
                Traçar rota no Google Maps
              </a>

              <a
                href={`tel:${TELEFONE_E164}`}
                data-evento="click_ligar"
                data-origem="como_chegar"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border-2 border-sos-primary px-6 py-3 text-base font-bold text-sos-primary hover:bg-sos-primary hover:text-white"
              >
                <IconePhone className="h-5 w-5" />
                {TELEFONE_EXIBICAO}
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-sos-gray">
              Atendimento 24 horas por dia, todos os dias da semana, inclusive
              finais de semana e feriados.
            </p>
            {/* PENDENTE DANILO: incluir informação de estacionamento e ponto de
                referência — só depois de confirmados, para não publicar
                informação incorreta. */}
          </div>

          <div className="overflow-hidden rounded-lg border border-sos-light">
            <iframe
              src={MAPA_EMBED_URL}
              title="Mapa com a localização da Odonto SOS na Rua Cláudio Manoel, 223, Funcionários, Belo Horizonte"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

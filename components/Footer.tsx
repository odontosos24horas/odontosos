import Image from 'next/image'
import AnoAtual from './AnoAtual'
import {
  EMAIL,
  ENDERECO,
  INSTAGRAM,
  MENU,
  TELEFONE_E164,
  TELEFONE_EXIBICAO,
  TRABALHE_CONOSCO,
  WHATSAPP_EXIBICAO,
  WHATSAPP_URL
} from '@/content/clinica'

export default function Footer() {
  const mailtoCurriculo = `mailto:${EMAIL}?subject=${encodeURIComponent(
    TRABALHE_CONOSCO.assunto
  )}`

  return (
    <footer id="contato" className="scroll-mt-20 border-t border-sos-light bg-sos-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            {/* Fundo claro em vez de filtro: o logo é verde + vermelho, e
                `brightness-0 invert` transformava tudo em manchas brancas. */}
            <span className="inline-flex rounded-md bg-white px-3 py-2">
              <Image
                src="/images/logos/logo_sos_header.png"
                alt="Odonto SOS"
                width={278}
                height={40}
                loading="lazy"
                className="h-8 w-auto"
              />
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Clínica de urgência odontológica com atendimento 24 horas, todos
              os dias, em {ENDERECO.cidade}.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              Menu
            </h2>
            <ul className="mt-4 space-y-1">
              {MENU.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-white">
              Contato
            </h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={`tel:${TELEFONE_E164}`}
                  data-evento="click_ligar"
                  data-origem="rodape"
                  className="inline-flex min-h-11 items-center text-base font-bold text-white hover:underline"
                >
                  {TELEFONE_EXIBICAO}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-evento="click_whatsapp"
                  data-origem="rodape"
                  className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white hover:underline"
                >
                  WhatsApp {WHATSAPP_EXIBICAO}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-11 items-center break-all text-sm text-white/80 hover:text-white hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm text-white/80 hover:text-white hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>

            <address className="mt-3 text-sm not-italic leading-relaxed text-white/70">
              {ENDERECO.logradouro}
              <br />
              {ENDERECO.bairro}, {ENDERECO.cidade} - {ENDERECO.estado}
              <br />
              CEP {ENDERECO.cep}
            </address>
          </div>
        </div>

        {/* Trabalhe conosco: movido para o rodapé, longe do fluxo do paciente
            com dor, conforme pedido do cliente. */}
        <div className="mt-10 rounded-lg border border-white/15 p-6">
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            {TRABALHE_CONOSCO.titulo}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
            {TRABALHE_CONOSCO.texto}
          </p>
          <a
            href={mailtoCurriculo}
            data-evento="click_curriculo"
            data-origem="rodape"
            className="mt-4 inline-flex min-h-11 items-center rounded-full border border-white/40 px-5 text-sm font-semibold text-white hover:bg-white hover:text-sos-dark"
          >
            Enviar currículo
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <AnoAtual /> Odonto SOS. Todos os direitos reservados.
          </p>
          <a
            href="/politica-de-privacidade"
            className="inline-flex min-h-11 items-center hover:text-white hover:underline"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

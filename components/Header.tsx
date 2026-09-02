import Image from 'next/image'
import { MENU, TELEFONE_E164, TELEFONE_EXIBICAO } from '@/content/clinica'

/**
 * Header — server component, zero JavaScript.
 *
 * O menu mobile usa <details>/<summary>: abre e fecha nativamente, é focável
 * e operável por teclado de graça, e os links ficam no HTML mesmo fechado
 * (um menu montado por JS seria invisível para crawlers).
 *
 * ATENÇÃO: <summary> precisa ser o PRIMEIRO FILHO DIRETO de <details>. Se for
 * envolvido por qualquer elemento, o navegador ignora e injeta o próprio
 * rótulo padrão ("Saiba mais" em pt-BR), engolindo o resto no conteúdo.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sos-light bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" aria-label="Odonto SOS - página inicial" className="flex min-h-11 shrink-0 items-center">
          <Image
            src="/images/logos/logo_sos_header.png"
            alt="Odonto SOS - urgência odontológica 24 horas em Belo Horizonte"
            width={278}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm font-medium text-sos-dark hover:text-sos-primary hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:${TELEFONE_E164}`}
          data-evento="click_ligar"
          data-origem="header"
          className="hidden min-h-11 shrink-0 items-center rounded-full bg-sos-primary px-5 text-base font-bold text-white hover:bg-sos-primary-dark md:inline-flex"
        >
          {TELEFONE_EXIBICAO}
        </a>

        <details className="group shrink-0 md:hidden">
          <summary
            aria-label="Abrir menu de navegação"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md text-sos-primary marker:content-none [&::-webkit-details-marker]:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 6h18M3 12h18M3 18h18" className="group-open:hidden" />
              <path
                d="M6 6l12 12M18 6L6 18"
                className="hidden group-open:block"
              />
            </svg>
          </summary>

          {/* Posicionado abaixo do header, fora do fluxo: abrir o menu não
              empurra o conteúdo da página (evita layout shift). */}
          <nav
            aria-label="Menu principal"
            className="absolute inset-x-0 top-full border-b border-t border-sos-light bg-white shadow-sm"
          >
            <ul className="mx-auto max-w-6xl px-4 py-1">
              {MENU.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-12 items-center border-b border-sos-light/70 text-base font-medium text-sos-dark last:border-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  )
}

import { FAQ } from '@/content/clinica'

/**
 * Dúvidas frequentes.
 *
 * Usa <details>/<summary> nativo: acordeão acessível, navegável por teclado,
 * com zero JavaScript. As respostas ficam no HTML mesmo fechadas — então
 * Google e crawlers de IA leem todas, o que é requisito do rich result de FAQ.
 *
 * O mesmo array gera o JSON-LD FAQPage em app/layout.tsx.
 */
export default function Faq() {
  return (
    <section
      id="duvidas"
      className="scroll-mt-20 border-t border-sos-light bg-sos-light/30"
    >
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-sos-primary sm:text-3xl lg:text-4xl">
          Dúvidas frequentes
        </h2>

        <div className="mt-7 space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.pergunta}
              name="faq"
              className="group rounded-lg border border-sos-light bg-white"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-sos-dark marker:content-none">
                <h3 className="text-base font-semibold">{item.pergunta}</h3>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="shrink-0 text-sos-primary transition-transform group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-base leading-relaxed text-sos-gray">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

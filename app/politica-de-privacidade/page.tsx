import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContactBar from '@/components/StickyContactBar'
import { EMAIL, ENDERECO_COMPLETO } from '@/content/clinica'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Odonto SOS',
  description:
    'Como a Odonto SOS coleta, utiliza e protege os dados pessoais dos visitantes do site, conforme a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' }
}

/**
 * PENDENTE DANILO: revisar com atenção antes de publicar.
 *
 * Este texto cobre apenas o que é verificável no próprio site — Google Ads,
 * Google Analytics, Tag Manager, Hotjar e os contatos por telefone, WhatsApp
 * e e-mail. NÃO trata de prontuário, dados clínicos ou retenção de registros
 * de pacientes: isso depende das práticas reais da clínica e, se for o caso,
 * deve ser redigido com apoio jurídico.
 */
export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-sos-primary sm:text-4xl">
            Política de Privacidade
          </h1>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-sos-gray">
            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                1. Quem somos
              </h2>
              <p className="mt-3">
                A Odonto SOS é uma clínica de urgência odontológica localizada
                em {ENDERECO_COMPLETO}. Esta política explica como tratamos os
                dados pessoais dos visitantes deste site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                2. Dados que coletamos
              </h2>
              <p className="mt-3">
                Este site não possui formulário de cadastro nem área de login.
                Os dados tratados são:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-sos-dark">
                    Dados de navegação:
                  </strong>{' '}
                  páginas visitadas, tempo de permanência, tipo de dispositivo,
                  navegador e origem do acesso, coletados por meio de cookies e
                  tecnologias semelhantes.
                </li>
                <li>
                  <strong className="text-sos-dark">
                    Dados de contato:
                  </strong>{' '}
                  quando você entra em contato por telefone, WhatsApp ou
                  e-mail, tratamos as informações que você mesmo nos fornece
                  nessa conversa.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                3. Como utilizamos esses dados
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Responder solicitações de atendimento de urgência.</li>
                <li>Entender como o site é utilizado e melhorá-lo.</li>
                <li>
                  Medir o resultado de campanhas de divulgação e anúncios.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                4. Ferramentas de terceiros
              </h2>
              <p className="mt-3">
                Utilizamos serviços que podem coletar dados de navegação por
                meio de cookies:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Google Analytics e Google Tag Manager — análise de uso.</li>
                <li>Google Ads — medição de resultados de anúncios.</li>
                <li>Hotjar — análise de comportamento de navegação.</li>
                <li>Google Maps — exibição do mapa de localização.</li>
              </ul>
              <p className="mt-3">
                Esses serviços possuem políticas de privacidade próprias,
                mantidas por seus respectivos fornecedores.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                5. Compartilhamento
              </h2>
              <p className="mt-3">
                Não vendemos nem cedemos dados pessoais a terceiros. O
                compartilhamento ocorre apenas com os fornecedores de tecnologia
                citados acima, na medida necessária para o funcionamento do
                site, ou quando houver obrigação legal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                6. Seus direitos
              </h2>
              <p className="mt-3">
                Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
                você pode solicitar a confirmação da existência de tratamento, o
                acesso, a correção, a anonimização ou a exclusão dos seus dados,
                além de revogar consentimentos. Para isso, escreva para{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-sos-primary hover:underline"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                7. Cookies
              </h2>
              <p className="mt-3">
                Você pode bloquear ou apagar cookies nas configurações do seu
                navegador. Isso não impede o uso do site, mas pode afetar
                algumas funcionalidades, como a exibição do mapa.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sos-dark">
                8. Alterações
              </h2>
              <p className="mt-3">
                Esta política pode ser atualizada a qualquer momento. A versão
                vigente é sempre a publicada nesta página.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <StickyContactBar />
    </>
  )
}

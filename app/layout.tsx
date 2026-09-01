import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import {
  CONVENIOS,
  EMAIL,
  ENDERECO,
  FAQ,
  INSTAGRAM,
  SITE_URL,
  TELEFONE_E164
} from '@/content/clinica'

const TITULO = 'Dentista 24 horas em Belo Horizonte | Odonto SOS'
const DESCRICAO =
  'Atendimento odontológico de urgência 24 horas em Belo Horizonte, todos os dias, inclusive finais de semana e feriados. Entre em contato com a Odonto SOS.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITULO,
  description: DESCRICAO,
  // O Next normaliza o canonical e remove a barra final, gerando
  // "https://www.odontosos.com.br". É equivalente para o Google, que trata
  // caminho vazio e "/" como a mesma URL. Declarar a tag manualmente no
  // layout daria canonical duplicado nas outras páginas — não compensa.
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Odonto SOS',
    title: TITULO,
    description: DESCRICAO,
    images: [{ url: '/images/logos/logo_sos_header.png', width: 278, height: 40, alt: 'Odonto SOS' }]
  },
  twitter: { card: 'summary', title: TITULO, description: DESCRICAO },
  robots: { index: true, follow: true }
}

/** Dados estruturados do negócio. `Dentist` é o subtipo mais específico de
 *  LocalBusiness para uma clínica odontológica, conforme pedido. */
const jsonLdNegocio = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${SITE_URL}/#clinica`,
  name: 'Odonto SOS',
  description: DESCRICAO,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logos/logo_sos_header.png`,
  image: `${SITE_URL}/images/logos/logo_sos_header.png`,
  telephone: TELEFONE_E164,
  email: EMAIL,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: ENDERECO.logradouro,
    addressLocality: ENDERECO.cidade,
    addressRegion: ENDERECO.estado,
    postalCode: ENDERECO.cep,
    addressCountry: ENDERECO.pais
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: ENDERECO.latitude,
    longitude: ENDERECO.longitude
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  areaServed: { '@type': 'City', name: ENDERECO.cidade },
  availableService: {
    '@type': 'MedicalProcedure',
    name: 'Atendimento odontológico de urgência 24 horas'
  },
  paymentAccepted: 'Dinheiro, cartão, convênios odontológicos',
  // Os convênios também entram como texto na página; aqui ajudam o Google a
  // relacionar a clínica aos planos que ela aceita.
  makesOffer: CONVENIOS.map((c) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: `Atendimento de urgência para o convênio ${c.nome}`
    }
  })),
  sameAs: [INSTAGRAM]
}

/** FAQPage gerado do MESMO array que renderiza a seção visível. */
const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: item.resposta }
  }))
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const ADS_ID = 'AW-987120152'
const HOTJAR_ID = '3031525'

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          // Conteúdo estático, montado no build — sem entrada de usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNegocio) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Link de pular navegação: primeiro tab da página, exigência de acessibilidade. */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-md focus:bg-sos-primary focus:px-4 focus:py-3 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}

        {/* Scripts de terceiros com `afterInteractive`: não bloqueiam a primeira
            renderização, ao contrário do carregamento síncrono anterior. */}
        {GTM_ID ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        ) : null}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ADS_ID}');`}
        </Script>

        {/* Medição dos contatos.
            Um listener delegado em vanilla JS, em vez de onClick por botão:
            nenhum CTA vira client component, nada hidrata, e o custo é ~400 B.
            Lê data-evento nos links e empurra para o dataLayer.
            ATENÇÃO: click_curriculo NÃO deve ser conversão de paciente no Ads. */}
        <Script id="eventos-contato" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){var t=e.target;if(!t||!t.closest)return;var el=t.closest('[data-evento]');if(!el)return;window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:el.getAttribute('data-evento'),origem:el.getAttribute('data-origem')||'nao_informado'});});`}
        </Script>

        <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>

        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
      </body>
    </html>
  )
}

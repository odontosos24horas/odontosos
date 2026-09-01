import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Odonto SOS',
  description: 'Clínica de urgência odontológica com atendimento 24 horas, todos os dias, em Belo Horizonte.',
  url: 'https://www.odontosos.com.br/',
  logo: 'https://www.odontosos.com.br/images/logos/logo_sos_header.png',
  image: 'https://www.odontosos.com.br/images/logos/logo_sos_header.png',
  telephone: '+553136570600',
  email: 'odontosos@odontosos.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Cláudio Manoel, 223',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '30140-100',
    addressCountry: 'BR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -19.935028,
    longitude: -43.929663
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  ],
  areaServed: {
    '@type': 'City',
    name: 'Belo Horizonte'
  },
  sameAs: ['https://www.instagram.com/clinicaodontososbh']
}

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="canonical" href="https://www.odontosos.com.br/" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-987120152" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-987120152');
            `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3031525,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

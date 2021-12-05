import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content="Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos." />
          <meta name="keywords" content="urgência odontológica, dentista 24 horas, dentista 24 horas BH, dentista de plantão 24 horas, plantão odontológico, odontologia 24 horas, clínica dentária 24 horas, dentista atendimento 24 horas, dentista emergência" />
          <link rel="icon" href="/favicon.png" />
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-YBBVTWFKF4" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YBBVTWFKF4');
            `
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

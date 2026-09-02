import ComoChegar from '@/components/ComoChegar'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StickyContactBar from '@/components/StickyContactBar'
import { Convenios, Situacoes, Sobre, Urgencias } from '@/components/Secoes'

/**
 * Home.
 *
 * Ordem das seções conforme a hierarquia definida pelo cliente:
 * H1 (hero) → Urgências → Situações → Convênios → Quem somos → Como chegar
 * → Dúvidas frequentes. Tudo renderizado no servidor.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Urgencias />
        <Situacoes />
        <Convenios />
        <Sobre />
        <ComoChegar />
        <Faq />
      </main>
      <Footer />
      <StickyContactBar />
    </>
  )
}

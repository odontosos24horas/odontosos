import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { nextSocialNetwork } from '../../../data'
import NextWhatsIcon from '../../atoms/nextWhatsIcon'
import NextFooter from '../../organisms/nextFooter'
import NextHeader from '../../organisms/nextHeader'

type Props = {
  title?: string
  description?: string
}

const NextLayout = ({
  children,
  title = 'Dentista 24 horas em Belo Horizonte | Odonto SOS',
  description = 'Atendimento odontológico de urgência 24 horas em Belo Horizonte, todos os dias, inclusive finais de semana e feriados. Entre em contato com a Odonto SOS.'
}: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header>
        <NextHeader />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <NextFooter />
      </footer>

      <Box
        position="fixed"
        width="60px"
        height="60px"
        zIndex={100}
        bottom="20px"
        right="20px"
      >
        <Link href={nextSocialNetwork.whatsapp.url}>
          <a target="_blank" rel="noreferrer">
            <NextWhatsIcon />
          </a>
        </Link>
      </Box>
    </>
  )
}

export default NextLayout

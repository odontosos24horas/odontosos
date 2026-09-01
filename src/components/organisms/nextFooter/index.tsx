import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export type NextFooterProps = {
  bg?: 'next-primary' | undefined
}

const NextFooter = () => {
  return (
    <footer>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Image src="/images/logos/logo_sos_header.png" alt="Odonto SOS - clínica de urgência odontológica 24 horas em Belo Horizonte" width={261} height={38} />
              </Box>
              <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Odonto SOS. Todos os direitos reservados.
              </Text>
              <Text>
                Desenvolvido por:
                <Link href={'https://nextime.com.br/'}>
                  <a>
                    <Text color="next-primary" fontWeight="bold">
                        NeXTIME
                    </Text>
                  </a>
                </Link>
              </Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Menu</ListHeader>
              <Link href={'#quemsomos'}>Quem Somos</Link>
              <Link href={'#comochegar'}>Como Chegar</Link>
              <Link href={'#convenios'}>Convênios</Link>
              <Link href={'#trabalheconosco'}>Trabalhe Conosco</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Contatos</ListHeader>
              <Link href={'mailto:odontosos@odontosos.com.br'}>E-mail</Link>
              <Link href={'https://instagram.com/clinicaodontososbh'}>Instagram</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'tel:+553136570600'}>
                <a aria-label="Ligar para a Odonto SOS: (31) 3657-0600">
                  <Heading color="next-primary" size="lg">
                    (31) 3657-0600
                  </Heading>
                </a>
              </Link>
              <Text color="next-primary" fontSize="sm">
                R. Cláudio Manoel, 223 - Funcionários<br />
                Belo Horizonte - MG, 30140-100
              </Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </footer>
  )
}

export default NextFooter

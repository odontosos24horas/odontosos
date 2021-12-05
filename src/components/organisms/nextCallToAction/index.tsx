import React from 'react'
import {
  Box,
  Flex,
  Stack,
  Text
} from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import Link from 'next/link'
import Image from 'next/image'

export interface NextCallToActionProps {
  bgButton?: 'next-primary' | 'next-dark' | 'white' | 'dark' | undefined
  background?: boolean;
  title: string;
  text: string;
  textButton?: string;
  image: string;
  url: string
  width: string
  height: string
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  hasMap?: boolean;
  id: string;
}

const NextCallToAction = ({
  background,
  title,
  text,
  image,
  url,
  width,
  height,
  textButton = '< Faça um orçamento />',
  directionMd = 'row',
  directionBase = 'column',
  bgButton,
  hasMap,
  id
}: NextCallToActionProps) => {
  return (
    <Stack id={id} bg={background ? 'next-primary' : ''} align={'center'} direction={{ base: directionBase, md: directionMd }}>
      <Flex px={{ base: 10 }} pb={{ base: 20 }} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text
            color={background ? 'white' : 'next-primary'}
            fontWeight={700}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            {title}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'next-gray'}>
            {text}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href={`${url}%0A${textButton}`}>
              <a target="_blank" rel="noreferrer">
                <NextButton bg={bgButton}>{textButton}</NextButton>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex maxH={'30rem'} flex={1}>
        {!hasMap && (
          <Image
            alt={title}
            src={image}
            width={width}
            height={height}
          />
        )}
        {hasMap && (
          <Box>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.747845081203!2d-43.92966338446836!3d-19.935027943615154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c1a8f63a65%3A0xf73112f63fc6dbf1!2sR.%20Cl%C3%A1udio%20Manoel%2C%20223%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030140-100!5e0!3m2!1spt-BR!2sbr!4v1638402518655!5m2!1spt-BR!2sbr" width="auto" height="450" loading="lazy"></iframe>
          </Box>
        )}
      </Flex>
    </Stack>
  )
}

export default NextCallToAction

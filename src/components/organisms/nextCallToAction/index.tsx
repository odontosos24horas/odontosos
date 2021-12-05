import React, { Suspense, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Text
} from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import Link from 'next/link'
import Image from 'next/image'
const NextMap = React.lazy(() => import('../../atoms/nextMap'))

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
  const [isFront, setIsFront] = useState(false)
  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true)
      }
    })
  }, [])
  if (!isFront) return null
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
            <Suspense fallback={() => 'loading'}>
              <NextMap />
            </Suspense>
          </Box>
        )}
      </Flex>
    </Stack>
  )
}

export default NextCallToAction

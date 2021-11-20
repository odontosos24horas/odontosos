import React from 'react'
import {
  Flex,
  Stack,
  Text
} from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import Link from 'next/link'
import Image from 'next/image'

export interface NextCallToActionProps {
  bg?: string;
  title: string;
  text: string;
  textButton?: string;
  image: string;
  url: string
  width: string
  height: string
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const NextCallToAction = ({
  title,
  text,
  image,
  url,
  width,
  height,
  textButton = '< Faça um orçamento />',
  directionMd = 'row',
  directionBase = 'column'
}: NextCallToActionProps) => {
  return (
    <Stack align={'center'} direction={{ base: directionBase, md: directionMd }}>
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text color={'next-primary'} fontWeight={700} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            {title}
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'next-gray'}>
            {text}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href={`${url}%0A${textButton}`}>
              <a target="_blank" rel="noreferrer">
                <NextButton>{textButton}</NextButton>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex maxH={'30rem'} flex={1}>
        <Image
          alt={title}
          src={image}
          width={width}
          height={height}
        />
      </Flex>
    </Stack>
  )
}

export default NextCallToAction

import React from 'react'
import Image from 'next/image'

const NextHero = () => {
  return (
    <Image
      alt={'Login Image'}
      src={'/images/home/hero.jpeg'}
      width={1440}
      height={632}
      layout="responsive"
    />
  )
}

export default NextHero

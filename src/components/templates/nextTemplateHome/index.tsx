import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero from '../../organisms/nextHero'
import NextContactUs from '../../organisms/nextContactUs'
import NextLayout from '../nextLayout'

export type NextTemplateHomeProps = {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateHome = ({
  nextCallToActionItems,
  nextTechnologyItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero />
      <NextCallToAction
        title={nextCallToActionItems[0].title}
        text={nextCallToActionItems[0].text}
        image={nextCallToActionItems[0].image}
        textButton={nextCallToActionItems[0].textButton}
        directionMd={nextCallToActionItems[0].directionMd}
        width={nextCallToActionItems[0].width}
        height={nextCallToActionItems[0].height}
        url={nextCallToActionItems[0].url}
      />
      <NextFeatures
        items={nextTechnologyItems}
        numberGrid={6}
      />
      <NextCallToAction
        title={nextCallToActionItems[1].title}
        text={nextCallToActionItems[1].text}
        image={nextCallToActionItems[1].image}
        textButton={nextCallToActionItems[1].textButton}
        directionMd={nextCallToActionItems[1].directionMd}
        width={nextCallToActionItems[1].width}
        height={nextCallToActionItems[1].height}
        url={nextCallToActionItems[1].url}
      />
      <NextContactUs />
    </NextLayout>
  )
}

export default NextTemplateHome

import React from 'react'
import { IBannerCallToAction } from '@clean/presentation/components/common/interfaces/banner.interfaces'
import { clickHandler } from '@clean/presentation/ts/types/app-types'
import { HookDescription, HowItWorks, UploadAbout } from '../interfaces/landing-pages.interfaces'
import {
  SectionTitle,
  Image,
  BannerCallToAction,
  SectionContainer,
  FlexList
} from '@clean/presentation/components/common'

interface Props {
  hookDescription: HookDescription[]
  howItWorks: HowItWorks[]
  uploadAbout: UploadAbout
  footerAd: IBannerCallToAction
  additionalContent?: JSX.Element
  href: string
  onCallToActionClick?: clickHandler
}

export const GeneralLandingPage: React.FC<Props> = props => (
  <>
    <SectionContainer additionalStyles="-my-t-60">
      <FlexList contentArray={props.hookDescription} />
    </SectionContainer>

    <SectionContainer>
      <FlexList title="¿Cómo funciona?" contentArray={props.howItWorks} />
    </SectionContainer>

    <SectionContainer>
      <SectionTitle title={props.uploadAbout.sectionTitle} />
      <Image style="centered-img" src={props.uploadAbout.image} alt={props.uploadAbout.image} />
      <p>{props.uploadAbout.content}</p>
    </SectionContainer>

    {props.additionalContent}

    <BannerCallToAction
      backgroundImage={props.footerAd.backgroundImage}
      mainTitle={props.footerAd.mainTitle}
      bannerDescription={props.footerAd.bannerDescription}
      contentWrapperStyle="teacherAd"
      mainInfoStyle="teacher-content"
      buttonText={props.footerAd.buttonText}
      buttonStyle="primary"
      href={props.href}
      onClick={props.onCallToActionClick}
    />
  </>
)

export default GeneralLandingPage

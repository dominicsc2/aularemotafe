import React from 'react';
import BannerCallToAction from '@clean/presentation/components/common/banners/BannerCallToAction/BannerCallToAction';
import FlexList from '@clean/presentation/components/common/flex/FlexInfoList/FlexInfoList';
import SectionContainer from '@clean/presentation/components/common/hoc/SectionContainer/SectionContainer';
import { IBannerCallToAction } from '@clean/presentation/components/common/interfaces/banner.interfaces';
import { clickHandler } from '@clean/presentation/ts/types/app-types';
import { HookDescription, HowItWorks, UploadAbout } from '../interfaces/landing-pages.interfaces';
import styles from './GeneralLandingPage.module.scss';

interface Props {
  hookDescription: HookDescription[]
  howItWorks: HowItWorks[]
  uploadAbout: UploadAbout
  footerAd: IBannerCallToAction
  additionalContent?: JSX.Element
  href: string
  onCallToActionClick: clickHandler
}

export const GeneralLandingPage: React.FC<Props> = (props) => (
  <>
    <SectionContainer additionalStyles="-my-t-60">
      <FlexList contentArray={props.hookDescription} />
    </SectionContainer>

    <SectionContainer id="howItWorks">
      <h1 className={styles.sectionTitle}>¿Cómo funciona?</h1>
      <FlexList contentArray={props.howItWorks} />
    </SectionContainer>

    <section id={styles.uploadAbout}>
      <h1 className={styles.sectionTitle}>{props.uploadAbout.sectionTitle}</h1>
      <img src={props.uploadAbout.image} alt="" />
      <p>{props.uploadAbout.content}</p>
    </section>

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
);

export default GeneralLandingPage;

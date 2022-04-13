import React from 'react';
import Banner from '@clean/presentation/components/common/banners/Banner/Banner';
import SecondaryButton from '@clean/presentation/components/common/buttons/SecondaryButton/SecondaryButton';
import SectionContainer from '@clean/presentation/components/common/hoc/SectionContainer/SectionContainer';
import GeneralLandingPage from '../GeneralLandingPage/GeneralLandingPage';
import {
  additionalContent, howItWorks, footerAd, hookDescription, uploadAbout,
} from './contents/teacherPageContent';
import styles from './TeacherLandingPage.module.scss';

export const TeacherLandingPage: React.FC = () => {
  function renderAdditionalAd(): JSX.Element {
    return (
      <>
        <Banner
          backgroundImage={additionalContent.backgroundImage}
          mainTitle={additionalContent.mainTitle}
          bannerDescription={additionalContent.bannerDescription}
          textPosition="center-top"
        />
        <SectionContainer additionalStyles="my-3">
          <div className={styles.content}>
            <h1>Conviértete en instructor ahora</h1>
            <p>Únete a la mejor plataforma educativa en linea en Lima y empieza a cambiar la vida de más alumnos.</p>
          </div>
          <SecondaryButton
            // onClick={() => pageRedirect(history, "teacher-enquire", "?step=1")}
            onClick={() => {}}
            value="Conviertete en instructor"
          />
        </SectionContainer>
      </>
    );
  }

  return (
    <GeneralLandingPage
      hookDescription={hookDescription}
      howItWorks={howItWorks}
      uploadAbout={uploadAbout}
      additionalContent={renderAdditionalAd()}
      footerAd={footerAd}
      href="/"
      onCallToActionClick={() => {}}
    />
  );
};

export default TeacherLandingPage;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  emptyContent,
  mainContent,
  studentContent,
  instructorContent,
  instructorWelcomeContent,
} from './contents/bannerContent';
import Banner from '../../common/banners/Banner/Banner';
import BannerCallToAction from '../../common/banners/BannerCallToAction/BannerCallToAction';
import { IBannerCallToAction } from '../../common/interfaces/banner.interfaces';

const BannerContent: React.FC = () => {
  const [flowType, setFlowType] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    bannerContent();
    window.scrollTo(0, 0);
  }, [router]);

  const [navbarBannerContent, setNavbarBannerContent] = useState<IBannerCallToAction>(emptyContent);

  const bannerContent = () => {
    switch (router.pathname) {
      case '/': {
        setNavbarBannerContent(studentContent);
        setFlowType('student');
        break;
      }
      case '/instructor': {
        // manage this with state instead of url (redux)
        setNavbarBannerContent(instructorContent);
        setFlowType('instructor');
        break;
      }
      case '/main': {
        // manage this with state instead of url (redux)
        setNavbarBannerContent(mainContent);
        break;
      }
    }
  };

  function goToEnquireFlow() {
    if (flowType === 'student') {
      router.push('/account/login');
      // router.push('/student-enquire')
      // pageRedirect(history, '/student-enquire', '?step=1');
    } else {
      router.push('/instructor-enquire');
      // pageRedirect(history, '/instructor-enquire', '?step=1');
    }
  }

  const renderExtra = () => {
    const extra: any = {};
    if (router.pathname === '/main') {
      extra.searchBoxPlaceholder = 'Filtra por curso o tipo de documento';
    } else {
      extra.buttonStyle = navbarBannerContent.buttonStyle;
      extra.onClick = goToEnquireFlow;
    }

    return extra;
  };

  function renderBanner() {
    if (router.pathname === '/instructor-welcome') {
      return (
        <Banner
          backgroundImage={instructorWelcomeContent.backgroundImage}
          mainTitle={instructorWelcomeContent.mainTitle}
          bannerDescription={instructorWelcomeContent.bannerDescription}
          height="40vh"
          textPosition="top"
        />
      );
    }
    return (
      <BannerCallToAction
        backgroundImage={navbarBannerContent.backgroundImage}
        mainTitle={navbarBannerContent.mainTitle}
        bannerDescription={navbarBannerContent.bannerDescription}
        contentWrapperStyle={navbarBannerContent.contentWrapperStyle}
        mainInfoStyle={navbarBannerContent.mainInfoStyle}
        {...renderExtra()}
        buttonText={navbarBannerContent.buttonText}
      />
    );
  }

  return renderBanner();
};

export default BannerContent;

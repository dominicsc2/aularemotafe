import React from 'react';
import { useRouter } from 'next/router';
import GeneralLandingPage from './GeneralLandingPage/GeneralLandingPage';
import {
  hookDescription, howItWorks, uploadAbout, footerAd,
} from './StudentLandingPage/contents/studentPageContent';

export const StudentLandingPage: React.FC = () => {
  return (
    <GeneralLandingPage
      hookDescription={hookDescription}
      howItWorks={howItWorks}
      uploadAbout={uploadAbout}
      footerAd={footerAd}
      href="/instructor"
    />
  );
};

export default StudentLandingPage;

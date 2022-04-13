import React from 'react';
import { useRouter } from 'next/router';
import GeneralLandingPage from './GeneralLandingPage/GeneralLandingPage';
import {
  hookDescription, howItWorks, uploadAbout, footerAd,
} from './StudentLandingPage/contents/studentPageContent';

export const StudentLandingPage: React.FC = () => {
  const router = useRouter();
  return (
    <GeneralLandingPage
      hookDescription={hookDescription}
      howItWorks={howItWorks}
      uploadAbout={uploadAbout}
      footerAd={footerAd}
      href="/instructor"
      onCallToActionClick={() => router.push('/instructor')}
    />
  );
};

export default StudentLandingPage;

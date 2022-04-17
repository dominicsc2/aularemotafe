import React, { useEffect } from 'react';
import PageWithLayoutType from '@clean/presentation/components/hoc/layout/types/page-with-layout-type';
import '@clean/presentation/assets/scss/styles.scss';
import { makeRefreshToken } from '@clean/main/usecases';
import { setAccessToken } from '@clean/presentation/store';

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: any) => <>{children}</>);

  useEffect(() => {
    makeRefreshToken()
    .refreshTokens()
    .then(response => {
      setAccessToken(response.result.accessToken);
    })
    .catch(console.log)
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

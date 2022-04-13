import React from 'react';
import '@clean/presentation/assets/scss/styles.scss';
import PageWithLayoutType from '@clean/presentation/components/hoc/layout/types/page-with-layout-type';

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

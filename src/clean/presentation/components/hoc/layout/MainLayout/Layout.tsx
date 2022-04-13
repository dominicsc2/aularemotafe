import React from 'react';
import BannerContent from '@clean/presentation/components/embedded-layout/BannerContent/BannerContent';
import Footer from '@clean/presentation/components/embedded-layout/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout: React.FC = (props) => (
  <>
    <Navbar>
      <BannerContent />
    </Navbar>
    <main className={styles.content}>{props.children}</main>
    <Footer />
  </>
);

export default Layout;

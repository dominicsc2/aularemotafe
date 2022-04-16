import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC  = () => {
  return (
    <footer className={styles.footer}>
      <p>Trilce</p>
      <p>© 2020 Trilce, todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

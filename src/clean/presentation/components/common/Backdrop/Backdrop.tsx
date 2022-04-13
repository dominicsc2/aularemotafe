import React from 'react';
import { IBackdrop } from '../interfaces/backdrop.interfaces';
import styles from './Backdrop.module.scss';

const Backdrop : React.FC<IBackdrop> = ({ open, setOpen }) => (
  <div
    className={styles.backdropFade}
    style={
        {
          opacity: (open) ? '50%' : '0',
          visibility: (open) ? 'visible' : 'hidden',
        }
      }
    onClick={() => setOpen && setOpen(false)}
  />
);

export default Backdrop;

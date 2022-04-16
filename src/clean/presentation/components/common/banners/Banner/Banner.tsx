import React from 'react';
import { IBanner } from '../../interfaces/banner.interfaces';
import styles from './Banner.module.scss';

export const Banner : React.FC<IBanner> = (props) => {
  const textPosition = props.textPosition ? [styles.bannerInfo, styles.flex, styles[props.textPosition]] : [styles.bannerInfo];

  return (
    <section data-testid="banner" id={styles.landingContainer} style={{ backgroundImage: props.backgroundImage, height: props.height }}>
      <div className={textPosition.join(' ')}>
        <h1>{props.mainTitle}</h1>
        <p>{props.bannerDescription}</p>
      </div>
    </section>
  );
};

export default Banner;

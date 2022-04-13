import React from 'react';
import { IRoundImage } from '@clean/presentation/ts/interfaces/app.interfaces';
import classes from './RoundImage.module.scss';

const RoundImage: React.FC<IRoundImage> = (props) => (
  <div className={`${`${classes.carouselScrollItem} ` + 'item1'}`}>
    <div className={classes.imageContainer}>
      <img className={classes.card} src={props.imgSrc} alt="" />
    </div>
    <p className={classes.description}>{props.name}</p>
  </div>
);

export default RoundImage;

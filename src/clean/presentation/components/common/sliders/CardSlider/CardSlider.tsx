import React, { Fragment } from 'react';
import { useSlider } from '@clean/presentation/hooks/useSlider';
import { IRoundImage } from '@clean/presentation/ts/interfaces/app.interfaces';
import Card from '../../cards/Card/Card';
import { ICardSlider } from '../../interfaces/cardSlider.interfaces';
import RoundImage from '../../RoundImage/RoundImage';
import { IntersectTeacherCardBaseProps, IntersectDocumentCardBaseProps } from '../../types/card.types';

import classes from './CardSlider.module.scss';

const CardSlider: React.FC<ICardSlider> = ({
  content, contentType, idAdditional, gap,
}) => {
  const { setRefCont, setRefLeftButton, setRefRightButton } = useSlider(gap);

  function renderCards() {
    switch (contentType) {
      case 'roud-image':
        return (content as Array<any>).map((image: IRoundImage) => <RoundImage key={image.id} imgSrc={image.imgSrc} id={image.id} name={image.name} />);
      case 'card-teacher':
        return (content as Array<any>).map((teacher: IntersectTeacherCardBaseProps) => <Card key={teacher.name} teacherCard={teacher} />);
      case 'card-document':
        return (content as Array<any>).map((document: IntersectDocumentCardBaseProps) => <Card key={document.title} documentCard={document} />);
    }
  }

  let idCarousel = 'container';

  if (idAdditional) {
    idCarousel = `container${idAdditional}`;
  }

  let gridGrap = '0.6rem';

  switch (gap) {
    case 'medium':
      gridGrap = '1.6rem';
      break;
    case 'large':
      gridGrap = '2.6rem';
      break;
  }

  return (
    <>
      <button ref={setRefLeftButton} className={classes.leftArrow}>
        <i className={`${classes.arrow} ${classes.left}`} />
      </button>
      <div id={idCarousel} className={classes.carouselGrid}>
        <div ref={setRefCont} id="card-container" style={{ gap: gridGrap }}>
          {renderCards()}
        </div>
      </div>
      <button ref={setRefRightButton} className={classes.rightArrow}>
        <i className={`${classes.arrow} ${classes.right}`} />
      </button>
    </>
  );
};

export default CardSlider;

import React from 'react';
import { ICard } from '../../interfaces/card.interfaces';
import styles from './Card.module.scss';

const Card : React.FC<ICard> = ({ documentCard, teacherCard }) => {
  function renderCard(): any {
    if (documentCard) {
      return baseCard(
        documentCard.title,
        documentCard.author,
        documentCard.ranking,
        documentCard.image,
        documentCard.icon,
        '100px',
      );
    } if (teacherCard) {
      return baseCard(
        teacherCard.name,
        teacherCard.classDescription,
        teacherCard.hoursDictating,
        teacherCard.image,
        teacherCard.icon,
        '15px',
        teacherCard.spectators,
      );
    }
  }

  function baseCard(
    heading: string,
    description: string,
    bottomLeft: number | undefined,
    image: string,
    icon: string,
    iconWidth: string,
    bottomRight?: number,
  ) {
    return (
      <div className={styles.card}>
        <img src={`/img/${image}`} alt="" className={styles.card__image} />
        <div className={styles.card__container}>
          <div className={styles.card__content}>
            <h3 className={styles['sub-heading-sm']}>{ heading }</h3>
            <p className={styles['grey-small-text']}>{ description }</p>
          </div>
          <div className={styles.card__info}>
            <div>
              <img src={`/img/${icon}`} alt="" width={iconWidth} />
              <p className={styles['grey-small-text']}>
                { bottomLeft }
                {' '}
                { bottomRight && ' horas' }
              </p>
            </div>
            { bottomRight && (
              <div>
                <p className={styles['grey-small-text']}>
                  { bottomRight }
                  {' '}
                  espectadores
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    renderCard()
  );
};

export default Card;

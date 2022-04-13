import { ITeacher, IDocument } from '@clean/presentation/ts/interfaces/app.interfaces';
import React, { Fragment } from 'react';
import { IGrid } from '../../interfaces/grid.interfaces';
import { IntersectDocumentCardBaseProps, IntersectTeacherCardBaseProps } from '../../types/card.types';
import Card from '../Card/Card';
import style from './GridCards.module.scss';

const GridCard: React.FC<IGrid> = (props) => {
  function renderCards() {
    if (props.teacherCards) {
      return (
        <>
          {props.teacherCards.map((card: ITeacher, index) => {
            const teacher: IntersectTeacherCardBaseProps = {
              name: card.name,
              hoursDictating: card.hoursDictating,
              classDescription: card.classDescription,
              spectators: card.spectators,
              image: card.image,
              icon: 'cam.png',
            };
            return <Card key={index.toString()} teacherCard={teacher} />;
          })}
        </>
      );
    } if (props.documentCards) {
      return (
        <>
          {props.documentCards.map((card: IDocument, index) => {
            const document: IntersectDocumentCardBaseProps = {
              title: card.title,
              author: card.author,
              ranking: card.ranking,
              image: card.image,
              icon: 'stars.png',
            };
            return <Card key={index.toString()} documentCard={document} />;
          })}
        </>
      );
    }
  }

  return <div className={`px-1 ${style.gridCards}`}>{renderCards()}</div>;
};

export default GridCard;

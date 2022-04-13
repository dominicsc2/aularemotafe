import React from 'react';
import styles from './FeedbackItem.module.scss';

interface IFeedback {
  icon: string;
  number: string;
}

export const FeedbackItem: React.FC<IFeedback> = (props) => (
  <div className={styles.align}>
    <img
      className={styles.image}
      src={`/img/${props.icon}`}
      alt="like"
    />
    <p>{props.number}</p>
  </div>
);

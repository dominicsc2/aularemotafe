import React from 'react';
import RoundProfilePicture from '../RoundProfilePicture/RoundProfilePicture';
import classes from './Review.module.scss';

interface ReviewComponentProps {
    reviewerName: string,
    reviewerImageUrl: string,
    reviewDetail: string,
    reviewTime: string
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({
  reviewerName,
  reviewerImageUrl,
  reviewDetail,
  reviewTime,
}: ReviewComponentProps) => (
  <div id={classes.review}>
    <RoundProfilePicture imageUrl={reviewerImageUrl} alt={reviewerName} size={70} />
    <div className={classes.reviewContent}>
      <h3>{reviewerName}</h3>
      <div className={classes.reviewRating}>
        <img src="img/stars.png" alt="" />
&nbsp;
        <p>{reviewTime}</p>
      </div>
      <p>{reviewDetail}</p>
    </div>
  </div>
);

export default ReviewComponent;

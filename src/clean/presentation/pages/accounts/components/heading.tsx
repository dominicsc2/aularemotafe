import React from 'react';
import classes from "../Account.module.scss";

interface IProps {
  title: string;
  description?: string;
}

const Heading : React.FC<IProps> = ({ title, description }) => {
    return (
      <div className={classes['heading-section']}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
}

export default Heading;
import React from 'react';
import { IntersectBaseProps } from '../../types/flex.types';

const FlexColumn: React.FC<IntersectBaseProps> = (props) => {
  function renderHeading() {
    switch (props.headingType) {
      case 'p': return <p className={props.headingStyles}>{props.heading}</p>;
      case 'h1': return <h1 className={props.headingStyles}>{props.heading}</h1>;
      case 'h2': return <h2 className={props.headingStyles}>{props.heading}</h2>;
      case 'h3': return <h3 className={props.headingStyles}>{props.heading}</h3>;
      default: return <h1 className={props.headingStyles}>{props.heading}</h1>;
    }
  }
  return (
    <div className="flex-columns">
      {props.image && (
      <img
        src={`/img/${props.image}`}
        alt="imagen"
        style={{ display: props.image ? 'inline-block' : 'none' }}
      />
      )}
      { renderHeading() }
      <p className={props.contentStyle}>{props.content}</p>
    </div>
  );
};

export default FlexColumn;

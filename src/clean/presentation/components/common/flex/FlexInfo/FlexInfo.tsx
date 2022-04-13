import React from 'react';
import { IntersectBaseProps } from '../../types/flex.types';

const FlexInfo: React.FC<IntersectBaseProps> = (props) => {
  function renderHeading() {
    if (typeof props.heading !== 'string') {
      return props.heading;
    }
    return <h3>{props.heading}</h3>;
  }

  return (
    <div className="flex-items">
      <div className="flex-content">
        {props.image && <img src={`/img/${props.image}`} alt="imagen" style={{ display: 'inline-block' }} />}
        <div>
          {renderHeading()}
          <p className={props.contentStyle}>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlexInfo;

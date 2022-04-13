import React from 'react';
import { IFlexList } from '../../interfaces/flex.interfaces';
import FlexInfo from '../FlexInfo/FlexInfo';

export const FlexList: React.FC<IFlexList> = (props) => (
  <div className="flex-items landing">
    {props.contentArray.map((content, index) => (
      <FlexInfo
        key={content.image || index.toString()}
        image={content.image}
        heading={content.heading}
        headingType={content.headingType}
        content={content.content}
      />
    ))}
  </div>
);

export default FlexList;

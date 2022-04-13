import React from 'react';
import { AddedStyles } from '@clean/presentation/ts/interfaces/app.interfaces';

const FlexContainer: React.FC<AddedStyles> = (props) => <div className={`flex-items ${props.additionalStyles}`}>{props.children}</div>;

export default FlexContainer;

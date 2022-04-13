import { AddedStyles } from '@clean/presentation/ts/interfaces/app.interfaces';
import React from 'react';

export const SectionContainer: React.FC<AddedStyles> = ({ additionalStyles, children, id }) => (
  <section aria-label="section-container" id={id && id} className={'container' + ` ${additionalStyles}`}>
    {children}
  </section>
);

export default SectionContainer;

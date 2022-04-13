import React from 'react';
import { IntersectBaseProps } from '../../types/button.types';

const PrimaryButton: React.FC<IntersectBaseProps> = ({
  type,
  onClick,
  additionalStyles,
  value,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`button button-auth button-primary ${additionalStyles}`}
  >
    {value}
  </button>
);

export default PrimaryButton;

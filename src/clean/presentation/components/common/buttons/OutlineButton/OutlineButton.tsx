import React from 'react';
import { IntersectBaseProps } from '../../types/button.types';

export const OutlineButton: React.FC<IntersectBaseProps> = ({
  color,
  onClick,
  additionalStyles,
  value,
}) => {
  const outlineColor = color === 'green' ? 'button-outline-green' : 'button-outline';
  return (
    <button
      onClick={onClick}
      className={`button button-auth ${outlineColor} ${additionalStyles}`}
    >
      {value}
    </button>
  );
};

export default OutlineButton;

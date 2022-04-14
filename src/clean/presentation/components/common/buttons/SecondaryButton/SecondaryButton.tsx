import React from 'react'
import { IntersectBaseProps } from '../../types/button.types'
// import { Link } from "react-router-dom";

const SecondaryButton: React.FC<IntersectBaseProps> = ({
  type,
  onClick,
  redirectTo,
  additionalStyles,
  value,
  dataTestId
}) => (
  <>
    {redirectTo ? (
      // <Link to={redirectTo} style={{ textDecoration: "none" }}>
      <button type={type} className={`button button-action button-secondary ${additionalStyles && additionalStyles}`}>
        {value}
      </button>
    ) : (
      // </Link>
      <button
        data-testid={dataTestId}
        type={type}
        onClick={onClick}
        className={`button button-action button-secondary ${additionalStyles && additionalStyles}`}
      >
        {value}
      </button>
    )}
  </>
)

export default SecondaryButton

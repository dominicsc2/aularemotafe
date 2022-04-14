import React from "react";
import { IntersectBaseProps } from "../../../components/common/types/button.types";
import Link from "next/link";

const FacebookButton: React.FC<IntersectBaseProps> = ({
  onClick,
  redirectTo,
  additionalStyles,
  value,
}) => {
  return (
    <>
      {redirectTo ? (
        <Link href={redirectTo}>
          <button
            className={`button button-action facebook ${
              additionalStyles && additionalStyles
            }`}
          >
            {value}
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`button button-action facebook ${
            additionalStyles && additionalStyles
          }`}
        >
          {value}
        </button>
      )}
    </>
  );
};

export default FacebookButton;

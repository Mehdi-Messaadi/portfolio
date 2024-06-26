import React from "react";

const StyledButton = ({ buttonText, additionalClass = "" }) => {
  return (
    <button className={`${additionalClass} Styled-Button`}>{buttonText}</button>
  );
};

export default StyledButton;

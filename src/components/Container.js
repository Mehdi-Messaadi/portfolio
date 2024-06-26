import React from "react";

const Container = ({ children, additionalClasses = "" }) => {
  const baseClasses =
    "Container mx-auto px-[15px] sm:px-[20px] w-full sm540:max-w-540 sm:max-w-640 md:max-w-768 md992:max-w-992 lg:max-w-1024 xl:max-w-1280";

  return (
    <div className={`${baseClasses} ${additionalClasses}`}>{children}</div>
  );
};

export default Container;

import React from "react";

const CampRowGroup = ({ children, className = "" }) => {
  return (
    <div className={`flex justify-between gap-11 ${className}`}>{children}</div>
  );
};

export default CampRowGroup;

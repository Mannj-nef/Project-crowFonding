import React from "react";

const FormField = ({ children, className = "" }) => {
  return <div className={`form-field w-full ${className}`}>{children}</div>;
};

export default FormField;

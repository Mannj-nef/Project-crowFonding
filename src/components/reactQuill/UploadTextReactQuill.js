import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UploadTextReactQuill = ({ value = "", handleChange, placeholder }) => {
  return (
    <ReactQuill
      placeholder={placeholder}
      theme="snow"
      value={value}
      onChange={handleChange}
    />
  );
};

export default UploadTextReactQuill;

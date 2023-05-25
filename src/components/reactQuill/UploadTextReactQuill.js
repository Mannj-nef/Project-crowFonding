import React, { useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import imageUpload from "../../utils/handleImageUpload";
import { imgbbAPI } from "../../config";

Quill.register("modules/imageUploader", ImageUploader);

const toolbarCustom = [
  ["bold", "italic", "underline"],
  ["blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["link", "image"],
];

const UploadTextReactQuill = ({
  value = "",
  handleChange = () => {},
  placeholder = "",
}) => {
  const modules = useMemo(
    () => ({
      toolbar: toolbarCustom,
      imageUploader: imageUpload(imgbbAPI),
    }),
    []
  );

  return (
    <ReactQuill
      placeholder={placeholder}
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={modules}
    />
  );
};

export default UploadTextReactQuill;

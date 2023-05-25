import axios from "axios";
import { imgbbAPI } from "../../config";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IconClose, IconUpload } from "../Icons";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const [imageURL, setImageUrl] = useState(null);

  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;

    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);

    const response = await axios.post(imgbbAPI, bodyFormData);
    const imageData = response.data.data;

    if (!imageData) {
      toast.error("Can not upload image to imgbbAPI");
      return;
    }

    const imageObj = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    setImageUrl(imageObj.url);
    onChange(name, imageObj);
  };

  const handleDeleteImage = (e) => {
    setImageUrl(null);
  };

  return (
    <label className="w-full h-[200px] dark:text-white dark:border-darkStroke border border-gray-200 border-dashed rounded-xl cursor-pointer flex items-center justify-center overflow-hidden relative">
      {imageURL ? (
        <>
          <img className="w-full h-full object-cover" src={imageURL} alt="" />
          <button
            onClick={handleDeleteImage}
            className="w-[50px] h-[50px] flex items-center justify-center text-white rounded-full bg-error bg-opacity-70 absolute"
          >
            <IconClose />
          </button>
        </>
      ) : (
        <>
          <input type="file" onChange={handleUploadImage} className="hidden" />

          <IconUpload />
        </>
      )}
    </label>
  );
};

export default ImageUpload;

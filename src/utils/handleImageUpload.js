import axios from "axios";
import { toast } from "react-toastify";
import { imgbbAPI } from "../config";

const urlUploadImage = imgbbAPI;

function imageUpload(apiUrl = urlUploadImage) {
  const imageUploader = {
    upload: async (file) => {
      try {
        const formData = new FormData();
        formData.append("image", file);

        const { data: dataImage } = await axios.post(apiUrl, formData);

        return dataImage.data.url;
      } catch (error) {
        toast.error(error);
        throw new Error("Upload failed");
      }
    },
  };

  return imageUploader;
}

export default imageUpload;

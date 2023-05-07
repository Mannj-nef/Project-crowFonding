import axios from "axios";
import { toast } from "react-toastify";

const urlUploadImage = process.env.REACT_APP_API_IMAGE_UPLOAD;

function imageUpload(urlUpload = urlUploadImage) {
  const imageUploader = {
    upload: async (file) => {
      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(urlUpload, formData);
        return response.data.data.url;
      } catch (error) {
        toast.error(error);
        throw new Error("Upload failed");
      }
    },
  };

  return imageUploader;
}

export default imageUpload;

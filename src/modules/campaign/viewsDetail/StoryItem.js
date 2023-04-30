import React from "react";
import { imgUrl } from "../parts/constants";

const StoryItem = () => {
  return (
    <div className="mb-[35px] bg-transparent">
      <img src={imgUrl} alt="" className="w-full h-[400px] object-cover" />
      <div className="py-[10px] px-[30px]">
        <p className="text-text3">
          Capture everything in 4k, with extended battery life and pro-g
          inspired features. Choose from three 4k recording modes: UHD, HD and
          cinematic 24p. Use the Wi-Fi feature to connect and stream your
          footage wirelessly directly to your iOS and Android smartphones or
          tablets for instant sharing. The monitor has a 3.5" touch screen for
          easy navigation and built-in wifi that automatically connects to the
          last used smartphone or tablet once paired.
        </p>
      </div>
    </div>
  );
};

export default StoryItem;

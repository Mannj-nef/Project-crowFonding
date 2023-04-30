import React from "react";
import { imgUrl as imgLink } from "../../modules/campaign/parts/constants";
import Heading from "../heading/Heading";

const Banner = ({
  category = "Education",
  height = "200px",
  radius = "25px",
  imgUrl = imgLink,
}) => {
  return (
    <div
      className="relative mb-10"
      style={{
        height,
      }}
    >
      <img
        src={imgUrl}
        alt="banner education"
        className="w-full h-full object-cover "
        style={{ borderRadius: radius }}
      />
      <div
        className="absolute inset-0 banner-gradient"
        style={{
          borderRadius: radius,
        }}
      ></div>
      <Heading className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 !text-white font-bold text-4xl">
        {category}
      </Heading>
    </div>
  );
};

export default Banner;

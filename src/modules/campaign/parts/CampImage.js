import React from "react";
import { useNavigate } from "react-router-dom";
import { imgUrl as defauleImage } from "./constants";
import PropTypes from "prop-types";

const CampImage = ({
  imgUrl = defauleImage,
  className = "md:h-[158px]",
  rounder = "16px",
  categories = "",
  id = "",
}) => {
  const navigate = useNavigate();

  const handleToDetail = (categories, id) => {
    const url = `/campaign/slug?:categorise=${categories}&id=${id}`;
    navigate(url);
  };
  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => handleToDetail(categories, id)}
    >
      <img
        src={imgUrl}
        alt="canpaign-card img"
        style={{ borderRadius: rounder }}
        className={`w-full h-full object-cover`}
      />
    </div>
  );
};
CampImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  rounder: PropTypes.string,
  categories: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default CampImage;

import React from "react";
import { Link } from "react-router-dom";
import { imgUrl as avatar } from "./constants";

const CampAuthor = ({ imgUrl = avatar, authorName = "Mahfuzul Nabil" }) => {
  return (
    <div className="author flex items-center gap-[10px]">
      <div className="w-[30px] h-[30px]">
        <img
          src={imgUrl}
          alt="canpaign-card img"
          className=" w-full h-full object-cover rounded-full"
        />
      </div>
      <p>
        by
        <Link to="#" className="text-text2 dark:text-text4 font-semibold">
          {" "}
          {authorName}
        </Link>
      </p>
    </div>
  );
};

export default CampAuthor;

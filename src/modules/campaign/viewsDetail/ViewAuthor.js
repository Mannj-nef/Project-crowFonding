import React from "react";
import { Heading } from "../../../components/heading";
import { IconStar } from "../../../components/Icons";

const ViewAuthor = ({ authorImage }) => {
  const author = {
    imageURl: authorImage,
    name: "Saiful Islam",
    camp: "02 Campaign",
    desc: "Dhaka, Bangladesh",
  };

  return (
    <div className="flex items-center gap-x-5 my-[10px]">
      <img
        src={author.imageURl}
        alt="avatar-author"
        className="w-[60px] h-[60px] rounded-full object-cover"
      />
      <div>
        <div className="flex items-center gap-4">
          <Heading className="font-medium text-lg" type="h3">
            {author.name}
          </Heading>
          <div className="text-yellow-500 flex items-center gap-1">
            {Array(5)
              .fill(null)
              .map((item, index) => (
                <span key={index}>
                  <IconStar />
                </span>
              ))}
          </div>
        </div>
        <div className="text-sm flex items-center gap-2">
          <span className="text-primary font-semibold">{author.camp}</span>
          <div className="w-[6px] h-[6px] rounded-full bg-text3"></div>
          <span className="text-text3">{author.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default ViewAuthor;

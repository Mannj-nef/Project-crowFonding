import React from "react";
import CampCategories from "./parts/CampCategories";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampProgressBars from "./parts/CampProgressBars";
import CampStory from "./parts/CampStory";

const CampaignFeature = ({ card }) => {
  return (
    <div className="flex flex-col md:flex-row gap-[30px] w-full max-x-[1048px] mb-10">
      <CampImage
        imgUrl={card.imageUrl}
        className="flex-1 md:max-h-[266px]"
        rounder="20px"
        categories={card.categories}
        id={card.id}
      ></CampImage>
      <div className="flex-1 flex items-center">
        <div className="md:max-w-[435px] py-[15px] text-text3  text-sm flex flex-col gap-[15px]">
          <CampCategories
            categories={card.storyTitle}
            className="text-sm"
          ></CampCategories>
          <CampStory title={card.storyTitle} className="font-bold text-xl mb-4">
            {card.storyDesc}
          </CampStory>
          <CampProgressBars percentage={card.progress}></CampProgressBars>
          <CampMeta
            backers={card.backers}
            classAmount="text-xl font-bold"
            big
          ></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;

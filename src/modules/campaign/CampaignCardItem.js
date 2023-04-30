import React from "react";
import CampAuthor from "./parts/CampAuthor";
import CampCategories from "./parts/CampCategories";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampStory from "./parts/CampStory";

const CampaignCardItem = ({ card }) => {
  return (
    <div className="bg-white dark:bg-darkSecondary shadow-boxPureWhite dark:shadow-none rounded-2xl">
      <CampImage
        rounder="16px"
        imgUrl={card.imageUrl}
        categories={card.categories}
        id={card.id}
      ></CampImage>
      <div className="py-[15px] px-5 text-text3  text-xs leading-[18px] flex flex-col gap-[15px]">
        <CampCategories categories={card.categories}></CampCategories>
        <CampStory title={card.storyTitle}>{card.storyDesc}</CampStory>
        <CampMeta backers={card.backers}></CampMeta>
        <CampAuthor authorName={card.authorName}></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignCardItem;

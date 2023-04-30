import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/buttons/Button";
import {
  IconFacabook,
  IconSheare,
  IconTwitter,
} from "../../../components/Icons";
import { ROUTER_PATCH } from "../../../routers";
import CampCategories from "../parts/CampCategories";
import CampImage from "../parts/CampImage";
import CampMeta from "../parts/CampMeta";
import CampProgressBars from "../parts/CampProgressBars";
import CampStory from "../parts/CampStory";
import { imgUrl } from "../parts/constants";
import ViewAuthor from "./ViewAuthor";

const CampaignViewFeature = ({ cardItem }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start md:flex-row gap-10 w-full max-x-[1048px] mb-10">
      <div className="flex-1">
        <CampImage
          imgUrl={cardItem.imageUrl}
          className="flex-1 md:h-[398px]"
          rounder="25px"
          categories={cardItem.categories}
          id={cardItem.id}
        ></CampImage>
        <div className="mt-[30px] flex gap-5 justify-center">
          {Array(4)
            .fill(null)
            .map((item, index) => (
              <div key={index} className="w-[90px] h-[70px] rounded">
                <img
                  src={imgUrl}
                  alt="img-item"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="md:max-w-[443px] md:h-[398px] justify-between  text-text3  text-sm flex flex-col gap-[15px]">
          <div className="flex items-center justify-between">
            <CampCategories
              categories={cardItem.storyTitle}
              className="text-sm"
            ></CampCategories>
            <div className="flex gap-4">
              <Social link="#/">
                <IconSheare />
              </Social>
              <Social link="#/">
                <IconTwitter />
              </Social>
              <Social link="#/">
                <IconFacabook />
              </Social>
            </div>
          </div>
          <CampStory
            title={cardItem.storyTitle}
            className="font-bold text-xl mb-4"
          >
            {cardItem.storyDesc}
          </CampStory>
          <ViewAuthor authorImage={imgUrl}></ViewAuthor>
          <CampProgressBars percentage={cardItem.progress}></CampProgressBars>
          <CampMeta
            backers={cardItem.backers}
            classAmount="text-xl font-bold"
            big
          ></CampMeta>
          <Button
            className="text-white bg-primary text-base"
            onClick={() => navigate(ROUTER_PATCH.CHECK_OUT.path)}
          >
            Back this project
          </Button>
        </div>
      </div>
    </div>
  );
};

const Social = ({ link, children }) => {
  return (
    <a href={link} className="cursor-pointer">
      {children}
    </a>
  );
};

export default CampaignViewFeature;

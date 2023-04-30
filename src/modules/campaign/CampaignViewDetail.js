import React from "react";
import Banner from "../../components/common/Banner";
import CampaignViewFeature from "./viewsDetail/CampaignViewFeature";
import { campaigns_popolar, your_capmaigns } from "./parts/campMockApi";
import MiddleBar from "./viewsDetail/MiddleBar";
import StoryItem from "./viewsDetail/StoryItem";
import { Heading } from "../../components/heading";
import ViewSupport from "./viewsDetail/ViewSupport";
import ViewPerk from "./viewsDetail/ViewPerk";
import CampTitle from "./CampTitle";
import CampaignCard from "./CampaignCard";
import { ModalBackProject } from "../../components/modal";

const CampaignViewDetail = () => {
  return (
    <>
      <ModalBackProject></ModalBackProject>
      <div className="mb-[165px]">
        <Banner></Banner>
        <CampaignViewFeature cardItem={your_capmaigns[0]}></CampaignViewFeature>
      </div>

      <MiddleBar></MiddleBar>

      <div className="grid grid-cols-[1.7fr_1fr] gap-[124px] mt-[284px]">
        <div>
          <Heading type="h2" className="mb-5 text-lg">
            STORY
          </Heading>
          <div className="bg-white dark:bg-darkSecondary">
            <StoryItem></StoryItem>
            <StoryItem></StoryItem>
            <StoryItem></StoryItem>
          </div>
        </div>
        <div className="text-primary">
          <Heading type="h2" className="mb-5 text-lg">
            Support
          </Heading>
          <ViewSupport></ViewSupport>
          <div className="h-[30px]"></div>
          <ViewPerk></ViewPerk>
          <ViewPerk></ViewPerk>
          <ViewPerk></ViewPerk>
        </div>
      </div>

      <div className="mt-10">
        <CampTitle>Popular Campaign</CampTitle>
        <CampaignCard slice="4" campaignDatas={campaigns_popolar} />
      </div>
    </>
  );
};

export default CampaignViewDetail;

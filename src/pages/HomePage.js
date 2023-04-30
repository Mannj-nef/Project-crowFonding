import React from "react";
import { Heading } from "../components/heading/";
import { CampaignCard, CampaignFeature, CampTitle } from "../modules/campaign";
import {
  campaigns_popolar,
  campaigns_recent,
  your_capmaigns,
} from "../modules/campaign/parts/campMockApi";

const HomePage = () => {
  return (
    <>
      <Heading type="h2" className="text-lg md:mb-[20px]  font-semibold mb-5">
        Your Campaign
        <span className="text-secondary dark:text-white">
          {` (${your_capmaigns.length})`}
        </span>
      </Heading>

      {!!your_capmaigns.length &&
        your_capmaigns
          .slice(0, 1)
          .map((item) => <CampaignFeature key={item.id} card={item} />)}

      <CampTitle>Popular Campaign</CampTitle>
      <CampaignCard slice="4" campaignDatas={campaigns_popolar} />

      <CampTitle>Recent Campaign</CampTitle>
      <CampaignCard slice="4" campaignDatas={campaigns_recent} />
    </>
  );
};

export default HomePage;

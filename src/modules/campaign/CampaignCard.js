import React from "react";
import CampaignCardItem from "./CampaignCardItem";

const CampaignCard = ({ campaignDatas = [], slice = campaignDatas.length }) => {
  return (
    <div className="mb-[30px]">
      <div className="grid grid-cols-4 gap-[30px]">
        {!!campaignDatas.length &&
          campaignDatas
            .slice(0, slice)
            .map((item, index) => <CampaignCardItem card={item} key={index} />)}
      </div>
    </div>
  );
};

export default CampaignCard;

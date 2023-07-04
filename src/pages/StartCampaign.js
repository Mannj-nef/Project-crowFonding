import React from "react";
import CampaignAddNewPage from "../modules/campaign/CampaignAddNewPage";
import RequiredAuthPage from "../layouts/RequiredAuthPage";

const StartCampaign = () => {
  return (
    <RequiredAuthPage>
      <CampaignAddNewPage></CampaignAddNewPage>
    </RequiredAuthPage>
  );
};

export default StartCampaign;

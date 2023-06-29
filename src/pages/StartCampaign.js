import React, { useEffect } from "react";
import CampaignAddNewPage from "../modules/campaign/CampaignAddNewPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATCH } from "../routers";

const StartCampaign = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTER_PATCH.SIGN_IN.path);
    }
  }, [navigate, user]);

  return (
    <>
      <CampaignAddNewPage></CampaignAddNewPage>
    </>
  );
};

export default StartCampaign;

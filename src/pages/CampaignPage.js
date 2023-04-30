import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import { Heading } from "../components/heading";
import { IconPlus } from "../components/Icons";
import { CampaignFeature } from "../modules/campaign";
import { your_capmaigns } from "../modules/campaign/parts/campMockApi";
import { ROUTER_PATCH } from "../routers";

const CampaignPage = () => {
  const navigate = useNavigate();
  const toCreateCampaign = () => {
    navigate(ROUTER_PATCH.CAMPAIGN_ADD_NEW.path);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-10 bg-white dark:bg-darkSecondary py-[30px] px-10 rounded-2xl">
        <div className="flex gap-[25px] items-start">
          <div>
            <Button
              className="bg-secondary bg-opacity-60 text-white p-4 flex items-center justify-center w-[52px]"
              rounded="100%"
              onClick={toCreateCampaign}
            >
              <IconPlus />
            </Button>
          </div>
          <div className="text-sm text-text3 flex flex-col gap-2">
            <Heading type="h2" className="text-[22px] font-semibold">
              Create Your Campaign
            </Heading>
            <p>
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a className="text-primary" href="/#">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <ButtonCamp handleClick={toCreateCampaign}>Create campaign</ButtonCamp>
      </div>
      <div>
        <CampItem campList={your_capmaigns}></CampItem>
        <CampItem campList={your_capmaigns}></CampItem>
      </div>
    </>
  );
};

const CampItem = ({ campList = [] }) => {
  return (
    <div className="mb-10">
      <Heading type="h2" className="text-lg md:mb-[20px]  font-semibold mb-5 ">
        Your Campaign
        <span className="text-secondary dark:text-white">
          {` (${campList.length})`}
        </span>
      </Heading>
      {!!campList.length &&
        campList
          .slice(0, 3)
          .map((item) => <CampaignFeature key={item.id} card={item} />)}

      <ButtonCamp className="block m-auto">See more+</ButtonCamp>
    </div>
  );
};

const ButtonCamp = ({ children, className = "", handleClick }) => {
  return (
    <Button
      className={`bg-secondary bg-opacity-10 dark:bg-opacity-40 w-[140px] md:w-[200px] ${className}`}
      onClick={handleClick}
    >
      <span className="text-secondary dark:text-white">{children}</span>
    </Button>
  );
};

export default CampaignPage;

import React from "react";
import Banner from "../components/common/Banner";
import Dropdown from "../components/dropdown/Dropdown";
import Heading from "../components/heading/Heading";
import Pagination from "../components/paging/Paganation";
import { CampaignCard } from "../modules/campaign";
import { campaigns_popolar } from "../modules/campaign/parts/campMockApi";

const CategoryPage = () => {
  return (
    <>
      <Banner></Banner>
      <div className="md:text-center relative py-1">
        <Heading type="h2" className=" font-bold text-2xl">
          <span className="text-text2 dark:text-white">524 Projects Found</span>
        </Heading>
        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <Dropdown className="px-[15px] py-[10px] rounded-lg font-semibold text-lg text-text3 border-text-3 dark:border-darkSoft"></Dropdown>
        </div>
      </div>

      <div className="h-10"></div>
      <CampaignCard campaignDatas={campaigns_popolar} />

      <Pagination></Pagination>
    </>
  );
};

export default CategoryPage;

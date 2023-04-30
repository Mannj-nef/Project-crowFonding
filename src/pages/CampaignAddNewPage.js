import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "../components/common/FormField";
import Heading from "../components/heading/Heading";
import { IconMoney } from "../components/Icons";
import Input from "../components/Inputs/Input";
import { TextArea } from "../components/Inputs/";
import Label from "../components/label/LabelComponent";
import CampRowGroup from "../modules/campaign/CampRowGroup";
import UploadTextReactQuill from "../components/reactQuill/UploadTextReactQuill";
import Button from "../components/buttons/Button";
import Dropdown from "../components/dropdown/Dropdown";

const classDropDown =
  " w-full dark:text-white font-medium text-sm text-text4 dark:placeholder:text-text2 dark:text-text2 dark:border-darkStroke rounded-xl py-4 px-6";

const CampaignAddNewPage = () => {
  const [reactQuillValue, setReactQuillValue] = useState("");
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const createNewCampaign = (value) => {};

  return (
    <div className="bg-white dark:bg-darkSecondary rounded-[10px] min-h-screen py-10 px-[66px]  items-start ">
      <Heading className="bg-text4 py-4 px-[60px] max-w-[380px] m-auto text-center bg-opacity-10 rounded-xl dark:bg-darkStroke">
        <span className="text-text2 font-bold text-2xl dark:text-white">
          Start a Campaign 🚀
        </span>
      </Heading>
      <Gap gap="40" />
      <form onSubmit={handleSubmit(createNewCampaign)} autoComplete="off">
        <div>
          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="title">Campaign Title *</Label>
              <Input
                error={errors?.title?.message}
                control={control}
                type="text"
                name="title"
                placeholder="Write a titel"
              ></Input>
            </FormField>
            <FormField className="mb-6">
              <Label>Campaign Title *</Label>
              <Dropdown
                title="Select a category"
                className={`${classDropDown} `}
              ></Dropdown>
            </FormField>
          </CampRowGroup>

          <FormField>
            <Label htmlFor="description">Short Description *</Label>
            <TextArea
              className="dark:bg-transparent"
              placeholder="Write a short description...."
              name="description"
              control={control}
            ></TextArea>
          </FormField>

          <FormField>
            <Label htmlFor="description">Story *</Label>
            <UploadTextReactQuill
              name="description"
              value={reactQuillValue}
              handleChange={setReactQuillValue}
              placeholder="Write your story......"
            ></UploadTextReactQuill>
          </FormField>
        </div>

        <Gap gap="40" />
        <div className="px-[45px] py-[40px] bg-secondary  rounded-[10px] bg-opacity-80 dark:bg-opacity-90">
          <Heading type="h2" className=" flex items-center  gap-5">
            <span className="text-white">
              <IconMoney />
            </span>
            <span className="text-white font-bold text-2xl ">
              You will get 90% of total raised
            </span>
          </Heading>
        </div>
        <Gap gap="40" />

        <div>
          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="goal">Goal *</Label>
              <Input
                error={errors?.goal?.message}
                control={control}
                type="text"
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormField>
            <FormField className="mb-6">
              <Label htmlFor="raised">Raised Amount *</Label>
              <Input
                error={errors?.raised?.message}
                control={control}
                type="text"
                name="raised"
                placeholder="$0.00 USD"
              ></Input>
            </FormField>
          </CampRowGroup>

          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="prefilled">Amount Prefilled</Label>
              <Input
                control={control}
                type="text"
                name="prefilled"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-text3 font-normal mt-4">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormField>
            <FormField className="mb-6">
              <Label htmlFor="video">Video</Label>
              <Input
                control={control}
                type="text"
                name="video"
                placeholder="Video"
              ></Input>
              <p className="text-text3 font-normal mt-4">
                Place Youtube or Vimeo Video URL
              </p>
            </FormField>
          </CampRowGroup>

          <CampRowGroup>
            <FormField className="mb-6">
              <Label>Campaign End Method</Label>
              <Dropdown title="Select one" className={classDropDown}></Dropdown>
            </FormField>
            <FormField className="mb-6">
              <Label>Counrty</Label>
              <Dropdown
                title="Select a country"
                className={classDropDown}
              ></Dropdown>
            </FormField>
          </CampRowGroup>

          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="start-date">Start Date</Label>
              <Input
                control={control}
                type="text"
                name="start-date"
                placeholder="Start Date"
              ></Input>
            </FormField>
            <FormField className="mb-6">
              <Label htmlFor="end-date">End Date</Label>
              <Input
                control={control}
                type="text"
                name="end-date"
                placeholder="Start Date"
              ></Input>
            </FormField>
          </CampRowGroup>
        </div>

        <div className="text-center mt-4">
          <Button
            type="submit"
            className="text-white bg-primary w-fit py-3 px-10"
          >
            Submit new campaign{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

const Gap = ({ gap = "0" }) => {
  return <div style={{ height: `${gap}px` }}></div>;
};

export default CampaignAddNewPage;

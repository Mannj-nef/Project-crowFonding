import React, { useState } from "react";
import Button from "../components/buttons/Button";
import Label from "../components/label/LabelComponent";
import FormField from "../components/common/FormField";
import CampRowGroup from "../modules/campaign/CampRowGroup";
import Dropdown from "../components/dropdown/Dropdown";
import Heading from "../components/heading/Heading";
import { IconMoney } from "../components/Icons";
import UploadTextReactQuill from "../components/reactQuill/UploadTextReactQuill";
import { Input, TextArea } from "../components/Inputs";
import { useForm } from "react-hook-form";

const classDropDown =
  " w-full dark:text-white font-medium text-sm text-text4 dark:placeholder:text-text2 dark:text-text2 dark:border-darkStroke rounded-xl py-4 px-6";

const Profile = () => {
  const [reactQuillValue, setReactQuillValue] = useState("");
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const createNewCampaign = (value) => {};

  return (
    <div className="lg:px-[130px] lg:py-[50px] flex flex-col gap-[50px] bg-white shadow-boxPrimary dark:bg-darkSecondary dark:shadow-boxDarkPrimary rounded-xl">
      <div>
        <h2 className="capitalize text-text1 dark:text-white font-bold text-2xl">
          Account Information
        </h2>
        <p className="text-text3 text-sm">Update your account information</p>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-text1 dark:text-white font-bold text-xl">
            Update your account information
          </h3>
          <span>Edit</span>
        </div>
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
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;

import React from "react";
import { useForm } from "react-hook-form";
import FormField from "../components/common/FormField";
import { Heading } from "../components/heading";
import { Input, InputCheckBox } from "../components/Inputs";
import Label from "../components/label/LabelComponent";
import CampRowGroup from "../modules/campaign/CampRowGroup";
import { paymentItem, summaryItem } from "../modules/checkout/parts/constants";
import Payment from "../modules/checkout/Payment";
import Summary from "../modules/checkout/Summary";

const ShippingPage = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <form className="flex gap-[75px] flex-wrap">
      <div className="flex-1 flex gap-[46px] flex-col lg:flex-col-reverse">
        <Payment type="h2" paymentItem={paymentItem}></Payment>
        <div className="">
          <Heading type="h2" className="text-3xl mb-[30px]">
            <span className="font-bold">Shipping Address</span>
          </Heading>

          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="first-name">First Name *</Label>
              <Input
                error={errors?.firstName?.message}
                control={control}
                type="text"
                name="first-name"
                placeholder="Write a titel"
              ></Input>
            </FormField>

            <FormField className="mb-6">
              <Label htmlFor="last-name">Last Name*</Label>
              <Input
                error={errors?.lastName?.message}
                control={control}
                type="text"
                name="last-name"
                placeholder="Write a titel"
              ></Input>
            </FormField>
          </CampRowGroup>

          <FormField className="mb-6">
            <Label htmlFor="title">Country *</Label>
            <Input
              error={errors?.country?.message}
              control={control}
              type="text"
              name="title"
              placeholder="Select country"
            ></Input>
          </FormField>

          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                error={errors?.address?.message}
                control={control}
                type="text"
                name="address"
                placeholder="Jhon"
              ></Input>
            </FormField>

            <FormField className="mb-6">
              <Label htmlFor="city">City *</Label>
              <Input
                error={errors?.city?.message}
                control={control}
                type="text"
                name="city"
                placeholder="Doe"
              ></Input>
            </FormField>
          </CampRowGroup>

          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="postal-code">Postal Code *</Label>
              <Input
                error={errors?.postalCode?.message}
                control={control}
                type="text"
                name="postal-code"
                placeholder="Write a titel"
              ></Input>
            </FormField>

            <FormField className="mb-6">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                error={errors?.title?.message}
                control={control}
                type="text"
                name="phone"
                placeholder="+123 456 789"
              ></Input>
            </FormField>
          </CampRowGroup>

          <InputCheckBox
            name="remember-address"
            control={control}
            label="Remember this address for next time use"
            classLabel="text-sm ml-5 leading-6 text-text2"
          ></InputCheckBox>
        </div>
      </div>
      <div className="">
        <Summary summaryItem={summaryItem} control={control}></Summary>
      </div>
    </form>
  );
};

export default ShippingPage;

import { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "../../components/common/FormField";
import Heading from "../../components/heading/Heading";
import { IconMoney } from "../../components/Icons";
import Input from "../../components/Inputs/Input";
import { TextArea } from "../../components/Inputs";
import Label from "../../components/label/LabelComponent";
import CampRowGroup from "./CampRowGroup";
import Button from "../../components/buttons/Button";
import Dropdown from "../../components/dropdown";
import { categorys, methods } from "../../components/common/categoryMock";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDebounce from "../../hooks/useDebounce";
import useQuery from "../../hooks/useQuery";
import handleDropdown from "../../utils/handleDropdown";
import { UploadTextReactQuill } from "../../components/reactQuill";
import ImageUpload from "../../components/image/ImageUpload";
import axios from "axios";
import { toast } from "react-toastify";

const urlCountry = process.env.REACT_APP_API_COUNTRIES;
const campaignApi = `${process.env.REACT_APP_API_URL}/campaigns`;

const CampaignAddNewPage = () => {
  const [searchCountry, setSearchCountry] = useDebounce(null);
  //
  const [reactQuillValue, setReactQuillValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endtDate, setEndtDate] = useState(new Date());
  const { data: countryDatas, isloading: countryLoading } = useQuery(
    urlCountry,
    searchCountry
  );

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
    setValue,
  } = useForm();
  const [getValueDropdown, setValueDropdown] = handleDropdown(watch, setValue);

  const createNewCampaign = async (values) => {
    const data = {
      story: reactQuillValue,
      startDate,
      endtDate,
      ...values,
    };
    console.log(data);

    try {
      await axios.post(campaignApi, data);
      toast.success("success");
    } catch (error) {
      toast.error(error);
      throw error;
    }
  };

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
          {/* title, category */}
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
              <Label>Campaign Category *</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getValueDropdown("category", categorys[0].name)}
                />
                <Dropdown.List>
                  {categorys.map((category) => (
                    <Dropdown.Option
                      key={category.id}
                      onClick={() =>
                        setValueDropdown("category", category.name)
                      }
                    >
                      <span className="capitalize">{category.name}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormField>
          </CampRowGroup>

          {/* Description */}
          <FormField>
            <Label htmlFor="description">Short Description *</Label>
            <TextArea
              className="dark:bg-transparent"
              placeholder="Write a short description...."
              name="description"
              control={control}
            ></TextArea>
          </FormField>

          {/* Story */}
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

        {/* Featured image */}
        <div>
          <CampRowGroup className="grid grid-cols-2">
            <FormField className="w-auto">
              <Label>Featured Image</Label>
              <ImageUpload onChange={setValue} name="featured_image" />
            </FormField>

            <div className="">
              <Label>Sub Image</Label>
              <div className="flex gap-5">
                <FormField>
                  <ImageUpload onChange={setValue} name="sub_image_first" />
                </FormField>
                <FormField>
                  <ImageUpload onChange={setValue} name="sub_image_second" />
                </FormField>
                <FormField>
                  <ImageUpload onChange={setValue} name="sub_image_third" />
                </FormField>
              </div>
            </div>
          </CampRowGroup>
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
          {/* Goal, Raised */}
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

          {/* Prefilled, Video */}
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

          {/* Method,  Counrty*/}
          <CampRowGroup>
            <FormField className="mb-6">
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getValueDropdown("method", "Select one")}
                />
                <Dropdown.List>
                  {methods.map((method) => (
                    <Dropdown.Option
                      key={method.id}
                      onClick={() => setValueDropdown("method", method.name)}
                    >
                      <span className="capitalize">{method.name}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormField>
            <FormField className="mb-6">
              <Label>Counrty</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getValueDropdown("country", "Select A Country")}
                />
                <Dropdown.List>
                  <Dropdown.Search
                    onChange={(e) => setSearchCountry(e.target.value)}
                    placeholder="search country"
                  ></Dropdown.Search>
                  {countryDatas.length > 0 &&
                    countryDatas.map((country) => {
                      const name = country?.name?.common;
                      return (
                        <Dropdown.Option
                          key={name}
                          onClick={() => setValueDropdown("country", name)}
                        >
                          <span className="capitalize">{name}</span>
                        </Dropdown.Option>
                      );
                    })}
                </Dropdown.List>
              </Dropdown>
            </FormField>
          </CampRowGroup>

          {/* Date */}
          <CampRowGroup>
            <FormField className="mb-6">
              <Label htmlFor="start-date">Start Date</Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyy"
              />
            </FormField>
            <FormField className="mb-6">
              <Label htmlFor="end-date">End Date</Label>
              <DatePicker
                selected={endtDate}
                onChange={(date) => setEndtDate(date)}
                dateFormat="dd/MM/yyy"
              />
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

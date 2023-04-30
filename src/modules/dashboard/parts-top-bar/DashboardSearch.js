import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../../components/buttons";
import { IconClose, IconSearch } from "../../../components/Icons";
import { imgUrl } from "../../campaign/parts/constants";
import { Heading } from "../../../components/heading";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../../utils/handleModal";
import {
  closeModalSearch,
  openModalSearch,
} from "../../../store/modal/modalSlice";

const Search = ({ className }) => {
  const { isOpenModalSearch } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  return (
    <div className="relative z-50 flex-1">
      <div
        className={`flex rounded-full gap-5 w-full bg-white  shadow-boxPrimary dark:bg-darkSecondary dark:shadow-boxDarkPrimary p-[6px] ${className}`}
      >
        <input
          type="text"
          className=" px-6 w-full rounded-full bg-transparent text-xs lg:text-sm font-normal text-text1 dark:text-white placeholder:text-text4  dark:placeholder:text-text2"
          placeholder="Do fundrise now"
          onFocus={() => handleModal(dispatch, openModalSearch)}
        />
        <Button
          height="h-10 "
          className="bg-primary flex items-center w-fit px-6"
          rounded="20px"
        >
          <IconSearch />
        </Button>
      </div>
      {isOpenModalSearch ? (
        <div className="absolute pb-[25px] pl-[25px] flex flex-col gap-[30px] w-full lg:w-[843px] bg-white rounded-2xl translate-y-5 text-text1 p-[10px] text-sm">
          <div className="flex justify-between items-center">
            <p className="underline font-medium">See all 10,124 fundraisier</p>
            <button
              className="olute px-[28px] py-[17px] bg-error bg-opacity-20 text-error  rounded-xl"
              onClick={() => handleModal(dispatch, closeModalSearch)}
            >
              <IconClose />
            </button>
          </div>

          <div className="flex flex-col gap-[25px]">
            <SeachItem></SeachItem>
            <SeachItem></SeachItem>
            <SeachItem></SeachItem>
            <SeachItem></SeachItem>
            <SeachItem></SeachItem>
          </div>

          <div className="flex flex-col gap-4 text-text2">
            <p className="font-semibold text-text1">Releted searchs</p>
            <p>
              <span className="text-text1 font-semibold">education</span> fund
            </p>
            <p>schoralship fund</p>
            <p>
              <span className="text-text1 font-semibold">education</span> and
              schools fund
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
Search.Search = {
  className: PropTypes.string,
};

const SeachItem = () => {
  return (
    <div className="flex items-center gap-5">
      <img
        src={imgUrl}
        className="w-[50px] h-[50px] rounded-[10px] object-cover"
        alt="author-acatar"
      />

      <div className="">
        <Heading type="h4" className="font-normal mb-1">
          <span className="font-semibold">Education</span> fund for Durgham
          Family
        </Heading>
        <span className="text-text3">By Durgham Family</span>
      </div>
    </div>
  );
};

export default Search;

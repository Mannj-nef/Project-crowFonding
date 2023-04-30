import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "../../../components/buttons";
import { ROUTER_PATCH } from "../../../routers";
import { openModalProject } from "../../../store/modal/modalSlice";
import { handleModal } from "../../../utils/handleModal";

const defaultClassLink = "font-medium text-text3 py-[15px]";
const active = "text-secondary";

const listLiks = [
  {
    id: 1,
    title: "Campgain",
    path: ROUTER_PATCH.CAMPAIGN_VIEW.path,
  },
  {
    id: 2,
    title: "Risks",
    path: "Risks",
  },
  {
    id: 3,
    title: "FAQ",
    path: "FAQ",
  },
  {
    id: 4,
    title: "Updates",
    path: "Ppdates",
  },
  {
    id: 5,
    title: "Comments",
    path: "/comments",
  },
];

const MiddleBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="lg:absolute lg:z-10 lg:left-0 lg:right-0 bg-white dark:bg-darkbg dark:shadow-boxDarkPrimary py-5 px-[135px]  shadow-boxPrimary flex justify-between">
      <div className="flex gap-[60px] ">
        {listLiks.map((link, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive ? `${defaultClassLink} ${active}` : `${defaultClassLink}`
            }
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      <Button
        className="text-white bg-primary w-[258px]"
        onClick={() => handleModal(dispatch, openModalProject)}
      >
        Back this project
      </Button>
    </div>
  );
};

export default MiddleBar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTER_PATCH } from "../../../routers";

const navLinkClass =
  "flex items-center gap-x-5 w-full mb-[15px] font-semibold text-sm p-5 md:p-3 p-3 md:rounded-xl md:mb-[30px] md:justify-center md:w-auto md:last:shadow-boxPrimary md:last:mt-auto md:last:dark:shadow-boxDarkPrimary";

const DashboardNavLink = ({ link }) => {
  const navigate = useNavigate();
  if (link.onClick && !link.to) {
    return (
      <button
        className={`text-text3 ${navLinkClass}`}
        onClick={
          link.title === "Logout"
            ? () => navigate(ROUTER_PATCH.SIGN_IN.path)
            : link.onClick
        }
      >
        <NavLinkItem link={link} />
      </button>
    );
  }

  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} text-primary bg-primary bg-opacity-10`
          : `${navLinkClass} text-text3`
      }
    >
      <NavLinkItem link={link} />
    </NavLink>
  );
};

const NavLinkItem = ({ link }) => {
  return (
    <>
      <span>{link.icon}</span>
      <span className="md:hidden">{link.title}</span>
    </>
  );
};

export default DashboardNavLink;

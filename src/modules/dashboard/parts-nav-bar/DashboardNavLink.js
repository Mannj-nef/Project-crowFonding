import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogout } from "../../../store/auth/authSlice";

const navLinkClass =
  "flex items-center gap-x-5 w-full mb-[15px] font-semibold text-sm  md:p-3 p-3 md:rounded-xl md:mb-[30px] md:justify-center md:w-auto md:last:shadow-boxPrimary md:last:mt-auto md:last:dark:shadow-boxDarkPrimary";

const DashboardNavLink = ({ link }) => {
  const dispatch = useDispatch();

  if (link.onClick && !link.to) {
    return (
      <button
        className={`text-text3 ${navLinkClass}`}
        onClick={
          link.title === "Logout" ? () => dispatch(authLogout()) : link.onClick
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

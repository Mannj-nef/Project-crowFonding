import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATCH } from "../../routers";

const LogoApp = ({ logo = "/Logo.png", className, display = "hidden" }) => {
  return (
    <Link
      className={`${display} lg:block mx-[10px] flex-shrink-0 ${className}`}
      to={ROUTER_PATCH.HOME}
    >
      <img src={logo} alt="crowfunding-app" />
    </Link>
  );
};

export default LogoApp;

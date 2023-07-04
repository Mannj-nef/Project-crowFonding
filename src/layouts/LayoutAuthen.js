import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import ErrorComponent from "../components/common/ErrorComponent";
import { LogoApp } from "../modules/common";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LayoutAuthen = ({ children, className }) => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);

  if (user) return null;

  return (
    <div className="p-6 lg:p-10 bg-lite dark:bg-darkbg relative min-h-screen isolate overflow-hidden">
      <div className="hidden lg:block absolute w-[2500px] h-[2500px] rounded-full bg-primary -bottom-[2000px] right-0 left-[-400px] -z-[1] opacity-5"></div>

      <LogoApp className="lg:mb-[66px] block"></LogoApp>

      <div
        className={`m-auto bg-white dark:bg-darkSecondary px-6 py-8 lg:px-[60px] lg:py-[50px] rounded-xl flex flex-col gap-[10px] w-[327px] lg:w-[556px] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

LayoutAuthen.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default withErrorBoundary(LayoutAuthen, {
  FallbackComponent: ErrorComponent,
});

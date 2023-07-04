import React, { useEffect } from "react";
import { ROUTER_PATCH } from "../routers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTER_PATCH.SIGN_IN.path);
    }
  }, [navigate, user]);

  if (!user || !user.email) return null;

  return <>{children}</>;
};

export default RequiredAuthPage;

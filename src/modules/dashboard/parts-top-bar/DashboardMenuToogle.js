import React, { useState } from "react";
import { IconMenuToogle } from "../../../components/Icons";

const MenuToogle = () => {
  const [show, setShow] = useState(false);
  return <IconMenuToogle handleClick={() => setShow(!show)}></IconMenuToogle>;
};

export default MenuToogle;

import React from "react";
import PropTypes from "prop-types";
import EyeOn from "./EyeOn";
import EyeOff from "./EyeOff";

const IconEyeToogle = ({ isOpen = false, handleToogle = () => {} }) => {
  return isOpen ? (
    <EyeOn handleClick={handleToogle} />
  ) : (
    <EyeOff handleClick={handleToogle} />
  );
};

IconEyeToogle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToogle: PropTypes.func.isRequired,
};

export default IconEyeToogle;

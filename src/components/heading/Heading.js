import React from "react";
import PropTypes from "prop-types";
import handlerHeading from "../../utils/handlerHeading";

const defaultClassName = "text-text1 dark:text-white font-semibold capitalize";

const Heading = ({ className, children, type = "h1" }) => {
  return handlerHeading(type, defaultClassName, className, children);
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Heading;

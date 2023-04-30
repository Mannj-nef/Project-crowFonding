import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
import { IconCheck } from "../Icons";

const InputCheckBox = ({
  name = "",
  control,
  children,
  label = "",
  classLabel = "ml-4 font-medium text-text3",
}) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div className="flex gap-5 py-[13px] mb-4 lg:mb-[10px] mt-[15px] lg:mt-0">
      <label
        className={`cursor-pointer ${!!label && "flex items-center"}`}
        htmlFor={name}
      >
        <input hidden id={name} type="checkbox" {...field} />
        <span
          className={`w-5 h-5 rounded border flex items-center  ${
            field.value
              ? "bg-primary border-primary"
              : " border-tex4 dark:border-text3"
          }`}
        >
          <span className={field.value ? "text-white " : "opacity-0 visible"}>
            <IconCheck />
          </span>
        </span>
        {!!label ? (
          <span className={`inline-block ${classLabel}`}>{label}</span>
        ) : null}
      </label>
      {children}
    </div>
  );
};

InputCheckBox.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
};

export default withErrorBoundary(InputCheckBox, {
  FallbackComponent: ErrorComponent,
});

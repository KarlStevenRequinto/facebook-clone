import React from "react";

const SvgIcon = ({
  backgroundImagePath,
  backgroundPosition,
  width,
  height,
  filter,
}) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: backgroundPosition,
    backgroundSize: "auto",
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    display: "block",
    filter: `var(${filter})`,
  };
  return <span data-visualcompletion="css-img" style={iconStyle}></span>;
};

export default SvgIcon;

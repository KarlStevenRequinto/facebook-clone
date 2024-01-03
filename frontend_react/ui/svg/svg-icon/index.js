import React, { useEffect } from "react";

const SvgIcon = ({
  backgroundImagePath,
  backgroundPosition,
  width,
  height,
  filter,
  WebkitFilter,
}) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: backgroundPosition,
    backgroundSize: "auto",
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    filter: `var(${filter})`,
    WebkitFilter: WebkitFilter,
  };
  return <span data-visualcompletion="css-img" style={iconStyle}></span>;
};

export default SvgIcon;

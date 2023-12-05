import React from "react";

const EllipsisIcon = ({ width, height, filter,backgroundImagePath }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "-161px -126px",
    backgroundSize: "auto",
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    display: "block",
    filter: `var(${filter})`,
  };
  return <span style={iconStyle}></span>;
};

export default EllipsisIcon;

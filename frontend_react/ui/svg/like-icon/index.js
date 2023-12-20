import React from "react";

const LikeIcon = ({ backgroundImagePath, width, height, filter }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "0px -739px",
    backgroundSize: "auto",
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    display: "block",
    filter: `var(${filter})`,
  };
  return <span data-visualcompletion="css-img" style={iconStyle}></span>;
};

export default LikeIcon;

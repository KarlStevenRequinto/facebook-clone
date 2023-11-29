import React from "react";

const MegaPhoneIcon = ({ backgroundImagePath, width, height, filter }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "0px -293px",
    backgroundSize: "auto",
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    display: "block",
    filter: `var(${filter})`,
  };
  return <span style={iconStyle}></span>;
};

export default MegaPhoneIcon;

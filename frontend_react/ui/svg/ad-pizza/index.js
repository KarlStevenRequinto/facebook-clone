import React from "react";

const AdPizza = ({ backgroundImagePath,filter }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "-51px -147px",
    backgroundSize: "auto",
    width: "12px",
    height: "12px",
    backgroundRepeat: "no-repeat",
    display: "block",
    filter: `var(${filter})`
  };
  return <span style={iconStyle}></span>;
};

export default AdPizza;

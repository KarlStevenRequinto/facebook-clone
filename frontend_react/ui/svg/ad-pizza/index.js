import React from "react";

const AdPizza = ({ backgroundImagePath }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "-51px -147px",
    backgroundSize: "auto",
    width: "12px",
    height: "12px",
    backgroundRepeat: "no-repeat",
    display: "block",
  };
  return <span data-visualcompletion="css-img" style={iconStyle}></span>;
};

export default AdPizza;

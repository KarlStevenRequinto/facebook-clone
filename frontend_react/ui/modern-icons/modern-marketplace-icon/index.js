import React from "react";

const MarketplacePageIcon = ({ backgroundImagePath }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "0 -407px",
    backgroundSize: "auto",
    width: "36px",
    height: "36px",
    backgroundRepeat: "no-repeat",
    display: "block",
  };
  return (
    <div>
      <span data-visualcompletion="css-img" style={iconStyle}></span>
    </div>
  );
};

export default MarketplacePageIcon;

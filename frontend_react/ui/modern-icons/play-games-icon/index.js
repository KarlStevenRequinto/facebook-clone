import React from "react";

const PlayGamesIcon = ({backgroundImagePath}) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "0px -74px",
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

export default PlayGamesIcon;
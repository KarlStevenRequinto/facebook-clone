import React from "react";

const AdsManagerIcon = ({ iconPath }) => {
  return (
    <div>
      <img
        draggable="false"
        height="36"
        width="36"
        alt="AdsManagerIcon"
        referrerPolicy="origin-when-cross-origin"
        src={iconPath}
      ></img>
    </div>
  );
};

export default AdsManagerIcon;

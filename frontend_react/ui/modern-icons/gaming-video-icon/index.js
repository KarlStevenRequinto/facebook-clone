import React from "react";

const GamingVideoIcon = ({ iconPath }) => {
  return (
    <div>
      <img
        draggable="false"
        height="36"
        width="36"
        alt="GamingVideoIcon"
        referrerPolicy="origin-when-cross-origin"
        src={iconPath}
      ></img>
    </div>
  );
};

export default GamingVideoIcon;

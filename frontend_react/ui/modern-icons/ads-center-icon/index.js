import React from "react";

const AdsCenterIcon = ({ iconPath }) => {
  return (
    <div>
      <img
        draggable="false"
        height="36"
        width="36"
        alt="AdsCenterIcon"
        referrerpolicy="origin-when-cross-origin"
        src={iconPath}
      ></img>
    </div>
  );
};

export default AdsCenterIcon;

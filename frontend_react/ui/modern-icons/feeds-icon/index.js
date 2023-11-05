import React from "react";

const FeedsIcon = ({ iconPath }) => {
  return (
    <div>
      <img
        draggable="false"
        height="36px"
        width="36px"
        alt="FeedsIcon"
        referrerpolicy="origin-when-cross-origin"
        src={iconPath}
      />
    </div>
  );
};

export default FeedsIcon;

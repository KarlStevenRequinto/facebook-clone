import React from "react";

const RecentAdIcon = ({iconPath}) => {
  return (
    <div>
      <img
        draggable="false"
        height="36"
        width="36"
        alt="RecentAdIcon"
        referrerPolicy="origin-when-cross-origin"
        src={iconPath}
      ></img>
    </div>
  );
};

export default RecentAdIcon;

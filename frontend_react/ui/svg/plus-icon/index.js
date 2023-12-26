import React from "react";

const PlusIcon = ({ width, height, fill }) => {
  return (
    <svg fill={fill} viewBox="0 0 24 24" width={width} height={height}>
      <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
    </svg>
  );
};

export default PlusIcon;

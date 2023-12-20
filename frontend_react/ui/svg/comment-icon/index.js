import React from "react";

const CommentIcon = ({ backgroundImagePath, width, height, filter }) => {
  const iconStyle = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundPosition: "0px -550px",
    backgroundSize: "auto",
    width: width,
    height: height,
    backgroundRepeat: "no-repeat",
    display: "block",
    filter: `var(${filter})`,
  };
  return <span data-visualcompletion="css-img" style={iconStyle}></span>;
};

export default CommentIcon;

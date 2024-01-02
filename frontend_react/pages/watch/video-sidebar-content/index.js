import React, { useState } from "react";
import SidebarRowPressable from "../../../components/child-components/sidebar-row-pressable";
import SvgIcon from "../../../ui/svg/svg-icon";

const VideoSidebarContent = ({ rowItems,isRowClicked }) => {
  const [isRowHovered, setRowIsHovered] = useState(false);

  const handleMouseEnterRow = () => {
    setRowIsHovered(true);
  };

  const handleMouseLeaveRow = () => {
    setRowIsHovered(false);
  };

  return rowItems.map((item, index) => {
    return (
      <SidebarRowPressable
        text={item.name}
        icon={
          <SvgIcon
            backgroundImagePath={item.backgroundImagePath}
            width={20}
            height={20}
            backgroundPosition={item.backgroundPosition}
            WebkitFilter={isRowClicked}
          />
        }
        key={index}
        onMouseLeave={handleMouseLeaveRow}
        onMouseEnter={handleMouseEnterRow}
      />
    );
  });
};

export default VideoSidebarContent;

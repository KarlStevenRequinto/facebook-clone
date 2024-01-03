import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import SvgIcon from "../../../ui/svg/svg-icon";

const SidebarRowPressable = ({
  backgroundImagePath,
  text,
  iconWidth,
  iconHeight,
  backgroundPosition,
  isClicked,
  onClick,
  iconBgColor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onClick()
  };

  useEffect(() => {
    setIsHovered(isClicked);
  }, [isClicked]);

  return (
    <div className={styles.container}>
      <div
        className={styles.rowContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div className={styles.outerIconContainer}>
          <div
            className={styles.iconContainer}
            style={{
              backgroundColor: isClicked ? iconBgColor : isHovered ? "var(--fds-black-alpha-10)" : null,
            }}
          >
            <SvgIcon
              backgroundImagePath={backgroundImagePath}
              width={iconWidth}
              height={iconHeight}
              backgroundPosition={backgroundPosition}
              WebkitFilter={isClicked ? "var(--filter-always-white)" : null}
            />
          </div>
        </div>
        <div>
          <div>
            <span>
              <span className={styles.text}>{text}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRowPressable;

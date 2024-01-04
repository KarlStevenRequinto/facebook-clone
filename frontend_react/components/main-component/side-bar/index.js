import React, { useState } from "react";
import styles from "./styles.module.css";
import SvgIcon from "../../../ui/svg/svg-icon";
import { ICON_PATH_Q } from "../../../constants";
import Link from "next/link";

const SideBar = ({ sideBarStyle, headerText, children }) => {
  const [iconHovered, setIconHovered] = useState(false);
  return (
    <div className={`${styles.container} ${sideBarStyle}`}>
      <div className={styles.headerContainer}>
        <div>
          <span className={styles.headerTextContainer}>
            <h1>{headerText}</h1>
          </span>
        </div>
        <Link
          className={styles.iconContainer}
          href={""}
          style={{
            backgroundColor: iconHovered
              ? "var(--fds-black-alpha-10)"
              : "var(--disabled-background)",
          }}
          onMouseEnter={() => {
            setIconHovered(true);
          }}
          onMouseLeave={() => {
            setIconHovered(false);
          }}
        >
          <SvgIcon
            backgroundImagePath={ICON_PATH_Q}
            backgroundPosition={"0px -532px"}
            height={20}
            width={20}
          />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default SideBar;

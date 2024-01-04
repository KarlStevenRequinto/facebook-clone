import React, { useState } from "react";
import styles from "./styles.module.css";
import SvgIcon from "../../../ui/svg/svg-icon";
import { ICON_PATH_Q } from "../../../constants";
import Link from "next/link";
import SearchIcon from "../../../ui/svg/search-icon";

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
      <div className={styles.searchContainer}>
        <div className={styles.searchbarContainer}>
          <div className={styles.searchIconContainer}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <SearchIcon
                width={16}
                height={16}
                fill={"var(--always-gray-40)"}
              />
            </span>
          </div>
          <input className={styles.searchBox} placeholder="Search videos" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default SideBar;

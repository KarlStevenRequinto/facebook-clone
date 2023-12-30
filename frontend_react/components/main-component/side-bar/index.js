import React from "react";
import styles from "./styles.module.css";

const SideBar = ({ sideBarStyle,children }) => {
  return <div className={`${styles.container} ${sideBarStyle}`}>{children}</div>;
};

export default SideBar;

import React from "react";
import styles from "./styles.module.css";

const SideBar = ({ sideBarStyle }) => {
  return <div className={`${styles.container} ${sideBarStyle}`}>SideBar</div>;
};

export default SideBar;

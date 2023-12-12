import React from "react";
import styles from "./styles.module.css";

const CardContainer = ({ children,className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default CardContainer;

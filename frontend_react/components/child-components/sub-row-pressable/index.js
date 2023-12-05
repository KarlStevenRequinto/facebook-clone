import React from "react";
import styles from "./styles.module.css";

const SubRowPressable = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.textContainer}>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default SubRowPressable;

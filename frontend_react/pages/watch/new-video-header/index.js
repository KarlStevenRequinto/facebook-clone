import React from "react";
import styles from "./styles.module.css";
import NewItemHeader from "../../../components/child-components/new-item-header";

const NewVideoHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerTextContainer}>
        <span className={styles.headerText} style={{ fontSize: "1.25rem" }}>
          New Videos for You
        </span>
        <div className={`${styles.headerText} ${styles.dotContainer}`}> • </div>
        <span className={styles.headerText} style={{ fontSize: "1.25rem" }}>4</span>
      </div>
      <div className={styles.newItemHeaderContainer}>
        <NewItemHeader />
        <NewItemHeader />
      </div>
    </div>
  );
};

export default NewVideoHeader;

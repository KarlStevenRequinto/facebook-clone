import React from "react";
import styles from "./styles.module.css";
import NewItemHeader from "../../../components/child-components/new-item-header";

const NewVideoHeader = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>New Videos for You • 4</span>
      </div>
      <div className={styles.newItemHeaderContainer}>
        <NewItemHeader />
        <NewItemHeader />
      </div>
    </div>
  );
};

export default NewVideoHeader;

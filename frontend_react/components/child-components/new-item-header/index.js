import React from "react";
import styles from "./styles.module.css";

const NewItemHeader = () => {
  return (
    <div className={styles.container}>
      <div>Icon</div>
      <div>
        <div>New videos from NBA on ESPN and SPIT</div>
        <div>32 minutes ago</div>
      </div>
    </div>
  );
};

export default NewItemHeader;

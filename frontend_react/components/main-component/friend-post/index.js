import React from "react";
import styles from "./styles.module.css";
import CardContainer from "../card-container";

const FriendPost = () => {
  return (
    <CardContainer className={styles.container}>
      <div>Header</div>
      <div>Body</div>
      <div>React Box</div>
      <div>Comment Box</div>
    </CardContainer>
  );
};

export default FriendPost;

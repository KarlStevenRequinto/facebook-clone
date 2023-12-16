import React from "react";
import styles from "./styles.module.css";
import CardContainer from "../card-container";
import ImageContainer from "../../child-components/image-container";

const FriendPost = () => {
  return (
    <CardContainer className={styles.container}>
      <div className={styles.postContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.innerHeaderContainer}>
            <div className={styles.imageContainer}>
              {/* <img
                src="/static/images/profile-picture.jpg"
                width={40}
                height={40}
              ></img> */}
              <ImageContainer isOnline={false} width={40} height={40} imagePath={"/static/images/profile-picture.jpg"}/>
            </div>
            <div>
              <div>name</div>
              <div>hours</div>
            </div>
            <div>dots</div>
            <div>x icon</div>
          </div>
        </div>
        <div>Body</div>
        <div>React Box</div>
        <div>Comment Box</div>
      </div>
    </CardContainer>
  );
};

export default FriendPost;

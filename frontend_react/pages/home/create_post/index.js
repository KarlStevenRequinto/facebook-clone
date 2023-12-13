import React from "react";
import CardContainer from "../../../components/main-component/card-container";
import styles from "./styles.module.css";
import RowButton from "../../../components/child-components/row-buttons";
import LiveVideoIcon from "../../../ui/modern-icons/live-video-icon";
import PostButtons from "../../../components/child-components/buttons/post-buttons";

const CreatePost = () => {
  // const icons = {video: <GamingVideoIcon/>, }
  return (
    <CardContainer className={styles.container}>
      <div className={styles.upperContent}>
        <div className={styles.imageContainer}>
          <img
            src="/static/images/profile-picture.jpg"
            className={styles.image}
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.txtInputContainer}>
          <span className={styles.text}>What's on your mind, Lerd?</span>
        </div>
      </div>

      <div className={styles.lowerContent}>
      <div className={styles.divider}></div>
        {/* <LiveVideoIcon /> */}
        <div className={styles.btnsContainer}>
          <PostButtons />
          <PostButtons />
          <PostButtons />
        </div>
      </div>
    </CardContainer>
  );
};

export default CreatePost;

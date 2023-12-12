import React from "react";
import styles from "./styles.module.css";
import AddIcon from "../../../ui/svg/add-icon";
import Image from "next/image";
import CardContainer from "../../../components/main-component/card-container";

const CreateStory = () => {
  return (
    <CardContainer className={styles.createStoryContainer}>
      <div className={styles.createStoryContent}>
        <div className={styles.upperStoryContent}>
          <Image
            src={"/static/images/profile-picture.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Profile Pic"
            className={styles.storyImageBackground}
          />
        </div>
        <div className={styles.lowerStoryContent}>
          <span className={styles.createStoryText}>Create Story</span>
        </div>
        <div className={styles.addStoryContainer}>
          <div className={styles.addStoryPlus}>
            <AddIcon width={20} height={20} fill="var(--always-white)" />
          </div>
        </div>
        <div className={styles.storyOverlay}></div>
      </div>
    </CardContainer>
  );
};

export default CreateStory;

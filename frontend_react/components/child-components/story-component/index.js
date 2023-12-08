import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import ImageContainer from "../image-container";

const StoryComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
    const video = document.getElementById("storyVideo");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.storyContainer} onClick={handleVideoClick}>
        <video
          id="storyVideo"
          className={styles.videoBackground}
          autoPlay={isPlaying}
          muted
          loop
        >
          <source src={"/videos/sample-vid.mp4"} type="video/mp4" />
        </video>
        <div className={styles.userImageContainer}>
          <div className={styles.userImage}>
            <div className={styles.imageBorder}></div>
          </div>
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.text}>Lerd Robott</span>
        </div>
      </div>
    </div>
  );
};

export default StoryComponent;

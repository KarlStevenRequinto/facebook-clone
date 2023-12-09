import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";

const StoryComponent = ({ myDayVid,userProfilePic,ppWidth,ppHeight,userName }) => {
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
        <div className={styles.videoWrapper}>
          <video
            id="storyVideo"
            className={styles.videoBackground}
            autoPlay={isPlaying}
            loop
          >
            {/* "/videos/sample-vid.mp4" */}
            <source src={myDayVid} type="video/mp4" />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={styles.userImageContainer}>
          <div className={styles.userImage}>
            <div className={styles.imageBorder}>
              <Image
                // "/static/images/friends_pic/Lerd Robott.jpg"
                src={userProfilePic}
                width={ppWidth}
                height={ppHeight}
                alt="Profile Pic"
                className={styles.profilePic}
              />
            </div>
          </div>
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.text}>{userName}</span>
        </div>
      </div>
    </div>
  );
};

export default StoryComponent;

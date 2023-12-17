import React, { useState } from "react";
import styles from "./styles.module.css";
import CardContainer from "../card-container";
import ImageContainer from "../../child-components/image-container";
import FriendsStatusIcon from "../../../ui/svg/friends-status-icon";
import EllipsisBigIcon from "../../../ui/svg/ellipsis-big-icon";
import CloseIcon from "../../../ui/svg/close-icon";
import { ICON_PATH_I } from "../../../constants";

const FriendPost = () => {
  return (
    <CardContainer className={styles.container}>
      <div className={styles.postContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.innerHeaderContainer}>
            <div className={styles.imageContainer}>
              <ImageContainer
                isOnline={false}
                width={40}
                height={40}
                imagePath={"/static/images/profile-picture.jpg"}
              />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.nameContainer}>
                <strong>
                  <span className={styles.nameText}>Lerd Robott</span>
                </strong>
              </div>
              <div className={styles.subTextContainer}>
                <span className={styles.subText}>
                  24 minutes ago · <span>&nbsp;</span>
                  <FriendsStatusIcon
                    width={12}
                    height={12}
                    fill={"var(--always-gray-40)"}
                  />
                </span>
              </div>
            </div>
            <div className={styles.iconHeaderContainer}>
              <EllipsisBigIcon height={20} width={20} fill={"#65676B"} />
            </div>
            <div className={styles.iconHeaderContainer}>
              <CloseIcon
                backgroundImagePath={ICON_PATH_I}
                width={20}
                height={20}
                filter={"--filter-secondary-icon"}
              />
            </div>
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

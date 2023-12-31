import React from "react";
import styles from "./styles.module.css";
import CardContainer from "../card-container";
import ImageContainer from "../../child-components/image-container";
import FriendsStatusIcon from "../../../ui/svg/friends-status-icon";
import EllipsisBigIcon from "../../../ui/svg/ellipsis-big-icon";
import { ICON_PATH_I, POST_ICONS } from "../../../constants";
import HeartEmoticon from "../../../ui/emoticons/heart";
import PostButtons from "../../child-components/buttons/post-buttons";
import SvgIcon from "../../../ui/svg/svg-icon";

const FriendPost = ({ withAttachments = false }) => {
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
              <SvgIcon backgroundImagePath={ICON_PATH_I}
                width={20}
                height={20} filter={"--filter-secondary-icon"} backgroundPosition={"0px -402px"}/>
            </div>
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyTextContent}>
            My heart is so full seeing you grow into the children every parent
            would like to be. Thank you for giving so much happiness in my life.
            May God bless you with everything that you and your parents' hearts
            truly desire.
          </div>
          {/* if content has images */}
          {withAttachments ? <div>images</div> : <></>}
        </div>
        <div className={styles.reactMainContainer}>
          <div className={styles.reactContainer}>
            <HeartEmoticon height={18} />
            <span className={styles.reactCount}>53K</span>
            <div className={styles.shareCountContainer}>
              <div className={styles.comments}>441 comments</div>
              <div className={styles.shares}>3K shares</div>
            </div>
          </div>
        </div>
        <div className={styles.interactContainer}>
          {POST_ICONS.map((item,index) => {
            return (
              <PostButtons
                buttonText={item.iconName}
                svg={item.iconComponent}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </CardContainer>
  );
};

export default FriendPost;

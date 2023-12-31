import React from "react";
import styles from "./styles.module.css";
import { ICON_PATH_G } from "../../../constants";
import SvgIcon from "../../../ui/svg/svg-icon";

const BirthdayPressable = ({ bdayFriends }) => {
  const birthdayNames = bdayFriends.map((friend) => friend.fName);
  const renderBirthdayNames = () => {
    if (birthdayNames.length === 1) {
      return `${birthdayNames[0]} has a birthday today`;
    } else if (birthdayNames.length === 2) {
      return `${birthdayNames[0]} and ${birthdayNames[1]} have birthdays today`;
    } else {
      const otherFriendsCount = birthdayNames.length - 2;
      return `${birthdayNames
        .slice(0, 2)
        .join(", ")} and ${otherFriendsCount} other${
        otherFriendsCount > 1 ? "s" : ""
      } have birthdays today`;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.iconContainer}>
            <SvgIcon
              width={36}
              height={36}
              backgroundImagePath={ICON_PATH_G}
              backgroundPosition={"0 0"}
            />
          </div>
          <div className={styles.textContainer}>{renderBirthdayNames()}</div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPressable;

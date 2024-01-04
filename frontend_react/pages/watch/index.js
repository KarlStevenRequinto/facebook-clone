import FriendPost from "../../components/main-component/friend-post";
import SideBar from "../../components/main-component/side-bar";
import styles from "./styles.module.css";
import SvgIcon from "../../ui/svg/svg-icon";
import {
  ICON_PATH_M,
  ICON_PATH_N,
  ICON_PATH_O,
  ICON_PATH_P,
} from "../../constants";
import SidebarRowPressable from "../../components/child-components/sidebar-row-pressable";
import { useState } from "react";
import Link from "next/link";

const WatchPage = () => {
  const rowItems = [
    {
      name: "Home",
      backgroundPosition: "-21px -303px",
      backgroundImagePath: ICON_PATH_M,
      iconBackGroundActiveColor: "var(--fds-blue-60)",
    },
    {
      name: "Live",
      backgroundPosition: "0px -104px",
      backgroundImagePath: ICON_PATH_N,
      iconBackGroundActiveColor: "var(--fds-red-65)",
    },
    {
      name: "Reels",
      backgroundPosition: "0px -96px",
      backgroundImagePath: ICON_PATH_O,
      iconBackGroundActiveColor: "var(--disabled-background)",
    },
    {
      name: "Shows",
      backgroundPosition: "0px -125px",
      backgroundImagePath: ICON_PATH_P,
      iconBackGroundActiveColor: "var(--base-teal)",
    },
    {
      name: "Explore",
      backgroundPosition: "0px -432px",
      backgroundImagePath: ICON_PATH_O,
      iconBackGroundActiveColor: "var(--base-grape)",
    },
    {
      name: "Saved Videos",
      backgroundPosition: "0px -83px",
      backgroundImagePath: ICON_PATH_P,
      iconBackGroundActiveColor: "var(--base-lemon)",
    },
  ];
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (index) => {
    setClickedItem(index);
  };
  const VideoSidebarContent = () => {
    return rowItems.map((item, index) => {
      return (
        <Link href={""} style={{textDecoration:"none"}}>
          <SidebarRowPressable
            text={item.name}
            backgroundImagePath={item.backgroundImagePath}
            backgroundPosition={item.backgroundPosition}
            iconHeight={20}
            iconWidth={20}
            key={index}
            isClicked={index === clickedItem}
            onClick={() => handleItemClick(index)}
            iconBgColor={item.iconBackGroundActiveColor}
          />
        </Link>
      );
    });
  };

  return (
    <main className="contentContainer">
      <SideBar
        sideBarStyle={styles.sideBar}
        children={<VideoSidebarContent />}
        headerText={"Video"}
      />
      <div className={styles.mainContentOverlay}>
        <div className={`${styles.main} ${styles.mainContentContainer}`}>
          <FriendPost />
          <FriendPost />
          <FriendPost />
          <FriendPost />
          <FriendPost />
          <FriendPost />
        </div>
      </div>
    </main>
  );
};

export default WatchPage;

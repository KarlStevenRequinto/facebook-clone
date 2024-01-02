
import FriendPost from "../../components/main-component/friend-post";
import SideBar from "../../components/main-component/side-bar";
import styles from "./styles.module.css";
import SvgIcon from "../../ui/svg/svg-icon";
import { ICON_PATH_M, ICON_PATH_N } from "../../constants";
import VideoSidebarContent from "./video-sidebar-content";
import { useState } from "react";

const WatchPage = () => {
  const [isRowClicked, setIsRowClicked] = useState(false);
  
  const handleRowClick = () => {
    setIsRowClicked(!isRowClicked);
  };
  const rowItems = [
    {
      name: "Home",
      backgroundPosition:"-21px -303px",
      backgroundImagePath: ICON_PATH_M,
      activeStateIconBackground: "var(--filter-always-white)",
      inactiveStageBackground: "var(--fds-blue-60)",
    },
    {
      name: "Live",
      backgroundPosition:"0px -104px",
      backgroundImagePath:ICON_PATH_N,
      activeStateBackground: "var(--fds-blue-60)",
    },
  ];

  

  return (
    <main className="contentContainer">
      <SideBar
        sideBarStyle={styles.sideBar}
        children={<VideoSidebarContent rowItems={rowItems} isRowClicked={isRowClicked}/>}
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

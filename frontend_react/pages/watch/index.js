import RowPressable from "../../components/child-components/row-pressable";
import FriendPost from "../../components/main-component/friend-post";
import ImageContainer from "../../components/child-components/image-container";
import PlusIcon from "../../ui/svg/plus-icon";
import SideBar from "../../components/main-component/side-bar";
import styles from "./styles.module.css";
import Link from "next/link";
const WatchPage = () => {
  const VideoSidebarContent = () => {
    return (
      <Link href={""} style={{ textDecoration: "none" }}>
        <RowPressable
          text={"Create new group"}
          iconComponent={
            <ImageContainer
              isForIcon={true}
              isOnline={false}
              icon={
                <PlusIcon
                  width={36}
                  height={36}
                  fill={"var(--always-gray-40)"}
                />
              }
            />
          }
        />
      </Link>
    );
  };
  return (
    <main className="contentContainer">
      <SideBar
        sideBarStyle={styles.sideBar}
        children={<VideoSidebarContent />}
      />
      <div className={styles.mainContentOverlay}>
        <div className={`${styles.main} ${styles.mainContentContainer}`}>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
          <FriendPost/>
        </div>
      </div>
    </main>
  );
};

export default WatchPage;

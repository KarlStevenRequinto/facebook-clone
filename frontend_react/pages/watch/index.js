import FriendPost from "../../components/main-component/friend-post";
import SideBar from "../../components/main-component/side-bar";
import styles from "./styles.module.css";
const WatchPage = () => {
  return (
    <main className="contentContainer">
      <SideBar sideBarStyle={styles.sideBar}/>
      <div className={styles.mainContentOverlay}>
        <div className={`${styles.main} ${styles.mainContentContainer}`}>
        </div>
      </div>
    </main>
  );
};

export default WatchPage;

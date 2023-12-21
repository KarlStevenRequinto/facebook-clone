import SideBar from "../../components/main-component/side-bar";
import styles from "./styles.module.css";
const WatchPage = () => {
  return (
    <main className="contentContainer">
      <SideBar />

      <div className={`${styles.main} ${styles.mainContentContainer}`}>
        MAIN
      </div>
    </main>
  );
};

export default WatchPage;

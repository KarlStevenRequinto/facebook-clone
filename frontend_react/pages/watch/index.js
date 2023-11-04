import styles from "./styles.module.css";
const WatchPage = () => {
  return (
    <div>
      <main className="contentContainer">
        <div className="row align-items-start">
          <div className={`col ${styles.sideBar}`}>asdasd</div>
          <div className={`col ${styles.centerCol}`}>Column</div>
          <div className={`col ${styles.sideBar}`}>Column</div>
        </div>
      </main>
    </div>
  );
};

export default WatchPage;

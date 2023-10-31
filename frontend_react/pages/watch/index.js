import NavBar from "../../components/main-component/navbar";
import styles from "./styles.module.css";

const WatchPage = () => {
  return (
    <main className={styles.container}>
      <NavBar />
      <div className={styles.contentContainer}>WATCHPAGE CONTENT</div>
    </main>
  );
};

export default WatchPage;

import NavBar from "../../components/main-component/navbar";
import styles from "./styles.module.css";

const MarketplacePage = () => {
  return (
    <main className={styles.container}>
      <NavBar />
      <div className={styles.contentContainer}>MARKETPLACE CONTENT</div>
    </main>
  );
};

export default MarketplacePage;

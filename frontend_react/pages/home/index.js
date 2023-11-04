import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <main className="contentContainer">
      <div className={styles.sideBar}>
        <h2>My Pages Container</h2>
        <h2>My Shortcuts Container</h2>
      </div>
      <div className={styles.centerCol}>
        <h2>My Days Container</h2>
        <h2>My Post Container</h2>
        <h2>My Feed Container</h2>
      </div>
      <div className={styles.sideBar}>
        <h2>Your Page and profiles Container</h2>
        <h2>Birthdays Container</h2>
        <h2>My Contacts Container</h2>
      </div>
    </main>
  );
};

export default HomePage;

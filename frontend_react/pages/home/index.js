import RowPressable from "../../components/child-components/row-pressable";
import SubTitleHeader from "../../components/child-components/sub-title-headers";
import styles from "./styles.module.css";
import { page_list } from "../../dummy-data";

const HomePage = () => {
  return (
    <main className="contentContainer">
      <div className={styles.sideBar}>
        <div className={styles.sideNavBar}>
          {page_list.map((page, index) => (
            <RowPressable text={page.name} iconComponent={page.icon} key={index}/>
          ))}
          {/* <RowPressable text="Lerd Robott" /> */}
        </div>
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

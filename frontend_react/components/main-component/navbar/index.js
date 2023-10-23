import FacebookIcon from "../../../ui/svg/facebook-icon";
import SearchBar from "../../child-components/search-bar";
import styles from "./styles.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoSearchBarContainer}>
        <FacebookIcon
          width={40}
          height={40}
          outerFill={"#0866FF"}
          innerFill={"#FFFFFF"}
        />

        {/* container of searcbar */}
        <SearchBar/>
      </div>

      {/* container of list of buttons */}
      <div>list of buttons</div>
      {/* container of list of icons */}
      <div>list of icons</div>
    </div>
  );
};

export default NavBar;

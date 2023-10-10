import React from "react";
import styles from "./styles.module.css";
import SearchIcon from "../../../ui/svg/search-icon";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <span className={styles.iconContainer}>
        <SearchIcon width={16} height={16} fill={"#65676B"}/>
      </span>
      <input
        type="text"
        placeholder="Search Facebook"
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;

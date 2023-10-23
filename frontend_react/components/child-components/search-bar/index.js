import React from "react";
import styles from "./styles.module.css";
import SearchIcon from "../../../ui/svg/search-icon";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <span className={styles.iconContainer}>
        <SearchIcon width={16} height={16} fill={"#65676B"} />
      </span>
      <input
        type="search"
        placeholder="Search Facebook"
        spellcheck="false"
        className={`${styles.searchInput} ${styles.customPlaceholder}`}
      />
    </div>
  );
};

export default SearchBar;

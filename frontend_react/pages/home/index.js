import RowPressable from "../../components/child-components/row-pressable";
import styles from "./styles.module.css";
import { page_list } from "../../dummy-data";
import ArrowUpIcon from "../../ui/svg/arrow-up-icon";
import RowButton from "../../components/child-components/row-buttons";
import { useState } from "react";
import ArrowDownIcon from "../../ui/svg/arrow-down-icon";
import Link from "next/link";

const HomePage = () => {
  const [rowBtnIsToggled, setRowBtnIsToggled] = useState(false);
  const rowBtnText = rowBtnIsToggled ? "See less" : "See more";

  const handleRowBtnClick = () => {
    rowBtnIsToggled ? setRowBtnIsToggled(false) : setRowBtnIsToggled(true);
  };
  return (
    <main className="contentContainer">
      <div className={styles.sideBar}>
        <div className={styles.sideNavBar}>
          {page_list
            .slice(0, rowBtnIsToggled ? 6 : page_list.length)
            .map((page, index) => (
              <Link
                key={index}
                href={`/${page.routeName}`}
                style={{ textDecoration: "none" }}
              >
                <RowPressable text={page.name} iconComponent={page.icon} />
              </Link>
            ))}
          <div className={styles.rowBtnContainer}>
            <RowButton
              text={rowBtnText}
              icon={
                rowBtnText === "See more" ? (
                  <ArrowDownIcon
                    width={20}
                    height={20}
                    fill="var(--primary-icon)"
                  />
                ) : (
                  <ArrowUpIcon
                    width={20}
                    height={20}
                    fill="var(--primary-icon)"
                  />
                )
              }
              onHandleRowButtonClick={handleRowBtnClick}
            />
          </div>
        </div>
        <br />
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

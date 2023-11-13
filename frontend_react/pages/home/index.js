import RowPressable from "../../components/child-components/row-pressable";
import styles from "./styles.module.css";
import { page_list, userProfile } from "../../dummy-data";
import ArrowUpIcon from "../../ui/svg/arrow-up-icon";
import RowButton from "../../components/child-components/row-buttons";
import { useState } from "react";
import ArrowDownIcon from "../../ui/svg/arrow-down-icon";
import Link from "next/link";
import SubTitleHeader from "../../components/child-components/sub-title-headers";
import ImageContainer from "../../components/child-components/image-container";

const HomePage = () => {
  const [rowBtnIsToggled, setRowBtnIsToggled] = useState(true);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isShortcutsHovered, setIsShortcutsHovered] = useState(false);
  const rowBtnText = rowBtnIsToggled ? "See more" : "See less";

  const handleRowBtnClick = () => {
    rowBtnIsToggled ? setRowBtnIsToggled(false) : setRowBtnIsToggled(true);
  };

  const EditBtn = ({ text }) => {
    return (
      <div
        className={`${styles.editBtn} ${
          isShortcutsHovered && !isEditHovered
            ? styles.shortcutsHovered
            : isEditHovered
            ? styles.editTextHovered
            : ""
        }`}
        onMouseEnter={() => setIsEditHovered(true)}
        onMouseLeave={() => setIsEditHovered(false)}
      >
        {isShortcutsHovered && text}
      </div>
    );
  };
  const pageShortCuts = userProfile.pages;
  return (
    <main className="contentContainer">
      <div className={styles.sideBar}>
        <div className={styles.pageListContainer}>
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
        <div className={styles.divider}></div>
        <div
          onMouseEnter={() => setIsShortcutsHovered(true)}
          onMouseLeave={() => setIsShortcutsHovered(false)}
        >
          <div className={styles.headerContainer}>
            <SubTitleHeader
              text="Your shortcuts"
              icon={<EditBtn text="Edit" />}
            />
          </div>

          <div className={styles.shortcutsContainer}>
            {pageShortCuts
              .slice(0, rowBtnIsToggled ? 6 : page_list.length)
              .map((item, index) => (
                <Link key={index} href={""} style={{ textDecoration: "none" }}>
                  <RowPressable
                    text={item.pageName}
                    iconComponent={
                      <ImageContainer
                        isOnline={false}
                        imagePath={item.pageImage}
                        width={36}
                        height={36}
                        altText={item.pageName}
                      />
                    }
                  />
                </Link>
              ))}
          </div>
        </div>
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

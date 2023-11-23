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
import AdPizza from "../../ui/svg/ad-pizza";
import { ICON_PATH_E } from "../../constants";
import EllipsisIcon from "../../ui/svg/ellipsis-icon";

const HomePage = () => {
  const [rowBtnIsToggled, setRowBtnIsToggled] = useState(true);
  const [isShortcutsToggled, setIsShortcutsToggled] = useState(true);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isShortcutsHovered, setIsShortcutsHovered] = useState(false);
  const rowBtnText = rowBtnIsToggled ? "See more" : "See less";
  const pageShortcutsText = isShortcutsToggled ? "See more" : "See less";
  const handleRowBtnClick = () => {
    rowBtnIsToggled ? setRowBtnIsToggled(false) : setRowBtnIsToggled(true);
  };

  const handleShortcutsBtnClick = () => {
    isShortcutsToggled
      ? setIsShortcutsToggled(false)
      : setIsShortcutsToggled(true);
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

  const EllipsisBtn = () => {
    return (
      <div className={styles.ellipsisContainer}>
        <EllipsisIcon
          height={16}
          width={16}
          filter={"--filter-secondary-icon"}
          backgroundImagePath={ICON_PATH_E}
        />
      </div>
    );
  };
  const pageShortCuts = userProfile.pages;
  return (
    <main className="contentContainer">
      <div className={styles.sideBar}>
        <div className={styles.sideBarContent}>
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
                .slice(0, isShortcutsToggled ? 6 : page_list.length)
                .map((item, index) => (
                  <Link
                    key={index}
                    href={""}
                    style={{ textDecoration: "none" }}
                  >
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

              <div className={styles.rowBtnContainer}>
                <RowButton
                  text={pageShortcutsText}
                  icon={
                    pageShortcutsText === "See more" ? (
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
                  onHandleRowButtonClick={handleShortcutsBtnClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sideBarFooter}>
          <ul className={styles.footerListItems}>
            <li>
              <a>Privacy</a>
              <span className={styles.dot}> · </span>
            </li>
            <li>
              <a>Terms</a>
              <span className={styles.dot}> · </span>
            </li>
            <li>
              <a>Advertising</a>
              <span className={styles.dot}> · </span>
            </li>
            <li>
              <a>Ad Choices</a>
            </li>
            <li style={{ marginLeft: 4 }}>
              <AdPizza
                backgroundImagePath={ICON_PATH_E}
                filter={"--filter-secondary-icon"}
              />
            </li>
            <li>
              <a>
                <span className={styles.dot}>·</span>
                Cookies<span className={styles.dot}>·</span>
              </a>
            </li>
            <li>
              <a>More</a>
              <span className={styles.dot}>·</span>
            </li>
            <li>
              <a>Meta © 2023</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.centerCol}>
        <h2>My Days Container</h2>
        <h2>My Post Container</h2>
        <h2>My Feed Container</h2>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.headerContainer}>
          <SubTitleHeader
            text="Your Pages and profiles"
            icon={<EllipsisBtn />}
          />
        </div>
        <div className={styles.shortcutsContainer}>
          {
            // Render only the first element from pageShortCuts
            pageShortCuts.length > 0 && (
              <Link href={""} style={{ textDecoration: "none" }}>
                <RowPressable
                  text={pageShortCuts[0].pageName}
                  iconComponent={
                    <ImageContainer
                      isOnline={false}
                      imagePath={pageShortCuts[0].pageImage}
                      width={36}
                      height={36}
                      altText={pageShortCuts[0].pageName}
                    />
                  }
                />
              </Link>
            )
          }
        </div>
        <h2>Birthdays Container</h2>
        <h2>My Contacts Container</h2>
      </div>
    </main>
  );
};

export default HomePage;

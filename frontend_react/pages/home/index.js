import RowPressable from "../../components/child-components/row-pressable";
import styles from "./styles.module.css";
import { page_list, userProfile } from "../../dummy-data";
import ArrowUpIcon from "../../ui/svg/arrow-up-icon";
import RowButton from "../../components/child-components/row-buttons";
import { useEffect, useState } from "react";
import ArrowDownIcon from "../../ui/svg/arrow-down-icon";
import Link from "next/link";
import Image from "next/image";
import SubTitleHeader from "../../components/child-components/sub-title-headers";
import ImageContainer from "../../components/child-components/image-container";
import AdPizza from "../../ui/svg/ad-pizza";
import { ICON_PATH_E, ICON_PATH_F } from "../../constants";
import EllipsisIcon from "../../ui/svg/ellipsis-icon";
import SubRowPressable from "../../components/child-components/sub-row-pressable";
import SwitchPageIcon from "../../ui/svg/switch-page-icon";
import MegaPhoneIcon from "../../ui/svg/megaphone-icon";
import BirthdayPressable from "../../components/child-components/pressable-birthday";
import SearchIcon from "../../ui/svg/search-icon";
import EllipsisBigIcon from "../../ui/svg/ellipsis-big-icon";
import StoryComponent from "../../components/child-components/story-component";
import AddIcon from "../../ui/svg/add-icon";

const HomePage = () => {
  const [rowBtnIsToggled, setRowBtnIsToggled] = useState(true);
  const [isShortcutsToggled, setIsShortcutsToggled] = useState(true);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isShortcutsHovered, setIsShortcutsHovered] = useState(false);
  const [todayBirthdayFriends, setTodayBirthdayFriends] = useState([]);
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

  const CreateStory = () => {
    return (
      <div className={styles.createStoryContainer}>
        <div className={styles.createStoryContent}>
          <div className={styles.upperStoryContent}>
            <Image
              src={"/static/images/profile-picture.jpg"}
              // width={140}
              // height={201}
              layout="fill"
              objectFit="cover"
              alt="Profile Pic"
              className={styles.storyImageBackground}
            />
          </div>
          <div className={styles.lowerStoryContent}>
            <span className={styles.createStoryText}>Create Story</span>
          </div>
          <div className={styles.addStoryContainer}>
            <div className={styles.addStoryPlus}>
              <AddIcon width={20} height={20} fill="var(--always-white)" />
            </div>
          </div>
          <div className={styles.storyOverlay}></div>
        </div>
      </div>
    );
  };
  const pageShortCuts = userProfile.pages;
  const friends = userProfile.friends;
  const onlineFriends = friends.filter((friend) => friend.isOnline);

  useEffect(() => {
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    const friends = userProfile.friends;
    const filteredFriends = friends.filter((friend) => {
      const friendBirthdayMonth = friend.birthday.getMonth() + 1;
      const friendBirthdayDay = friend.birthday.getDate();

      return (
        friendBirthdayMonth === todayMonth && friendBirthdayDay === todayDay
      );
    });
    setTodayBirthdayFriends(filteredFriends);
  }, []);

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
                dualIcon={false}
              />
            </div>

            <div className={styles.listsContainer}>
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
        <div className={styles.feedContainer}>
          <div className={styles.storyContainer}>
            <div className={styles.storyListsContainer}>
              <CreateStory />
              {/* stories here */}
            </div>
          </div>

          <h2>My Post Container</h2>
          <h2>My Feed Container</h2>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div style={{ paddingTop: 8 }}>
          <div className={styles.headerContainer}>
            <SubTitleHeader
              dualIcon={false}
              text="Your Pages and profiles"
              icon={<EllipsisBtn height={16} width={16} />}
            />
          </div>
          <div className={styles.listsContainer}>
            {pageShortCuts.length > 0 && (
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
            )}
            <SubRowPressable
              icon={
                <SwitchPageIcon
                  width={20}
                  height={20}
                  backgroundImagePath={ICON_PATH_F}
                  filter={"--filter-secondary-icon"}
                />
              }
              text="Switch into Page"
            />
            <SubRowPressable
              icon={
                <MegaPhoneIcon
                  width={20}
                  height={20}
                  backgroundImagePath={ICON_PATH_F}
                  filter={"--filter-secondary-icon"}
                />
              }
              text="Create Promotion"
            />
          </div>
          <div className={styles.divider} />
          <div className={styles.headerContainer}>
            <SubTitleHeader text="Birthdays" dualIcon={false} />
          </div>
          <BirthdayPressable bdayFriends={todayBirthdayFriends} />
          <div className={styles.divider} />
          <div>
            <div className={styles.headerContainer}>
              <SubTitleHeader
                text="Contacts"
                dualIcon={true}
                iconSecond={
                  <SearchIcon width={16} height={16} fill={"#65676B"} />
                }
                icon={
                  <EllipsisBigIcon height={20} width={20} fill={"#65676B"} />
                }
              />
            </div>
            {onlineFriends.map((friend, index) => (
              <Link key={index} href={""} style={{ textDecoration: "none" }}>
                <RowPressable
                  text={friend.fName}
                  iconComponent={
                    <ImageContainer
                      isOnline={friend.isOnline}
                      imagePath={friend.fImage}
                      altText={friend.fName}
                      width={36}
                      height={36}
                    />
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

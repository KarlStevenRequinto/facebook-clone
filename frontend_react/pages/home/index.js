import RowPressable from "../../components/child-components/row-pressable";
import styles from "./styles.module.css";
import { page_list, userProfile } from "../../dummy-data";
import ArrowUpIcon from "../../ui/svg/arrow-up-icon";
import RowButton from "../../components/child-components/row-buttons";
import { useEffect, useState, useRef } from "react";
import ArrowDownIcon from "../../ui/svg/arrow-down-icon";
import Link from "next/link";
import SubTitleHeader from "../../components/child-components/sub-title-headers";
import ImageContainer from "../../components/child-components/image-container";
import { ICON_PATH_E, ICON_PATH_F } from "../../constants";
import SubRowPressable from "../../components/child-components/sub-row-pressable";
import BirthdayPressable from "../../components/child-components/pressable-birthday";
import SearchIcon from "../../ui/svg/search-icon";
import EllipsisBigIcon from "../../ui/svg/ellipsis-big-icon";
import StoryComponent from "../../components/child-components/story-component";
import AddIcon from "../../ui/svg/add-icon";
import LeftArrowIcon from "../../ui/svg/left-arrow-icon";
import RightArrowIcon from "../../ui/svg/right-arrow-icon";
import CreatePost from "./create_post";
import CreateStory from "./create_story";
import CardContainer from "../../components/main-component/card-container";
import FriendPost from "../../components/main-component/friend-post";
import PlusIcon from "../../ui/svg/plus-icon";
import SvgIcon from "../../ui/svg/svg-icon";

const HomePage = () => {
  const [rowBtnIsToggled, setRowBtnIsToggled] = useState(true);
  const [isShortcutsToggled, setIsShortcutsToggled] = useState(true);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isShortcutsHovered, setIsShortcutsHovered] = useState(false);
  const [todayBirthdayFriends, setTodayBirthdayFriends] = useState([]);
  const rowBtnText = rowBtnIsToggled ? "See more" : "See less";
  const pageShortcutsText = isShortcutsToggled ? "See more" : "See less";
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 550,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 550,
        behavior: "smooth",
      });
    }
  };

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
        <SvgIcon
          height={16}
          width={16}
          filter={"--filter-secondary-icon"}
          backgroundImagePath={ICON_PATH_E}
          backgroundPosition={"-161px -126px"}
        />
      </div>
    );
  };

  const pageShortCuts = userProfile.pages;
  const friends = userProfile.friends;
  const onlineFriends = friends.filter((friend) => friend.isOnline);
  const groupConvos = userProfile.groupConversations;

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
  const Divider = () => {
    return <div className={styles.divider}></div>;
  };
  const PageShortCuts = () => {
    return (
      <div className={styles.listsContainer}>
        {pageShortCuts
          .slice(0, isShortcutsToggled ? 6 : page_list.length)
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
    );
  };
  const PageLists = () => {
    return (
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
    );
  };
  const SideBarFooter = () => {
    return (
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
            <SvgIcon
              backgroundImagePath={ICON_PATH_E}
              filter={"--filter-secondary-icon"}
              backgroundPosition={"-51px -147px"}
              width={12}
              height={12}
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
    );
  };
  const GroupConversation = () => {
    return (
      <div className={styles.groupConvoContainer}>
        <SubTitleHeader dualIcon={false} text="Group Conversations" />
        <div style={{ paddingTop: 8, paddingBottom: 8 }}>
          {groupConvos
            ? groupConvos.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={""}
                    style={{ textDecoration: "none" }}
                  >
                    <RowPressable
                      text={item.name}
                      iconComponent={
                        <ImageContainer
                          isOnline={true}
                          imagePath={item.imagePath}
                          altText={item.name}
                          width={36}
                          height={36}
                        />
                      }
                    />
                  </Link>
                );
              })
            : null}

          <Link href={""} style={{ textDecoration: "none" }}>
            <RowPressable
              text={"Create new group"}
              iconComponent={
                <ImageContainer
                  isForIcon={true}
                  isOnline={false}
                  icon={
                    <PlusIcon
                      width={36}
                      height={36}
                      fill={"var(--always-gray-40)"}
                    />
                  }
                />
              }
            />
          </Link>
        </div>
      </div>
    );
  };

  const ContactsColumn = () => {
    return (
      <div>
        <div className={styles.headerContainer}>
          <SubTitleHeader
            text="Contacts"
            dualIcon={true}
            iconSecond={<SearchIcon width={16} height={16} fill={"#65676B"} />}
            icon={<EllipsisBigIcon height={20} width={20} fill={"#65676B"} />}
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
    );
  };

  const Feeds = () => {
    return (
      <div className={styles.myFeedContainer}>
        <FriendPost />
        <FriendPost />
        <FriendPost />
      </div>
    );
  };
  return (
    <main className="contentContainer">
      <div className={`${styles.sideBar} ${styles.leftSide}`}>
        <div className={styles.sideBarContent}>
          <PageLists />
          <Divider />
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
            <PageShortCuts />
          </div>
        </div>
        <SideBarFooter />
      </div>

      <div className={styles.overlayCenterCol}>
        <div className={styles.centerCol}>
          <div className={styles.feedContainer}>
            <div className={styles.storyContainer}>
              <div className={styles.storyListsContainer} ref={containerRef}>
                <CreateStory />
                {userProfile.friends.map((item, index) => {
                  return (
                    <StoryComponent
                      myDayVid={item.storyVid}
                      userProfilePic={item.fImage}
                      ppWidth={40}
                      ppHeight={40}
                      userName={item.fName}
                      key={index}
                    />
                  );
                })}
              </div>
              <div
                className={`${styles.leftNavBtn} ${styles.navBtn}`}
                onClick={scrollLeft}
              >
                <LeftArrowIcon
                  width={24}
                  height={24}
                  fill={"var(--always-gray-40)"}
                />
              </div>
              <div
                className={`${styles.rightNavBtn} ${styles.navBtn}`}
                onClick={scrollRight}
              >
                <RightArrowIcon
                  width={24}
                  height={24}
                  fill={"var(--always-gray-40)"}
                />
              </div>
            </div>
            <CreatePost />
            <Feeds />
          </div>
        </div>
      </div>

      <div className={`${styles.sideBar} ${styles.rightSide}`}>
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
                <SvgIcon backgroundPosition= {"0px -62px"} width={20}
                height={20}
                backgroundImagePath={ICON_PATH_F}
                filter={"--filter-secondary-icon"}/>
              }
              text="Switch into Page"
            />
            <SubRowPressable
              icon={
                <SvgIcon
                  backgroundPosition={"0px -293px"}
                  width={20}
                  height={20}
                  backgroundImagePath={ICON_PATH_F}
                  filter={"--filter-secondary-icon"}
                />
              }
              text="Create Promotion"
            />
          </div>
          <Divider />
          {todayBirthdayFriends.length === 0 ? null : (
            <>
              <div className={styles.headerContainer}>
                <SubTitleHeader text="Birthdays" dualIcon={false} />
              </div>
              <BirthdayPressable bdayFriends={todayBirthdayFriends} />
              <Divider />
            </>
          )}
          <ContactsColumn />
          <GroupConversation />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

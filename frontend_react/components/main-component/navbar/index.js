import FacebookIcon from "../../../ui/svg/facebook-icon";
import HomeIcon from "../../../ui/svg/home-icon";
import VideoIcon from "../../../ui/svg/video-icon";
import GroupsIcon from "../../../ui/svg/groups-icon";
import GamingIcon from "../../../ui/svg/gaming-icon";
import MarketPlaceIcon from "../../../ui/svg/marketplace-icon";
import SearchBar from "../../child-components/search-bar";
import MenuIcon from "../../../ui/svg/menu-icon";
import BellIcon from "../../../ui/svg/bell-icon";
import MessengerIcon from "../../../ui/svg/messenger-icon";
import styles from "./styles.module.css";
import ImageContainer from "../../child-components/image-container";

const NavBar = () => {
  const navCenterIcons = [
    { component: <HomeIcon height={24} width={24} />, label: "Home" },
    { component: <VideoIcon height={24} width={24} />, label: "Videos" },
    {
      component: <MarketPlaceIcon height={24} width={24} />,
      label: "Marketplace",
    },
    { component: <GroupsIcon height={24} width={24} />, label: "Groups" },
    { component: <GamingIcon height={24} width={24} />, label: "Gaming" },
  ];

  const navRightSideIcons = [
    { component: <MenuIcon height={20} width={20} />, label: "Menu" },
    { component: <MessengerIcon height={20} width={20} />, label: "Messenger" },
    { component: <BellIcon height={20} width={20} />, label: "Bell" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoSearchBarContainer}>
        <FacebookIcon
          width={40}
          height={40}
          outerFill={"#0866FF"}
          innerFill={"#FFFFFF"}
        />
        <SearchBar />
      </div>

      {/* container of list of buttons */}
      <div>
        <ul className={styles.listContainer}>
          {navCenterIcons.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.icon}>{item.component}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* container of list of icons */}
      <div>
        <ul className={styles.listContainer}>
          {navRightSideIcons.map((item, index) => (
            <li className={styles.rightListIcons} key={index}>
              <span className={styles.rightIcons}>{item.component}</span>
            </li>
          ))}
          <li>
            <ImageContainer isOnline={true} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

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
import { useState } from "react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navCenterIcons = [
    {
      component: (
        <HomeIcon
          height={24}
          width={24}
          fill={activeItem === 0 ? "#0866FF" : "#65676B"}
        />
      ),
      label: "Home",
    },
    {
      component: (
        <VideoIcon
          height={24}
          width={24}
          fill={activeItem === 1 ? "#0866FF" : "#65676B"}
        />
      ),
      label: "Videos",
    },
    {
      component: (
        <MarketPlaceIcon
          height={24}
          width={24}
          fill={activeItem === 2 ? "#0866FF" : "#65676B"}
        />
      ),
      label: "Marketplace",
    },
    {
      component: (
        <GroupsIcon
          height={24}
          width={24}
          fill={activeItem === 3 ? "#0866FF" : "#65676B"}
        />
      ),
      label: "Groups",
    },
    {
      component: (
        <GamingIcon
          height={24}
          width={24}
          fill={activeItem === 4 ? "#0866FF" : "#65676B"}
        />
      ),
      label: "Gaming",
    },
  ];

  const navRightSideIcons = [
    { component: <MenuIcon height={20} width={20} />, label: "Menu" },
    { component: <MessengerIcon height={20} width={20} />, label: "Messenger" },
    { component: <BellIcon height={20} width={20} />, label: "Bell" },
  ];

  const handleNavBtnClick = (index) => {
    setActiveItem(index);
    console.log(index);
  };

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
      <div className={styles.btnListContainer}>
        <ul className={styles.listContainer}>
          {navCenterIcons.map((item, index) => (
            <div key={index} className={styles.itemContainer}>
              <li
                className={styles.listItem}
                onClick={() => handleNavBtnClick(index)}
              >
                <span className={styles.icon}>{item.component}</span>
              </li>
              <div
                className={`${styles.blueBox} ${
                  activeItem === index ? styles.blueBoxVisible : ""
                }`}
              ></div>
            </div>
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

import BellIcon from "../ui/svg/bell-icon";
import FacebookIcon from "../ui/svg/facebook-icon";
import GamingIcon from "../ui/svg/gaming-icon";
import GroupsIcon from "../ui/svg/groups-icon";
import HomeIcon from "../ui/svg/home-icon";
import MarketPlaceIcon from "../ui/svg/marketplace-icon";
import MessengerIcon from "../ui/svg/messenger-icon";
import PathIcon from "../ui/svg/path-icon";
import PlusIcon from "../ui/svg/plus-icon";
import SearchIcon from "../ui/svg/search-icon";
import VideoIcon from "../ui/svg/video-icon";

export default function Home() {
  return (
    <body style={{ margin: 0, overflow: "hidden" }}>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        <h3 style={{ backgroundColor: "yellow", marginTop: 0 }}>
          Facebook Clone Project
        </h3>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <FacebookIcon />
        </div>
      </main>
    </body>
  );
}

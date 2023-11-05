import VideoIcon from "../ui/svg/video-icon";
import ImageContainer from "../components/child-components/image-container";
import FriendsIcon from "../ui/modern-icons/friends-icon";
import VideoPageIcon from "../ui/modern-icons/modern-video-icon";
import GroupsPageIcon from "../ui/modern-icons/modern-group-icon";
import FeedsIcon from "../ui/modern-icons/feeds-icon";
import MarketplacePageIcon from "../ui/modern-icons/modern-marketplace-icon";
import AdsCenterIcon from "../ui/modern-icons/ads-center-icon";
import {
  ICON_PATH_A,
  ICON_PATH_FEEDS,
  ICON_PATH_ADS_CENTER,
  ICON_PATH_ADS_MANAGER,
  ICON_PATH_B,
  ICON_PATH_CLIMATE_SCIENCE,
  ICON_PATH_C,
} from "../constants";
import AdsManagerIcon from "../ui/modern-icons/ads-manager-icon";
import BloodDonationIcon from "../ui/modern-icons/blood-donation-icon";
import ClimateScienceCenterIcon from "../ui/modern-icons/climate-science-center-icon";
import EventsIcon from "../ui/modern-icons/events-icon";
import Fundraisers from "../ui/modern-icons/fundraisers-icon";
const page_list = [
  {
    name: "Lerd Robott",
    icon: <ImageContainer width={36} height={36} isOnline={false} />,
  },
  { name: "Friends", icon: <FriendsIcon backgroundImagePath={ICON_PATH_A} /> },
  { name: "Video", icon: <VideoPageIcon backgroundImagePath={ICON_PATH_A} /> },
  {
    name: "Groups",
    icon: <GroupsPageIcon backgroundImagePath={ICON_PATH_A} />,
  },
  {
    name: "Marketplace",
    icon: <MarketplacePageIcon backgroundImagePath={ICON_PATH_A} />,
  },
  {
    name: "Ad Center",
    icon: <AdsCenterIcon iconPath={ICON_PATH_ADS_CENTER} />,
  },
  {
    name: "Ads Manager",
    icon: <AdsManagerIcon iconPath={ICON_PATH_ADS_MANAGER} />,
  },
  {
    name: "Blood Donations",
    icon: <BloodDonationIcon backgroundImagePath={ICON_PATH_B} />,
  },
  {
    name: "Climate Science Center",
    icon: <ClimateScienceCenterIcon iconPath={ICON_PATH_CLIMATE_SCIENCE} />,
  },
  { name: "Events", icon: <EventsIcon backgroundImagePath={ICON_PATH_C} /> },
  { name: "Feeds", icon: <FeedsIcon iconPath={ICON_PATH_FEEDS} /> },
  {
    name: "Fundraisers",
    icon: <Fundraisers backgroundImagePath={ICON_PATH_A} />,
  },
  { name: "Gaming Video", icon: <VideoIcon height={36} width={36} /> },
  { name: "Memories", icon: <VideoIcon height={36} width={36} /> },
  { name: "Messenger", icon: <VideoIcon height={36} width={36} /> },
  { name: "Messenger Kids", icon: <VideoIcon height={36} width={36} /> },
  { name: "Meta Business Suite", icon: <VideoIcon height={36} width={36} /> },
  { name: "Orders and payments", icon: <VideoIcon height={36} width={36} /> },
  { name: "Pages", icon: <VideoIcon height={36} width={36} /> },
  { name: "Play Games", icon: <VideoIcon height={36} width={36} /> },
  {
    name: "Professional dashboard",
    icon: <VideoIcon height={36} width={36} />,
  },
  { name: "Recent ad activity", icon: <VideoIcon height={36} width={36} /> },
  { name: "Saved", icon: <VideoIcon height={36} width={36} /> },
];
export { page_list };

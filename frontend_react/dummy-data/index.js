import ImageContainer from "../components/child-components/image-container";
import FriendsIcon from "../ui/modern-icons/friends-icon";
import VideoPageIcon from "../ui/modern-icons/modern-video-icon";
import GroupsPageIcon from "../ui/modern-icons/modern-group-icon";
import FeedsIcon from "../ui/modern-icons/feeds-icon";
import MarketplacePageIcon from "../ui/modern-icons/modern-marketplace-icon";
import AdsCenterIcon from "../ui/modern-icons/ads-center-icon";
import {
  ICON_PATH_A,
  ICON_PATH_B,
  ICON_PATH_C,
  ICON_PATH_D,
  ICON_PATH_FEEDS,
  ICON_PATH_ADS_CENTER,
  ICON_PATH_ADS_MANAGER,
  ICON_PATH_CLIMATE_SCIENCE,
  ICON_PATH_GAMING_VIDEO,
  ICON_PATH_MESSENGER_KIDS,
  ICON_PATH_META_BIZ_SUITE,
  ICON_PATH_ORDERS_PAYMENT,
  ICON_PATH_PRO_DASHBOARD,
  ICON_PATH_RECENT_AD,
} from "../constants";
import AdsManagerIcon from "../ui/modern-icons/ads-manager-icon";
import BloodDonationIcon from "../ui/modern-icons/blood-donation-icon";
import ClimateScienceCenterIcon from "../ui/modern-icons/climate-science-center-icon";
import EventsIcon from "../ui/modern-icons/events-icon";
import Fundraisers from "../ui/modern-icons/fundraisers-icon";
import GamingVideoIcon from "../ui/modern-icons/gaming-video-icon";
import MemoriesIcon from "../ui/modern-icons/memories-icon";
import MessengerIcon from "../ui/modern-icons/messenger-icon";
import MessengerKidsIcon from "../ui/modern-icons/messenger-kids-icon";
import MetaBizSuiteIcon from "../ui/modern-icons/meta-biz-suite-icon";
import OrdersPaymentsIcon from "../ui/modern-icons/orders-payments-icon";
import PagesIcon from "../ui/modern-icons/pages-icon";
import PlayGamesIcon from "../ui/modern-icons/play-games-icon";
import ProfessionalDashboardIcon from "../ui/modern-icons/professional-dashboard-icon";
import RecentAdIcon from "../ui/modern-icons/recent-ad-icon";
import SavedIcon from "../ui/modern-icons/saved-icon";

const page_list = [
  {
    name: "Lerd Robott",
    icon: <ImageContainer width={36} height={36} isOnline={false} />,
    routeName: "lerdrobott",
  },
  {
    name: "Friends",
    icon: <FriendsIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "friends",
  },
  {
    name: "Video",
    icon: <VideoPageIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "watch",
  },
  {
    name: "Groups",
    icon: <GroupsPageIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "groups",
  },
  {
    name: "Marketplace",
    icon: <MarketplacePageIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "marketplace",
  },
  {
    name: "Ad Center",
    icon: <AdsCenterIcon iconPath={ICON_PATH_ADS_CENTER} />,
    routeName: "ad_center",
  },
  {
    name: "Ads Manager",
    icon: <AdsManagerIcon iconPath={ICON_PATH_ADS_MANAGER} />,
    routeName: "adsmanager",
  },
  {
    name: "Blood Donations",
    icon: <BloodDonationIcon backgroundImagePath={ICON_PATH_B} />,
    routeName: "blooddonations",
  },
  {
    name: "Climate Science Center",
    icon: <ClimateScienceCenterIcon iconPath={ICON_PATH_CLIMATE_SCIENCE} />,
    routeName: "climatescienceinfo",
  },
  {
    name: "Events",
    icon: <EventsIcon backgroundImagePath={ICON_PATH_C} />,
    routeName: "events",
  },
  {
    name: "Feeds",
    icon: <FeedsIcon iconPath={ICON_PATH_FEEDS} />,
    routeName: "feeds",
  },
  {
    name: "Fundraisers",
    icon: <Fundraisers backgroundImagePath={ICON_PATH_A} />,
    routeName: "fundraisers/explore",
  },
  {
    name: "Gaming Video",
    icon: <GamingVideoIcon iconPath={ICON_PATH_GAMING_VIDEO} />,
    routeName: "gaming/external",
  },
  {
    name: "Memories",
    icon: <MemoriesIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "memories",
  },
  {
    name: "Messenger",
    icon: <MessengerIcon backgroundImagePath={ICON_PATH_D} />,
    routeName: "messages",
  },
  {
    name: "Messenger Kids",
    icon: <MessengerKidsIcon iconPath={ICON_PATH_MESSENGER_KIDS} />,
    routeName: "messenger_kids",
  },
  {
    name: "Meta Business Suite",
    icon: <MetaBizSuiteIcon iconPath={ICON_PATH_META_BIZ_SUITE} />,
    routeName: "metabusinesssuite",
  },
  {
    name: "Orders and payments",
    icon: <OrdersPaymentsIcon iconPath={ICON_PATH_ORDERS_PAYMENT} />,
    routeName: "facebook_pay",
  },
  {
    name: "Pages",
    icon: <PagesIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "pages",
  },
  {
    name: "Play Games",
    icon: <PlayGamesIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "gaming",
  },
  {
    name: "Professional dashboard",
    icon: <ProfessionalDashboardIcon iconPath={ICON_PATH_PRO_DASHBOARD} />,
    routeName: "lerdrobott/professional_dashboard",
  },
  {
    name: "Recent ad activity",
    icon: <RecentAdIcon iconPath={ICON_PATH_RECENT_AD} />,
    routeName: "ads/activity",
  },
  {
    name: "Saved",
    icon: <SavedIcon backgroundImagePath={ICON_PATH_A} />,
    routeName: "saved",
  },
];
export { page_list };

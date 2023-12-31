import ImageContainer from "../components/child-components/image-container";
import FeedsIcon from "../ui/modern-icons/feeds-icon";
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
import ClimateScienceCenterIcon from "../ui/modern-icons/climate-science-center-icon";
import GamingVideoIcon from "../ui/modern-icons/gaming-video-icon";
import MessengerKidsIcon from "../ui/modern-icons/messenger-kids-icon";
import MetaBizSuiteIcon from "../ui/modern-icons/meta-biz-suite-icon";
import OrdersPaymentsIcon from "../ui/modern-icons/orders-payments-icon";
import ProfessionalDashboardIcon from "../ui/modern-icons/professional-dashboard-icon";
import RecentAdIcon from "../ui/modern-icons/recent-ad-icon";
import SvgIcon from "../ui/svg/svg-icon";

const page_list = [
  {
    name: "Lerd Robott",
    icon: (
      <ImageContainer
        width={36}
        height={36}
        isOnline={false}
        imagePath={"/static/images/friends_pic/Lerd Robott.jpg"}
      />
    ),
    routeName: "lerdrobott",
  },
  {
    name: "Friends",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0 -296px"}
        width={36}
        height={36}
      />
    ),
    routeName: "friends",
  },
  {
    name: "Video",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0 -518px"}
        width={36}
        height={36}
      />
    ),
    routeName: "watch",
  },
  {
    name: "Groups",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0 -37px"}
        width={36}
        height={36}
      />
    ),
    routeName: "groups",
  },
  {
    name: "Marketplace",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0 -407px"}
        width={36}
        height={36}
      />
    ),
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
    icon: (
      <SvgIcon
        backgroundPosition={"-722px -175px"}
        backgroundImagePath={ICON_PATH_B}
        width={36}
        height={36}
      />
    ),
    routeName: "blooddonations",
  },
  {
    name: "Climate Science Center",
    icon: <ClimateScienceCenterIcon iconPath={ICON_PATH_CLIMATE_SCIENCE} />,
    routeName: "climatescienceinfo",
  },
  {
    name: "Events",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_C}
        backgroundPosition={"0px -37px"}
        width={36}
        height={36}
      />
    ),
    routeName: "events",
  },
  {
    name: "Feeds",
    icon: <FeedsIcon iconPath={ICON_PATH_FEEDS} />,
    routeName: "feeds",
  },
  {
    name: "Fundraisers",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0px -333px"}
        width={36}
        height={36}
      />
    ),
    routeName: "fundraisers/explore",
  },
  {
    name: "Gaming Video",
    icon: <GamingVideoIcon iconPath={ICON_PATH_GAMING_VIDEO} />,
    routeName: "gaming/external",
  },
  {
    name: "Memories",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0px -444px"}
        width={36}
        height={36}
      />
    ),
    routeName: "memories",
  },
  {
    name: "Messenger",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_D}
        backgroundPosition={"0px 0px"}
        width={36}
        height={36}
      />
    ),
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
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0 -111px"}
        width={36}
        height={36}
      />
    ),
    routeName: "pages",
  },
  {
    name: "Play Games",
    icon: (
      <SvgIcon
        backgroundImagePath={ICON_PATH_A}
        backgroundPosition={"0px -74px"}
        width={36}
        height={36}
      />
    ),
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
    icon: <SvgIcon backgroundImagePath={ICON_PATH_A} backgroundPosition={"0px -185px"} width={36} height={36}/>,
    routeName: "saved",
  },
];

const userProfile = {
  name: "Lerd Robott",
  nickName: "Kokoy",
  pages: [
    {
      pageName: "Lanky Nation Gaming",
      pageType: "page",
      pageImage: "/static/images/pages_images/lkn gaming.jpg",
    },
    {
      pageName: "Lanky Nation Trading",
      pageType: "page",
      pageImage: "/static/images/pages_images/lkn trading.jpg",
    },
    {
      pageName: "Start Coding Bacolod",
      pageType: "page",
      pageImage: "/static/images/pages_images/start coding bacolod.jpg",
    },
    {
      pageName: "Bacolod House, Condo, Apartment for Rent",
      pageType: "group",
      pageImage: "/static/images/pages_images/groups_1.jpg",
    },
    {
      pageName: "EI / UX Designers & Developers",
      pageType: "group",
      pageImage: "/static/images/pages_images/groups_2.jpg",
    },
  ],
  profilePic: "/static/images/profile-picture.jpg",
  friends: [
    {
      fId: 1234,
      fName: "Nkevin Lim",
      fImage: `/static/images/friends_pic/Nkevin Lim.jpg`,
      birthday: new Date("Dec 29, 1990"),
      friendSince: new Date("Jan 1, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1235,
      fName: "David Bangilan",
      fImage: `/static/images/friends_pic/David Bangilan.jpg`,
      birthday: new Date("Dec 2, 1990"),
      friendSince: new Date("Jan 2, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1236,
      fName: "Isser Harel Mission",
      fImage: `/static/images/friends_pic/Isser Harel Mission.jpg`,
      birthday: new Date("Dec 2, 1991"),
      friendSince: new Date("Jan 1, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1237,
      fName: "Twixie Lott",
      fImage: `/static/images/friends_pic/Twixie Lott.jpg`,
      birthday: new Date("Dec 3, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1238,
      fName: "Peter Paul",
      fImage: `/static/images/friends_pic/Peter Paul.jpg`,
      birthday: new Date("Dec 5, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1220,
      fName: "Mack Garcelan",
      fImage: `/static/images/friends_pic/Mack Garcelan.jpg`,
      birthday: new Date("Dec 5, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1239,
      fName: "Romeo Cuare Torreno",
      fImage: `/static/images/friends_pic/Romeo Cuare Torreno.jpg`,
      birthday: new Date("Dec 4, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1234,
      fName: "Nkevin Lim",
      fImage: `/static/images/friends_pic/Nkevin Lim.jpg`,
      birthday: new Date("Dec 2, 1990"),
      friendSince: new Date("Jan 1, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1235,
      fName: "David Bangilan",
      fImage: `/static/images/friends_pic/David Bangilan.jpg`,
      birthday: new Date("Dec 2, 1990"),
      friendSince: new Date("Jan 2, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1236,
      fName: "Isser Harel Mission",
      fImage: `/static/images/friends_pic/Isser Harel Mission.jpg`,
      birthday: new Date("Dec 2, 1991"),
      friendSince: new Date("Jan 1, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1237,
      fName: "Twixie Lott",
      fImage: `/static/images/friends_pic/Twixie Lott.jpg`,
      birthday: new Date("Dec 3, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1238,
      fName: "Peter Paul",
      fImage: `/static/images/friends_pic/Peter Paul.jpg`,
      birthday: new Date("Dec 5, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1220,
      fName: "Mack Garcelan",
      fImage: `/static/images/friends_pic/Mack Garcelan.jpg`,
      birthday: new Date("Dec 5, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1239,
      fName: "Romeo Cuare Torreno",
      fImage: `/static/images/friends_pic/Romeo Cuare Torreno.jpg`,
      birthday: new Date("Dec 4, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1234,
      fName: "Nkevin Lim",
      fImage: `/static/images/friends_pic/Nkevin Lim.jpg`,
      birthday: new Date("Dec 2, 1990"),
      friendSince: new Date("Jan 1, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1235,
      fName: "David Bangilan",
      fImage: `/static/images/friends_pic/David Bangilan.jpg`,
      birthday: new Date("Dec 2, 1990"),
      friendSince: new Date("Jan 2, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1236,
      fName: "Isser Harel Mission",
      fImage: `/static/images/friends_pic/Isser Harel Mission.jpg`,
      birthday: new Date("Dec 2, 1991"),
      friendSince: new Date("Jan 1, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1237,
      fName: "Twixie Lott",
      fImage: `/static/images/friends_pic/Twixie Lott.jpg`,
      birthday: new Date("Dec 3, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1238,
      fName: "Peter Paul",
      fImage: `/static/images/friends_pic/Peter Paul.jpg`,
      birthday: new Date("Dec 5, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1220,
      fName: "Mack Garcelan",
      fImage: `/static/images/friends_pic/Mack Garcelan.jpg`,
      birthday: new Date("Dec 5, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
    {
      fId: 1239,
      fName: "Romeo Cuare Torreno",
      fImage: `/static/images/friends_pic/Romeo Cuare Torreno.jpg`,
      birthday: new Date("Dec 4, 1990"),
      friendSince: new Date("Jan 3, 2020"),
      isOnline: true,
      storyVid: "/videos/sample-vid.mp4",
    },
  ],
  groupConversations: [
    {
      name: "Kilo's Tito's Wedding To Come",
      imagePath: "static/images/group_convos/kilos titos.jpg",
    },
    { name: "Lanky COC", imagePath: "static/images/group_convos/lankycoc.jpg" },
    {
      name: "ForExBatalyon",
      imagePath: "static/images/group_convos/forexbatalyon.png",
    },
    {
      name: "Villa Estefania Layuping",
      imagePath: "static/images/group_convos/villaestefanialayuping.jpg",
    },
    { name: "ECE2k15", imagePath: "static/images/profile-picture.jpg" },
  ],
};

export { page_list, userProfile };

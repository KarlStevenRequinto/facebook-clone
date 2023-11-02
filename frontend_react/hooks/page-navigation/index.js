import { useState } from "react";
import HomePage from "../../pages/home";
import { useRouter } from "next/router";

const usePageNavigation = () => {
  const router = useRouter();

  const routeMapping = {
    Home: "home",
    Video: "watch",
    Marketplace: "marketplace",
    Groups: "groups",
    Gaming: "gaming",
  };

  const navigateToPage = (pageName) => {
    if (routeMapping[pageName]) {
      router.push(`/${routeMapping[pageName]}`);
    } else {
      // TEMPORARY ERROR HANDLING
      console.error(`No component found for page: ${pageName}`);
    }
  };

  return { navigateToPage };
};

export default usePageNavigation;

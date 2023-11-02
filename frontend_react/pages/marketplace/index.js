import NavBar from "../../components/main-component/navbar";
import usePageNavigation from "../../hooks/page-navigation";

const MarketplacePage = () => {
  const { navigateToPage } = usePageNavigation();
  return (
    <div>
      <NavBar onNavBtnClick={navigateToPage}/>
      <main className="contentContainer">MarketplacePage Content</main>
    </div>
  );
};

export default MarketplacePage;

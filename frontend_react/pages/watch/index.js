import NavBar from "../../components/main-component/navbar";
import usePageNavigation from "../../hooks/page-navigation";

const WatchPage = () => {
  const { navigateToPage } = usePageNavigation();
  return (
    <div>
      <NavBar onNavBtnClick={navigateToPage}/>
      <main className="contentContainer">WatchPage Content</main>
    </div>
  );
};

export default WatchPage;

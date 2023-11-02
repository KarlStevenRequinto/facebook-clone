import NavBar from "../../components/main-component/navbar";
import usePageNavigation from "../../hooks/page-navigation";

const GamingPage = () => {
  const { navigateToPage } = usePageNavigation();

  return (
    <div>
      <NavBar onNavBtnClick={navigateToPage} />
      <main className="contentContainer">GamingPage Content</main>
    </div>
  );
};

export default GamingPage;

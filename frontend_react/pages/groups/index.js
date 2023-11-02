import NavBar from "../../components/main-component/navbar";
import usePageNavigation from "../../hooks/page-navigation";
const GroupsPage = () => {
  const { activeComponent, navigateToPage } = usePageNavigation();

  return (
    <div>
      <NavBar onNavBtnClick={navigateToPage} />
      <main className="contentContainer">GroupsPage Content</main>
    </div>
  );
};

export default GroupsPage;

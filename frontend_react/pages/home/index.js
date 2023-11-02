import NavBar from "../../components/main-component/navbar";
import usePageNavigation from "../../hooks/page-navigation";
import styles from "./styles.module.css";

const HomePage = () => {
  const { navigateToPage } = usePageNavigation();
  return (
    <div>
      <NavBar onNavBtnClick={navigateToPage} />
      <main className="contentContainer">HomePage Content</main>
    </div>
  );
};

export default HomePage;

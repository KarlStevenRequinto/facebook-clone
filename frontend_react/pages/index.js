import ContentWindow from "../components/main-component/content-window";
import NavBar from "../components/main-component/navbar";
import HomePage from "./home";

export default function Home() {
  return (
    <ContentWindow>
      <NavBar />
      <HomePage />
    </ContentWindow>
  );
}

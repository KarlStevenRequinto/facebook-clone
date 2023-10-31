import NavBar from "../components/main-component/navbar";
import HomePage from "./home";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="contentContainer">CONTENT HERE</div>
    </main>
  );
}

import NavBar from "../components/main-component/navbar";

export default function Home() {
  return (
    <div style={{ margin: 0, overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <h3 style={{ marginTop: 0 }}>Facebook Clone Project</h3> */}
        {/* call your component here */}
        <NavBar />
        <div>FACEBOOK CLONE</div>
      </div>
    </div>
  );
}

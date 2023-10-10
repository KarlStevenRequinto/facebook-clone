import SearchBar from "../components/child-components/search-bar";

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
        <h3 style={{ marginTop: 0 }}>Facebook Clone Project</h3>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* call your component here */}
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

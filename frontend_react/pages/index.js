import PostButtons from "../components/child-components/buttons/post-buttons";

export default function Home() {
  return (
    <body style={{ margin: 0, overflow: "hidden" }}>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Facebook Clone Project</h3>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          {/* call your component here */}
          <PostButtons/>
        </div>
      </main>
    </body>
  );
}

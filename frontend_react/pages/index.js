import NavButtons from "../components/child-components/buttons/nav-buttons";
import HomeIcon from "../ui/svg/home-icon";

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
        <div style={{ flex: 1, display: "flex", alignItems: "center",justifyContent:"center",backgroundColor:"blue" }}>
          {/* call your component here */}
          <NavButtons
            icon={
              <HomeIcon
                width={22}
                height={22}
                stroke={"#828282"}
                strokeWidth={1}
                fill={"none"}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

import RowButton from "../components/sub-components/row-buttons";
import MarketPlaceIcon from "../ui/svg/marketplace-icon";

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
          }}
        >
          {/* call your component here */}
          <RowButton icon={<MarketPlaceIcon width={36} height={36}/>} text={"Marketplace"}/>
        </div>
      </div>
    </div>
  );
}

const ContentWindow = ({ children }) => {
  return (
    <div
      style={{
        margin: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default ContentWindow;

export const InlineStyle = () => {
  const containerStyle = {
    width: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };
  const titleStyle = {
    color: "red",
    fontSize: "18px",
  };
  const buttonStyle = {
    color: "#fff",
    backgroundColor: "blue",
    padding: "8px",
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
};

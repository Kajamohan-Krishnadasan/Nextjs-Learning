const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyles = {
    padding: "100px",
    margin: "1rem",
    border: "1px solid #eaeaea",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return <div style={cardStyles}>{children}</div>;
};

export default Card;

"use client";

export default function Modal({ children }: { children: React.ReactNode }) {
  const modalStyle = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalContentStyle = {
    // backgroundColor: "white",
    padding: "1rem",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "500px",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>{children}</div>
    </div>
  );
}

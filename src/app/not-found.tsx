import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f9f9f9",
        flexDirection: "column",
      }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-5">
        404 - Page Not Found
      </h1>
    </div>
  );
}

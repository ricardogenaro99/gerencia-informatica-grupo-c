import React from "react";
import { Header } from "../components";

function MainLayout({ children }) {
  return (
    <div className="container">
      <div style={{ height: "56px" }}>
        <Header />
      </div>
      <div className="container py-4">{children}</div>
    </div>
  );
}

export default MainLayout;

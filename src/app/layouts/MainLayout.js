import React from "react";
import { Footer, Header } from "../components";

function MainLayout({ children }) {
  return (
    <div
      className="min-vh-100"
      style={{ display: "grid", gridTemplateRows: "56px 1fr auto" }}
    >
      <div>
        <Header />
      </div>
      <div className="container py-4 ">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

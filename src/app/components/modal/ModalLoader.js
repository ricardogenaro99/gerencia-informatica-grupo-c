import React from "react";
import Loader from "../Loader";

function ModalLoader() {
  return (
    <div
      className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center bg-secondary opacity-75"
      style={{ zIndex: "5000" }}
    >
      <Loader />
    </div>
  );
}

export default ModalLoader;

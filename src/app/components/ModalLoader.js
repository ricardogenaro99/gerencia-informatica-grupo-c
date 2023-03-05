import React from "react";
import Loader from "./Loader";

function ModalLoader() {
  return (
    <div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center bg-secondary z-1 opacity-75">
      <Loader />
    </div>
  );
}

export default ModalLoader;

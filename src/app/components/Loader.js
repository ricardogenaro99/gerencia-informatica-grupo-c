import React from "react";

function Loader() {
  const size = "4rem";

  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-dark"
        style={{ width: size, height: size }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;

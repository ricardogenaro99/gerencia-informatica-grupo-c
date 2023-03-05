import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="d-flex align-items-center justify-content-center h-100">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Opps!</span> Página no encontrada.
        </p>
        <p class="lead">La página que buscas no existe.</p>
        <Link to="/" class="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../contexts/GlobalContext";

function Header() {
  const { user, logout } = useGlobal();
  return (
    <nav
      className="navbar navbar-expand-lg bg-black navbar-dark fixed-top px-3"
      data-bs-theme="black"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Gerencia Informática
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/equipo" aria-current="page">
                Equipo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/publicaciones"
                aria-current="page"
              >
                Publicaciones
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {user ? (
                <span
                  className="nav-link cursor-pointer"
                  onClick={logout}
                  role="button"
                >
                  Cerrar Sesión
                </span>
              ) : (
                <Link
                  className="nav-link"
                  to="/auth/iniciar-sesion"
                  aria-current="page"
                >
                  Iniciar Sesión
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
